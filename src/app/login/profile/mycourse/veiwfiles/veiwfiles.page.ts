import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Files } from '../../../../shaired/files.model';
import { ActivatedRoute} from '@angular/router';
import { FilesJavaForBeginnersService } from '../../../../services/files-java-for-beginners.service';
import {AddcourseService} from '../../../../services/addcourse.service'

declare var N: any;
const uri = 'https://smsback.herokuapp.com/java_files';

@Component({
  selector: 'app-veiwfiles',
  templateUrl: './veiwfiles.page.html',
  styleUrls: ['./veiwfiles.page.scss'],
})
export class VeiwfilesPage implements OnInit {
  user = JSON.parse(localStorage.getItem("user")); 

  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  
  course: string ;

  
  
  
  
  
  constructor(private addcourseService: AddcourseService,private http: HttpClient, private fileService: FilesJavaForBeginnersService, private route: ActivatedRoute ) { 
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
   
 
 
  
   
  
  refreshFilesList() {
    this.fileService.getJavaFileList(this.course).subscribe((res) => {
      this.fileService.files = res as Files[];
    });
  }
  }