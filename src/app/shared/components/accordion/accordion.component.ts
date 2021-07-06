import { fade } from '@shared/animations/animations';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  animations: [
    fade,
    trigger('openClose', [
      state('init', style({ height: '12rem' })),
      state(
        'open',
        style({
          height: '*',
        })
      ),
      state(
        'closed',
        style({
          height: '12rem',
        })
      ),
      transition('* => closed', [animate('0.3s')]),
      transition('* => open', [animate('0.3s')]),
    ]),
  ],
})
export class AccordionComponent implements AfterViewInit {
  @ViewChild('toggle') toggle = {} as ElementRef;
  isOpen = false;
  init = true;

  ngAfterViewInit(): void {
    this.toggle.nativeElement.onclick = () => {
      this.isOpen = !this.isOpen;
      this.init = false;
    };
  }
}
