import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'dr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  implements OnInit{
  public isMobile:boolean = false;
  constructor(
   private deviceService: DeviceDetectorService
  ){
    this.checkMobileDevice();
  }

  checkMobileDevice(){
    this.isMobile = this.deviceService.isMobile();
    console.log(this.isMobile);
    
  }

  ngOnInit(): void {

  }

  goTo(url: string){
    window.open(url, "_blank");
}

}
