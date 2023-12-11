import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-builder',
  templateUrl: './body-builder.component.html',
  styleUrls: ['./body-builder.component.css']
})

export class BodyBuilderComponent implements OnInit {

  @Input() webContent: any;

  protected full: any;

  protected fullType!: string;

  protected left: any;

  protected leftType!: string;

  protected right: any;

  protected rightType!: string;

  protected columns: any;

  // eslint-disable-next-line no-magic-numbers
  private readonly FIRST_ELEMENT_ARRAY = 0;
  // eslint-disable-next-line no-magic-numbers
  private readonly FIRST_ELEMENT_STRING = 1;

  ngOnInit(): void {
    const item = this.webContent;
    if (Object.keys(item).length == this.FIRST_ELEMENT_STRING) {
      this.columns = false;
      this.full = item.full;
      this.fullType = Object.keys(this.full)[this.FIRST_ELEMENT_ARRAY];
    } else {
      this.columns = true;
      console.log(item.left, item.right);
      this.left = item.left;
      this.leftType = Object.keys(this.left)[this.FIRST_ELEMENT_ARRAY];
      this.right = item.right;
      this.rightType = Object.keys(this.right)[this.FIRST_ELEMENT_ARRAY];
    }

  }
}
