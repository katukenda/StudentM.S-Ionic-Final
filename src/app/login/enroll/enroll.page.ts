import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CourseService} from '../../services/enrollment.service';
import { WebSocketService} from '../../services/web-socket.service';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';

import { from } from 'rxjs';
@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.page.html',
  styleUrls: ['./enroll.page.scss'],
})
export class EnrollPage implements OnInit {
  user = JSON.parse(localStorage.getItem("user")); 
  course : '';
  coursearray: any;
  enrollment: any;
  
 
  constructor( public alertController: AlertController,private router: Router,private enrollmentService: CourseService, private coursegroupService: WebSocketService,private toast: ToastController) { }

  ngOnInit() {
    this.groups();
    
  }
 
  async Submit(){
    if(this.course == null){
      const alert = await this.alertController.create({
        header: 'Alert',
       
        message: 'please choose a course ',
        buttons: ['OK']
      });
  
      await alert.present();
     //M.toast({ html: 'please choose a course ', classes: 'rounded ' });
    }
    else{
     this.enrollmentService.saveEnrollments({
     course:this.course, username:this.user.username, fullname:this.user.name, email:this.user.email}).then(async (result)=>{
       console.log(result);
       this.enrollment = result;
   
       if(this.enrollment.enrollments){
        const alert = await this.alertController.create({
          header: 'Alert',
      
          message: 'enrollment successful  ',
          buttons: ['OK']
        });
    
        await alert.present();
        this.groups();
       //  M.toast({ html: 'enrollment successful ', classes: 'rounded ' });
       }
       else{
        const alert = await this.alertController.create({
          header: 'Alert',
         
          message: 'already enroll for this course  ',
          buttons: ['Cancel']
        });
    
        await alert.present();

        // M.toast({ html: 'already enroll for this course ', classes: 'rounded ' });
       }
       
       }, (err)=>{
         console.log(err);
      });
   
    }
 
  }
 
  groups(){
   this.coursegroupService.getchatgroups().then((data)=>{
     this.coursearray = data;
     console.log(this.coursearray);
   });
   }
   
   
 
 }