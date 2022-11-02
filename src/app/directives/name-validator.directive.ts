import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

@Directive({
  selector: '[appNameValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NameValidatorDirective,
      multi: true,
    },
  ],
})
export class NameValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return nameValidator(
      new RegExp('^[^0-9(){}*&.,^%$?<>#@\\\\;\\[\\]!-:|=_+№]+$')
    )(control);
  }
}
export const nameValidator =
  (nameRe: RegExp): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    const matching = nameRe.test(control.value);
    return matching ? null : { nameValid: { value: 'Name not valid' } };
  };
