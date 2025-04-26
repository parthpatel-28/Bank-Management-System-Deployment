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
import { MycomponentsModule } from './mycomponents/mycomponents.module';
import { LayoutComponent } from './mycomponents/layout/layout.component';
import { AccountsComponent } from './mycomponents/accounts/accounts.component';
import { CardsComponent } from './mycomponents/cards/cards.component';
import { EmployeesComponent } from './mycomponents/employees/employees.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'loans', component: LoansComponent },
      { path: 'funds', component: FundsComponent },
      { path: 'branches', component: BranchesComponent },
      { path: 'complaints', component: ComplaintsComponent },
      { path: 'transactions', component: TransactionsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'accounts', component: AccountsComponent },
      { path: 'cards', component: CardsComponent },
      { path: 'employees', component: EmployeesComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' }// add other routes here
        ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
