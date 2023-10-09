import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLienzoComponent } from './video-lienzo.component';

describe('VideoLienzoComponent', () => {
  let component: VideoLienzoComponent;
  let fixture: ComponentFixture<VideoLienzoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoLienzoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoLienzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
