import {AddcourseService} from '../../../services/addcourse.service'
import { Component, OnInit } from '@angular/core';
import { AdminUserControlService } from '../../../services/admin-user-control.service';
import * as M from '../../../../assets/materialize/materialize/js/materialize.min.js';
declare var N: any;

import { AlertController } from '@ionic/angular';
import { Course } from '../../../shaired/course.model';

@Component({
  selector: 'app-stuenroll',
  templateUrl: './stuenroll.page.html',
  styleUrls: ['./stuenroll.page.scss'],
})
export class StuenrollPage implements OnInit {

  course : '';
  coursearray: any;


  constructor(public alertController: AlertController,private addcourseService: AddcourseService,private adminService: AdminUserControlService) { }

  ngOnInit() {
    this.getCourse();
    this.refreshStudentsList();
  }
  getCourse(){
    this.addcourseService.getcourseDetailsFullList()
.subscribe((res)=>{
    this.coursearray = res;
    console.log(this.coursearray);
});  }

refreshStudentsList() {
  this.adminService.getstudentsList(this.course).subscribe((res) => {
    this.adminService.enrollments = res as Course[];
  });
}

Submit(){
  
    this.refreshStudentsList();
  
 }

//  onDelete(_id: string) {
//   if (confirm('Are you sure to unenroll this student ?') == true) {
//     this.adminService.deleteFile(_id).subscribe((res) => {
//       this.refreshStudentsList();
//       N.toast({ html: 'Unenrolled successfully', classes: 'rounded' });
//     });
//   }
// }

async onDelete(_id: string){
  const alert = await this.alertController.create({
    header: 'Confirm!',
    message: 'Are you sure to unenroll this student ?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm cancel');
        }
      }, {
        text: 'Ok',
        handler: () => {
          console.log('Confirm Okay');
          this.adminService.unenrollStudent(_id).subscribe((res) => {
                   this.refreshStudentsList();
                });
        }
      }
    ]
  });

  await alert.present();
}


}
