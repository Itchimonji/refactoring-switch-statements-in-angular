import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemingWithSwitchCaseComponent } from './theming-with-switch-case.component';

describe('ThemingWithSwitchCaseComponent', () => {
  let component: ThemingWithSwitchCaseComponent;
  let fixture: ComponentFixture<ThemingWithSwitchCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemingWithSwitchCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemingWithSwitchCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
