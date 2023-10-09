import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Componente para mostrar un video en el lienzo de la página.
 */
@Component({
  selector: 'app-video-lienzo',
  templateUrl: './video-lienzo.component.html',
  styleUrls: ['./video-lienzo.component.css']
})
export class VideoLienzoComponent implements OnInit {

  /**
   * Fuente del video.
   */
  @Input() fuenteVid: string = "";

  /**
   * Tamaño del video.
   */
  @Input() tamañoVid: string = "";

  /**
   * Clase CSS correspondiente al tamaño del video.
   */
  clase: string = "";

  /**
   * Constructor del componente VideoLienzoComponent.
   * @param sanitizer Instancia de DomSanitizer para la manipulación segura de la URL del video.
   */
  constructor(private sanitizer: DomSanitizer) { }

  /**
   * URL segura del video.
   */
  safeUrl: any;

  /**
   * Método de inicialización del componente.
   */
  ngOnInit(): void {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.fuenteVid);
    switch (this.tamañoVid) {
      case "small":
        this.clase = "tamaño-pequeño";
        break;
      case "medium":
        this.clase = "tamaño-mediano";
        break;
      case "big":
        this.clase = "tamaño-grande";
        break;
    }
  }
}
