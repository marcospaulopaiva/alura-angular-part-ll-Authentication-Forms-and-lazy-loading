import { NgModule } from '@angular/core';

import { RequestInterceptor } from './auth/request.interceptor';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
      CommonModule,
      RouterModule
  ],
  providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: RequestInterceptor,
        multi: true
      }
  ]
})
export class CoreModule { }
