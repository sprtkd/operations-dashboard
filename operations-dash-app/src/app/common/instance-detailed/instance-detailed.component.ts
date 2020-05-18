import { Component, OnInit, Input } from '@angular/core';
import { EndpointVersionModel } from 'src/models/endpoint.model';

@Component({
  selector: 'app-instance-detailed',
  templateUrl: './instance-detailed.component.html',
  styleUrls: ['./instance-detailed.component.css']
})
export class InstanceDetailedComponent implements OnInit {

  @Input() selectedInstance: EndpointVersionModel;
  constructor() { }

  ngOnInit(): void {
  }

}
