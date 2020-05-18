import { Component, OnInit, Input } from '@angular/core';
import { BasicStatCard } from 'src/models/dashboard.model';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.css']
})
export class MiniCardComponent implements OnInit {
  @Input() cardDetails: BasicStatCard;
  constructor() { }

  ngOnInit(): void {
  }

}
