import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly email = 'admin@test.com';
  private readonly password = 'password';

  constructor() {}

  authenticate(email: string, password: string): boolean {
    if (!email || !password) {
      return false;
    }

    return email === this.email && password === this.password;
  }
}
