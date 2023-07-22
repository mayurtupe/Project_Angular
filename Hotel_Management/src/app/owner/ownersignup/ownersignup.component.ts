import { Component } from '@angular/core';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-ownersignup',
  templateUrl: './ownersignup.component.html',
  styleUrls: ['./ownersignup.component.scss']
})
export class OwnersignupComponent {
  registerForm! : FormGroup

}
