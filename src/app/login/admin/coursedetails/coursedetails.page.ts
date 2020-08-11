import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import {AddcourseService} from '../../../services/addcourse.service'
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { CourseDetails} from '../../../shaired/course-details.model';
import * as M from '../../../../assets/materialize/materialize/js/materialize.min.js';
import { Course } from 'src/app/shaired/course.model';
import {  CourseService} from '../../../services/enrollment.service';

import { AdminUserControlService} from '../../../services/admin-user-control.service';

declare var N: any;  
@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.page.html',
  styleUrls: ['./coursedetails.page.scss'],
  providers: [ AddcourseService ]
})
export class CoursedetailsPage implements OnInit {  


 
  
  constructor( public alertController: AlertController
,    private adminuserservice:AdminUserControlService,private enrollmentservice:CourseService,private router: Router,private addcourseService: AddcourseService , private toast: ToastController) { }

 



  ngOnInit() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);
//this.refreshCourseList();

this.refreshcourseDetailsList();

}

  

refreshcourseDetailsList() {
  this.addcourseService.getcourseDetailsFullList().subscribe((res) => {
    this.addcourseService.courseDetails = res as CourseDetails[];
  });
}


async onDelete(_id: string, form: NgForm,course: string) {
  const alert = await this.alertController.create({
    header: 'Confirm!',
    message: 'Message <strong>text</strong>!!!',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Ok',
        handler: () => {
          {
            this.addcourseService.deleteCourse(_id).subscribe(() => {
              this.refreshcourseDetailsList();
              this.deletetutorenrollments(course);
            this.deletestuenrollments(course);
            });
          }
          console.log('Confirm Okay');
        }
      }
    ]
  });

  await alert.present();
}


  




deletestuenrollments(course:string){
  this.enrollmentservice.deleteenrollment(course).then((result)=>{
    console.log(result);
  },(err)=>{
    console.log(err);
  })
}
deletetutorenrollments(course:string){
  this.adminuserservice.deleteenrollmentteacher(course).then((result)=>{
    console.log('teacher');
  },(err)=>{
    console.log(err);
  })
}

  addcourseClicked(){
    console.log( 'Add course clicked');
    this.router.navigateByUrl('/addcourse');
  }
  refreshClicked(){
    this.refreshcourseDetailsList();
  }

}
