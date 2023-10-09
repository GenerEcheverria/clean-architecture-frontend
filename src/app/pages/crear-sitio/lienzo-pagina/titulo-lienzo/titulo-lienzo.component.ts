import { Component, Input, OnInit } from '@angular/core';

/**
 * Componente para mostrar el título en el lienzo de la página.
 * 
 * @component
 * @selector app-titulo-lienzo
 * @templateUrl ./titulo-lienzo.component.html
 * @styleUrls ['./titulo-lienzo.component.css']
 */
@Component({
  selector: 'app-titulo-lienzo',
  templateUrl: './titulo-lienzo.component.html',
  styleUrls: ['./titulo-lienzo.component.css']
})
export class TituloLienzoComponent implements OnInit{

  /**
   * Título a mostrar.
   * 
   * @property {string} title
   * @input
   */
  @Input() title: string = ""; 

    /**
   * Posición del título en el lienzo.
   * 
   * @property {string} position
   * @input
   */
  @Input() position:  string = ""; 

   /**
   * Indica si el título es parte del héroe.
   * 
   * @property {boolean} hero
   * @input
   */
  @Input() hero!: boolean;

    /**
   * Tamaño del título.
   * 
   * @property {string} size
   * @input
   */
  @Input() size!: string;

   /**
   * Color del título.
   * 
   * @property {string} color
   * @input
   */
  @Input() color!: string;

  /**
   * Ruta de la imagen asociada al título.
   * 
   * @property {string} image
   * @input
   */
  @Input() image!: string;

  /**
   * Clase CSS para la posición del título.
   * 
   * @property {string} clase
   */
  protected clase: string = "";

  /**
   * Clase CSS para el tamaño del título.
   * 
   * @property {string} claseSize
   */
  protected claseSize: string = "";
  
  ngOnInit(): void {    
    switch (this.position) {
      case "left":
        this.clase = "d-flex justify-content-start";
      break;
      case "center":
        this.clase = "d-flex justify-content-center";
      break;
      case "right":
        this.clase = "d-flex justify-content-end";
      break;
    }
    switch (this.size) {
      case "small":
        this.claseSize = "fs-3";
      break;
      case "medium":
        this.claseSize = "fs-2";
      break;
      case "big":
        this.claseSize = "fs-1";
      break;
    }
  }
}
