import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardMenuComponent } from './admin-dashboard-menu/admin-dashboard-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminLoginComponent, AdminDashboardMenuComponent]
})
export class AdminModule { }
