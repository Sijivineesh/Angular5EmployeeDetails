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
    department: '3',
    isactive: true,
    photopath: 'assets/images/th (1).jpg',
    password: 'admin',
    confirmpassword: 'admin'
  },
  {
    id: 2,
    name: 'mark',
    gender: 'male',
    contactpreference: 'Email',
    email: 's@gmail.com',
    dateofbirth: new Date('10/3/2018'),
    department: '1',
    isactive: true,
    photopath: 'assets/images/th (3).jpg',
    password: 'admin',
    confirmpassword: 'admin'
  },
  {
    id: 3,
    name: 'jacob',
    gender: 'male',
    contactpreference: 'Email',
    email: 'j@gmail.com',
    dateofbirth: new Date('10/3/2018'),
    department: '2',
    isactive: true,
    photopath: 'assets/images/th (2).jpg',
    password: 'admin',
    confirmpassword: 'admin'
  }

];


getEmployee(): Employee[] {
    return this.listemployees;
}

getEmployeeByID(id: number): Employee {
  return this.listemployees.find(e =>  e.id === id);
}
    save(employee: Employee ) {
      this.listemployees.push(employee);
    }

}
