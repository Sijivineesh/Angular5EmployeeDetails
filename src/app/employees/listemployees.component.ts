import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/employee.model';

@Component({
  selector: 'app-listemployees',
  templateUrl: './listemployees.component.html',
  styleUrls: ['./listemployees.component.css']
})
export class ListemployeesComponent implements OnInit {
// tslint:disable-next-line:whitespace
employees: Employee []=  [

  {
    id: 1,
    name: 'luke',
    gender: 'male',
    contactpreference: 'Email',
    email: 'l@gmail.com',
    dateofbirth: new Date('10/3/2018'),
    department: 'IT',
    isactive: true,
    photopath: 'assets/images/th (1).jpg'
  },
  {
    id: 1,
    name: 'mark',
    gender: 'male',
    contactpreference: 'Email',
    email: 's@gmail.com',
    dateofbirth: new Date('10/3/2018'),
    department: 'IT',
    isactive: true,
    photopath: 'assets/images/th (3).jpg'
  },
  {
    id: 1,
    name: 'jacob',
    gender: 'male',
    contactpreference: 'Email',
    email: 'j@gmail.com',
    dateofbirth: new Date('10/3/2018'),
    department: 'IT',
    isactive: true,
    photopath: 'assets/images/th (2).jpg'
  }
];
  constructor() { }

  ngOnInit() {
  }

}
