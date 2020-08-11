import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {NavController, ToastController} from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.page.html',
  styleUrls: ['./teachers.page.scss'],
})
export class TeachersPage implements OnInit {

  user = JSON.parse(localStorage.getItem('user'));


  teacher=this.user;
  
  constructor(public alertController: AlertController,private router: Router, private authService: AuthService, private toast: ToastController) {}

  

      ngOnInit() {

        this.authService.getTProfle().subscribe(teachers =>{
          this.user =teachers.user;
        },
        err => {
          console.log(err);
          return false;
        }
        );
      }

      
//   lgoutClicked(){
//     if (confirm('Are you sure to Log Out ?') == true) {
//       this.authService.logout();
//       console.log( 'Loged out');
//       this.router.navigateByUrl('home');
   

// }


//   }


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
          text: 'Okay',
          handler: () => {
            console.log('Confirm Ok');
            this.router.navigateByUrl('home');
          }
        }
      ]
    });

    await alert.present();
  }
          addnotiClicked(){
            console.log( 'log out');
            this.router.navigateByUrl('/addnotifi');

          }
        
          courseClicked(){
            console.log( 'Clicked');
            this.router.navigateByUrl('/techercourse');

          }
          

}
