import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {AddcourseService} from '../../../services/addcourse.service'
import { AdminUserControlService } from '../../../services/admin-user-control.service';
import { AlertController } from '@ionic/angular';
import * as M from '../../../../assets/materialize/materialize/js/materialize.min.js';

declare var N: any;

import { Teacher } from '../../../shaired/teacher.model';

@Component({
  selector: 'app-teassign',
  templateUrl: './teassign.page.html',
  styleUrls: ['./teassign.page.scss'],
})
export class TeassignPage implements OnInit {
  course : '';
  teacher1 : '';
  teacher2 : '';
  coursearray: any;
  teacherarray: any;
  enroll : any;

  private courses = [];

  constructor(
    public alertController: AlertController,private addcourseService: AddcourseService, private adminService: AdminUserControlService ) { }

  state = true;

  courseClick() {

    if(this.state != true){
    this.state=true;
    };
  }
  teacherClick() {
    if(this.state != false){
    this.state = false;
  }

  }

  ngOnInit() {
    this.getCourse();
    this.getTeacherName();
    
  }

  getCourse(){
    this.addcourseService.getcourseDetailsFullList()
.subscribe((res)=>{
    this.coursearray = res;
    console.log(this.coursearray);
});  }
  

  getTeacherName(){
  this.adminService.getRegisteredUserList("Teacher")
.subscribe((res)=>{
  this.teacherarray = res;
  console.log(this.teacherarray);
});  }

  async Submit(){
  if(this.course == null || this.teacher1 == null){
    const alert = await this.alertController.create({
      header: 'Alert',
      
      message: 'Please choose teacher && course correctly',
      buttons: ['Close']
    });

    await alert.present();
    //M.toast({ html: 'Please choose teacher && course correctly ', classes: 'rounded ' });
  }
  else{
    this.adminService.saveTeacher({course:this.course, teacher:this.teacher1}).then(async (result)=>{
      console.log(result);
      this.enroll = result;
      if(this.enroll.enrollment){
      
        const alert = await this.alertController.create({
          header: 'Alert',
          
          message: 'Teacher is successfully assigned for the course.',
          buttons: ['Close']
        });
    
        await alert.present();
      
        // M.toast({ html: 'Teacher is successfully assigned for the course.', classes: 'rounded ' });
        
      }
      else{
        
        const alert = await this.alertController.create({
          header: 'Alert',
         
          message: 'This teacher is already assigned for this course',
          buttons: ['Close']
        });
    
        await alert.present();
        
        //M.toast({ html: 'This teacher is already assigned for this course ', classes: 'rounded ' });
      }
     
      }, async (err)=>{
        const alert = await this.alertController.create({
          header: 'Alert',
          
          message: 'An error occured please try again',
          buttons: ['Close']
        });
    
        await alert.present();
        console.log(err);
       // M.toast({ html: 'An error occured please try again.', classes: 'rounded ' });
     });
  }
  
  
 }

 refreshbyCourseList() {
  this.adminService.getbyCourse().subscribe((res) => {
    this.adminService.courses = res as Teacher[];
  });
}

refreshTeacherCourseList() {
  this.adminService.getCoursesofTeacher(this.teacher2).subscribe((res) => {
    this.adminService.courses = res as Teacher[];
  });
}

teacherSubmit(){
  if(this.course == null){
    M.toast({ html: 'This teacher is not assigned to any course.', classes: 'rounded ' });
  }
  this.refreshTeacherCourseList();
  
}
onDelete(_id: string) {
  if (confirm('Are you sure to remove this teacher from the course ?') == true) {
    this.adminService.removeTeacherFromCourse(_id).subscribe((res) => {
      this.refreshTeacherCourseList();
       });
  }
}


}