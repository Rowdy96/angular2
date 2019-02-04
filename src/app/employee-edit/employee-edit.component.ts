import { Component, OnInit } from '@angular/core';
import { EmployeModel } from '../employe-model';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  Employee:EmployeModel[];
  constructor(private service: EmployeeServiceService) {
    this.Employee = service.getEmployeeList();
   }
 

  ngOnInit() {
  }

}
