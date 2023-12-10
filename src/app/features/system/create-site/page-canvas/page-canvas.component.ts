import { Component, Input, OnInit } from '@angular/core';

/**
 * Componente base para visualizar el contenido del sitio web seleccionado por el usuario.
 *
 * @component
 * @selector app-page-canvas
 * @templateUrl ./page-canvas.component.html
 * @styleUrls ['./page-canvas.component.css']
 */
@Component({
  selector: 'app-page-canvas',
  templateUrl: './page-canvas.component.html',
  styleUrls: ['./page-canvas.component.css']
})

//Componente base para visualizar el sitio web con el contenido
//elegido por el usuario
export class PageCanvasComponent implements OnInit {

  /**
   * Contenido del sitio web.
   *
   * @property {any} webContent
   * @input
   */
  @Input() webContent: any;

  /**
   * Contenido completo de una columna.
   *
   * @property {any} full
   */
  protected full: any;

  /**
   * Tipo de contenido completo de una columna.
   *
   * @property {string} fullType
   */
  protected fullType!: string;

  /**
   * Contenido de la columna izquierda.
   *
   * @property {any} left
   */
  protected left: any;

  /**
   * Tipo de contenido de la columna izquierda.
   *
   * @property {string} leftType
   */
  protected leftType!: string;

  /**
   * Contenido de la columna derecha.
   *
   * @property {any} right
   */
  protected right: any;

  /**
   * Tipo de contenido de la columna derecha.
   *
   * @property {string} rightType
   */
  protected rightType!: string;

  /**
  * Contenido de las columnas.
  *
  * @property {any} columns
  */
  protected columns: any;

  ngOnInit(): void {
  }
}
