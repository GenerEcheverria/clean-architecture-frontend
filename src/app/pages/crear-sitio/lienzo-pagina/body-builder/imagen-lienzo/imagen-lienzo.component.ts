import { Component, Input, OnInit } from '@angular/core';

/**
 * Componente para mostrar una imagen en el lienzo de la página.
 */
@Component({
  selector: 'app-imagen-lienzo',
  templateUrl: './imagen-lienzo.component.html',
  styleUrls: ['./imagen-lienzo.component.css']
})
export class ImagenLienzoComponent implements OnInit {

  /**
   * Fuente de la imagen.
   */
  @Input() fuenteImg: string = "";

  /**
   * Tamaño de la imagen.
   */
  @Input() tamañoImg:  string = "";

  /**
   * Leyenda de la imagen.
   */
  @Input() captionImg: string = "";

  /**
   * Clase CSS correspondiente al tamaño de la imagen.
   */
  clase: string = "";

  /**
   * Método de inicialización del componente.
   */
  ngOnInit(): void {    
    switch (this.tamañoImg) {
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
