import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KKRComponent } from './kkr.component';

describe('KKRComponent', () => {
  let component: KKRComponent;
  let fixture: ComponentFixture<KKRComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KKRComponent]
    });
    fixture = TestBed.createComponent(KKRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
