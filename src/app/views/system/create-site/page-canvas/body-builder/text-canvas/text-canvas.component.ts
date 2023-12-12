import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-canvas',
  templateUrl: './text-canvas.component.html',
  styleUrls: ['./text-canvas.component.css']
})
export class TextoLienzoComponent implements OnInit {

  @Input() title!: string;

  @Input() position!: string;

  @Input() text: string = '';

  @Input() textAlign: string = '';

  protected class: string = '';

  protected classPosition!: string;

  ngOnInit(): void {
    switch (this.position) {
    case 'left':
      this.classPosition = 'd-flex justify-content-start';
      break;
    case 'center':
      this.classPosition = 'd-flex justify-content-center';
      break;
    case 'right':
      this.classPosition = 'd-flex justify-content-end';
      break;
    }
    switch (this.textAlign) {
    case 'justified':
      this.class = 'justify-text';
      break;
    case 'left':
      this.class = 'text-start';
      break;
    case 'center':
      this.class = 'text-center';
      break;
    case 'right':
      this.class = 'text-end';
      break;
    }
  }
}
