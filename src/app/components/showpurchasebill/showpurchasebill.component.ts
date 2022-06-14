import { Component, OnInit } from '@angular/core';
import { ProductBuySelectMainInvoices, ResultProductBuySelectMainInvoices,
  ResultProductBuyDiscardSelectMainInvoicesItems,
   ProductBuyDiscardSelectMainInvoicesItems } from 'src/app/models/productbuy';
import { ListproductbuymaininvoicesService } from 'src/app/services/productbuy/listproductbuymaininvoices.service';
import { element } from 'protractor';
import { ProductBuyMainTableModel, ProductBuyInvoiceItems, ResultProductBuyInvoiceItems } from '../../models/productbuy';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ListproductbuymaininvoiceitemsService } from '../../services/productbuy/listproductbuymaininvoiceitems.service';
// tslint:disable-next-line:max-line-length
import { ListproductbuyalldiscardmaininvoiceitemsService } from 'src/app/services/productbuy/listproductbuyalldiscardmaininvoiceitems.service';

@Component({
  selector: 'app-showpurchasebill',
  templateUrl: './showpurchasebill.component.html',
  styleUrls: ['./showpurchasebill.component.css']
})
export class ShowpurchasebillComponent implements OnInit {
  public productBuyMainInvoices: ProductBuySelectMainInvoices;
  public InvoiceID: number;
  public productBuyMainInvoicesItems: ProductBuyInvoiceItems[];
  public productBuyDiscardMainInvoicesItems: ProductBuyDiscardSelectMainInvoicesItems[];
  public p: any;
  constructor(
    private _listproductbuymaininvoicesService: ListproductbuymaininvoicesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _listproductbuymaininvoiceitemsService: ListproductbuymaininvoiceitemsService,
    private _listproductbuydiscardmaininvoiceitemsService: ListproductbuyalldiscardmaininvoiceitemsService
  ) {
    this.productBuyMainInvoices = new ProductBuySelectMainInvoices();
    this.productBuyMainInvoicesItems = [];
    this.productBuyDiscardMainInvoicesItems = [];
  }
  ngOnInit() {

    this._activatedRoute.paramMap.subscribe(
      (params: Params) => {

        this.InvoiceID = params.get('InvoiceID');
      });

    this.getProductBuyMainInvoices();
    this.getProductBuyMainInvoiceItems();
    this.getProductBuyDiscardMainInvoiceItems();
  }
  public getProductBuyMainInvoices() {
    this._listproductbuymaininvoicesService.listProductBuyMainInvoices().subscribe((_result: ResultProductBuySelectMainInvoices) => {


      _result.ProductBuyInvoices.forEach((_element: ProductBuySelectMainInvoices) => {

        if (_element.InvoiceID == this.InvoiceID) {

          this.productBuyMainInvoices = _element;
        }

      });



    });

  }

  public getProductBuyMainInvoiceItems() {
    this._listproductbuymaininvoiceitemsService.listProductBuyMainInvoiceItems(this.InvoiceID)
      .subscribe((_result: ResultProductBuyInvoiceItems) => {
        if (_result.ProductBuyInvoiceItems == null) {
          this.productBuyMainInvoicesItems = [];
        } else {
          this.productBuyMainInvoicesItems = _result.ProductBuyInvoiceItems;
        }
      });

  }

  public getProductBuyDiscardMainInvoiceItems() {
    this._listproductbuydiscardmaininvoiceitemsService.listProductBuyAllDiscardMainInvoiceItems(this.InvoiceID)
      .subscribe((_result: ResultProductBuyDiscardSelectMainInvoicesItems) => {
        if (_result.ProductBuyDiscardInvoiceItems == null) {
          this.productBuyDiscardMainInvoicesItems = [];

        } else {
          this.productBuyDiscardMainInvoicesItems = _result.ProductBuyDiscardInvoiceItems;

        }




      });

  }
  /**
   * name
   */
  public goToPrintPurchasePill() {
    this._router.navigate(['printpurchasebill', this.InvoiceID]);
  }

  public Refresh() {
    this.ngOnInit();
  }

}
