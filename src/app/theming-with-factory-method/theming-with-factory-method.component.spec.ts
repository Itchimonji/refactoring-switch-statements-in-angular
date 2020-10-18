import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemingWithFactoryMethodComponent } from './theming-with-factory-method.component';

describe('ThemingWithFactoryMethodComponent', () => {
  let component: ThemingWithFactoryMethodComponent;
  let fixture: ComponentFixture<ThemingWithFactoryMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemingWithFactoryMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemingWithFactoryMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
