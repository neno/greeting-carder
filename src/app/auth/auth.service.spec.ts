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

  it('should authenticate if correct email and password are provided', () => {
    const result = service.authenticate('admin@test.com', 'password');
    expect(result).toBe(true);
  });

  it('should not authenticate if incorrect email and password are provided', () => {
    const result1 = service.authenticate('user@test.com', 'wrongpassword');
    expect(result1).toBe(false);

    const result2 = service.authenticate('user@test.com', 'password');
    expect(result2).toBe(false);

    const result3 = service.authenticate('admin@test.com', 'wrongpassword');
    expect(result3).toBe(false);
  })
});
