import { Injectable } from '@angular/core';
import { CurrentUser, User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly email = 'admin@test.com';
  private readonly password = 'password';

  private user: User | undefined;

  constructor() {}

  authenticate(email: string, password: string): boolean {
    if (!email || !password) {
      return false;
    }

    return email === this.email && password === this.password;
  }

  signup(formData: User) {
    this.user = formData;
  }

  get currentUser(): CurrentUser | undefined {
    return this.user
      ? { name: this.user.name, email: this.user.email }
      : undefined;
  }
}
