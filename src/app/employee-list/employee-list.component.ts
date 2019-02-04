import { Component } from '@angular/core';
import { EmployeModel } from '../employe-model';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent  {

  Employee: EmployeModel[] = [];
  constructor(private employeeService: EmployeeServiceService){
    this.Employee = employeeService.getEmployeeList();
  }

}
