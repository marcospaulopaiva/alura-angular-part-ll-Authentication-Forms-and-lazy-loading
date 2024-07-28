import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './singup/signup.componet';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  declarations: [
      SignInComponent,
      SignUpComponent,
      HomeComponent
  ],
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      VMessageModule,
      RouterModule,
      HomeRoutingModule
  ]
})
export class HomeModule { }
