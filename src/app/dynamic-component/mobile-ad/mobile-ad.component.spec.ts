import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAdComponent } from './mobile-ad.component';

describe('MobileAdComponent', () => {
  let component: MobileAdComponent;
  let fixture: ComponentFixture<MobileAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileAdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
