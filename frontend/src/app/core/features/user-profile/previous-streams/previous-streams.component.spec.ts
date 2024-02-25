import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousStreamsComponent } from './previous-streams.component';

describe('PreviousStreamsComponent', () => {
  let component: PreviousStreamsComponent;
  let fixture: ComponentFixture<PreviousStreamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviousStreamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreviousStreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
