import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, tap } from 'rxjs';

import { BetModalComponent } from '../bet-modal/bet-modal.component';
import { IAdvertisementInterface } from '../../interfaces/advertisement.interface';

@Component({
  selector: 'app-advertisement-buttons',
  templateUrl: './advertisement-buttons.component.html',
  styleUrls: ['./advertisement-buttons.component.scss'],
})
export class AdvertisementButtonsComponent {
}
