import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  journey!:string;
  
  constructor() { }

  whiteSpaceValidator(nameField:any){
    let data = nameField.value;
    let newData = data?.trim();
    let isNotValid = data.length ! = newData.length;
    return isNotValid ? {whiteSpace: true}: null
  }
}
