import { features, description } from './data';
import { Injectable } from '@angular/core';
import { of, zip } from 'rxjs';
import { delay, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  features$ = of(features).pipe(delay(2500));
  description$ = of(description).pipe(delay(0));
  notifications$ = of(3).pipe(delay(3500));
  ready$ = zip(this.features$, this.description$, this.notifications$).pipe(
    map((ready) => !!ready)
  );
  isAnimationDisabled = false;
}
