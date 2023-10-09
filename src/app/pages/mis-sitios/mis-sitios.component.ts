import { Component } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { writeFile } from 'xlsx';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { ElementRef } from '@angular/core';
import { MisSitiosService } from 'src/app/services/mis-sitios.service';
import { SiteService } from 'src/app/services/site.service';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

/**
 * Componente para gestionar los sitios del usuario.
 */
@Component({
  selector: 'app-mis-sitios',
  templateUrl: './mis-sitios.component.html',
  styleUrls: ['./mis-sitios.component.css']
})
export class MisSitiosComponent {
  public bibliotecaSitios: any[] = [];
  public filteredData: any[] = [];
  public Filtro: string = '';
  public newState: string = '';
  public actualModify: number = 0;
  

  constructor(private misSitiosService: MisSitiosService, private site: SiteService) {}

  /**
   * Se ejecuta al inicializar el componente.
   */
  ngOnInit(): void {
    this.updateData()
  }

  /**
   * Actualiza los datos de la biblioteca de sitios.
   */
  updateData(){
    this.misSitiosService.getAll().subscribe(data => {
      this.bibliotecaSitios = data.sites;
      this.filteredData = this.bibliotecaSitios;
    });
  }

   /**
   * Actualiza el estado de un sitio en la base de datos.
   */
  updateSelected(id:number,state:string){
    this.actualModify=id
    this.newState=state
  }

  
  /**
   * Filtra los datos de la biblioteca de sitios según el valor del filtro.
   */
  filterData() {
    this.filteredData = this.bibliotecaSitios.filter((item) =>
      item.name.toLowerCase().includes(this.Filtro.toLowerCase())
    );
  }

  /**
   * Actualiza el estado de un sitio en la base de datos.
   */
  updateDBState(){
    console.log(this.actualModify, this.newState)
    const site = {
      'id' : this.actualModify,
      'state' : this.newState
    } 
    this.site.updateState(site.id, site.state).subscribe(
      (response) => {
        this.updateData()
      },
      (error) => {
        console.error(error);
      }
    );
  }

  /**
   * Genera y descarga un archivo PDF con los datos de la biblioteca de sitios.
   */
  generarPDF() {
    const documentDefinition = {   content: [
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*'],
          body: [
            ['URL', 'Nombre', 'Vistas'],
            ...this.bibliotecaSitios.map(item => ["/site/"+item.url, item.name, item.views])
          ]
        }
      }
    ],
    defaultStyle: {
      fontSize: 12,
      color: '#333333'
    },
    styles: {
      body: {
        fillColor: '#CCCCCC',
        color: '#FFFFFF',
        bold: true,
        fontSize: 15
      }
    }
  };
    pdfMake.createPdf(documentDefinition).download('ReporteMisSitios.pdf');
  }

  /**
   * Genera y descarga un archivo Excel con los datos de la biblioteca de sitios.
   */

  generarExcel() {
    const worksheet = XLSX.utils.json_to_sheet(this.bibliotecaSitios);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Biblioteca Sitios');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(data, 'ReporteMisSitios.xlsx');
  }

  /**
   * Genera y descarga un código QR a partir de la URL proporcionada.
   * @param url La URL para generar el código QR.
   */
  async generarQRyDescargar(url: string): Promise<void> {
    try {
      const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(url)}`;
      const response = await fetch(apiUrl);
      const blob = await response.blob();
  
      saveAs(blob, 'qrcode.png');
    } catch (error) {
      console.error('Error generating and downloading QR code:', error);
    }
  }

}
