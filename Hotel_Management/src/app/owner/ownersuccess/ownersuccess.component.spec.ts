import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersuccessComponent } from './ownersuccess.component';

describe('OwnersuccessComponent', () => {
  let component: OwnersuccessComponent;
  let fixture: ComponentFixture<OwnersuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnersuccessComponent]
    });
    fixture = TestBed.createComponent(OwnersuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
