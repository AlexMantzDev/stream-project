import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityProfileComponent } from './community-profile.component';

describe('CommunityProfileComponent', () => {
  let component: CommunityProfileComponent;
  let fixture: ComponentFixture<CommunityProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommunityProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
