import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChilTwoComponent } from './home-chil-two.component';

describe('HomeChilTwoComponent', () => {
  let component: HomeChilTwoComponent;
  let fixture: ComponentFixture<HomeChilTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeChilTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeChilTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
