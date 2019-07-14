import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KurtasComponent } from './kurtas.component';

describe('KurtasComponent', () => {
  let component: KurtasComponent;
  let fixture: ComponentFixture<KurtasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KurtasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KurtasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
