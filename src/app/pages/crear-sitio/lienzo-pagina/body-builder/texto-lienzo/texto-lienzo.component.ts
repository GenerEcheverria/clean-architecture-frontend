import { Component, Input, OnInit } from '@angular/core';

/**
 * Componente para mostrar texto en el lienzo de la página.
 */
@Component({
  selector: 'app-texto-lienzo',
  templateUrl: './texto-lienzo.component.html',
  styleUrls: ['./texto-lienzo.component.css']
})
export class TextoLienzoComponent implements OnInit {

   /**
   * Título del texto.
   */
  @Input() title!: string;

  /**
   * Posición del texto.
   */
  @Input() position!: string;

    /**
   * Contenido de texto.
   */
  @Input() texto: string = "";

   /**
   * Alineación del texto.
   */
  @Input() alineacionTexto: string = "";

   /**
   * Clase CSS correspondiente a la alineación del texto.
   */
  protected clase: string = "";

  /**
   * Clase CSS correspondiente a la posición del texto.
   */
  protected classPosition!: string;

  /**
   * Método de inicialización del componente.
   */
  ngOnInit(): void {
    switch (this.position) {
      case "left":
        this.classPosition = "d-flex justify-content-start";
        break;
      case "center":
        this.classPosition = "d-flex justify-content-center";
        break;
      case "right":
        this.classPosition = "d-flex justify-content-end";
        break;
    }
    switch (this.alineacionTexto) {
      case "justified":
        this.clase = "justificado-texto";
        break;
      case "left":
        this.clase = "text-start";
        break;
      case "center":
        this.clase = "text-center";
        break;
      case "right":
        this.clase = "text-end";
        break;
    }
  }
}