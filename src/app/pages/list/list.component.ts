import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {


  tableContent = [
    {
      name:"Social Icons",
      path:'/social-icons'
    },
    {
      name:"Stage Flow",
      path:'/stage'
    },
    {
      name:"Circular Navigation",
      path:'/circular-nav'
    },
    
  ]

constructor(private router:Router){}
  
  openTopic(path:string){
    this.router.navigate([path]);
  }
}
