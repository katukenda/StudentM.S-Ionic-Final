import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {ToastController} from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
declare var N: any;
import { Profile } from '../../shaired/profile.model';
import { AlertController } from '@ionic/angular';
import { ProfileService } from '../../services/profile.service';

const uri = 'https://smsback.herokuapp.com/profile';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  providers: [ ProfileService ]
})
export class ProfilePage implements OnInit {
  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  thumbnail: any;

  imageURL='';

  user = JSON.parse(localStorage.getItem("user")); 
 
student=this.user;


  constructor(public alertController: AlertController,private http: HttpClient, private profileService: ProfileService,private router: Router, private authService: AuthService) {}
  
  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
}
preview() {
  // Show preview 
  var mimeType = this.fileData.type;
  if (mimeType.match(/image\/*/) == null) {
    
  
    return;
  
  }
  
  var reader = new FileReader();      
  reader.readAsDataURL(this.fileData); 
  reader.onload = (_event) => { 
    this.previewUrl = reader.result; 
  }
}

removePreview() {
  
  this.previewUrl = null; 
 
}

onSubmit() {
  const formData = new FormData();
    formData.append('username', this.user.username);
    formData.append('file', this.fileData);
    this.http.post(uri, formData)
      .subscribe(res => {
        
        console.log(res);
        alert('Profile picture uploaded successfully.');
        this.removePreview();
      });
    
}


  ngOnInit() {
    this.refreshProfileImage();

    this.authService.getProfle().subscribe(profile =>{
      this.user =profile.user;
    },
    err => {
      console.log(err);
      return false;
    }
    );
  }

  refreshProfileImage() {
    this.profileService.getProfileImage(this.user.username).subscribe((res) => {
      this.profileService.image = res as Profile[];
      this.imageURL="../../../../Backend/"+"profileService.image.imagepath";
    });
  }


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
            console.log('Confirm Ok');
            this.router.navigateByUrl('home');
          }
        }
      ]
    });

    await alert.present();
  }

}