import { slideUpFade, fade, staggerItems } from '@shared/animations/animations';
import { Component, Input } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@shared/animations/route.animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [slideUpFade, fade, staggerItems],
})
export class SkillsComponent {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  @Input() data: string[] = [];
}
