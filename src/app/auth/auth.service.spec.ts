import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not authenticate if no email and password are provided', () => {
    const result = service.authenticate('', '');
    expect(result).toBe(false);
  });

  it('should authenticate if email is "admin@test.com" and password is "password"', () => {
    const result = service.authenticate('admin@test.com', 'password');
    expect(result).toBe(true);
  });
});
