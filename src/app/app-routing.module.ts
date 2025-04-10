import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansComponent } from './mycomponents/loans/loans.component';
import { DashboardComponent } from './mycomponents/dashboard/dashboard.component';
import { FundsComponent } from './mycomponents/funds/funds.component';
import { ComplaintsComponent } from './mycomponents/complaints/complaints.component';
import { BranchesComponent } from './mycomponents/branches/branches.component';
import { SidebarComponent } from './mycomponents/sidebar/sidebar.component';
import { TransactionsComponent } from './mycomponents/transactions/transactions.component';
import { LoginComponent } from './mycomponents/login/login.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'loans', component: LoansComponent },
  { path: 'funds', component: FundsComponent },
  { path: 'branches', component: BranchesComponent },
  { path: 'complaints', component: ComplaintsComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
