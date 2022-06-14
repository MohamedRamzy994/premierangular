import { Component, OnInit } from '@angular/core';
import { INgxMyDpOptions } from 'ngx-mydatepicker';
import { ListSupplierMoneyDetailsModel,
   SupplierTotalCommunicationSummaryModel,
    ResultSupplierMoneyDetails, AddRebateActionModel } from 'src/app/models/suppliers';
import { ListsuppliermoneydetailsService } from 'src/app/services/suppliers/listsuppliermoneydetails.service';
import { ActivatedRoute, Params } from '@angular/router';
import Printd from 'printd';
import { AddCustomerRebateActionModel, CustomerTotalCommunicationSummaryModel,
   ResultCustomerMoneyDetails, AddCustomerModel, ResultListCustomers } from 'src/app/models/customers';
import { ListcustomermoneydetailsService } from 'src/app/services/customers/listcustomermoneydetails.service';
import { SettingsModel, ResultGetSystemSettings } from 'src/app/models/settings';
import { ApiurlService } from 'src/app/services/general/apiurl.service';
import { AppsettingsService } from 'src/app/services/general/appsettings.service';
import { ListcustomersService } from 'src/app/services/customers/listcustomers.service';


@Component({
  selector: 'app-printfilecustomeradvancepaymentsdetails',
  templateUrl: './printfilecustomeradvancepaymentsdetails.component.html',
  styleUrls: ['./printfilecustomeradvancepaymentsdetails.component.css']
})
export class PrintfilecustomeradvancepaymentsdetailsComponent implements OnInit {
  public addCustomer: AddCustomerModel;
  public appSettings: SettingsModel;
  public DateFirstFrom: Date;
  public DateFirstTo: Date;
  public DateToFirstObject: any;
  public DateFromFirstObject: any;
  public DateSecondTo: Date;
  public DateSecondFrom: Date;
  public DateToSecondObject: any;
  public DateFromSecondObject: any;
  public addcustomerRebateActionModel: AddCustomerRebateActionModel;
  public allSupplierMoneyDetails: ListSupplierMoneyDetailsModel[];
  public customerTotalCommunicationSummaryModel: CustomerTotalCommunicationSummaryModel;

  myOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'mmm d, yyyy',
  };



  constructor(
    private _listcustomermoneydetailsService: ListcustomermoneydetailsService,
    private _apiurlService: ApiurlService,
    private _appsettingsService: AppsettingsService,
    private _listcustomersService: ListcustomersService,

    private _activatedRoute: ActivatedRoute

  ) {
    this.addCustomer = new AddCustomerModel();
    
  }

  ngOnInit() {
    this.appSettings = new SettingsModel();

    this.allSupplierMoneyDetails = [];
    this.customerTotalCommunicationSummaryModel = new CustomerTotalCommunicationSummaryModel();
    this.addcustomerRebateActionModel = new AddCustomerRebateActionModel();
    this._activatedRoute.paramMap.subscribe(
      (params: Params) => {

        this.addcustomerRebateActionModel.CustomerID = params.get('CustomerID');

      });
    this.DateFromFirstObject = {
      'date': {
        'year': 2000,
        'month': 1,
        'day': 1
      },
      'jsdate': '2000-01-01T22:00:00.000Z',
      'formatted': 'Jan 1, 2018'
    };
    this.DateToFirstObject = {
      'date': {
        'year': 2030,
        'month': 1,
        'day': 1
      },
      'jsdate': '2030-01-01T22:00:00.000Z',
      'formatted': 'Jan 1, 2030'
    };

    this.DateFirstFrom = this.DateFromFirstObject.jsdate;
    this.DateFirstTo = this.DateToFirstObject.jsdate;

    this.getAllSupplierMoneyDetails();
    this.getCustomer();
    this.GetAppSettings();

  }
  public GetDateFirstFrom(event) {


    this.DateFirstFrom = this.DateFromFirstObject.jsdate;
  }
    /**
   * GetAppSettings
   */
  public GetAppSettings(): void {

    this._appsettingsService.AppSettings().subscribe((_result: ResultGetSystemSettings) => {

      if (_result.Status == true) {
        this.appSettings =  _result.SettingsModel[0];
        this.appSettings.Logo = this._apiurlService.apiUrl + this.appSettings.Logo;

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

  public getCustomer(): void {
    this._listcustomersService.ListCustomers().subscribe((_result: ResultListCustomers) => {

      _result.CustomersList.forEach(element => {

        if (element.CustomerID.toString() === this.addcustomerRebateActionModel.CustomerID) {

          this.addCustomer.Name = element.CustomerName;
          this.addCustomer.Mob1 = element.Mobile1;
          this.addCustomer.Mob2 = element.Mobile2;
         if (element.Category === 'جملة') {
          this.addCustomer.CatID = 1;
         } else if (element.Category === 'قطاعى') {

          this.addCustomer.CatID = 2 ;
         }
        }


      });


    });
  }
  public GetDateFirstTo(event) {

    this.DateFirstTo = this.DateToFirstObject.jsdate;
  }
  public getAllSupplierMoneyDetails() {

    this._listcustomermoneydetailsService
      .ListCustomerMoneyDetails(parseInt(this.addcustomerRebateActionModel.CustomerID, 10))
      .subscribe((_result: ResultCustomerMoneyDetails) => {

        this.allSupplierMoneyDetails = _result.CustomerMoneyDetailsList.filter((x => x.ReasonID == 2 || x.ReasonID == 3), true);
        this.customerTotalCommunicationSummaryModel = _result.CustomerTotalCommunicationSummary;


      });

  }
  public PrintSupplierMoneyDetails() {
    const cssText = `
    article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
      display: block;
    }
    .container {
      width:100%;
      direction: rtl;

    }
    .col-md-1 {
      width:10%;
      float:right;

    }

    .col-md-2 {
      width:20%;
      float:right;

    }
    .col-md-4 {
      width:33%;
      float:right;

    }

    .col-md-8 {
      width:50%;
      float:right;
      margin-left:8%;
    }
    .col-md-5 {
      width:50%;
      float:right;

    }
    .text-left {
      text-align: left;
    }
    .text-right {
      text-align: right;
    }
    .text-center {
      text-align: center;
    }
    .row{
      width: 100%;

    }
    .printbrand {
      border: #f2f2f2 solid 1px;
      text-align: center;
      padding:15px 0;
    }
    .label {
      display: inline;
      font-weight: bold;
      line-height: 1;
      color: black;
      text-align: center;
      white-space: nowrap;
      vertical-align: baseline;
      border-radius: .25em;
      padding:5px;
    }
    .label-default{
      background-color: #f2f2f2 !important;
      -webkit-print-color-adjust: exact;
      padding:5px;

    }
    .userlogo {
      height: 70px;
      width: 70px;
    }
    .img-thumbnail {
      display: inline-block;
      max-width: 100%;
      height: auto;
      padding:10px;
      line-height: 1.42857143;
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 4px;
      transition: all .2s ease-in-out;
    }
    img {
      vertical-align: middle;
    }
     .spacetoprint{
       height:1.5cm;
       width:100%;
     }
    .form-group {
      margin-bottom: 5px;
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
    hr{
      width:100%;
      height:0px;
      border: 1px solid #000;
    }
    h1{
      font-size: 18px;

    }
    .table-responsive {
      min-height: .01%;
      overflow-x: auto;
  }
  .table-bordered {
    border: 1px solid #ddd;
    box-shadow: 0 0 black;
}
.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
}
table {
  background-color: transparent;
}
table {
  border-spacing: 0;
  border-collapse: collapse;
}
table thead {
  background-color: #f2f2f2 !important;
  -webkit-print-color-adjust: exact;
}
tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
.table-striped > tbody > tr:nth-of-type(odd) {
  background-color: #f9f9f9;
}
.table-bordered > thead > tr > th, .table-bordered > tbody > tr > th,
 .table-bordered > tfoot > tr > th, .table-bordered > thead > tr > td,
  .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {
  border: 1px solid #ddd;
}
.table > thead > tr > th, .table > tbody > tr > th,
 .table > tfoot > tr > th, .table > thead > tr > td,
 .table > tbody > tr > td, .table > tfoot > tr > td {
  padding: 8px;
  line-height: 1.42857143;
  vertical-align: top;
  border-top: 1px solid #ddd;
}
.btn {
  display: none;
}
.fixheight{

  height:17cm;

}
#datefromto{
  display:none;
}

  `;

    const d: Printd = new Printd();
    d.print(document.getElementById('body-content'), cssText);


  }


}

