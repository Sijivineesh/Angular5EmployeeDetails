import { Component, OnInit, Input, SimpleChanges, OnChanges, SimpleChange, EventEmitter, Output } from '@angular/core';
import {Employee} from '../Models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit , OnChanges {
@Input() employee: Employee;
@Input() searchTerm: string;
private _SelectEmployeeId: number;
// @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee >();
  constructor( private _route: ActivatedRoute, private _Router: Router) { }

  ngOnInit() {
    this._SelectEmployeeId = +this._route.snapshot.paramMap.get('id');
  }
  // proprty setter display previous value in console(deveoper tool)
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);

  }
  /* pass data to parent
  passchild(): void {
    this.notify.emit(this.employee);

  }*/
getempNameandGender(): string {
  return this.employee.name + ' ' + this.employee.gender;
}
viewEmpoly() {
      this._Router.navigate(['/employees', this.employee.id], {
        queryParams: {'searchTerm': this.searchTerm}
      });
}
editEmp() {
  this._Router.navigate(['/edit', this.employee.id]);
}
}

