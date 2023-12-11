import { Component } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { SiteService } from 'src/app/infrastructure/api-v1/site.service';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-my-sites',
  templateUrl: './my-sites.component.html',
  styleUrls: ['./my-sites.component.css']
})
export class MySitesComponent {
  protected siteLibrary: any[] = [];
  protected filteredData: any[] = [];
  protected filter: string = '';
  protected newState: string = '';

  // eslint-disable-next-line no-magic-numbers
  private actualModify: number = 0;

  private siteService!: SiteService;


  constructor(siteServiceParam: SiteService) {
    this.siteService = siteServiceParam;
  }

  ngOnInit(): void {
    this.updateData();
  }

  protected updateSelected(id: number, state: string): void {
    this.actualModify = id;
    this.newState = state;
  }

  protected filterData() {
    this.filteredData = this.siteLibrary.filter((item) =>
      item.name.toLowerCase().includes(this.filter.toLowerCase())
    );
  }

  protected updateDBState() {
    const site = {
      'id': this.actualModify,
      'state': this.newState
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

  protected generatePDF() {
    const documentDefinition = {
      content: [
        {
          table: {
            headerRows: 1,
            widths: ['*', '*', '*'],
            body: [
              ['URL', 'Nombre', 'Vistas'],
              ...this.siteLibrary.map(item => ['/site/' + item.url, item.name, item.views])
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

  protected generateExcel() {
    const worksheet = XLSX.utils.json_to_sheet(this.siteLibrary);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Biblioteca Sitios');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(data, 'ReporteMisSitios.xlsx');
  }

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

  private updateData() {
    this.siteService.getAllSitesForCurrentUser().subscribe((data : any) => {
      this.siteLibrary = data.sites;
      this.filteredData = this.siteLibrary;
    });
  }

}
