import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ad-accordion',
  template: `
              <div (click)="toggleContent()" class="well pointable">
                <h4>
                  <ng-content select="[acc-title]"></ng-content>
                </h4>
                <h4>
                  <ng-content *ngIf="visible" select="[acc-body]"></ng-content>
                </h4>
              </div>
            `
})
export class AccordionComponent implements OnInit {
  visible = true;
  constructor() { }

  ngOnInit() {
  }

  toggleContent(): void {
    this.visible = !this.visible;
  }
}
