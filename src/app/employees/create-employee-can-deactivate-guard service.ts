import { CanDeactivate } from '@angular/router';
import { CreateemployeeComponent } from '../createemployee.component';
import { Injectable } from '@angular/core';

@Injectable()
export class CreateEMployeecandeactivate implements CanDeactivate<CreateemployeeComponent> {
    canDeactivate(component: CreateemployeeComponent): boolean {
      if (component.CreateEmployeeForm.dirty) {
          return confirm('Are u sure?');
      }
            return true;
    }
}
