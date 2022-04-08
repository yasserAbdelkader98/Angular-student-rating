import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerdetailsComponent } from './speakerdetails.component';

describe('SpeakerdetailsComponent', () => {
  let component: SpeakerdetailsComponent;
  let fixture: ComponentFixture<SpeakerdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
