import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

/**
 * Componente encargado de devolver los formgroups correspondientes al body y de mostrar los formularios correspondientes.
 */
@Component({
  selector: 'app-body-element',
  templateUrl: './body-element.component.html',
  styleUrls: ['./body-element.component.css'],
  
})

//Componente encargado de devolver los formgroups correspondientes al body
//y de mostrar los formularios correspondientes
export class BodyElementComponent {

  /**
   * Formulario del elemento del body.
   */
  @Input() public bodyElementForm!: FormGroup;

  /**
   * Índice del elemento en el array.
   */
  @Input() public arrayIndex!: number;

  /**
   * Evento emitido al eliminar el elemento del body.
   */
  @Output() public deleteBodyElementEvent: EventEmitter<number> = new EventEmitter<number>();

   /**
   * Propiedad estática para determinar si el elemento ocupa todo el ancho.
   */
  static isFull = true;

   /**
   * Propiedad para determinar si el elemento ocupa todo el ancho.
   */
  protected isFull = BodyElementComponent.isFull;

   /**
   * Propiedad estática para almacenar el tipo de medio.
   */
  static mediaType = "";

  /**
   * Propiedad para almacenar el tipo de medio.
   */
  protected mediaType = BodyElementComponent.mediaType;

  /**
   * Propiedad estática para almacenar el tipo de medio del lado izquierdo.
   */
  static leftType = "";

  /**
   * Propiedad estática para almacenar el tipo de medio del lado derecho.
   */
  static rightType = "";

  /**
   * Propiedad para almacenar el tipo de medio del lado izquierdo.
   */
  protected leftType = BodyElementComponent.leftType;

  
  /**
   * Propiedad para almacenar el tipo de medio del lado derecho.
   */
  protected rightType = BodyElementComponent.rightType;

  /**
   * Objeto para almacenar la información de la línea de tiempo.
   */
  myTimeline!: any;

   /**
   * Crea un FormGroup para un medio que ocupe todo el ancho de la pantalla.
   * @param type Tipo de medio.
   * @returns FormGroup para el medio que ocupa todo el ancho.
   */
  static addFullColumn(type: string): FormGroup {
    BodyElementComponent.isFull = true;
    BodyElementComponent.mediaType = type;
    return new FormGroup({
      full: this.buildType(type)
    })
  }

  /**
   * Crea un FormGroup que contiene los form controls para un medio dividido en el lado izquierdo y derecho.
   * @param leftType Tipo de medio del lado izquierdo.
   * @param rightType Tipo de medio del lado derecho.
   * @returns FormGroup para el medio dividido.
   */ 
  static addSplitColumn(leftType: string, rightType: string): FormGroup {
    BodyElementComponent.isFull = false;
    BodyElementComponent.leftType = leftType;
    BodyElementComponent.rightType = rightType;
    return new FormGroup({
        left: this.buildType(leftType),
        right: this.buildType(rightType),
    });
  }

    /**
   * Elimina el elemento del body.
   * @param index Índice del elemento a eliminar.
   */
  public deleteBodyElement(index: number): void {
    this.deleteBodyElementEvent.next(index);
  }

  /**
   * Construye un FormGroup para el tipo de medio especificado.
   * @param type Tipo de medio.
   * @returns FormGroup para el tipo de medio.
   */
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
      case 'Timeline':

        return new FormGroup({
          timeline: new FormGroup({
            title: new FormControl(''),
          }),
        });
      default:
        return new FormGroup({});
    }
  }


}
