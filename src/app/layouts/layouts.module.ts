import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeadlineModule } from '../components/headline/headline.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HeadlineModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class LayoutsModule { }
