import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieTabsComponent} from './movie-tabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    MovieTabsComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    SharedModule
  ],
  exports: [
    MovieTabsComponent
  ]
})
export class MovieTabsModule { }
