import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard-menu',
  templateUrl: './user-dashboard-menu.component.html',
  styleUrls: ['./user-dashboard-menu.component.css']
})
export class UserDashboardMenuComponent implements OnInit {

  componentName = 'dashboard';

  constructor() { }

  ngOnInit() {
  }

  loadComponent(componentName) {
    this.componentName = componentName;
  }
}
