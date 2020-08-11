import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { NoticeService } from '../../../services/notice.service';
import { Notice } from '../../../shaired/notice.model';
import { NgForm } from '@angular/forms';
import {AddcourseService} from '../../../services/addcourse.service'
import { AdminUserControlService } from '../../../services/admin-user-control.service';
import { AlertController } from '@ionic/angular';
declare var N: any;
 
@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
  providers: [ NoticeService ]
})
export class NotificationPage implements OnInit {
  
 
notice : Notice[];
user = JSON.parse(localStorage.getItem("user")); 

  course : '';
  courses : any;
  constructor(public alertController: AlertController,private router: Router,private addcourseService: AddcourseService,
    private adminService: AdminUserControlService, private authService: AuthService,private noticeService: NoticeService) {this.getCourse();  }

  ngOnInit() {
    var elems = document.querySelectorAll('.datepicker');
    //var instances = M.Datepicker.init(elems);

    
    this.refreshNoticeList();
  }
  refreshNoticeList() {
    this.noticeService.getNoticeList().subscribe((res: any) => {

      
      console.log(res);
     const getNotice = [];
      for(let x of res ){
        
          getNotice.unshift(x);
         
      }
      
    
       this.notice =  getNotice as Notice[];
    }); 
  }  

  getCourse(){
    this.adminService.getCoursesofTeacher(this.user.name)
.subscribe((res)=>{
    this.courses = res;
    console.log(this.courses);
});  }







  mycourseClicked(){
    console.log( 'veiw mycourse');
    this.router.navigateByUrl('mycourse');
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
  
}
