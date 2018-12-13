import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundOfSixteenComponent } from './round-of-sixteen.component';

describe('RoundOfSixteenComponent', () => {
  let component: RoundOfSixteenComponent;
  let fixture: ComponentFixture<RoundOfSixteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundOfSixteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundOfSixteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
