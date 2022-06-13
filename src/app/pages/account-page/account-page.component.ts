import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IUser } from '../../shared/interfaces/user.interface';
import { IAdvertisementRequestInterface } from '../../advertisements-list/interfaces/advertisement-request.interface';
import { LoadingStatus } from '../../shared/interfaces/loading-status';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss'],
})
export class AccountPageComponent implements OnInit {
  @Input() public user: IUser | null;
  @Input() public advertisementsRequest: IAdvertisementRequestInterface | null;
  @Input() public advertisementsLoadingStatus: LoadingStatus | null;

  @Output() public logout: EventEmitter<void> = new EventEmitter<void>();
  // @Output() public test: EventEmitter<string> = new EventEmitter<string>();

  public ngOnInit(): void {
    console.log(this.advertisementsRequest);
  }

  public onLogout(): void {
    this.logout.emit();
  }

  public onTest(str: string): void {
    console.log(str);
  }
}
