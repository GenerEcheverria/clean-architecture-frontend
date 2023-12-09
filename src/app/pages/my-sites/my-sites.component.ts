import { Component } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { MySitesService } from 'src/app/services/my-sites.service';
import { SiteService } from 'src/app/services/site.service';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

/**
 * Componente para gestionar los sitios del usuario.
 */
@Component({
  selector: 'app-mis-sitios',
  templateUrl: './my-sites.component.html',
  styleUrls: [ './my-sites.component.css' ]
})
export class MySitesComponent {
  protected siteLibrary: any[] = [];
  protected filteredData: any[] = [];
  protected filter: string = '';
  protected newState: string = '';

  // eslint-disable-next-line no-magic-numbers
  private actualModify: number = 0;

  private mySiteService!: MySitesService;
  private siteService!: SiteService;


  constructor() {}

  /**
   * Se ejecuta al inicializar el componente.
   */
  ngOnInit(): void {
    this.updateData();
  }

  /**
   * Actualiza el estado de un sitio en la base de datos.
   */
  protected updateSelected(id:number,state:string): void{
    this.actualModify=id;
    this.newState=state;
  }


  /**
   * Filtra los datos de la biblioteca de sitios según el valor del filtro.
   */
  protected filterData() {
    this.filteredData = this.siteLibrary.filter((item) =>
      item.name.toLowerCase().includes(this.filter.toLowerCase())
    );
  }

  /**
   * Actualiza el estado de un sitio en la base de datos.
   */
  protected updateDBState(){
    console.log(this.actualModify, this.newState);
    const site = {
      'id' : this.actualModify,
      'state' : this.newState
    };
    this.siteService.updateState(site.id, site.state).subscribe(
      (response) => {
        console.log(response);
        this.updateData();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  /**
   * Genera y descarga un archivo PDF con los datos de la biblioteca de sitios.
   */
  protected generatePDF() {
    const documentDefinition = {   content: [
      {
        table: {
          headerRows: 1,
          widths: [ '*', '*', '*' ],
          body: [
            [ 'URL', 'Nombre', 'Vistas' ],
            ...this.siteLibrary.map(item => [ '/site/'+item.url, item.name, item.views ])
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

  protected generateExcel() {
    const worksheet = XLSX.utils.json_to_sheet(this.siteLibrary);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Biblioteca Sitios');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([ excelBuffer ], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(data, 'ReporteMisSitios.xlsx');
  }

  /**
   * Genera y descarga un código QR a partir de la URL proporcionada.
   * @param url La URL para generar el código QR.
   */
  protected async generateQR(url: string): Promise<void> {
    try {
      const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(url)}`;
      const response = await fetch(apiUrl);
      const blob = await response.blob();

      saveAs(blob, 'qrcode.png');
    } catch (error) {
      console.error('Error generating and downloading QR code:', error);
    }
  }

  /**
   * Actualiza los datos de la biblioteca de sitios.
   */
  private updateData(){
    this.mySiteService.getAll().subscribe(data => {
      this.siteLibrary = data.sites;
      this.filteredData = this.siteLibrary;
    });
  }

}
