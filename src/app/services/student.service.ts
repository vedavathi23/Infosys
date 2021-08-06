import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { GenQual } from '../models/qualification.model';
import { GenQual, Student, Subjects } from '../models/student.model';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseUrl = 'http://localhost:3000';
  
  constructor(private http: HttpClient) { }
  
  private sub = new BehaviorSubject("v");
  subj$ = this.sub.asObservable();

    send(value: any) {
    this.sub.next(value);
    console.log(value);
  }
 
  // addQualification(qualification:GenQual){
  //   return this.http.post<GenQual>(this.baseUrl+`/qualificationGender`,qualification)
  // }
  saveSubjects(subject:Subjects){
    return this.http.post<Subjects>(this.baseUrl+`/subjects`,subject)
  }
}
