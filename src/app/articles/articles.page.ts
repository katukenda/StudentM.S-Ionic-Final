import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articles} from './articles.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {
  articles: Articles[] = [
    {
      id: 'a1',
      title: 'Modern Technology1',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsWBcR6K7fFdAv9AncAcNqknlLOPQ_Tbp9F10II_PDm-NUjYDR',
      dicription: ['Artificial Interligence','AAAAAAAAAAAAAA']

    }, {
      id: 'a2',
      title: 'Modern Technology2',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqDXBMBWLjaSmc9-scuV04l_RTPYU5RBEC4yyCptgN8UQAXywE',
      dicription: ['Artificial Interligence2','AAAAAAAAAAAAAA1']

    }];
  constructor(public router: Router) {}

 

  ngOnInit() {}


   
  goBack() {
    this.router.navigateByUrl('home');
  }

  loginClicked() {
    console.log( 'Buttton clicked');
    this.router.navigateByUrl('login');
  }

  // articleClicked() {
  //   console.log( 'Buttton clicked');
  //   this.router.navigateByUrl('articles');
  // }
  coursesClicked() {
    console.log( 'Buttton clicked');
    this.router.navigateByUrl('courses');
  }

}
