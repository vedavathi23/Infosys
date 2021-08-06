import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../models/student.model';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  student:Student
  studentForm: FormGroup;
  isSubmitted: boolean=false;
  data : any;
  constructor(private formBuilder:FormBuilder,private router:Router,private studentService:StudentService) { }

  ngOnInit() {
    this.studentForm = this.formBuilder.group({
      studentName: new FormControl(""),
      rollNo: new FormControl(""),
      address: new FormControl("")
    });
  }
  goToNext(){
    this.router.navigate(['qualification'])
  }

  get diagonastics(){
    return JSON.stringify(this.studentForm.value);
  }
 
  get studentName(){
    return this.studentForm.get("studentName");
  }
 
  get rollNo(){
    return this.studentForm.get("rollNo");
  }
 
  get address(){
    return this.studentForm.get("address");
  }
  onSave(){
// this.studentService.addDetails(this.studentForm.value).subscribe(response=>{
//   console.log(this.studentForm.value)
//   this.student=response
//   console.log(this.student)
//   this.router.navigate(['qualification'])
// })
//   }
this.data = this.diagonastics;
this.studentService.send(this.data);
console.log(this.data)
alert("Data saved successfully")
this.router.navigate(['qualification'])
  }
}
