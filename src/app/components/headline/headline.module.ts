import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadlineComponent } from './headline.component';

@NgModule({
  declarations: [
    HeadlineComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HeadlineComponent
  ]
})
export class HeadlineModule { }
