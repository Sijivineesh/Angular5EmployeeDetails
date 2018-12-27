import {Directive, Input} from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
 @Directive({
    selector : '[appConfirmValidator]',
    providers : [{
        provide : NG_VALIDATORS,
        useExisting: ConfirmEqualValidator,
        multi : true
    }]

})
export class ConfirmEqualValidator implements Validator {
@Input() appConfirmValidator: string;
validate (control: AbstractControl): {[key: string]: any}| null {
   const controlcompare  = control.parent.get(this.appConfirmValidator);
   if (controlcompare && controlcompare.value !== control.value) {
       return {'notEqual' : true};
   }
   return null;
}
}

