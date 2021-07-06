import { fade } from '@shared/animations/animations';
import { Component, Input } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@shared/animations/route.animations';

@Component({
  selector: 'app-tab',
  styles: [
    `
      .tab {
        padding: 2rem 0;
        display: flex;
      }
    `,
  ],
  template: `
    <div *ngIf="active" class="tab" [@fade] [ngClass]="routeAnimationsElements">
      <ng-content></ng-content>
    </div>
  `,
  animations: [fade],
})
export class TabComponent {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  @Input() tabTitle = '';
  @Input() active = false;
}
