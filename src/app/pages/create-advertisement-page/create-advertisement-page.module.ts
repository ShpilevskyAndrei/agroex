import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../../shared/components/header/header.module';
import { CreateAdvertisementPageContainerComponent } from './create-advertisement-page-container.component';
import { CreateAdvertisementPageRoutingModule } from './create-advertisement-page-routing.module';
import { CreateAdvertisementPageComponent } from './create-advertisement-page.component';

@NgModule({
  declarations: [
    CreateAdvertisementPageComponent,
    CreateAdvertisementPageContainerComponent,
  ],
  imports: [CommonModule, HeaderModule, CreateAdvertisementPageRoutingModule],
  exports: [CreateAdvertisementPageContainerComponent],
})
export class CreateAdvertisementPageModule {}
