import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WORLDCUPComponent } from './worldcup.component';

describe('WORLDCUPComponent', () => {
  let component: WORLDCUPComponent;
  let fixture: ComponentFixture<WORLDCUPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WORLDCUPComponent]
    });
    fixture = TestBed.createComponent(WORLDCUPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
