import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectExComponent } from './subject-ex.component';

describe('SubjectExComponent', () => {
  let component: SubjectExComponent;
  let fixture: ComponentFixture<SubjectExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
