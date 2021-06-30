import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';


import { Employee } from './employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee: Employee = {
    _id: '',
    name: '',
    position: '',
    office: '',
    salary: 0
  };
  employees: Employee[] | undefined;
  readonly baseURL= 'http://localhost:3000/employees';

  constructor(public http:HttpClient) { }
  
  postEmployee(emp: Employee){
    return this.http.post(this.baseURL,emp);
  }

  getEmployeeList(){
    return this.http.get(this.baseURL);
  }

  putEmployee(emp: Employee){
    return this.http.put(this.baseURL+ '/${emp._id}',emp);
  }

  deleteEmployee(_id: string){
    return this.http.delete(this.baseURL + '/${_id}');
  }


}
