import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Componente para mostrar un video en el lienzo de la página.
 */
@Component({
  selector: 'app-video-canvas',
  templateUrl: './video-canvas.component.html',
  styleUrls: ['./video-canvas.component.css']
})
export class VideoLienzoComponent implements OnInit {

  /**
   * Fuente del video.
   */
  @Input() videoSource: string = '';

  /**
   * Tamaño del video.
   */
  @Input() videoScale: string = '';

  /**
   * Clase CSS correspondiente al tamaño del video.
   */
  protected class: string = '';

  private sanitizer: DomSanitizer;


  constructor(sanitizerParam: DomSanitizer) {
    this.sanitizer = sanitizerParam;
  }

  /**
   * URL segura del video.
   */
  safeUrl: any;

  /**
   * Método de inicialización del componente.
   */
  ngOnInit(): void {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoSource);
    switch (this.videoScale) {
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
