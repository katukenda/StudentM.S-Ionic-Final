import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VeiwfilesPage } from './veiwfiles.page';

const routes: Routes = [
  {
    path: '',
    component: VeiwfilesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VeiwfilesPage]
})
export class VeiwfilesPageModule {}
