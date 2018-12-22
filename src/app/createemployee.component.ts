import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from './Models/department.model';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import { container } from '@angular/core/src/render3';
@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {
  dateofbirth: Date = new Date(2018, 0, 30);
  DatepickerConfig: Partial<BsDatepickerConfig>;
department: Department [] = [
  {id: 1, name: 'IT'},
  {id: 2, name: 'Accounting'},
  {id: 3, name: 'HR'},
  {id: 4, name: 'Payroll'}
];
  constructor() {
  // tslint:disable-next-line:max-line-length
  this.DatepickerConfig = Object.assign({}, {containerClass: 'theme-dark-blue', showWeekNumbers: true, minDate: new Date(2018, 11, 31), maxDate: new Date(2018, 12, 2) , dateInputFormat: 'DD/MM/YYYY'});
  }
  ngOnInit() {
  }
  saveEmployee(employeeForm: NgForm): void {
  console.log(employeeForm.value);
}
}
