import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {NgAccordionModule} from 'ng-accordion';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [DashboardComponent, AboutComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CodeHighlighterModule,
    NgAccordionModule
  ]
})
export class HomeModule { }
