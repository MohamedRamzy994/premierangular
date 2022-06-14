import { Component, OnInit } from '@angular/core';
import { ListTransferProductModel } from '../../models/transferkinds';
import { SelectedkindsbarcodesService } from '../../services/productbarcodes/selectedkindsbarcodes.service';
import { Printd } from 'printd';
import { SettingsModel, ResultGetSystemSettings } from 'src/app/models/settings';
import { ApiurlService } from 'src/app/services/general/apiurl.service';
import { AppsettingsService } from 'src/app/services/general/appsettings.service';

@Component({
  selector: 'app-printkindsbarcode',
  templateUrl: './printkindsbarcode.component.html',
  styleUrls: ['./printkindsbarcode.component.css']
})
export class PrintkindsbarcodeComponent implements OnInit {
  public selectedproduct: ListTransferProductModel;
  public appSettings: SettingsModel;

  public barcodeobject: { barcodevalue: string, barcodeheader: string, barcodefooter: string };
  public productbarcodes: {ProductID: number, ProductName: string, AppName: string}[];
  public options: {
    format: string,
    lineColor: string,
    width: number,
    height: number,
    displayValue: boolean,
    fontOptions: string,
    font: string,
    textAlign: string,
    textPosition: string,
    textMargin: number,
    fontSize: number,
    background: string,
    margin: number,
    marginTop: number,
    marginBottom: number,
    marginLeft: number,
    marginRight: number
  };

  constructor
    (
      private _apiurlService: ApiurlService,
    private _appsettingsService: AppsettingsService,
    private _selectedkindsbarcodesService: SelectedkindsbarcodesService,

  ) {
    this.appSettings = new SettingsModel();

    this.productbarcodes = [];
   }

  ngOnInit() {
    this.GetAppSettings();

    this.barcodeobject = { barcodevalue: '', barcodeheader: '', barcodefooter: '' };
    this.options = {
      format: 'CODE128',
      lineColor: '#000000',
      width: 3.35,
      height: 50,
      displayValue: false,
      fontOptions: '',
      font: 'monospace',
      textAlign: 'center',
      textPosition: 'bottom',
      textMargin: 2,
      fontSize: 20,
      background: '#ffffff',
      margin: 0,
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0

    };

  }
  /**
   * GetAppSettings
   */
  public GetAppSettings(): void {

    this._appsettingsService.AppSettings().subscribe((_result: ResultGetSystemSettings) => {

      if (_result.Status == true) {
        this.appSettings =  _result.SettingsModel[0];
        this.appSettings.Logo = this._apiurlService.apiUrl + this.appSettings.Logo;
        this._selectedkindsbarcodesService.SelectedProducts.forEach(element => {
          for (let index = 0; index < element.Num; index++) {
            const brc = {ProductID: element.ProductID , ProductName: element.ProductName, AppName: this.appSettings.ShopName};
            this.productbarcodes.push(brc);
          }
        });

      } else {

        this.appSettings = {
          ShopName: 'ماركـت شوت',
          WorkType: 'التجارة والحسابات والمبيعات',
          Address: 'الدراسات - المنصورة - الدقهلية - مصر ',
          Logo: '/bag.png',
          Background: '/bag.png'
        };
      }
    });
  }
  public PrintBarCodeLabels() {
    const cssText = `
    article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
      display: block;
    }
    .container {
      width:100%;
      direction: rtl;

    }
    .brheader{

      text-align: center;
      height:18px;
    }
    .seprate{
      height:50px;
    }
    .brfooter{
      text-align: center;

    }
    .col-md-3 {
      width:24%;
      float:right;
      border: 1px solid #000000;
      margin:2px;
    }
    .row{
      width: 100%;
    }
    .text-center{
     text-align:center;

    }
    h3 {
      width:70%;
      font-size: 25px;
      font-family: sans-serif;
      border: black solid 1px;
      padding:5px;
      margin-right:15%;
      background-color: #f2f2f2 !important;
      -webkit-print-color-adjust: exact;
    }
    .barecodestretch{
      align-content: stretch;
      text-align:center;
    }
    @page
   {
    margin:0px;
    margin-top:30px;

  }

  `;

    const d: Printd = new Printd();
    d.print(document.getElementById('barcodes'), cssText);


  }

  public Refresh() {
    this.ngOnInit();
  }


}
