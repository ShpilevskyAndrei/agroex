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
  }
}
