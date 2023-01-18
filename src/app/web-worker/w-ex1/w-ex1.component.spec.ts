import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WEx1Component } from './w-ex1.component';

describe('WEx1Component', () => {
  let component: WEx1Component;
  let fixture: ComponentFixture<WEx1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WEx1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WEx1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
