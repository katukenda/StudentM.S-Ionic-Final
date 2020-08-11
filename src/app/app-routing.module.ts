import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'articles', loadChildren: './articles/articles.module#ArticlesPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'courses', loadChildren: './courses/courses.module#CoursesPageModule' },
  { path: 'profile', loadChildren: './login/profile/profile.module#ProfilePageModule' },
  { path: 'teachers', loadChildren: './login/teachers/teachers.module#TeachersPageModule' },
  { path: 'admin', loadChildren: './login/admin/admin.module#AdminPageModule' },
  { path: 'notification', loadChildren: './login/profile/notification/notification.module#NotificationPageModule' },
  { path: 'chatgroup', loadChildren: './login/profile/chatgroup/chatgroup.module#ChatgroupPageModule' },
  { path: 'enroll', loadChildren: './login/enroll/enroll.module#EnrollPageModule' },
  { path: 'coursedetails', loadChildren: './login/admin/coursedetails/coursedetails.module#CoursedetailsPageModule' },
  { path: 'addcourse', loadChildren: './login/admin/coursedetails/addcourse/addcourse.module#AddcoursePageModule' },
  { path: 'attendence', loadChildren: './login/admin/attendence/attendence.module#AttendencePageModule' },
  { path: 'exammarks', loadChildren: './login/admin/exammarks/exammarks.module#ExammarksPageModule' },
  { path: 'teassign', loadChildren: './login/admin/teassign/teassign.module#TeassignPageModule' },
  { path: 'unregteacher', loadChildren: './login/admin/unregteacher/unregteacher.module#UnregteacherPageModule' },
  { path: 'unregstedent', loadChildren: './login/admin/unregstedent/unregstedent.module#UnregstedentPageModule' },

 
 
 
 
 {path: 'techercourse', children: [
     {
       path:'',
       loadChildren: './login/teachers/techercourse/techercourse.module#TechercoursePageModule'
     },
     {
       path: ':file_course',
       loadChildren: './login/teachers/techercourse/addfile/addfile.module#AddfilePageModule'
     }
     
   ]},
  






   { path: 'addnotifi', loadChildren: './login/addnotifi/addnotifi.module#AddnotifiPageModule' },
  
  
   
 
   {path: 'mycourse', children: [
   {
   path:'',
   loadChildren: './login/profile/mycourse/mycourse.module#MycoursePageModule' 
  },

  {
    path: ':file_course',
    loadChildren: './login/profile/mycourse/veiwfiles/veiwfiles.module#VeiwfilesPageModule'
  },
  {
    path: ':course/:pay_course',
    loadChildren: './login/profile/mycourse/payments/payments.module#PaymentsPageModule' 
  }

   ]},
  
 { path: 'stuenroll', loadChildren: './login/admin/stuenroll/stuenroll.module#StuenrollPageModule' },
  { path: 'regstudent', loadChildren: './login/admin/regstudent/regstudent.module#RegstudentPageModule' },
  { path: 'paymentcheck', loadChildren: './login/admin/paymentcheck/paymentcheck.module#PaymentcheckPageModule' },
  { path: 'attendence', loadChildren: './login/profile/mycourse/attendence/attendence.module#AttendencePageModule' },
 // { path: 'payments', loadChildren: './login/profile/mycourse/payents/payments.module#PaymentsPageModule' },
  
];  
   
@NgModule({   
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
