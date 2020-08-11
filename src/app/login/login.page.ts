    
import { Component} from '@angular/core';
import { Router } from '@angular/router';
import {NavController, ToastController} from '@ionic/angular';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  lusername: string;
  lpassword: string;

  



  constructor(private router: Router, private authService: AuthService, private toast: ToastController) {}

  //regisClicked() {
    //console.log( 'Buttton clicked');
   // this.router.navigateByUrl('courses');
 // }
  
  regClicked() {
    console.log( 'Buttton clicked!');
    this.router.navigateByUrl('register');
  }
 
 

//   logClicked() {
//    if ( this.lusername.length === 0 || this.lpassword.length === 0) {

// alert('Plase fill all the fileds');
// this.router.navigateByUrl('login');
//     }

//     {
//     console.log( 'Buttton clicked');
//     this.router.navigateByUrl('profile');
//    }

//   }
    goBack() {
      this.router.navigateByUrl('home');

  }

 //----------------------------------------------------------------------------------------------
  async loginUsers() {
    const toast = await this.toast.create({
      message: 'login successfully',
      color: 'success',
      duration: 2000
    });
    toast.present();
  }
  async loginerrUsers() {
    const toast = await this.toast.create({
      message: 'login failed',
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }

 


  onLogin(){
    const user = {
      username: this.lusername,
      password: this.lpassword,
      
    }


   
    
     

    this.authService.authenticateUser(user).subscribe(data => {
      if (data.success) {
this.authService.storeUserData(data.token, data.user);
        //this.loginUsers();

         if(data.user.role=="Student")
             this.router.navigate(['profile']);

          if(data.user.role=="Teacher")
             this.router.navigate(['teachers']);
          
             if(data.user.role=="Admin")
             this.router.navigate(['admin']);
         this.lusername=null;
         this.lpassword=null;
      
         
      } else {
        this.loginerrUsers();
       console.log('error login');
       this.router.navigate(['login']);
      }


      
   });

   

  }
 

  

}