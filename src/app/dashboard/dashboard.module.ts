import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

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
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
