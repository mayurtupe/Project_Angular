import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-home',
  templateUrl: './owner-home.component.html',
  styleUrls: ['./owner-home.component.scss']
})
export class OwnerHomeComponent {
  
  constructor (private router:Router){}

  login(){
    this.router.navigateByUrl('owner/ownerlogin')
  }
}
