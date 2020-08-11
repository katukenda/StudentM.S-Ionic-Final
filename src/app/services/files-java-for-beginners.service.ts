import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Files } from '../shaired/files.model';

@Injectable({
  providedIn: 'root'
})
export class FilesJavaForBeginnersService {

  selectedFiles: Files;
  files: Files[];
  
 

  constructor(private http:HttpClient) { }

  getJavaFileList(course) {
    return this.http.get('https://smsback.herokuapp.com/java_files/filenames/' + course);
  }

  getJavaFileListByUsernameandCourse(course, username) {
    return this.http.get('https://smsback.herokuapp.com/java_files/getByUsernameandCourse/' + course + '/' + username);
  }

  deleteFile(_id: string) {
    return this.http.delete('https://smsback.herokuapp.com/java_files' + `/${_id}`);
  }

  deleteFileAll(course){
    return this.http.delete('https://smsback.herokuapp.com/java_files/deleteAll/' + course);
  }

}
