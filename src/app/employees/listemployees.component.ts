import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/employee.model';
import { EmployeeServices } from '../employee.services';


@Component({
  selector: 'app-listemployees',
  templateUrl: './listemployees.component.html',
  styleUrls: ['./listemployees.component.css']
})
export class ListemployeesComponent implements OnInit {
// tslint:disable-next-line:whitespace
employees: Employee [];

  constructor(private _employeservice: EmployeeServices) { }

  ngOnInit() {
 this.employees = this._employeservice.getEmployee();
  }

}
