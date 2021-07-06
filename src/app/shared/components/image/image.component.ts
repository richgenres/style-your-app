import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  animations: [
    trigger('inflate', [
      state('init', style({ transform: 'scale(0)' })),
      state(
        'active',
        style({
          transform: 'scale(1)',
        })
      ),
      transition('* => active', [animate('0.8s ease')]),
    ]),
  ],
})
export class ImageComponent {
  @Input() notificationsCount = 0;
  @Input() src = '';
  @Input() size: 'default' | 'small' = 'default';
}
