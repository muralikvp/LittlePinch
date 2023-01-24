import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotColdObserComponent } from './hot-cold-obser.component';

describe('HotColdObserComponent', () => {
  let component: HotColdObserComponent;
  let fixture: ComponentFixture<HotColdObserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotColdObserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotColdObserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
