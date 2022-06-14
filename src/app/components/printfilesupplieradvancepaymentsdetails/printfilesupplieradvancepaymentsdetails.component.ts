import { Component, OnInit } from '@angular/core';
import { INgxMyDpOptions } from 'ngx-mydatepicker';
import { ListSupplierMoneyDetailsModel,
   SupplierTotalCommunicationSummaryModel,
    ResultSupplierMoneyDetails, AddRebateActionModel } from 'src/app/models/suppliers';
import { ListsuppliermoneydetailsService } from 'src/app/services/suppliers/listsuppliermoneydetails.service';
import { ActivatedRoute, Params } from '@angular/router';
import Printd from 'printd';
import { ListsupplieradvancepaymentsdetailsService } from 'src/app/services/suppliers/listsupplieradvancepaymentsdetails.service';
@Component({
  selector: 'app-printfilesupplieradvancepaymentsdetails',
  templateUrl: './printfilesupplieradvancepaymentsdetails.component.html',
  styleUrls: ['./printfilesupplieradvancepaymentsdetails.component.css']
})
export class PrintfilesupplieradvancepaymentsdetailsComponent implements OnInit {

  public DateFirstFrom: Date;
  public DateFirstTo: Date;
  public DateToFirstObject: any;
  public DateFromFirstObject: any;
  public DateSecondTo: Date;
  public DateSecondFrom: Date;
  public DateToSecondObject: any;
  public DateFromSecondObject: any;
  public addRebateActionModel: AddRebateActionModel;
  public allSupplierMoneyDetails: ListSupplierMoneyDetailsModel[];
  public supplierTotalCommunicationSummaryModel: SupplierTotalCommunicationSummaryModel;

  myOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'mmm d, yyyy',
  };



  constructor(
    private _listsupplieradvancepaymentsdetailsService: ListsupplieradvancepaymentsdetailsService,
    private _activatedRoute: ActivatedRoute

  ) { }

  ngOnInit() {
    this.allSupplierMoneyDetails = [];
    this.supplierTotalCommunicationSummaryModel = new SupplierTotalCommunicationSummaryModel();
    this.addRebateActionModel = new AddRebateActionModel();
    this._activatedRoute.paramMap.subscribe(
      (params: Params) => {

        this.addRebateActionModel.SupplierID = params.get('SupplierID');

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

    this.getSupplierAdvancePaymentsDetails();
  }
  public GetDateFirstFrom(event) {


    this.DateFirstFrom = this.DateFromFirstObject.jsdate;
  }
  public GetDateFirstTo(event) {

    this.DateFirstTo = this.DateToFirstObject.jsdate;
  }
  public getSupplierAdvancePaymentsDetails() {

    this._listsupplieradvancepaymentsdetailsService
      .ListSupplierAdvancePaymentsDetails(parseInt(this.addRebateActionModel.SupplierID, 10))
      .subscribe((_result: ResultSupplierMoneyDetails) => {

        this.allSupplierMoneyDetails = _result.SupplierMoneyDetailsList;
        this.supplierTotalCommunicationSummaryModel = _result.SupplierTotalCommunicationSummary ;

      });

  }
 
  public PrintSupplierMoneyDetails() {
    const cssText = `
    article, aside , details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
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
    .panel-heading .row{
      width: 100%;

    }
    .panel-body .row{
      width: 100%;
      margin-bottom: 35px;
    }
    .printbrand {
      padding:31px 5px; 
      background-color:#fff; 
      border:1px solid #000;
       width:100%;
       text-align: center;
       border-radius: 5px;
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
      width:80%;
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
