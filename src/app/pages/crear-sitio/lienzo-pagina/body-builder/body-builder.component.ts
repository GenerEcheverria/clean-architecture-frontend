import { Component, Input, OnInit } from '@angular/core';

/**
 * Componente encargado de devolver el tipo de medio correspondiente.
 * 
 * @component
 * @selector app-body-builder
 * @templateUrl ./body-builder.component.html
 * @styleUrls ['./body-builder.component.css']
 */
@Component({
  selector: 'app-body-builder',
  templateUrl: './body-builder.component.html',
  styleUrls: ['./body-builder.component.css']
})

export class BodyBuilderComponent implements OnInit {

  /**
   * Contenido del cuerpo de la página web.
   * 
   * @property {any} webContent
   * @input
   */
  @Input() webContent: any;

   /**
   * Objeto que representa el contenido de una columna completa.
   * 
   * @property {any} full
   * @protected
   */
  protected full: any;

    /**
   * Tipo de medio contenido en la columna completa.
   * 
   * @property {string} fullType
   * @protected
   */
  protected fullType!: string;

    /**
   * Objeto que representa el contenido del lado izquierdo de una columna dividida.
   * 
   * @property {any} left
   * @protected
   */
  protected left: any;

   /**
   * Tipo de medio contenido en el lado izquierdo de una columna dividida.
   * 
   * @property {string} leftType
   * @protected
   */
  protected leftType!: string;

   /**
   * Objeto que representa el contenido del lado derecho de una columna dividida.
   * 
   * @property {any} right
   * @protected
   */
  protected right: any;

  /**
   * Tipo de medio contenido en el lado derecho de una columna dividida.
   * 
   * @property {string} rightType
   * @protected
   */
  protected rightType!: string;

  /**
   * Indica si se utilizan columnas para mostrar el contenido.
   * 
   * @property {any} columns
   * @protected
   */
  protected columns: any

  ngOnInit(): void {
    const item = this.webContent;
    if (Object.keys(item).length == 1) {
      //Si solo se encuentra un elemento, se considera que es una columna completa
      //es decir, ocupará todo el width
      this.columns = false;
      this.full = item.full;
      this.fullType = Object.keys(this.full)[0];
    } else {
      //De lo contrario será una columna dividida, es decir,
      //tendra un medio en el lado izquierdo y otro en el derecho
      this.columns = true;
      console.log(item.left, item.right)
      this.left = item.left
      this.leftType = Object.keys(this.left)[0];
      this.right = item.right
      this.rightType = Object.keys(this.right)[0];
    }

  }
}