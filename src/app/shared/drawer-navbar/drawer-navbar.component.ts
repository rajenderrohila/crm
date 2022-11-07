import { Component, OnInit } from '@angular/core';
import { navbar } from 'src/app/core/constant';

@Component({
  selector: 'app-drawer-navbar',
  templateUrl: './drawer-navbar.component.html',
  styleUrls: ['./drawer-navbar.component.scss']
})
export class DrawerNavbarComponent implements OnInit {
  public navItems = navbar
  constructor() { }

  ngOnInit(): void {
  }

}
