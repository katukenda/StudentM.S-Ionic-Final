import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


import { Attendance } from '../shaired/attendance.model';
import { Course } from '../shaired/course.model';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  selectedAttendance: Attendance;
  attendances: Attendance[];

  selectedCourses: Course;
  courses: Course[];
  
  readonly baseURL = 'https://smsback.herokuapp.com/attendance_management'; //backend 

  constructor(private http : HttpClient) { }

  saveAttendance(data) {
    return new Promise((resolve, reject) => {
        this.http.post(this.baseURL, data)
      
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  

  getStudentAttendanceByusername(username) {
    console.log("getStudentAttendanceByusername"+username);
    return this.http.get(this.baseURL + '/username/' + username); 
  }


  getStudentAttendanceBycoursename(course) {
    return this.http.get(this.baseURL + '/' + course); 
  }

  getStudentListBycoursename(course) {
    return this.http.get(this.baseURL + '/' + course); 
  }

  getattendanceall() {
    return this.http.get(this.baseURL + '/all'); 
  }
  
}
