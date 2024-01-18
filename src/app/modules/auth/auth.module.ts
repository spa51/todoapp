import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ReplaceSpacePipe } from '@shared/pipes/replace-space.pipe';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ],
  providers:[ReplaceSpacePipe]
})
export class AuthModule { }
