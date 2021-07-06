import { fade, slideUpFade } from '@shared/animations/animations';
import { Component, ViewEncapsulation } from '@angular/core';
import { DataService } from '@profile/services/data.service';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@shared/animations/route.animations';

@Component({
  selector: 'app-refactored-profile',
  templateUrl: './refactored-profile.component.html',
  styleUrls: ['./refactored-profile.component.scss'],
  // encapsulation: ViewEncapsulation.None,
  animations: [fade, slideUpFade],
})
export class RefactoredProfileComponent {
  readonly routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  readonly features$ = this.data.features$;
  readonly description$ = this.data.description$;
  readonly notifications$ = this.data.notifications$;
  readonly ready$ = this.data.ready$;

  constructor(private readonly data: DataService) {}
}
