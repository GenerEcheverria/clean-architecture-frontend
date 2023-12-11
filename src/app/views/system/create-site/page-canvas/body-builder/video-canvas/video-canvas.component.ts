import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-canvas',
  templateUrl: './video-canvas.component.html',
  styleUrls: ['./video-canvas.component.css']
})
export class VideoLienzoComponent implements OnInit {

  @Input() videoSource: string = '';

  @Input() videoScale: string = '';

  protected class: string = '';

  protected safeUrl: any;

  private sanitizer: DomSanitizer;

  constructor(sanitizerParam: DomSanitizer) {
    this.sanitizer = sanitizerParam;
  }

  ngOnInit(): void {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoSource);
    switch (this.videoScale) {
    case 'small':
      this.class = 'small-size';
      break;
    case 'medium':
      this.class = 'medium-size';
      break;
    case 'big':
      this.class = 'big-size';
      break;
    }
  }
}
