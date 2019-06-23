import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoafersComponent } from './loafers.component';

describe('LoafersComponent', () => {
  let component: LoafersComponent;
  let fixture: ComponentFixture<LoafersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoafersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoafersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
