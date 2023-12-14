import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

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

  credentials = {
    email: '',
    password: '',
  };

  frm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  log(loginForm: NgForm) {
    const { form } = loginForm;
    console.log(form);
  }

  onSubmit({ email, password }: { email: string; password: string }) {
    console.log({ email, password });
  }

  onSubmitBanana() {
    console.log(this.credentials);
  }

  onSubmitReactive() {
    console.log(this.frm);
  }
}
