import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@shared/animations/route.animations';
import { TabComponent } from './tab.component';

@Component({
  selector: 'app-tabs',
  template: `
    <ul class="tabs" [ngClass]="routeAnimationsElements">
      <li
        *ngFor="let tab of tabs"
        (click)="selectTab(tab)"
        [class.active]="tab.active"
      >
        <p>{{ tab.tabTitle }}</p>
      </li>
    </ul>
    <ng-content></ng-content>
  `,
  styles: [
    `
      .active {
        border-radius: 0.8rem;
        box-shadow: inset 0.2rem 0.2rem 0.5rem var(--tone-300),
          inset -0.2rem -0.2rem 0.5rem var(--primary-contrast);
        pointer-events: none;
      }
      .tabs {
        display: inline-flex;
        flex-direction: row;
        height: 5.8rem;
        box-shadow: 0.3rem 0.3rem 0.6rem var(--tone-300),
          -0.2rem -0.2rem 0.5rem var(--primary-contrast);
        border-radius: 1rem;
        align-items: center;
        position: relative;
        margin: 0 auto;
        padding: 0.3rem;
      }
      li {
        cursor: pointer;
        padding: 1.6rem;
        text-align: center;
      }
      li p {
        opacity: 0.3;
        transition: all 0.3s ease;
      }
      li:hover p,
      li.active p {
        opacity: 1;
      }
    `,
  ],
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> =
    {} as QueryList<TabComponent>;
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  ngAfterContentInit(): void {
    const activeTabs = this.tabs.filter((tab) => tab.active);
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent): void {
    this.tabs.toArray().forEach((t) => (t.active = false));
    tab.active = true;
  }
}
