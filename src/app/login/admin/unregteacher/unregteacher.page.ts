import { Component, OnInit } from '@angular/core';
import { AdminUserControlService } from '../../../services/admin-user-control.service';

import { RegisteredUsers } from '../../../shaired/registered-users.model';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-unregteacher',
  templateUrl: './unregteacher.page.html',
  styleUrls: ['./unregteacher.page.scss'],
})
export class UnregteacherPage implements OnInit {
  user : '';
  userarray: any;
  constructor(public alertController: AlertController,private adminService: AdminUserControlService) { }

  ngOnInit() {
    this.getTeachersList();
  }
  getTeachersList() {
    this.adminService.getRegisteredUserList("Teacher").subscribe((res) => {
      this.adminService.users = res as RegisteredUsers[];
    });
  }

  
  

  async onDeleteReg(username: string){
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are You Sure You want to Unregister this user',
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
            this.adminService.deleteFileReg(username).subscribe((res) => {
                   this.getTeachersList();
                    this.removeTeacherRecord(username);
                  });
          }
        }
      ]
    });

    await alert.present();
  }
  removeTeacherRecord(username : string){
    this.adminService.removeTeacherForUnregistering(username).then((result)=>{
      console.log(result);
    },(err)=>{
      console.log(err);
    })
  }


}
