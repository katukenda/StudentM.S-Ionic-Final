import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import * as M from '../../../../assets/materialize/materialize/js/materialize.min.js';
import { Course } from 'src/app/shaired/course.model';
import * as io from 'socket.io-client';
import { WebSocketService} from '../../../services/web-socket.service';

import { AlertController } from '@ionic/angular';
declare var N: any;


@Component({
  selector: 'app-chatgroup',
  templateUrl: './chatgroup.page.html',
  styleUrls: ['./chatgroup.page.scss'],

})
export class ChatgroupPage implements OnInit {
  socket = io('https://smsback.herokuapp.com');

  user = JSON.parse(localStorage.getItem('user'));
  
  @ViewChild('content') private content: any;

  message:'';
  room:String;
  
  chats : any;
  check : any;
  chatgroups : any;
  constructor(public alertController: AlertController,private router: Router, private authService: AuthService, private chatService: WebSocketService,private toast: ToastController) { 

    this.socket.on('new-message', (data: any)=>{ 
      //this.chats.push(data);
      this.getChat();
   });
   

  
  }

  ngOnInit() {
    
  // console.log(this.chatgroups);
  this.groups();
    this.scrollToBottomOnInit() ;
    }
    async sendMessge() {
      const toast = await this.toast.create({
        message: 'Message Successfully Sent',
        
        color: 'success',
        duration: 300
      });
      toast.present();
    }

  async presentEnRole() {
    const toast = await this.toast.create({
      message: 'You are not Enrolled',
      
      color: 'danger',
      duration: 3000
    });
    toast.present();
  }
  joinRoom(){
  
    
    this.chatService.getUsersByRoom(this.room,this.user.username).then((data)=>{
     this.check = data;
     console.log(data);
     if(this.check.success){
       this.getChat();
       this.scrollToBottomOnInit();
       {
         
       }
       
     }
     else{
      this.presentEnRole();
      this.chats = null;
    }
      });
      }

      scrollToBottomOnInit() {
        setTimeout(() => {
            if (this.content.scrollToBottom) {
                this.content.scrollToBottom(400);
            }
        }, 500);
    }

 getChat(){
    this.chatService.getChatByRoom(this.room).then((data)=>{
      this.chats = data;
    }, (err)=>{
      console.log(err);
   });
   }
 

groups(){
this.chatService.getchatgroups().then((data)=>{
  this.chatgroups = data;
  console.log(data);
});
}
sendMessage(){
  this.chatService.saveChat({name:this.user.username, room:this.room, message:this.message}).then((result)=>{
  this.socket.emit('save-message', result); 
  this.scrollToBottomOnInit();
  this.sendMessge();
  this.message= null;
  }, (err)=>{
    console.log(err);
 });
}


 


//------------------------------------------------------------------------
  
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
