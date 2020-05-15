import { Component } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent {
  basic_stats = [
    { name: "Services", value: "4/8", type: "Services", footer: "Last updated: 12mins ago", status: "active-card" },
    { name: "Average Time", value: "552", type: "ms", footer: "Bad", status: "warn-card" },
    { name: "Uptime", value: "24", type: "%", footer: "In Last 24 hours", status: "danger-card" },
    { name: "Hits", value: "845/900", type: "hits", footer: "In Last 24 hours", status: "primary-card" }
  ]
  constructor(public commonsService: CommonService) {

  }



}
