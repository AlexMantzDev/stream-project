import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveGroupStreamComponent } from './live-group-stream.component';

describe('LiveGroupStreamComponent', () => {
  let component: LiveGroupStreamComponent;
  let fixture: ComponentFixture<LiveGroupStreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveGroupStreamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiveGroupStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
