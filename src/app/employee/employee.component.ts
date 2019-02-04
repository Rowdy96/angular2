import { Component, OnInit } from '@angular/core';
import {EmployeModel} from '../employe-model';
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  Qualifications: string[];
  Experiences: string[];
  Languages: string[];
  model = new EmployeModel();
  listOfEmployees: EmployeModel[] = [];
  constructor(private employeeService: EmployeeServiceService,
    private router:Router) { }
  ngOnInit() {
    this.Qualifications =['12th','B.tech','M.tech','PHD'];
    this.Experiences =['intern','1 year','2 year','3 year'];
    this.Languages =['C/C++','Java','C#','PHP','Python'];

  }
  send() {
    this.employeeService.pushNewEmployee(this.model);
    this.router.navigate(['/list']);
  }
}
