import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatDateFormatPipe } from '../../../../pipes/creat-date-format.pipe';
import { AdvertisementTitleComponent } from './advertisement-title.component';

@NgModule({
  declarations: [AdvertisementTitleComponent, CreatDateFormatPipe],
  imports: [CommonModule],
  exports: [AdvertisementTitleComponent, CreatDateFormatPipe],
})
export class AdvertisementTitleModule {}
