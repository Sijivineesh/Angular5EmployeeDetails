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
        validate (passwordGroup: AbstractControl): {[key: string]: any}| null {
       const controlcomparepassword  = passwordGroup.get('password');
       const controlcompareconfirmpassword = passwordGroup.get('confirmpassword');
       // tslint:disable-next-line:max-line-length
       if (controlcomparepassword && controlcompareconfirmpassword && controlcomparepassword.value !== controlcompareconfirmpassword.value) {
           return {'notEqual' : true};
       }
       return null;
    }
    }
 // Another way
 /* export class ConfirmEqualValidator implements Validator {
@Input() appConfirmValidator: string;
validate (control: AbstractControl): {[key: string]: any}| null {
   const controlcompare  = control.parent.get(this.appConfirmValidator);
   if (controlcompare && controlcompare.value !== control.value) {
       return {'notEqual' : true};
   }
   return null;
}
}
*/

