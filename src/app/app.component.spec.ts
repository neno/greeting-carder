import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'app' title`, () => {
    expect(component.title).toEqual('app');
  });

  it('should render title', () => {
    const h1Element = fixture.debugElement.query(
      By.css('[data-testid="app-title"]')
    );
    expect(h1Element.nativeElement.textContent).toContain('Hello, app');
  });
});
