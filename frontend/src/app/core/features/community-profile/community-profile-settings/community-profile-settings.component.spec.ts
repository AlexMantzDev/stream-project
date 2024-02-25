import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityProfileSettingsComponent } from './community-profile-settings.component';

describe('CommunityProfileSettingsComponent', () => {
  let component: CommunityProfileSettingsComponent;
  let fixture: ComponentFixture<CommunityProfileSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityProfileSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommunityProfileSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
