import { keyframes } from '@angular/animations';
import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GenQual } from '../models/student.model';
// import { GenQual } from '../models/qualification.model';


import { StudentService } from '../services/student.service';
export interface Gender{
  value:number,
  gender:string,
  
}
export interface Qualification{
  value:number,
  qf:string,
  
}
@Component({
  selector: 'app-student-qualification',
  templateUrl: './student-qualification.component.html',
  styleUrls: ['./student-qualification.component.css']
})
export class StudentQualificationComponent implements OnInit {
genderList:Gender[]=[
  {value:1,gender:"Male"},
  {value:2,gender:"Female"}
]

qualificationList:Qualification[]=[
  {value:1,qf:"10th"},
  {value:2,qf:"12th"},
  {value:1,qf:"Graduation"},
  {value:2,qf:"Postgraduation"},
]

genQual:GenQual
selectedGender:any
  studentForm: FormGroup;
  isSubmitted: boolean=false;
  selectedQual: any;
  id: any;
  subscription: Subscription;
  data:any;
  dataPrev: string;
  datSel: { gender: any; qf: any; };
  constructor(private formBuilder:FormBuilder,private router:Router,private qualificationService:StudentService) { }

  ngOnInit() {
    this.studentForm = this.formBuilder.group({
      gender: new FormControl(""),
      qf: new FormControl("")
    });
   
  }
  goBack(){
    this.router.navigate(['details'])
  }
  goToNext(){
    this.router.navigate(['subjects'])
  }

  selectGender(event){
    this.selectedGender = event.target.value;
  }
  selectQualification(event){
    this.selectedQual = event.target.value;
  }

  get diagonastics(){
    return JSON.stringify(this.datSel=({
      "gender":this.selectedGender,
      "qf":this.selectedQual
    }),this.selectedQual);
  }
 
  get gender(){
    return this.selectedGender
  }
 
  get qualification(){
    return this.selectedQual
  }

  
onSave () {
  
  this.subscription =  this.qualificationService.subj$.subscribe(value=>{
    console.log("received");
    this.dataPrev=value;
    console.log(this.data)
    });

//   //update the ui
  // const payload={
    
    
  //   "gender":this.selectedGender,
  //   "qf":this.selectedQual,
  //   "array":this.data,
  // }
  // console.log(payload)
  // this.qualificationService.addQualification(payload).subscribe(response=>{
  //       console.log(this.studentForm.value)
      
  //       console.log(this.genQual)
  //       // this.router.navigate(['subjects'])
  //     })
  //       }
  this.data = this.diagonastics.concat(this.dataPrev);
this.qualificationService.send(this.data);
console.log(this.data)
alert("Data saved successfully")
this.router.navigate(['subjects'])
  
}
}
