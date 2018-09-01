import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';

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
    UserDashboardMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    MatCardModule,
    LoginAndRegistrationModule,
    AdminModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
