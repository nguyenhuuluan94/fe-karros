import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeadlineModule } from '../components/headline/headline.module';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HeadlineModule,
  ],
  exports: [
    NavbarComponent
  ]
})
export class LayoutsModule { }
