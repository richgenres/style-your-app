import {
  animate,
  query,
  style,
  transition,
  trigger,
  stagger,
  sequence,
} from '@angular/animations';

export const ROUTE_ANIMATIONS_ELEMENTS = 'route-animations-elements';

const STEPS_ALL = [
  query(':enter > *', style({ opacity: 0, position: 'fixed' }), {
    optional: true,
  }),
  query(':enter .' + ROUTE_ANIMATIONS_ELEMENTS, style({ opacity: 0 }), {
    optional: true,
  }),
  sequence([
    query(
      ':leave > *',
      [
        style({ transform: 'translateY(0%)', opacity: 1 }),
        animate(
          '0.2s ease-in-out',
          style({ transform: 'translateY(-3%)', opacity: 0 })
        ),
        style({ position: 'fixed' }),
      ],
      { optional: true }
    ),
    query(
      ':enter > *',
      [
        style({
          transform: 'translateY(-3%)',
          opacity: 0,
          position: 'static',
        }),
        animate(
          '0.5s ease-in-out',
          style({ transform: 'translateY(0%)', opacity: 1 })
        ),
      ],
      { optional: true }
    ),
  ]),
  query(
    ':enter .' + ROUTE_ANIMATIONS_ELEMENTS,
    stagger(160, [
      style({ transform: 'translateY(10%)', opacity: 0 }),
      animate(
        '.5s ease-in-out',
        style({ transform: 'translateY(0%)', opacity: 1 })
      ),
    ]),
    { optional: true }
  ),
  sequence([
    query(
      ':leave > *',
      [
        style({ opacity: 1, position: 'fixed' }),
        animate('0.4s ease-in-out', style({ opacity: 0 })),
      ],
      { optional: true }
    ),
    query(
      ':enter > *',
      [
        style({ opacity: 0, position: 'fixed' }),
        animate('0.4s ease-in-out', style({ opacity: 1 })),
      ],
      {
        optional: true,
      }
    ),
  ]),
];

const STEPS_PAGE = [STEPS_ALL[0], STEPS_ALL[2]];
const STEPS_ELEMENTS = [STEPS_ALL[1], STEPS_ALL[3]];
const PAGE_AND_ELEMENTS = [
  STEPS_ALL[0],
  STEPS_ALL[1],
  STEPS_ALL[2],
  STEPS_ALL[3],
];
const FADE_IN_OUT = [STEPS_ALL[0], STEPS_ALL[4]];
export const routeAnimations = trigger('routeAnimations', [
  transition(() => true, PAGE_AND_ELEMENTS),
]);
