import { routeAnimations } from './shared/animations/route.animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from '@profile/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations],
})
export class AppComponent {
  constructor(public data: DataService) {}
  title = 'how to style your app';

  prepareRoute(outlet: RouterOutlet): boolean {
    // return outlet.isActivated; // TODO return this to activate animations on all pages
    return !!outlet?.activatedRouteData?.animation;
  }
}
