import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-dashboard-menu',
  templateUrl: './admin-dashboard-menu.component.html',
  styleUrls: ['./admin-dashboard-menu.component.css']
})
export class AdminDashboardMenuComponent implements OnInit {

  componentName = 'admin-dashboard';

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
  });
  }

  loadComponent(componentName) {
    this.componentName = componentName;
  }

}
