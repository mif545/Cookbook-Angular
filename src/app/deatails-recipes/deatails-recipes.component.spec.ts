import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeatailsRecipesComponent } from './deatails-recipes.component';

describe('DeatailsRecipesComponent', () => {
  let component: DeatailsRecipesComponent;
  let fixture: ComponentFixture<DeatailsRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeatailsRecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeatailsRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
