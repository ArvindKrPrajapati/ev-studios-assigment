import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileRoutingModule } from './mobile-routing.module';
import { MobileComponent } from './mobile.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MobileComponent
  ],
  imports: [
    CommonModule,
    MobileRoutingModule,
    FormsModule
  ]
})
export class MobileModule { }
