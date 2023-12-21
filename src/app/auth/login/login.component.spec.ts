import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('renders the login form', () => {
    const loginForm = fixture.debugElement.query(
      By.css('[data-testid="login-form"]')
    );
    expect(loginForm.nativeElement).toBeTruthy();
  });

  it('should require email', () => {
    const emailInput = fixture.debugElement.query(
      By.css('[data-testid="email-input"]')
    );
    expect(emailInput).toBeTruthy();
    expect(emailInput.nativeElement.getAttribute('required')).toEqual('');
  });

  it('should require password', () => {
    const passwordInput = fixture.debugElement.query(
      By.css('[data-testid="password-input"]')
    );
    expect(passwordInput).toBeTruthy();
    expect(passwordInput.nativeElement.getAttribute('required')).toEqual('');
  });

  it('should disable submit button when form is invalid', () => {
    fixture.detectChanges();
    const submitButton = fixture.debugElement.query(
      By.css('[data-testid="login-form"] button[type="submit"]')
    );
    expect(submitButton.nativeElement).toBeTruthy();
    expect(submitButton.nativeElement.disabled).toBeTruthy();
  });

  // TODO: Test for error messages

  it('should enable submit button when form is valid', waitForAsync(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const emailInput = fixture.debugElement.query(
        By.css('[data-testid="email-input"]')
      );
      const passwordInput = fixture.debugElement.query(
        By.css('[data-testid="password-input"]')
      );

      emailInput.nativeElement.value = 'johndoe@test.com';
      passwordInput.nativeElement.value = 'administrator';

      emailInput.nativeElement.dispatchEvent(new Event('input'));
      passwordInput.nativeElement.dispatchEvent(new Event('input'));

      fixture.detectChanges();

      const submitButton = fixture.debugElement.query(
        By.css('[data-testid="login-form"] button[type="submit"]')
      );
      expect(submitButton.nativeElement).toBeTruthy();
      expect(submitButton.nativeElement.disabled).toBeFalsy();
    });
  }));
});
