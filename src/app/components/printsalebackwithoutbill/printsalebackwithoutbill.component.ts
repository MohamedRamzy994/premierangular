import {
  ProductBuyDiscardSelectMainInvoicesItems, ProductBuyDiscardSelectMainInvoices,
  ResultProductBuyDiscardSelectMainInvoices
} from './../../models/productbuy';
import { Component, OnInit } from '@angular/core';
import {
  ProductBuyInvoiceItems,
  ProductBuySelectMainInvoices, ResultProductBuySelectMainInvoices,
  ResultProductBuyInvoiceItems
} from 'src/app/models/productbuy';
import { ListproductbuymaininvoicesService } from 'src/app/services/productbuy/listproductbuymaininvoices.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ListproductbuymaininvoiceitemsService } from 'src/app/services/productbuy/listproductbuymaininvoiceitems.service';
import { ListproductbuydiscardmaininvoiceitemsService } from 'src/app/services/productbuy/listproductbuydiscardmaininvoiceitems.service';
import { ResultProductBuyDiscardSelectMainInvoicesItems } from '../../models/productbuy';
import { ListproductbuydiscardmaininvoicesService } from 'src/app/services/productbuy/listproductbuydiscardmaininvoices.service';
import { ListproductsalediscardmaininvoicesService } from 'src/app/services/productsales/listproductsalediscardmaininvoices.service';
import {
  ResultProductSaleDiscardSelectMainInvoices, ProductSaleDiscardSelectMainInvoices,
  ResultProductSaleDiscardSelectMainInvoicesItems,
   ProductSaleDiscardSelectMainInvoicesItems, ResultProductSaleDiscardNotSelectMainInvoicesItems
} from 'src/app/models/productsales';
// tslint:disable-next-line:max-line-length
import { ListproductsalediscardmaininvoiceitemsService } from 'src/app/services/productsales/listproductsalediscardmaininvoiceitems.service';
import Printd from 'printd';
import { ListproductsalediscardnotmaininvoicesService } from 'src/app/services/productsales/listproductsalediscardnotmaininvoices.service';
// tslint:disable-next-line:import-spacing
// tslint:disable-next-line:max-line-length
import { ListproductsalediscardnotmaininvoiceitemsService } from 'src/app/services/productsales/listproductsalediscardnotmaininvoiceitems.service';
@Component({
  selector: 'app-printsalebackwithoutbill',
  templateUrl: './printsalebackwithoutbill.component.html',
  styleUrls: ['./printsalebackwithoutbill.component.css']
})
export class PrintsalebackwithoutbillComponent implements OnInit {
  public DiscardID: number;
  public productSaleDiscardMainInvoice: ProductSaleDiscardSelectMainInvoices;
  public productSaleDiscardSelectMainInvoicesItems: ProductSaleDiscardSelectMainInvoicesItems[];
  public p: any;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _listproductsalediscardnotmaininvoicesService: ListproductsalediscardnotmaininvoicesService,
    private _listproductsalediscardnotmaininvoiceitemsService: ListproductsalediscardnotmaininvoiceitemsService
  ) {
    this.productSaleDiscardSelectMainInvoicesItems = [];
    this.productSaleDiscardMainInvoice = new ProductSaleDiscardSelectMainInvoices();
  }
  ngOnInit() {

    this._activatedRoute.paramMap.subscribe(
      (params: Params) => {
        this.DiscardID = params.get('DiscardID');
      });
    this.getProductSaleDiscardNotMainInvoiceItems();
    this.getproductsalediscardSlelectedInvoice();
  }
  public getProductSaleDiscardNotMainInvoiceItems() {
    this._listproductsalediscardnotmaininvoiceitemsService.listProductSaleDiscardNotMainInvoiceItems(this.DiscardID)
      .subscribe((_result: ResultProductSaleDiscardNotSelectMainInvoicesItems) => {
        this.productSaleDiscardSelectMainInvoicesItems = _result.ProductSaleDiscardNotInvoiceItems;
        console.log(_result);
      });

  }

  getproductsalediscardSlelectedInvoice(): void {

    this._listproductsalediscardnotmaininvoicesService.listProductSaleDiscardNotMainInvoices()
      .subscribe((_result: ResultProductSaleDiscardSelectMainInvoices) => {

        _result.ProductSaleDiscardInvoices.forEach((element: ProductSaleDiscardSelectMainInvoices) => {

          if (element.DiscardID == this.DiscardID) {

            this.productSaleDiscardMainInvoice = element;
            return;
          }

        });

      });
  }
  public PrintReportInvoice() {
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
      width:33.33%;
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

  min-height:17cm;

}
#datefromto{
  display:none;
}

  `;
    const d: Printd = new Printd();
    d.print(document.getElementById('body-content'), cssText);


  }

}

