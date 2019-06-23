import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoUpComponent } from './go-up.component';

describe('GoUpComponent', () => {
  let component: GoUpComponent;
  let fixture: ComponentFixture<GoUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
