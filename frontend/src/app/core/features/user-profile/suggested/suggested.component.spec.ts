import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedComponent } from './suggested.component';

describe('SuggestedComponent', () => {
  let component: SuggestedComponent;
  let fixture: ComponentFixture<SuggestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggestedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuggestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
