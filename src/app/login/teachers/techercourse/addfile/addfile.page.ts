import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Files } from '../../../../shaired/files.model';
import { ActivatedRoute} from '@angular/router';
import { FilesJavaForBeginnersService } from '../../../../services/files-java-for-beginners.service';
import { AlertController } from '@ionic/angular';
import {AddcourseService} from '../../../../services/addcourse.service'

declare var N: any;

const uri = 'https://smsback.herokuapp.com/java_files';

@Component({
  selector: 'app-addfile',
  templateUrl: './addfile.page.html',
  styleUrls: ['./addfile.page.scss'],
  providers: [ FilesJavaForBeginnersService ]
})
export class AddfilePage implements OnInit {
 
fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  
  course: string ;
  user = JSON.parse(localStorage.getItem("user")); 

  
  
  
  
  
  constructor(public alertController: AlertController,private addcourseService: AddcourseService,private http: HttpClient, private fileService: FilesJavaForBeginnersService, private route: ActivatedRoute ) { 
    let sstring = this.route.snapshot.paramMap.get('file_course');
      this.course = sstring;
      console.log(sstring); 
  }
  ngOnInit() {
    let sstring = this.route.snapshot.paramMap.get('file_course');
    this.course = sstring;
    console.log(sstring); 
    this.refreshFilesList();
  
  }
  
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
        formData.append('course', this.course);
        formData.append('file', this.fileData);
        formData.append('username', this.user.username);
    
        this.http.post(uri, formData)
          .subscribe(async res => {
            this.refreshFilesList();
            console.log(res);
            const alert = await this.alertController.create({
              header: 'Alert',
              
              message: 'File uploaded successfully',
              buttons: ['OK']
            });
        
            await alert.present();

            //alert('File uploaded successfully.');
            this.removePreview();
          });
        
  }
  async onDelete(_id: string)  {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure to delete this file ?',
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.fileService.deleteFile(_id).subscribe(async () => {
              this.refreshFilesList();
              
            });
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Cancel',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }



   
  
  refreshFilesList() {
    this.fileService.getJavaFileListByUsernameandCourse(this.course, this.user.username).subscribe((res) => {
      this.fileService.files = res as Files[];
    });
  }
  
    
  }