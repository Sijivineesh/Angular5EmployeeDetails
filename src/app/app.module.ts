import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule , Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListemployeesComponent } from './employees/listemployees.component';
import { CreateemployeeComponent } from './createemployee.component';

const AppRoutes: Routes = [
  {path: 'listemployees', component: ListemployeesComponent},
  {path: 'createemployee', component: CreateemployeeComponent},
  {path: '', redirectTo: '/listemployees', pathMatch: 'full'}


];
 @NgModule({
  declarations: [
    AppComponent,
    ListemployeesComponent,
    CreateemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
