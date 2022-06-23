import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { mergeMap } from 'rxjs';

import { IUserOptionsType } from '../../../shared/components/header/interfaces/user-options-type.interface';
import { UserRole } from '../../../shared/components/header/enums/user-role';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  @Input() public userRole: UserRole = UserRole.Guest;
  @Input() public selectedTab: string | null;
  @Input() public userPanelOption: IUserOptionsType[];

  @Output() public logout: EventEmitter<void> = new EventEmitter<void>();
  @Output() public selectTab: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private router: Router,
    private afMessaging: AngularFireMessaging
  ) {}

  public onLogout(): void {
    this.userRole = UserRole.Guest;
    this.logout.emit();
    this.router.navigate(['']);
    this.afMessaging.getToken
      .pipe(
        mergeMap((token) => {
          return this.afMessaging.deleteToken(<string>token);
        })
      )
      .subscribe();
  }

  public onSelectPage(selectedPage: string | undefined): void {
    this.selectTab.emit(selectedPage);
  }
}
