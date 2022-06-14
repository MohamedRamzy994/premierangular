import { ListproductsalemaininvoicemaindetailsService } from './../../services/productsales/listproductsalemaininvoicemaindetails.service';
import { Component, OnInit } from '@angular/core';
import {
  ProductSaleInvoiceMainDetails, ResultProductSaleInvoiceMainDetails,
  ResultProductSaleInvoiceItems, ProductSaleInvoiceItems,
  ResultProductSaleDiscardSelectMainInvoicesItems, ProductSaleDiscardSelectMainInvoicesItems
} from 'src/app/models/productsales';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ListproductsalemaininvoicemainitemsService } from 'src/app/services/productsales/listproductsalemaininvoicemainitems.service';
// tslint:disable-next-line:max-line-length
import { ListproductsalemaininvoicemaindiscarditemsService } from 'src/app/services/productsales/listproductsalemaininvoicemaindiscarditems.service';

@Component({
  selector: 'app-showoldsalesbill',
  templateUrl: './showoldsalesbill.component.html',
  styleUrls: ['./showoldsalesbill.component.css']
})
export class ShowoldsalesbillComponent implements OnInit {

  public productSaleMainInvoiceDetails: ProductSaleInvoiceMainDetails;
  public productSaleMainInvoiceItems: ProductSaleInvoiceItems[];
  public productSaleDiscardSelectMainInvoicesItems: ProductSaleDiscardSelectMainInvoicesItems[];
  public p: any;
  public s: any;
  public InvoiceID: number;


  constructor(
    private _listproductsalemaininvoicemaindetailsService: ListproductsalemaininvoicemaindetailsService,
    private _listproductsalemaininvoicemainitemsService: ListproductsalemaininvoicemainitemsService,
    private _listproductsalemaininvoicemaindiscarditemsService: ListproductsalemaininvoicemaindiscarditemsService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute

  ) {

    this.productSaleMainInvoiceDetails = new ProductSaleInvoiceMainDetails();
    this.productSaleDiscardSelectMainInvoicesItems = [];
    this.productSaleMainInvoiceItems = [];
  }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(
      (params: Params) => {

        this.InvoiceID = params.get('InvoiceID');
      });
    this.productSaleMainInvoiceDetails = new ProductSaleInvoiceMainDetails();
    this.getProductSaleMainInvoiceDetails();
    this.getProductSaleMainInvoiceItems();
    this.getProductSaleMainInvoiceDiscardItems();

  }

  public getProductSaleMainInvoiceDetails() {
    this._listproductsalemaininvoicemaindetailsService.listProductSaleMainInvoiceDetails(this.InvoiceID)
      .subscribe((_result: ResultProductSaleInvoiceMainDetails) => {

        this.productSaleMainInvoiceDetails = _result.ProductSaleInvoiceMainDetails[0];
        console.log(this.productSaleMainInvoiceDetails);



      });

  }
  public getProductSaleMainInvoiceItems() {
    this._listproductsalemaininvoicemainitemsService.listProductSaleMainInvoiceItems(this.InvoiceID)
      .subscribe((_result: ResultProductSaleInvoiceItems) => {

        this.productSaleMainInvoiceItems = _result.ProductSaleInvoiceItems;




      });

  }
  public getProductSaleMainInvoiceDiscardItems() {
    this._listproductsalemaininvoicemaindiscarditemsService.listProductSaleMainInvoiceDiscardItems(this.InvoiceID)
      .subscribe((_result: ResultProductSaleDiscardSelectMainInvoicesItems) => {


        if (_result.ProductSaleDiscardInvoiceItems == null) {
          this.productSaleDiscardSelectMainInvoicesItems = [];


        } else {
          this.productSaleDiscardSelectMainInvoicesItems = _result.ProductSaleDiscardInvoiceItems;

        }
      });

  }
  public goToPrintOldSalesBill() {
    this._router.navigate(['printoldsalesbill', this.InvoiceID]);
  }
  public Refresh() {
    this.ngOnInit();
  }
}
