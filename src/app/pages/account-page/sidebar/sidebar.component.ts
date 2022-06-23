import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { filter, mergeMap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { IUserOptionsType } from '../../../shared/components/header/interfaces/user-options-type.interface';
import { UserRole } from '../../../shared/components/header/enums/user-role';
import { tap } from 'rxjs/operators';

@UntilDestroy()
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
    this.afMessaging.getToken
      .pipe(
        tap((result) => {
          if (!result) {
            this.logout.emit();
            this.userRole = UserRole.Guest;
            this.router.navigate(['']);

            return;
          }

          return result;
        }),
        filter(Boolean),
        mergeMap((token: string) => this.afMessaging.deleteToken(token)),
        tap(() => {
          this.userRole = UserRole.Guest;
          this.logout.emit();
          this.router.navigate(['']);
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  public onSelectPage(selectedPage: string | undefined): void {
    this.selectTab.emit(selectedPage);
  }
}
