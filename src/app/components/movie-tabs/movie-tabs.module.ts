import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieTabsComponent} from './movie-tabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import {SharedModule} from '../../shared/shared.module';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    MovieTabsComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    SharedModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    MovieTabsComponent
  ]
})
export class MovieTabsModule { }
