import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from './Models/department.model';
import { Employee } from './Models/employee.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { container } from '@angular/core/src/render3';
import { EmployeeServices } from './employee.services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {
  @ViewChild('employeeForm') public CreateEmployeeForm: NgForm;
  dateofbirth: Date = new Date(2018, 0, 30);
  photoPreview  = false;
  DatepickerConfig: Partial<BsDatepickerConfig>;
  employee: Employee ;
department: Department [] = [
  {id: 1, name: 'IT'},
  {id: 2, name: 'Accounting'},
  {id: 3, name: 'HR'},
  {id: 4, name: 'Payroll'}
];
  constructor(private _employeeservice: EmployeeServices,
              private _routerService: Router, private _route: ActivatedRoute ) {
  // tslint:disable-next-line:max-line-length
  this.DatepickerConfig = Object.assign({}, {containerClass: 'theme-dark-blue', showWeekNumbers: true, minDate: new Date(2018, 11, 31), maxDate: new Date(2018, 12, 2) , dateInputFormat: 'DD/MM/YYYY'});
  }
  togglePreview() {
    this.photoPreview = !this.photoPreview;
  }
  ngOnInit() {
    this._route.paramMap.subscribe(parametrMap => {
   const id = +parametrMap.get('id');
   this.getEmployee(id);
    });
  }
 private getEmployee(id: number) {
if (id === 0) {
  this.employee = {
      id: null,
      name: null,
      gender : null,
      email : '',
      phoneno : null,
      contactpreference: null,
      dateofbirth : null,
        department : null,
      isactive : null,
      photopath  : null,
      confirmpassword : null,
      password : null
    };
  } else {
    this.employee = this._employeeservice.getEmployeeByID(id);
  }
}
  saveEmployee(): void {
    const newEmploy: Employee = Object.assign({}, this.employee);
this._employeeservice.save(newEmploy);
this._routerService.navigate(['listemployees']);
//  to pass value to controls after saving
// this.CreateEmployeeForm.reset({
  // name: 'test name', gender: 'male'
// });
}
}
