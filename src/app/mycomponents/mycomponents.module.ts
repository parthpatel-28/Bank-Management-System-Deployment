import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FundsComponent } from './funds/funds.component';
import { LoansComponent } from './loans/loans.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { BranchesComponent } from './branches/branches.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { MultiSelectItem } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [
    SidebarComponent,
    DashboardComponent,
    FundsComponent,
    LoansComponent,
    TransactionsComponent,
    BranchesComponent,
    ComplaintsComponent,
    LoginComponent,
    LayoutComponent,
    TopbarComponent,
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ButtonModule,
    MultiSelectModule,
    FormsModule,
    DropdownModule
    
  ],

  exports: [
    SidebarComponent, // This line is crucial!
    TopbarComponent
  ]
})
export class MycomponentsModule { }
