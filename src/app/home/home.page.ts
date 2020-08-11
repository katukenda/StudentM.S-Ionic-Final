import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router) {

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
