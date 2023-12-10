import { Component, Input, OnInit } from '@angular/core';

/**
 * Componente para mostrar texto en el lienzo de la página.
 */
@Component({
  selector: 'app-text-canvas',
  templateUrl: './text-canvas.component.html',
  styleUrls: ['./text-canvas.component.css']
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
  @Input() text: string = '';

  /**
  * Alineación del texto.
  */
  @Input() textAlign: string = '';

  /**
  * Clase CSS correspondiente a la alineación del texto.
  */
  protected class: string = '';

  /**
   * Clase CSS correspondiente a la posición del texto.
   */
  protected classPosition!: string;

  /**
   * Método de inicialización del componente.
   */
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
