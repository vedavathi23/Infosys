import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentQualificationComponent } from './student-qualification/student-qualification.component';
import { StudentSubjectsComponent } from './student-subjects/student-subjects.component';


const routes: Routes = [{path:'',component:StudentDetailsComponent},
                        {path:'details',component:StudentDetailsComponent},
                        {path:'qualification',component:StudentQualificationComponent},
                        {path:'subjects',component:StudentSubjectsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
