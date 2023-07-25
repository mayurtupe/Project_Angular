import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerHomeComponent } from './owner-home/owner-home.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { SharedModule } from '../common/shared/shared.module';
import { NewhotelregistrationComponent } from './newhotelregistration/newhotelregistration.component';
import { OwnersuccessComponent } from './ownersuccess/ownersuccess.component';



@NgModule({
  declarations: [
    OwnerHomeComponent,
    OwnersignupComponent,
    NewhotelregistrationComponent,
    OwnersuccessComponent,
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule
  ]
})
export class OwnerModule { }
