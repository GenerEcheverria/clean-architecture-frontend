import { Component, Input, OnInit } from '@angular/core';

/**
 * Componente para mostrar una imagen en el lienzo de la página.
 */
@Component({
  selector: 'app-image-canvas',
  templateUrl: './image-canvas.component.html',
  styleUrls: ['./image-canvas.component.css']
})
export class ImageCanvasComponent implements OnInit {

  /**
   * Fuente de la imagen.
   */
  @Input() fuenteImg: string = '';

  /**
   * Tamaño de la imagen.
   */
  @Input() imageSize: string = '';

  /**
   * Leyenda de la imagen.
   */
  @Input() captionImg: string = '';

  /**
   * Clase CSS correspondiente al tamaño de la imagen.
   */
  protected class: string = '';

  /**
   * Método de inicialización del componente.
   */
  ngOnInit(): void {
    switch (this.imageSize) {
    case 'small':
      this.class = 'small-size';
      break;

    case 'medium':
      this.class = 'medium-size';
      break;

    case 'big':
      this.class = 'big-size';
      break;
    }
  }
}
