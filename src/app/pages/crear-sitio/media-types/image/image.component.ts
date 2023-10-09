import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

/**
 * Componente para mostrar una imagen.
 * 
 * @component
 * @selector app-image
 * @templateUrl ./image.component.html
 * @styleUrls ['./image.component.css']
 */
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class ImageComponent {

   /**
   * Columna asociada a la imagen.
   * 
   * @property {string} column
   */
  @Input() column!: string;

    /**
   * Indicador de carga de la imagen.
   * 
   * @property {boolean} upload
   */
  upload = true;

  
}
