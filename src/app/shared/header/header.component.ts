import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isGuest: boolean = true;
  @Input() isAdmin: boolean = false;
  @Input() isSeller: boolean = false;
  @Input() isBuyer: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
