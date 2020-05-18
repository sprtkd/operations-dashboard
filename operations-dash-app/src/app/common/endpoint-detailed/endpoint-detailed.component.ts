import { Component, OnInit, Input } from '@angular/core';
import { EndpointModel } from 'src/models/endpoint.model';
import { BasicStatCard } from 'src/models/dashboard.model';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-endpoint-detailed',
  templateUrl: './endpoint-detailed.component.html',
  styleUrls: ['./endpoint-detailed.component.css']
})
export class EndpointDetailedComponent implements OnInit {

  @Input() selectedService: EndpointModel;
  basic_service_stats: BasicStatCard[];

  constructor(public commonsService: CommonService) { }

  ngOnInit(): void {
    this.setBasicCards();
  }

  setBasicCards() {
    this.basic_service_stats = [
      { name: this.selectedService.name, value: "Hit: "+((new Date()).valueOf() - this.selectedService.details.lastHitBestDetails.hitTime.valueOf()).toString(), type: "ms ago", footer: "", status: "primary-card" },
      { name: "Instances", value: this.selectedService.details.activeVersions.toString() + "/" + this.selectedService.details.totalVersions.toString(), type: "Live", footer: "", status: "active-card" },
      { name: "Latency", value: this.selectedService.details.lastHitBestDetails.rtt.toString(), type: "ms", footer: "", status: "warn-card" },
      { name: "Status", value: this.selectedService.details.atleastOneActive ? "Up" : "Down", type: "", footer: "", status: "danger-card" }
    ]
  }

}
