import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditspeakerComponent } from './editspeaker.component';

describe('EditspeakerComponent', () => {
  let component: EditspeakerComponent;
  let fixture: ComponentFixture<EditspeakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditspeakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditspeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
