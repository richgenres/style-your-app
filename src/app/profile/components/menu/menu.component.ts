import { Component, Input } from '@angular/core';
import { DataService } from '@profile/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(readonly data: DataService) {}
  @Input() ready = false;
  menu = ['Tasks', 'Calendar', 'Files', 'Accounts'];
}
