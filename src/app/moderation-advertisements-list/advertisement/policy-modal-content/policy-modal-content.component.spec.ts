import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyModalContentComponent } from './policy-modal-content.component';

describe('PolicyModalContentComponent', () => {
  let component: PolicyModalContentComponent;
  let fixture: ComponentFixture<PolicyModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PolicyModalContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
