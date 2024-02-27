import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedCategoryShowcaseComponent } from './suggested-category-showcase.component';

describe('SuggestedCategoryShowcaseComponent', () => {
  let component: SuggestedCategoryShowcaseComponent;
  let fixture: ComponentFixture<SuggestedCategoryShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggestedCategoryShowcaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuggestedCategoryShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
