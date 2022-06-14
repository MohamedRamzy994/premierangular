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
// tslint:disable-next-line:max-line-length
import { ListproductsalediscardnotmaininvoiceitemsService } from 'src/app/services/productsales/listproductsalediscardnotmaininvoiceitems.service';
import { ListproductsalediscardnotmaininvoicesService } from 'src/app/services/productsales/listproductsalediscardnotmaininvoices.service';

@Component({
  selector: 'app-showoldsalebackwithoutbill',
  templateUrl: './showoldsalebackwithoutbill.component.html',
  styleUrls: ['./showoldsalebackwithoutbill.component.css']
})
export class ShowoldsalebackwithoutbillComponent implements OnInit {
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

  public goToPrintSaleBackWithoutBill() {
    this._router.navigate(['printsalebackwithoutbill', this.DiscardID]);
  }
  public Refresh() {
    this.ngOnInit();
  }
}
