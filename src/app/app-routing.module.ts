import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';



@NgModule({
  imports: [
    RouterModule.forRoot([
    {path:'', component:EmployeeListComponent},
    {path:'list',component:EmployeeListComponent},
    {path:'add',component:EmployeeComponent},
    {path:'edit',component:EmployeeEditComponent},
    
  ])
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
