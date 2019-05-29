import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { SinginComponent } from './singin/singin.component';
import { MsgFormModule } from './../shared/components/msg-form/msg-form.module';

@NgModule({
  declarations: [SinginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MsgFormModule,
    RouterModule
  ]
})
export class HomeModule { }
