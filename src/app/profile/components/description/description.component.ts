import { Component, Input } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@shared/animations/route.animations';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  isOpen = false;
  @Input() data = '';
}
