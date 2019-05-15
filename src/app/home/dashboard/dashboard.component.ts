import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  demo1Src: string;
  demo2Src: string;
  demo3Src: string;
  constructor() {
    this.demo1Src = `
    <lib-ng-accordion>
      <lib-ng-accordion-section [header]="'Demo Accordion Section 1'">Demo Accordion Section 1 Content</lib-ng-accordion-section>
      <lib-ng-accordion-section [header]="'Demo Accordion Section 2'">Demo Accordion Section 2 Content</lib-ng-accordion-section>
      <lib-ng-accordion-section [header]="'Demo Accordion Section 3'">Demo Accordion Section 3 Content</lib-ng-accordion-section>
    </lib-ng-accordion>`;
    this.demo2Src = `
    <lib-ng-accordion [openMultiple]="true">
      <lib-ng-accordion-section [header]="'Demo Accordion Section 1'">Demo Accordion Section 1 Content</lib-ng-accordion-section>
      <lib-ng-accordion-section [header]="'Demo Accordion Section 2'">Demo Accordion Section 2 Content</lib-ng-accordion-section>
      <lib-ng-accordion-section [header]="'Demo Accordion Section 3'">Demo Accordion Section 3 Content</lib-ng-accordion-section>
    </lib-ng-accordion>`;
    this.demo3Src = `
    <lib-ng-accordion>
      <lib-ng-accordion-section [header]="'Demo Accordion Section 1'" [active]="true">Demo Accordion Section 1 Content</lib-ng-accordion-section>
      <lib-ng-accordion-section [header]="'Demo Accordion Section 2'">Demo Accordion Section 2 Content</lib-ng-accordion-section>
      <lib-ng-accordion-section [header]="'Demo Accordion Section 3'">Demo Accordion Section 3 Content</lib-ng-accordion-section>
    </lib-ng-accordion>`;
  }

  ngOnInit() {
  }

}
