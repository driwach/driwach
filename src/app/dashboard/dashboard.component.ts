import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  implements OnInit{
  
  constructor(){

  }

  ngOnInit(): void {

  }

  goTo(url: string){
    window.open(url, "_blank");
}

}
