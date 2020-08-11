import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  registerUser(user: { name: String; username: String; role: String ;email: String; password: String;address: String; phoneNumber:String;  }) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://smsback.herokuapp.com/users/register',user,{headers:headers}).pipe(map((res:any)=>res));
  
  } 
  storeUserData(token: string, user: undefined){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }




  authenticateUser(user: { username: string; password: string; }) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://smsback.herokuapp.com/users/authenticate',user,{headers:headers}).pipe(map((res:any)=>res));
  }

  getProfle(){
    let headers = new HttpHeaders();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('https://smsback.herokuapp.com/users/profile',{headers:headers}).pipe(map((res:any)=>res));
  

  }
  getTProfle(){
    let headers = new HttpHeaders();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('https://smsback.herokuapp.com/users/teachers',{headers:headers}).pipe(map((res:any)=>res));
  

  }

  getAProfle(){
    let headers = new HttpHeaders();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('https://smsback.herokuapp.com/users/admin',{headers:headers}).pipe(map((res:any)=>res));
  

  }
  loadToken(){
const token = localStorage.getItem('id_token');
this.authToken =token;

  }
  logout(){
    this.authToken =null;
    this.user =null;
    
    localStorage.clear();

  }

  


}
