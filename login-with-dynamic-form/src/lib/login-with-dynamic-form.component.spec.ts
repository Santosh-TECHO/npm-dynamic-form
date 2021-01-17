import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithDynamicFormComponent } from './login-with-dynamic-form.component';

describe('LoginWithDynamicFormComponent', () => {
  let component: LoginWithDynamicFormComponent;
  let fixture: ComponentFixture<LoginWithDynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginWithDynamicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWithDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
