import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncExComponent } from './async-ex.component';

describe('AsyncExComponent', () => {
  let component: AsyncExComponent;
  let fixture: ComponentFixture<AsyncExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
