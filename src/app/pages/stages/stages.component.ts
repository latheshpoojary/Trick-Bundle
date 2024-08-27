import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BackComponent } from '../../shared/component/back/back.component';

@Component({
  selector: 'app-stages',
  standalone: true,
  imports: [CommonModule,BackComponent],
  templateUrl: './stages.component.html',
  styleUrl: './stages.component.scss'
})
export class StagesComponent {


  stages = [
    { name: "Pre-Seed", status: false },
    { name: "Seed", status: false },
    { name: "Series A", status: true },
    { name: "Series B", status: false },
    { name: "Series C", status: false },
  ];

  changeVisibility(stage:any){
    stage.status = !stage.status;
  }
}
