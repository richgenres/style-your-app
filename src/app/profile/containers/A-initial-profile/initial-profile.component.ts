import { fade, slideUpFade } from '@shared/animations/animations';
import { Component } from '@angular/core';
import { DataService } from '@profile/services/data.service';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@shared/animations/route.animations';

@Component({
  selector: 'app-initial-profile',
  templateUrl: './initial-profile.component.html',
  styleUrls: ['./initial-profile.component.scss'],
  animations: [fade, slideUpFade],
})
export class InitialProfileComponent {
  readonly routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  readonly features$ = this.data.features$;
  readonly description$ = this.data.description$;
  readonly notifications$ = this.data.notifications$;
  readonly ready$ = this.data.ready$;

  constructor(private readonly data: DataService) {}
}
