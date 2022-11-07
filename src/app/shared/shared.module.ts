import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerNavbarComponent } from './drawer-navbar/drawer-navbar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { StatusCardComponent } from './status-card/status-card.component';

@NgModule({
  declarations: [
    DrawerNavbarComponent,
    TopbarComponent,
    InfoCardComponent,
    StatusCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule
  ],
  exports:[
    DrawerNavbarComponent,
    TopbarComponent,
    InfoCardComponent,
    MatMenuModule,
    StatusCardComponent
  ]
})
export class SharedModule { }
