import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email = '';
  password = '';
  isSubmitted = false;
  isAuthenticated = false;

  authService = inject(AuthService);

  log(loginForm: NgForm) {
    const { form } = loginForm;
    console.log(form);
  }

  onSubmit(loginForm: FormGroup) {
    const { status, value } = loginForm;
    this.isSubmitted = true;

    if (status === 'VALID') {
      const { email, password } = value;
      this.isAuthenticated = this.authService.authenticate(email, password);
    }
  }
}
