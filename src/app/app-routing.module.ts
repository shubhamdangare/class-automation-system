// File useed for routing

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyAccountComponent } from './login-and-registration/my-account/my-account.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardMenuComponent } from './admin/admin-dashboard-menu/admin-dashboard-menu.component';
import { UserDashboardMenuComponent } from './user/user-dashboard-menu/user-dashboard-menu.component';

// import the components required for the routing

// Routes array for routing
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'about-us', component: AboutusComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'my-account', component: MyAccountComponent },
  { path: 'admin', component: AdminLoginComponent },
  { path: 'admin/dashboard', component: AdminDashboardMenuComponent },
  { path: 'my-account/dashboard', component: UserDashboardMenuComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
