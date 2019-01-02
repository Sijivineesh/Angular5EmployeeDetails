import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule , Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListemployeesComponent } from './employees/listemployees.component';
import { CreateemployeeComponent } from './createemployee.component';
import {ConfirmEqualValidator} from './Shared/confiem-equl-validayor.directive';
import {SelectRequiredValidatorDirective} from './shared/select-required-validator.directive';
import {EmployeeServices} from './employee.services';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import {CreateEMployeecandeactivate} from './employees/create-employee-can-deactivate-guard service';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import {EmployeeFilter} from './employees/employee-filter.pipe';
const AppRoutes: Routes = [
  {path: 'listemployees', component: ListemployeesComponent},
  {path: 'edit/:id', component: CreateemployeeComponent, canDeactivate: [CreateEMployeecandeactivate] },
  {path: 'employees/:id', component: EmployeeDetailsComponent},
  {path: '', redirectTo: '/listemployees', pathMatch: 'full'}


];
 @NgModule({
  declarations: [
    AppComponent,
    ListemployeesComponent,
    CreateemployeeComponent,
    ConfirmEqualValidator,
    SelectRequiredValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeFilter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [EmployeeServices, CreateEMployeecandeactivate],
  bootstrap: [AppComponent]
})
export class AppModule { }
