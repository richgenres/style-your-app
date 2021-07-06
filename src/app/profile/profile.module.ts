import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { components } from './components';
import { containers } from './containers';

@NgModule({
  declarations: [...components, ...containers],
  imports: [CommonModule, SharedModule],
  exports: [...components, ...containers],
})
export class ProfileModule {}
