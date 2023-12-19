import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const pwControl = control.get('password');
  const confirmControl = control.get('confirmPassword');

  if (!pwControl?.value || !confirmControl?.value) {
    return null;
  }

  return pwControl.valid &&
    confirmControl.valid &&
    pwControl?.value === confirmControl?.value
    ? null
    : { passwordMismatch: true };
};
