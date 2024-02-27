import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseStreamsComponent } from './browse-streams.component';

describe('BrowseStreamsComponent', () => {
  let component: BrowseStreamsComponent;
  let fixture: ComponentFixture<BrowseStreamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseStreamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrowseStreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
