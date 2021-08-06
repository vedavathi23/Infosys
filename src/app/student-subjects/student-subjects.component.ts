import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-subjects',
  templateUrl: './student-subjects.component.html',
  styleUrls: ['./student-subjects.component.css']
})
export class StudentSubjectsComponent implements OnInit {
  selectedItemsList = [];
  checkboxesDataList = [
    {
  
      label: 'Angular',
      isChecked: false
    },
    {
      
      label: 'Java',
      isChecked: false
    },
    {
     
      label: 'Python',
      isChecked: false
    },
   
  ]

  durationDataList = [
    {
      
      month: '6 Months',
      isCheckedDur: false
    },
    {
     
      month: '9 Months',
      isCheckedDur: false
    },
    {
     
      month: '12 Months',
      isCheckedDur: false
    },
   
  ]
  studentForm: FormGroup;
  isSubmitted: boolean=false;
  selectedDurationList= [];
  subscription: Subscription;
  data:any;
  id: any;
  datSel: { label: any[]; month: any[]; };
  dataPrev: string;
  constructor(private formBuilder:FormBuilder,private router:Router,private svc:StudentService) { }

  ngOnInit():void {
    this.studentForm = this.formBuilder.group({
      label: new FormControl(""),
      month:new FormControl("")
    });
    // this.fetchSelectedItems()
  }
  goBack(){
    this.router.navigate(['qualification'])
  }
  changeSelection(){
    console.log("clicked")
    this.fetchSelectedItems()
    
  }

  changeduration(){
    this.fetchDuration()
  }
  fetchSelectedItems() {
    this.selectedItemsList = this.checkboxesDataList.filter((value, index) => {
      console.log(index)
      return value.isChecked
    });
    console.log(this.selectedItemsList)
  }
  fetchDuration() {
    this.selectedDurationList = this.durationDataList.filter((value, index) => {
      console.log(index)
      return value.isCheckedDur
    });
    console.log(this.selectedItemsList)
  }

  get diagonastics(){
    return JSON.stringify(this.datSel=({
      "label":this.selectedItemsList,
      "month":this.selectedDurationList,
      // "isChecked":this.selectedQual,
      // "month":this.selectedQual,
    })
    )
  }
 
  get label(){
    return this.selectedItemsList
  }
 
  get month(){
    return this.selectedDurationList
  }



  onSave(){
    this.subscription =  this.svc.subj$.subscribe(value=>{
      console.log("received");
      this.dataPrev=value;
      console.log(this.dataPrev)
      });
  

        this.data = this.diagonastics.concat(this.dataPrev);
        this.svc.send(this.data);
        console.log(this.data)

        // this.svc.saveSubjects(this.data).subscribe(response=>{
        //   alert("All data saved successfully")
       
        //   // this.router.navigate(['subjects'])
        // })
          }
          
    
}
