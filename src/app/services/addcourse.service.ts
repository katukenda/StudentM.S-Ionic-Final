import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule,HttpHeaders} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import {map} from 'rxjs/operators';
import {CourseDetails} from '../shaired/course-details.model'

@Injectable({
  providedIn: 'root'  
})
export class AddcourseService {
  [x: string]: any;


  selectedCoursedetails: CourseDetails;
 
  
  readonly baseURL = 'https://smsback.herokuapp.com/courses';
  courseDetails: CourseDetails[];
  constructor(private http: HttpClient,private jwtHelper: JwtHelperService) { }


  postcourseDetails(cd: { 
    course: String;
    duartion: String;
    regfee: String;
    totfee: String;
    insfee: String;
    dayandtime: String;
    sdate: String;
    edate: String;
    }) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.baseURL, cd);

  } 

 
  putcourseDetails(cd: CourseDetails) {
    return this.http.put(this.baseURL + `/${cd._id}`, cd);
  }
  getcourseDetailsList(course) {
    return this.http.get(this.baseURL + `/` + course); 
    }

    deleteCourse(course) {
      return this.http.delete(this.baseURL + `/` + course);
    }
    getcourseDetailsFullList() {
      return this.http.get(this.baseURL); 
      }
}
