import {
  animate,
  animateChild,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const slideUpFade = trigger('slideUpFade', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(2rem)' }),
    animate('500ms 200ms ease-in-out'),
  ]),
]);

export const fade = trigger('fade', [
  transition(
    ':enter',
    [style({ opacity: 0 }), animate('{{speed}} {{delay}} ease-in-out')],
    { params: { speed: '.8s', delay: '0s' } }
  ),
]);

export const staggerItems = trigger('stagger', [
  transition(':enter', [query(':enter', stagger('.05s', [animateChild()]))]),
]);
