import { Component } from '@angular/core';
import { BackComponent } from "../../shared/component/back/back.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-circular-nav',
  standalone: true,
  imports: [BackComponent,CommonModule],
  templateUrl: './circular-nav.component.html',
  styleUrl: './circular-nav.component.scss'
})
export class CircularNavComponent {

  isBTNclicked = false;

}
