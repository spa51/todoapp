import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChilOneComponent } from './home-chil-one.component';

describe('HomeChilOneComponent', () => {
  let component: HomeChilOneComponent;
  let fixture: ComponentFixture<HomeChilOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeChilOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeChilOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
