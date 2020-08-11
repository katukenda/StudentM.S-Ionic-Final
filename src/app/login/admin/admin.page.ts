import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {NavController, ToastController} from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  user = JSON.parse(localStorage.getItem('user'));
  

  constructor(public alertController: AlertController,private router: Router, private authService: AuthService, private toast: ToastController,private menu: MenuController) {}
  
  ngOnInit()
  
  {

    this.authService.getAProfle().subscribe(admin =>{
      this.user =admin.user;
    },
    err => {
      console.log(err);
      return false;
    }
    );
  }
  comanegmentClocked(){
    console.log( 'button ckicked');
    this.router.navigateByUrl('/coursedetails');

  }
  // attendenceClicked(){

  //   console.log( 'button clicked');
  //   this.router.navigateByUrl('/attendence');
  // }
 
  studentClicked(){
    console.log( 'Buttton clicked!');
    this.router.navigateByUrl('/regstudent');
  }
 

  // examMarks(){

  //   console.log( 'button clicked');
  //   this.router.navigateByUrl('/exammarks');

  // }

  async lgoutClicked()  {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are You Sure you want to logout',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'danger',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
    
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
            this.router.navigateByUrl('home');
          }
        }
      ]
    });

    await alert.present();
  }
      tassingnClicked(){

 console.log( 'tasignclicked');
    this.router.navigateByUrl('/teassign');
      }

      stunregClicked(){
        console.log( 'unregiter student clicked');
        this.router.navigateByUrl('/unregstedent');
      }
      teunregClicked(){
        console.log( 'unregiter teacher clicked');
    this.router.navigateByUrl('/unregteacher');
      }
     
      courseClicked(){
        console.log('button clicked');
        this.router.navigateByUrl('/stuenroll');
      }
      payClicked(){
        console.log('button clicked');
        this.router.navigateByUrl('/paymentcheck');
      }

      
}
