import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerNavbarComponent } from './drawer-navbar/drawer-navbar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { StatusCardComponent } from './status-card/status-card.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectTableComponent } from './project-table/project-table.component';

@NgModule({
  declarations: [
    DrawerNavbarComponent,
    TopbarComponent,
    InfoCardComponent,
    StatusCardComponent,
    ProjectCardComponent,
    ProjectTableComponent
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
    StatusCardComponent,
    ProjectCardComponent,
    ProjectTableComponent
  ]
})
export class SharedModule { }
