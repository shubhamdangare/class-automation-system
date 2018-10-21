import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginAndRegistrationModule } from './login-and-registration/login-and-registration.module';
import { AdminModule } from './admin/admin.module';
import { UserDashboardMenuComponent } from './user/user-dashboard-menu/user-dashboard-menu.component';
import { UserModule } from './user/user.module';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { EditUserProfileComponent } from './user/edit-user-profile/edit-user-profile.component';
import { AddNewUserComponent } from './admin/add-new-user/add-new-user.component';
import { AddNewCourseComponent } from './admin/add-new-course/add-new-course.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutusComponent,
    FooterComponent,
    CoursesComponent,
    ContactUsComponent,
    HomeComponent,
    PageNotFoundComponent,
    UserDashboardMenuComponent,
    UserDashboardComponent,
    UserProfileComponent,
    EditUserProfileComponent,
    AddNewUserComponent,
    AddNewCourseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MatCardModule,
    LoginAndRegistrationModule,
    AdminModule,
    UserModule,
    AngularFontAwesomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
