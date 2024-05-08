import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TNPLComponent } from './tnpl.component';

describe('TNPLComponent', () => {
  let component: TNPLComponent;
  let fixture: ComponentFixture<TNPLComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TNPLComponent]
    });
    fixture = TestBed.createComponent(TNPLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
