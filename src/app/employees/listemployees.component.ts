import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/employee.model';
import { EmployeeServices } from '../employee.services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listemployees',
  templateUrl: './listemployees.component.html',
  styleUrls: ['./listemployees.component.css']
})
export class ListemployeesComponent implements OnInit {
// tslint:disable-next-line:whitespace
employees: Employee [];
filteredEmployee: Employee[];
employeeTodisplay: Employee;
dataFromChild: Employee;
private arrayIndex = 1;
private _searchTerm: string;
get searchTerm(): string {
  return this._searchTerm;
}
set searchTerm(value: string) {
  this._searchTerm = value;
}

  constructor(private _employeservice: EmployeeServices, private _router: Router ) { }

  ngOnInit() {
 this.employees = this._employeservice.getEmployee();
this.employeeTodisplay = this.employees[0];
}
// onClick(employeeId: number) {
// this._router.navigate(['/employees', employeeId]);
// }
// button call from llist html for displaying net employee
/*nextEmployee(): void {
  if (this.arrayIndex <= 2)  {
    this.employeeTodisplay = this.employees[this.arrayIndex];
    this.arrayIndex++;
      } else {
        this.employeeTodisplay = this.employees[0];
      }
}*/
/*
handleNotify(eventdata: Employee) {
 this.dataFromChild = eventdata;
}*/
}
