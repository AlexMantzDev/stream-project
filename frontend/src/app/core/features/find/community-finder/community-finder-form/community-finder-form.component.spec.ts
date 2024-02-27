import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityFinderFormComponent } from './community-finder-form.component';

describe('CommunityFinderFormComponent', () => {
  let component: CommunityFinderFormComponent;
  let fixture: ComponentFixture<CommunityFinderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityFinderFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommunityFinderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
