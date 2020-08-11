import { Component, OnInit } from '@angular/core';
import { AdminUserControlService } from '../../../services/admin-user-control.service';
import { Router} from '@angular/router';
import { CourseDetails} from '../../../shaired/course-details.model';
import {AddcourseService} from '../../../services/addcourse.service'

@Component({
  selector: 'app-techercourse',
  templateUrl: './techercourse.page.html',
  styleUrls: ['./techercourse.page.scss'],
})
export class TechercoursePage implements OnInit {
  user = JSON.parse(localStorage.getItem("user")); 

  course : '';
  courses : any;

  constructor( private addcourseService: AddcourseService,
    private adminService: AdminUserControlService,
    private router: Router,) 
    { 
      this.getCourse(); 
    }

  ngOnInit() {
  }

  
  getCourse(){
    this.adminService.getCoursesofTeacher(this.user.username)
.subscribe((res)=>{
    this.courses = res;
    console.log(this.courses);
});  }

onSelect(item){
  this.router.navigateByUrl('/techercourse/'+ item);

}
}
