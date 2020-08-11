import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import {AddcourseService} from '../services/addcourse.service'
import { NgForm } from '@angular/forms';
import { CourseDetails} from '../shaired/course-details.model';
//import * as M from '../../assets/materialize/materialize/js/materialize.min.js';

declare var N: any;  

@Component ({  
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
  providers: [ AddcourseService ]

})

export class CoursesPage implements OnInit {
 
  
  constructor(private router: Router,private addcourseService: AddcourseService , private toast: ToastController) { }

  ngOnInit() {
    var elems = document.querySelectorAll('.datepicker');
    //var instances = M.Datepicker.init(elems);

    this.refreshcourseDetailsList();
  }
 
refreshcourseDetailsList() {
  this.addcourseService.getcourseDetailsFullList().subscribe((res) => {
    this.addcourseService.courseDetails = res as CourseDetails[];
  });
}

  
  goBack() {
    this.router.navigateByUrl('home');
  }

  loginClicked() {
    console.log( 'Buttton clicked');
    this.router.navigateByUrl('login');
  }

  // articleClicked() {
  //   console.log( 'Buttton clicked');
  //   this.router.navigateByUrl('articles');
  // }
  coursesClicked() {
    console.log( 'Buttton clicked');
    this.router.navigateByUrl('courses');
  }  





}
