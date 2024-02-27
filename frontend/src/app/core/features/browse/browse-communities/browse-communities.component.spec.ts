import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseCommunitiesComponent } from './browse-communities.component';

describe('BrowseCommunitiesComponent', () => {
  let component: BrowseCommunitiesComponent;
  let fixture: ComponentFixture<BrowseCommunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseCommunitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrowseCommunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
