import {Injectable} from '@angular/core';
import {Employee} from './Models/employee.model';

@Injectable()
export class EmployeeServices {
private listemployees: Employee[] = [
  {
    id: 1,
    name: 'luke',
    gender: 'male',
    contactpreference: 'Email',
    email: 'l@gmail.com',
    dateofbirth: new Date('10/3/2018'),
    department: 'IT',
    isactive: true,
    photopath: 'assets/images/th (1).jpg',
    password: 'admin',
    confirmpassword: 'admin'
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
    photopath: 'assets/images/th (3).jpg',
    password: 'admin',
    confirmpassword: 'admin'
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
    photopath: 'assets/images/th (2).jpg',
    password: 'admin',
    confirmpassword: 'admin'
  }

];


getEmployee(): Employee[] {
    return this.listemployees;
}
}
