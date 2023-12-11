import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-canvas',
  templateUrl: './image-canvas.component.html',
  styleUrls: ['./image-canvas.component.css']
})
export class ImageCanvasComponent implements OnInit {

  @Input() fuenteImg: string = '';

  @Input() imageSize: string = '';

  @Input() captionImg: string = '';

  protected class: string = '';

  ngOnInit(): void {
    switch (this.imageSize) {
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
