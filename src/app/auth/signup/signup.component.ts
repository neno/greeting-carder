import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { passwordMatchValidator } from 'src/app/lib/password-match.validator';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  isSubmitted = false;

  signupForm = this.fb.nonNullable.group(
    {
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(100),
        ],
      ],
      confirmPassword: ['', Validators.required],
    },

    { validators: passwordMatchValidator }
  );

  get name() {
    return this.signupForm.controls['name'];
  }

  get email() {
    return this.signupForm.controls['email'];
  }

  get password() {
    return this.signupForm.controls['password'];
  }

  get confirmPassword() {
    return this.signupForm.controls['confirmPassword'];
  }

  log() {
    console.log('singup', this.signupForm);
  }

  onSubmit() {
    console.log(
      'onSubmit',
      this.signupForm.valid,
      this.signupForm.getRawValue()
    );
    if (this.signupForm.valid) {
      this.isSubmitted = true;
      this.authService.signup(this.signupForm.getRawValue());
    }
  }
}
