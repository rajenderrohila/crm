import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { CalenderComponent } from './components/calender/calender.component';
import { MailboxComponent } from './components/mailbox/mailbox.component';
import { FileManagerComponent } from './components/file-manager/file-manager.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { BugsComponent } from './components/bugs/bugs.component';
import { OpportunitiesComponent } from './components/opportunities/opportunities.component';
import { LeadsComponent } from './components/leads/leads.component';
import { SalesComponent } from './components/sales/sales.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { KnowledgeBaseComponent } from './components/knowledge-base/knowledge-base.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { ClientsComponent } from './components/clients/clients.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { LoginComponent } from './components/login/login.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CalenderComponent,
    MailboxComponent,
    FileManagerComponent,
    ProjectsComponent,
    TasksComponent,
    BugsComponent,
    OpportunitiesComponent,
    LeadsComponent,
    SalesComponent,
    TicketsComponent,
    KnowledgeBaseComponent,
    TransactionsComponent,
    ClientsComponent,
    DepartmentsComponent,
    StocksComponent,
    AttendanceComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
