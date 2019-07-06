import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelAlertComponent } from './model-alert.component';

describe('ModelAlertComponent', () => {
  let component: ModelAlertComponent;
  let fixture: ComponentFixture<ModelAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
