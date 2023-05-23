import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DeviceDetectorService } from 'ngx-device-detector';

import { NgScrollbarModule } from 'ngx-scrollbar';


const routes: Route[] = [
    {
      path:'',
      component: DashboardComponent
    }
]

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    NgScrollbarModule,
    RouterModule.forChild(routes),
  ],
  providers:[DeviceDetectorService]
})
export class DashboardModule { }
