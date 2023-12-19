import { Injectable, signal } from '@angular/core';
import { CurrentUser, User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly email = 'admin@test.com';
  private readonly password = 'password';

  private user: User | undefined;
  private _currentUserSig = signal<CurrentUser | undefined | null>(undefined);

  authenticate(email: string, password: string): boolean {
    if (!email || !password) {
      return false;
    }

    return email === this.email && password === this.password;
  }

  signup(formData: User) {
    this.user = formData;
    this._currentUserSig.set({ name: this.user.name, email: this.user.email });
  }

  get currentUser(): CurrentUser | undefined | null {
    return this._currentUserSig();
  }
}
