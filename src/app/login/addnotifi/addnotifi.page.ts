import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NoticeService} from '../../services/notice.service'
import { NgForm } from '@angular/forms';
import { Notice } from '../../shaired/notice.model';
import * as M from '../../../assets/materialize/materialize/js/materialize.min.js';
import { AlertController } from '@ionic/angular';
import {AdminUserControlService} from '../../services/admin-user-control.service';




@Component({
  selector: 'app-addnotifi',
  templateUrl: './addnotifi.page.html',
  styleUrls: ['./addnotifi.page.scss'],
  providers: [ NoticeService ]
})
export class AddnotifiPage implements OnInit {
  
  course: string ;
  username: '';
  date: null;
  user = JSON.parse(localStorage.getItem("user")); 

  courses: any;

  notice:any;

  constructor(private adminservice:AdminUserControlService,public alertController: AlertController,private router: Router ,private noticeService: NoticeService) { 

    
    //  this.notice.push(data);
    console.log(this.user.username);
    // this.getenrolledcourses();
    this.getCourse();
  

  }
  ngOnInit() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);

    this.resetForm();
    this.refreshNoticeList();
  }

  resetForm(form?: NgForm) {
    if (form)
        form.reset();
    this.noticeService.selectedNotice = {
      _id: "",
      courseId:"",
      course: "",
      date: null,
      notice: "",
      username: "",
    }
}

// onSubmit(form : NgForm){
//   if(form.value._id == ""){
//   this.noticeService.putNotice(form.value).subscribe((res) => {
//     this.resetForm(form);
//     this.refreshNoticeList();
   
//   });
//   }
//   else {
//     this.noticeService.putNotice(form.value).subscribe((res) => {
//       this.resetForm(form);
//       this.refreshNoticeList();
    
//     });
//   }
// }
Submit(){
  if(this.course == null){
   M.toast({ html: 'please choose a course ', classes: 'rounded ' });
  }
  else{
   this.noticeService.saveNotice({course:this.course, username:this.user.username, date:this.date, notice:this.notice}).then((result)=>{
     console.log('result');
     this.notice = result;
     this.course='';
     this.date=null;
     this.notice='';
     
     this.refreshNoticeList();
    
     
     }, (err)=>{
       console.log('err');
    });
 
  }

}


refreshNoticeList() {
  this.noticeService.getNoticeListByUsername(this.user.username).subscribe((res) => {
    this.noticeService.notices = res as Notice[];
  });
}


// async onEdit(ntc : Notice){
//   const alert = await this.alertController.create({
//     header: 'Confirm!',
//     message: 'Are sure to edit this Notice',
//     buttons: [
//       {
//         text: 'Cancel',
//         role: 'cancel',
//         cssClass: 'secondary',
//         handler: (blah) => {
//           console.log('Confirm Cancel: blah');
//         }
//       }, {
//         text: 'Ok',
//         handler: () => {
//           this.noticeService.selectedNotice = ntc;
//           console.log('Confirm Okay');
//         }
//       }
//     ]
//   });

//   await alert.present();
// }



async onDelete(_id: string, form: NgForm) {
  const alert = await this.alertController.create({
    header: 'Confirm!',
    message: 'Are sure to delete this Notice',
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
            this.noticeService.deleteNotice(_id).subscribe((res) => {
              this.refreshNoticeList();
              this.resetForm(form);
            
            });
          }
          console.log('Confirm Okay');
        }
      }
    ]
  });

  await alert.present();
}




// getenrolledcourses(){
//   this.adminservice.courselistofnotice(this.user.username).then((data)=>{
//     this.courses = data;
//     console.log(this.courses);
//   },(err)=>{
//     console.log(err);
//   })
// }

getCourse(){
  console.log("this.user"+this.user.username);
  this.adminservice.getCoursesofTeacher(this.user.username)
.subscribe((res)=>{
  this.courses = res;
  console.log(this.courses);
});  }

}
