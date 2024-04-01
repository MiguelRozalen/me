import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSubSectionComponent } from './right-sub-section.component';

describe('RightSubSectionComponent', () => {
  let component: RightSubSectionComponent;
  let fixture: ComponentFixture<RightSubSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightSubSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RightSubSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
