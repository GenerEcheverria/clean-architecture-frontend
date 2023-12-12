import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-canvas',
  templateUrl: './title-canvas.component.html',
  styleUrls: ['./title-canvas.component.css']
})
export class TitleCanvasComponent implements OnInit {

  @Input() title: string = '';

  @Input() position: string = '';

  @Input() hero!: boolean;

  @Input() size!: string;

  @Input() color!: string;

  @Input() image!: string;

  protected class: string = '';

  protected classSize: string = '';

  ngOnInit(): void {
    switch (this.position) {
    case 'left':
      this.class = 'd-flex justify-content-start';
      break;
    case 'center':
      this.class = 'd-flex justify-content-center';
      break;
    case 'right':
      this.class = 'd-flex justify-content-end';
      break;
    }
    switch (this.size) {
    case 'small':
      this.classSize = 'fs-3';
      break;
    case 'medium':
      this.classSize = 'fs-2';
      break;
    case 'big':
      this.classSize = 'fs-1';
      break;
    }
  }
}
