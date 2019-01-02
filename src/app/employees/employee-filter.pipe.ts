import { PipeTransform, Pipe} from '@angular/core';
import { Employee } from '../Models/employee.model';

@Pipe({
    name: 'EmpFilter'
})
export class EmployeeFilter implements PipeTransform {
    transform(emp: Employee[], searchTerm: string): Employee[] {
if ( !emp || !searchTerm) {
    return emp;
}
return emp.filter(e => e.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}
