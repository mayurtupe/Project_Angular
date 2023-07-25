import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerHomeComponent } from './owner-home/owner-home.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { OwnersuccessComponent } from './ownersuccess/ownersuccess.component';
import { NewhotelregistrationComponent } from './newhotelregistration/newhotelregistration.component';


const routes: Routes = [
  { path: '', component: OwnerHomeComponent },
  { path: 'ownerHome', component: OwnerHomeComponent},
  { path: 'ownersignup', component: OwnersignupComponent },
  { path: 'ownersuccess', component: OwnersuccessComponent },
  { path: 'newhotelregistration', component: NewhotelregistrationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule {}
