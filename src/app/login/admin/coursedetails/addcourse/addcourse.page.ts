import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import {AddcourseService} from '../../../../services/addcourse.service'
import { NgForm } from '@angular/forms';
import { CourseDetails} from '../../../../shaired/course-details.model';
import * as M from '../../../../../assets/materialize/materialize/js/materialize.min.js';
import * as io from 'socket.io-client';
@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.page.html',
  styleUrls: ['./addcourse.page.scss'],
  providers: [ AddcourseService ]
})
export class AddcoursePage implements OnInit {
  socket = io('https://smsback.herokuapp.com');

 course: String;
 duartion: String;
    regfee: String;
    totfee: String;
    insfee: String;
    dayandtime: String;
    sdate: String;
    edate: String;


    

 

  constructor(private router: Router ,private addcourseService: AddcourseService , private toast: ToastController) { }

  ngOnInit() {
    var elems = document.querySelectorAll('.datepicker');

    this.refreshcourseDetailsList();
  }


  refreshcourseDetailsList() {
    this.addcourseService.getcourseDetailsFullList().subscribe((res) => {
      this.addcourseService.courseDetails = res as CourseDetails[];
    });
  }

  async addNew() {
    const toast = await this.toast.create({
      message: 'Course Added',
      color: 'success',
      duration: 2000
    });
    toast.present();
  }
  async addErr() {
    const toast = await this.toast.create({
      message: 'Some field may empty',
      color: 'warning',
      duration: 2000
    });
    toast.present();
  }


  addCourse(){
    const coursedetails = {
      
      course: this.course,
      duartion: this.duartion,
    regfee: this.regfee,
    totfee: this.totfee,
    insfee: this.insfee,
    dayandtime: this.dayandtime,
    sdate: this.sdate,
    edate: this.edate
    }

   
    if(this.course===undefined||this.duartion===undefined||this.regfee===undefined||this.totfee===undefined||this.insfee===undefined||this,this.insfee===undefined||this.dayandtime===undefined||this.sdate===undefined||this.edate===undefined)
    

      this.addErr();
    
    else

    
    this.addcourseService.postcourseDetails(coursedetails).subscribe(() => { 
      this.socket.emit('save-message', coursedetails);
      console.log('course added');
      this.addNew();
      this.refreshcourseDetailsList();
      this.resetForm();
      this.router.navigateByUrl('/coursedetails');
      
  }
  );
 

  
  }
  resetForm(form?: NgForm) {
    if (form)
        form.reset();
    this.addcourseService. selectedCoursedetails = {
      _id: "",
      course: " ",
      duartion: " ",
    regfee: "",
    totfee: " ",
    insfee: "",
    dayandtime: " ",
    sdate: " ",
  
    edate: " "

    }
}

 

  closeClicked(){

    
   
    this.router.navigateByUrl('/coursedetails');
   
  }


}
