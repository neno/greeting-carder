import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  userCredentials = {
    email: '',
    password: ''
  }

  onSubmit() {
    console.log('submited', this.userCredentials)
  }
}
