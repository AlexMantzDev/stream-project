import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityFinderComponent } from './community-finder.component';

describe('CommunityFinderComponent', () => {
  let component: CommunityFinderComponent;
  let fixture: ComponentFixture<CommunityFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityFinderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommunityFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
