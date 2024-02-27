import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReleasesShowcaseComponent } from './new-releases-showcase.component';

describe('NewReleasesShowcaseComponent', () => {
  let component: NewReleasesShowcaseComponent;
  let fixture: ComponentFixture<NewReleasesShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewReleasesShowcaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewReleasesShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
