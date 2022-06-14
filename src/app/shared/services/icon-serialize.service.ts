import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class IconSerializeService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'category-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/category-icon.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'caret-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/caret-icon.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'bet-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/bet-icon.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'map-pointer-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/map-pointer-icon.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'quantity-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/quantity-icon.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'account-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/account-icon.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'auction-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/auction-icon.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'logout-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/logout-icon.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'my-ads-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/my_ads-icon.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'truck-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/truck-icon.svg')
    );
  }
}
