import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardMenuComponent } from './admin-dashboard-menu/admin-dashboard-menu.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminCoursesComponent } from './admin-courses/admin-courses.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { AddNewCourseComponent } from './add-new-course/add-new-course.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
  ],
  declarations: [
    AdminLoginComponent,
    AdminDashboardMenuComponent,
    AdminDashboardComponent,
    AdminUsersComponent,
    AdminCoursesComponent,
  ],
  entryComponents: [
    AddNewUserComponent,
    AddNewCourseComponent
  ],
  exports: [
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AdminModule { }
