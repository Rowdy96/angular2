import { Injectable } from '@angular/core';
import { EmployeModel } from './employe-model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  employee: EmployeModel[]=[];
    constructor() { }
    getEmployeeList()
    {
      return this.employee;   
    }
    pushNewEmployee(employee: EmployeModel){
      this.employee.push(employee);

    }
}
