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
  ResultProductSaleDiscardSelectMainInvoicesItems, ProductSaleDiscardSelectMainInvoicesItems
} from 'src/app/models/productsales';
// tslint:disable-next-line:max-line-length
import { ListproductsalediscardmaininvoiceitemsService } from 'src/app/services/productsales/listproductsalediscardmaininvoiceitems.service';
@Component({
  selector: 'app-showoldsalebackwithbill',
  templateUrl: './showoldsalebackwithbill.component.html',
  styleUrls: ['./showoldsalebackwithbill.component.css']
})
export class ShowoldsalebackwithbillComponent implements OnInit {
  public DiscardID: number;
  public p: any;

  public productSaleDiscardMainInvoice: ProductSaleDiscardSelectMainInvoices;
  public productSaleDiscardSelectMainInvoicesItems: ProductSaleDiscardSelectMainInvoicesItems[];
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _listproductsalediscardmaininvoicesService: ListproductsalediscardmaininvoicesService,
    private _listproductsalediscardmaininvoiceitemsService: ListproductsalediscardmaininvoiceitemsService
  ) {
    this.productSaleDiscardSelectMainInvoicesItems = [];
    this.productSaleDiscardMainInvoice = new ProductSaleDiscardSelectMainInvoices();
  }
  ngOnInit() {

    this._activatedRoute.paramMap.subscribe(
      (params: Params) => {
        this.DiscardID = params.get('DiscardID');
      });
    this.getProductSaleDiscardMainInvoiceItems();
    this.getproductsalediscardSlelectedInvoice();
  }
  public getProductSaleDiscardMainInvoiceItems() {
    this._listproductsalediscardmaininvoiceitemsService.listProductSaleDiscardMainInvoiceItems(this.DiscardID)
      .subscribe((_result: ResultProductSaleDiscardSelectMainInvoicesItems) => {
        this.productSaleDiscardSelectMainInvoicesItems = _result.ProductSaleDiscardInvoiceItems;
        console.log(_result);
      });

  }

  getproductsalediscardSlelectedInvoice(): void {

    this._listproductsalediscardmaininvoicesService.listProductSaleDiscardMainInvoices()
      .subscribe((_result: ResultProductSaleDiscardSelectMainInvoices) => {

        _result.ProductSaleDiscardInvoices.forEach((element: ProductSaleDiscardSelectMainInvoices) => {

          if (element.DiscardID == this.DiscardID) {

            this.productSaleDiscardMainInvoice = element;
            return;
          }

        });

      });
  }
  public goToPrintSaleBackWithBill() {
    this._router.navigate(['printsalebackwithbill', this.DiscardID]);
  }
  public Refresh() {
    this.ngOnInit();
  }
}
