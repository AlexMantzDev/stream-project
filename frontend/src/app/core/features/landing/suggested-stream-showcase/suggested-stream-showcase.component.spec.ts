import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedStreamShowcaseComponent } from './suggested-stream-showcase.component';

describe('SuggestedStreamShowcaseComponent', () => {
  let component: SuggestedStreamShowcaseComponent;
  let fixture: ComponentFixture<SuggestedStreamShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggestedStreamShowcaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuggestedStreamShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
