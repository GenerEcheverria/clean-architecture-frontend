import { Component } from '@angular/core';
import { saveAs } from 'file-saver';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

/**
 * Componente para mostrar una línea de tiempo.
 * 
 * @component
 * @selector app-timeline
 * @templateUrl ./timeline.component.html
 * @styleUrls ['./timeline.component.css']
 */
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})

export class TimelineComponent {

   /**
   * Constructor del componente.
   * 
   * @constructor
   * @param {DomSanitizer} sanitizer - Servicio para sanitizar URLs.
   */
  constructor(private sanitizer: DomSanitizer) {}

   /**
   * Tipo de vista de la línea de tiempo ('vertical' o 'horizontal').
   * 
   * @property {string} typeView
   */
  typeView: string = 'vertical'

  /**
   * Modo de edición de la línea de tiempo.
   * 
   * @property {boolean} editMode
   */
  editMode: boolean = true;

   /**
   * Tamaño de la línea de tiempo.
   * 
   * @property {number} size
   */
  size: number = 36;

  /**
   * Índice del elemento modal actualmente activo.
   * 
   * @property {number} indexModal
   */
  indexModal: number = 0;

   /**
   * Color del título de la línea de tiempo.
   * 
   * @property {string} color
   */
  color: string = '#000000';

  /**
   * Texto del título de la línea de tiempo.
   * 
   * @property {string} text
   */
  text: string = 'Mi titulo';

    /**
   * Fuente de la imagen a mostrar en la línea de tiempo.
   * 
   * @property {string} imageSrc
   */
  imageSrc: string = ''

  /**
   * Fuente de video segura para mostrar en la línea de tiempo.
   * 
   * @property {SafeUrl | undefined} videoSrc
   */
  videoSrc: SafeUrl | undefined;

    /**
   * Arreglo que contiene los elementos de la línea de tiempo.
   * 
   * @property {Array<any>} LineaDelTiempo
   */
  LineaDelTiempo = [
    { Fondo: '#FFFFFF', Ancho: 16, Titulo: '', TituloColor: '',Multimedia: '', imageSrc: '', FotoAncho:100, Descripcion: '',DescripcionColor:'',videoSrc: this.sanitizer.bypassSecurityTrustUrl(''), Fecha: '2000' },
  ];

   /**
   * Agrega un nuevo elemento a la línea de tiempo.
   * 
   * @method agregarItem
   */
  agregarItem() {
    this.LineaDelTiempo.push({Fondo: '#FFFFFF', Ancho: 16, Titulo: '', TituloColor: '', Multimedia: '', imageSrc: '', FotoAncho:100, Descripcion: '',DescripcionColor:'',videoSrc: this.sanitizer.bypassSecurityTrustUrl(''), Fecha: '2000' });
  }

    /**
   * Elimina un elemento de la línea de tiempo en el índice especificado.
   * 
   * @method deleteItem
   * @param {number} index - Índice del elemento a eliminar.
   */
  deleteItem(index: number) {
    console.log('apuntando a',index)
    if(this.LineaDelTiempo.length>1){
    this.LineaDelTiempo.splice(index,1)
  }
  }

   /**
   * Alterna el modo de edición de la línea de tiempo.
   * 
   * @method modificar
   */
  modificar() {
    if(this.editMode){
      this.editMode=false
    }else{
      this.editMode=true
    }
    console.log(this.LineaDelTiempo)
    console.log(this.LineaDelTiempo.slice(0,2))
  }

  /**
   * Maneja la selección de un archivo para cargar una imagen o video en la línea de tiempo.
   * 
   * @method handleFileInput
   * @param {any} event - Evento de cambio de archivo.
   * @param {number} index - Índice del elemento de la línea de tiempo afectado.
   */
  handleFileInput(event: any,  index: number): void {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      if (file.type.startsWith('image/')) {
        reader.onload = () => {
        this.LineaDelTiempo[index].imageSrc = reader.result as string;
        this.LineaDelTiempo[index].Multimedia = 'Foto';
        };

      } else if (file.type.startsWith('video/')) {
        const videoBlobUrl = URL.createObjectURL(file);
        this.LineaDelTiempo[index].videoSrc = this.sanitizer.bypassSecurityTrustUrl(videoBlobUrl);
        this.LineaDelTiempo[index].Multimedia = 'Video';
      }
    }
  }

  // dataURItoBlob(dataURI: string): Blob {
  //   const byteString = atob(dataURI.split(',')[1]);
  //   const arrayBuffer = new ArrayBuffer(byteString.length);
  //   const uint8Array = new Uint8Array(arrayBuffer);
  
  //   for (let i = 0; i < byteString.length; i++) {
  //     uint8Array[i] = byteString.charCodeAt(i);
  //   }
  
  //   return new Blob([arrayBuffer], { type: 'image/jpeg' });
  // }

  // saveImage() {
  //   const blob = this.dataURItoBlob(this.imageSrc);
  //   saveAs(blob, 'image.jpg');
  // }


}
