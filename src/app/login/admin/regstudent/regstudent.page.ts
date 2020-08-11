import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ValidateService } from '../../../services/validate.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-regstudent',
  templateUrl: './regstudent.page.html',
  styleUrls: ['./regstudent.page.scss'],
})
export class RegstudentPage implements OnInit {
  name:"";
  username: "";
  role: "";
  email: "";
  password: "";
  address:"";
  phoneNumber:"";

  
  constructor(private authService: AuthService, private validateService: ValidateService, public toast: ToastController,
    private router: Router) {  }
    
    // Toast message
  
    async presentEmpty() {
      const toast = await this.toast.create({
        message: 'Fill the empty fields',
        color: 'danger',
        duration: 2000
      });
      toast.present();
    }

    async presentRole() {
      const toast = await this.toast.create({
        message: 'Role type is Invalid',
        
        color: 'danger',
        duration: 2000
      });
      toast.present();
    }

    async presentEmail() {
      const toast = await this.toast.create({
        message: 'Invalid email',
        color: 'danger',
        duration: 2000
      });
      toast.present();
    }

    async registerUsers() {
      const toast = await this.toast.create({
        message: 'Register successfully',
        color: 'success',
        duration: 2000
      });
      toast.present();
    }
   

  ngOnInit() {}




  onRegister(){
    const user = {
      
      name: this.name,
      username: this.username,
      address: this.address,
      phoneNumber:this.phoneNumber,
      role: this.role,
      email: this.email,
      password: this.password
    }
    //empty fields
    if(!this.validateService.validateRegister(user)){
       this.presentEmpty();
      console.log('fill the fields');
      return false;
    }

    //validate Role
    if(!this.validateService.validateRole(this.role)){
      this.presentRole();
      
      console.log('Role type is Invalid');
      return false;
    }
    

    //validate email
    if(!this.validateService.validateEmail(user.email)){
      this.presentEmail();
      console.log('invalid email');
      return false;
    }




     //regiser user
    this.authService.registerUser(user).subscribe(data => { 
     
      if(data.success){
        this.registerUsers();
       console.log('registered');
        this.router.navigateByUrl('/admin');
      }else{
        console.log('failed register');
       this.router.navigateByUrl('/regstudent');
      }
  });



  
  }  
}