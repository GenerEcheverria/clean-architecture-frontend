import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-canvas',
  templateUrl: './page-canvas.component.html',
  styleUrls: ['./page-canvas.component.css']
})

export class PageCanvasComponent implements OnInit {

  @Input() webContent: any;

  protected full: any;

  protected fullType!: string;

  protected left: any;

  protected leftType!: string;

  protected right: any;

  protected rightType!: string;

  protected columns: any;

  ngOnInit(): void {
  }
}
