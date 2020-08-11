import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CourseService } from '../../../services/enrollment.service';
import { AdminUserControlService } from '../../../services/admin-user-control.service';
import {AddcourseService} from '../../../services/addcourse.service'

import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-mycourse',
  templateUrl: './mycourse.page.html',
  styleUrls: ['./mycourse.page.scss'],
  
  
})
export class MycoursePage implements OnInit {
 
    
  user = JSON.parse(localStorage.getItem("user")); 
  
  courses : any;
  
  constructor( private addcourseService: AddcourseService,private adminService: AdminUserControlService,public alertController: AlertController,private router: Router, private authService: AuthService,private courseService: CourseService )  { 
    
      this.getCourse();
    }
  
    ngOnInit() { 
      this.getCourse();
      
    }

    onSelect(item){
      this.router.navigateByUrl('/mycourse/'+ item);
    
    }

    onSelect2(item){
      this.router.navigateByUrl('/mycourse/pay_course/'+ item);
    
    }

    confirmSubmit(event:any){
      console.log(event);
      localStorage.setItem('subject', event);
      this.router.navigateByUrl('/mycourse/pay_course/'+ event);
    
    }


    getCourse(){
      this.courseService.getStudentCoursesByusername(this.user.username)
  .then((res)=>{
      this.courses = res;
      console.log(this.courses);
  });  }
  

  mycourseClicked(){
    console.log( 'veiw mycourse');
    this.router.navigateByUrl('mycourse');
    this.getCourse();
  }

  notifClicked(){
    console.log( 'veiw notification');
    this.router.navigateByUrl('notification');
  }
  chatClicked(){
    console.log( 'veiw chatgroup');
    this.router.navigateByUrl('chatgroup');
 
  }
  profileClicked(){
    console.log( 'veiw profile');
    this.router.navigateByUrl('profile');
    
  }
 
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
            console.log('Confirm Okay');
            this.router.navigateByUrl('home');
          }
        }
      ]
    });

    await alert.present();
  }

    enroll(){
      console.log( 'Enroll Clicked');
      this.router.navigateByUrl('/enroll')
    }

   

}
