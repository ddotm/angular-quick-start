import {AbstractControl, FormGroup, ValidatorFn} from '@angular/forms';
import _ from 'lodash';

export class CustomValidators {

  public static requiredIf(form: FormGroup, controlName: string, value: any): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let error = null;
      if (control.parent.dirty === false || CustomValidators.valueProvided(control.value)) {
        return error;
      }

      if (form.controls[controlName].value === value) {
        error = {requiredIf: true};
      }

      return error;
    };
  }

  private static valueProvided(val: any): boolean {
    if (_.isNumber(val) && val !== 0) {
      return true;
    }
    if (_.isBoolean(val) && !_.isNull(val)) {
      return true;
    }
    if (_.isDate(val)) {
      return true;
    }

    return !_.isEmpty(val);
  }
}
