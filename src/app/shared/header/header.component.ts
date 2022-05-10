import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Input() public isGuest = true;
  @Input() public isAdmin = false;
  @Input() public isSeller = false;
  @Input() public isBuyer = false;
  constructor() { }

  ngOnInit(): void {
  }

}
