import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { BugsComponent } from './components/bugs/bugs.component';
import { CalenderComponent } from './components/calender/calender.component';
import { ClientsComponent } from './components/clients/clients.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { FileManagerComponent } from './components/file-manager/file-manager.component';
import { KnowledgeBaseComponent } from './components/knowledge-base/knowledge-base.component';
import { LeadsComponent } from './components/leads/leads.component';
import { LoginComponent } from './components/login/login.component';
import { MailboxComponent } from './components/mailbox/mailbox.component';
import { OpportunitiesComponent } from './components/opportunities/opportunities.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SalesComponent } from './components/sales/sales.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { TransactionsComponent } from './components/transactions/transactions.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'calender', component:CalenderComponent},
  {path:'mailbox', component:MailboxComponent},
  {path:'file-manager', component:FileManagerComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'tasks', component:TasksComponent},
  {path:'bugs', component:BugsComponent},
  {path:'opportunities', component:OpportunitiesComponent},
  {path:'leads', component:LeadsComponent},
  {path:'sales', component:SalesComponent},
  {path:'tickets', component:TicketsComponent},
  {path:'knowledge-base', component:KnowledgeBaseComponent},
  {path:'transactions', component:TransactionsComponent},
  {path:'clients', component:ClientsComponent},
  {path:'departments', component:DepartmentsComponent},
  {path:'stocks', component:StocksComponent},
  {path:'attendance', component:AttendanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
