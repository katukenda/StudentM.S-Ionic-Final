import { Component, OnInit } from '@angular/core';
import { AdminUserControlService } from '../../../services/admin-user-control.service';
import { CourseService } from '../../../services/enrollment.service';

import { RegisteredUsers } from '../../../shaired/registered-users.model';
import { AlertController } from '@ionic/angular';
import { getClosureSafeProperty } from '@angular/core/src/util/property';
@Component({
  selector: 'app-unregstedent',
  templateUrl: './unregstedent.page.html',
  styleUrls: ['./unregstedent.page.scss'],
})
export class UnregstedentPage implements OnInit {
  user : '';
  userarray: any;
  
  constructor(public alertController: AlertController,private adminService: AdminUserControlService,private enrollmentService : CourseService) { }

  ngOnInit() {
    
  this.getStudentsList();
  
  }
  getStudentsList() {
    this.adminService.getRegisteredUserList("Student").subscribe((res) => {
      this.adminService.users = res as RegisteredUsers[];
    });
  }

  
  async onDeleteReg(username: string) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure to unregister this Student',
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
            console.log('Confirm Okay');
            
     this.adminService.deleteFileReg(username).subscribe((res) => {
        this.getStudentsList();
        this.removeEnrollment(username);
          
      });
          }
        }
      ]
    });

    await alert.present();
  }
  removeEnrollment(username : string){
    this.enrollmentService.deleteEnrollmentForUnregister(username).then((result)=>{
      console.log(result);
    },(err)=>{
      console.log(err);
    })
  }



}
