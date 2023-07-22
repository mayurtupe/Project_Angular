import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerHomeComponent } from './owner-home/owner-home.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { OwnerloginComponent } from './ownerlogin/ownerlogin.component';
import { SharedModule } from '../common/shared/shared.module';



@NgModule({
  declarations: [
    OwnerHomeComponent,
    OwnersignupComponent,
    OwnerloginComponent,
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule
  ]
})
export class OwnerModule { }
