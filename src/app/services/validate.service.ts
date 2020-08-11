import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

   validateRegister(user) {
     if (user.name === undefined || user.email === undefined||user.role===undefined|| user.username === undefined || user.password === undefined ) {
          return false;
     } else {
       return true;
     }
   }
validateRole(role){
  if(role==="Student"||role=== "Teacher"||role==="Admin")
  {
    return true;
  }
  else{
    return false;
  }
}

   validateEmail(email) {
    const re =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);

    
   }
  

   

   

}
