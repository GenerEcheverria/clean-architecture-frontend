import { Component, Input } from '@angular/core';

/**
 * Componente para mostrar el pie de página en el lienzo de la página.
 * 
 * @component
 * @selector app-footer-lienzo
 * @templateUrl ./footer-lienzo.component.html
 * @styleUrls ['./footer-lienzo.component.css']
 */
@Component({
  selector: 'app-footer-lienzo',
  templateUrl: './footer-lienzo.component.html',
  styleUrls: ['./footer-lienzo.component.css']
})
export class FooterLienzoComponent {

  /**
   * Color de fondo del pie de página.
   * 
   * @property {string} backgroundColor
   * @input
   */
  @Input() backgroundColor: string = "";

  /**
   * Color del texto del pie de página.
   * 
   * @property {string} textColor
   * @input
   */
  @Input() textColor: string = ""

    /**
   * Indica si se deben mostrar los enlaces a las redes sociales.
   * 
   * @property {boolean} setSocialMedia
   * @input
   */
  @Input() setSocialMedia!: boolean;

   /**
   * URL de Facebook.
   * 
   * @property {string} facebookUrl
   * @input
   */
  @Input() facebookUrl: string = "";

  /**
   * URL de Instagram.
   * 
   * @property {string} instagramUrl
   * @input
   */
  @Input() instagramUrl: string = "";

  /**
   * URL de Twitter.
   * 
   * @property {string} twitterUrl
   * @input
   */
  @Input() twitterUrl: string = "";

  /**
   * URL de LinkedIn.
   * 
   * @property {string} linkedinUrl
   * @input
   */
  @Input() linkedinUrl: string = "";

  /**
   * URL de TikTok.
   * 
   * @property {string} tiktokUrl
   * @input
   */
  @Input() tiktokUrl: string = "";

  /**
   * URL adicional.
   * 
   * @property {string} otroUrl
   * @input
   */
  @Input() otroUrl: string = "";

  /**
   * Indica si se debe mostrar contenido adicional en el pie de página.
   * 
   * @property {boolean} setExtra
   * @input
   */
  @Input() setExtra!:boolean;

   /**
   * Ruta de la imagen adicional del pie de página.
   * 
   * @property {string} imgExtraFooter
   * @input
   */
  @Input() imgExtraFooter:string = "";

  /**
   * Texto adicional del pie de página.
   * 
   * @property {string} textExtraFooter
   * @input
   */
  @Input() textExtraFooter:string = "";  

  /**
   * Indica si se debe mostrar información de contacto en el pie de página.
   * 
   * @property {boolean} setContact
   * @input
   */
  @Input() setContact!:boolean;

  /**
   * Número de teléfono de contacto.
   * 
   * @property {string} phone
   * @input
   */
  @Input() phone:string = "";

   /**
   * Dirección de contacto.
   * 
   * @property {string} address
   * @input
   */
  @Input() address:string = ""; 

}