import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerNavbarComponent } from './drawer-navbar/drawer-navbar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DrawerNavbarComponent,
    TopbarComponent,
    InfoCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    DrawerNavbarComponent,
    TopbarComponent,
    InfoCardComponent
  ]
})
export class SharedModule { }
