import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCommunityRolesComponent } from './manage-community-roles.component';

describe('ManageCommunityRolesComponent', () => {
  let component: ManageCommunityRolesComponent;
  let fixture: ComponentFixture<ManageCommunityRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageCommunityRolesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageCommunityRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
