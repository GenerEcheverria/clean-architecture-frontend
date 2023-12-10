import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

/**
 * Componente para mostrar un video.
 * 
 * @component
 * @selector app-video
 * @templateUrl ./video.component.html
 * @styleUrls ['./video.component.css']
 * @viewProviders [{ provide: ControlContainer, useExisting: FormGroupDirective }]
 */
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class VideoComponent {
  /**
   * La columna en la que se mostrará el video.
   * 
   * @property {string} column
   * @input
   */
  @Input() column!: string;

   /**
   * Indica si se permite la carga de un video.
   * 
   * @property {boolean} upload
   */
  upload = true
}
