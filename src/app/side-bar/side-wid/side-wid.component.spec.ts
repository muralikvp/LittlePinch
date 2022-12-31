import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideWidComponent } from './side-wid.component';

describe('SideWidComponent', () => {
  let component: SideWidComponent;
  let fixture: ComponentFixture<SideWidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideWidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideWidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
