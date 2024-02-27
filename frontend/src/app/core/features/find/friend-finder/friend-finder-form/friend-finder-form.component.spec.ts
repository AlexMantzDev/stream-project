import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendFinderFormComponent } from './friend-finder-form.component';

describe('FriendFinderFormComponent', () => {
  let component: FriendFinderFormComponent;
  let fixture: ComponentFixture<FriendFinderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FriendFinderFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FriendFinderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
