import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertisementTitleComponent } from './advertisement-title.component';
import { CreatDateFormatPipe } from '../../../shared/pipes/creat-date-format.pipe';

@NgModule({
  declarations: [AdvertisementTitleComponent, CreatDateFormatPipe],
  imports: [CommonModule],
  exports: [AdvertisementTitleComponent],
})
export class AdvertisementTitleModule {}
