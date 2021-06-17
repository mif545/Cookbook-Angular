import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeatailsRComponent } from './deatails-r.component';

describe('DeatailsRComponent', () => {
  let component: DeatailsRComponent;
  let fixture: ComponentFixture<DeatailsRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeatailsRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeatailsRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
