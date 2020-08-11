import { Injectable } from '@angular/core';

import { Observable, Subscriber } from 'rxjs';

import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
 

  constructor(private http: HttpClient) {  
  
  }


  getChatByRoom(room) {
    return new Promise((resolve, reject) => {
      this.http.get('https://smsback.herokuapp.com/chat/' + room)
        //.map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

    

  saveChat(data) {
    return new Promise((resolve, reject) => {
        this.http.post('https://smsback.herokuapp.com/chat', data)
      
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }


getUsersByRoom(room,username) {
  return new Promise((resolve, reject) => {
    this.http.get('https://smsback.herokuapp.com/student_enrollments/' + room +'/'+username)
      //.map(res => res.json())
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}

getchatgroups(){
  return new Promise((resolve, reject) => {
    this.http.get('https://smsback.herokuapp.com/courses')
      //.map(res => res.json())
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
} 




}