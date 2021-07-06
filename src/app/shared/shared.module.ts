import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { components } from './components';
@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
})
export class SharedModule {}
