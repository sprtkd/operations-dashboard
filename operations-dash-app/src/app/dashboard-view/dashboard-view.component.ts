import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { BasicStatCard } from 'src/models/dashboard.model';
import { ChartUiBasicModel } from 'src/models/chart.model';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit {

  timelineChartUiBasicModel: ChartUiBasicModel;
  basic_stats: BasicStatCard[] = [
    { name: "Services", value: "4/8", type: "Services", footer: "Last updated: 12mins ago", status: "active-card" },
    { name: "Average Time", value: "552", type: "ms", footer: "Bad", status: "warn-card" },
    { name: "Uptime", value: "24", type: "%", footer: "In Last 24 hours", status: "danger-card" },
    { name: "Hits", value: "845/900", type: "", footer: "In Last 24 hours", status: "primary-card" }
  ]
  constructor(public commonsService: CommonService) {

  }
  ngOnInit(): void {
    this.timelineChartUiBasicModel = ChartUiBasicModel.getBasicMultiBarChart(
      [
        { data: [5, 8, 5, 6, 8, 9, 7, 6, 1, 8], label: 'Total Hits' }
      ], ['06:36', '06:36', '06:36', '06:36', '06:36', '06:36', '06:36','06:36','06:36','06:36',]
    );
  }



}
