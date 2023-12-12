import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-body-element',
  templateUrl: './body-element.component.html',
  styleUrls: ['./body-element.component.css'],

})

export class BodyElementComponent {

  @Input() public bodyElementForm!: FormGroup;

  @Input() public arrayIndex!: number;

  @Output() public deleteBodyElementEvent: EventEmitter<number> = new EventEmitter<number>();

  static isFull = true;

  protected isFull = BodyElementComponent.isFull;

  static mediaType = '';

  protected mediaType = BodyElementComponent.mediaType;

  static leftType = '';

  static rightType = '';

  protected leftType = BodyElementComponent.leftType;

  protected rightType = BodyElementComponent.rightType;

  static addFullColumn(type: string): FormGroup {
    BodyElementComponent.isFull = true;
    BodyElementComponent.mediaType = type;
    return new FormGroup({
      full: this.buildType(type)
    });
  }

  static addSplitColumn(leftType: string, rightType: string): FormGroup {
    BodyElementComponent.isFull = false;
    BodyElementComponent.leftType = leftType;
    BodyElementComponent.rightType = rightType;
    return new FormGroup({
      left: this.buildType(leftType),
      right: this.buildType(rightType),
    });
  }

  protected deleteBodyElement(index: number): void {
    this.deleteBodyElementEvent.next(index);
  }

  static buildType(type: string): FormGroup {
    switch (type) {
    case 'Text':
      return new FormGroup({
        text: new FormGroup({
          title: new FormControl(''),
          position: new FormControl(''),
          text: new FormControl(''),
          alignment: new FormControl('')
        }),
      });
    case 'Image':
      return new FormGroup({
        image: new FormGroup({
          image: new FormControl(''),
          size: new FormControl(''),
          caption: new FormControl(''),
        }),
      });
    case 'Video':
      return new FormGroup({
        video: new FormGroup({
          video: new FormControl(''),
          size: new FormControl(''),
        }),
      });
    default:
      return new FormGroup({});
    }
  }
}
