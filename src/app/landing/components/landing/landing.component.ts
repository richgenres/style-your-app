import { Component } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@shared/animations/route.animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
}
