import { ProductBuyDiscardSelectMainInvoicesItems, ProductBuyDiscardSelectMainInvoices,
   ResultProductBuyDiscardSelectMainInvoices } from './../../models/productbuy';
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

@Component({
  selector: 'app-showoldbuybackwithbill',
  templateUrl: './showoldbuybackwithbill.component.html',
  styleUrls: ['./showoldbuybackwithbill.component.css']
})
export class ShowoldbuybackwithbillComponent implements OnInit {
  public DiscardID: number;
  public productBuyDiscardMainInvoice: ProductBuyDiscardSelectMainInvoices;
  public productBuyDiscardMainInvoicesItems: ProductBuyDiscardSelectMainInvoicesItems[];
  public p: any;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _listproductbuydiscardmaininvoicesService: ListproductbuydiscardmaininvoicesService,
    private _listproductbuydiscardmaininvoiceitemsService: ListproductbuydiscardmaininvoiceitemsService,
    private _router: Router
  ) {
    this.productBuyDiscardMainInvoicesItems = [];
    this.productBuyDiscardMainInvoice = new ProductBuyDiscardSelectMainInvoices();
  }
  ngOnInit() {

    this._activatedRoute.paramMap.subscribe(
      (params: Params) => {

        this.DiscardID = params.get('DiscardID');
      });
    this.getProductBuyDiscardMainInvoiceItems();
    this.getproductbuydiscardSlelectedInvoice();
  }

  public getProductBuyDiscardMainInvoiceItems() {
    this._listproductbuydiscardmaininvoiceitemsService.listProductBuyDiscardMainInvoiceItems(this.DiscardID)
      .subscribe((_result: ResultProductBuyDiscardSelectMainInvoicesItems) => {
        this.productBuyDiscardMainInvoicesItems = _result.ProductBuyDiscardInvoiceItems;




      });

  }

  getproductbuydiscardSlelectedInvoice(): void {

    this._listproductbuydiscardmaininvoicesService.listProductBuyDiscardMainInvoices()
      .subscribe((_result: ResultProductBuyDiscardSelectMainInvoices) => {

        _result.ProductBuyDiscardInvoices.forEach((element: ProductBuyDiscardSelectMainInvoices) => {

          if (element.DiscardID == this.DiscardID) {

            this.productBuyDiscardMainInvoice = element;
            return ;
          }

        });

      });
  }

  /**
   * name
   */
  public goToPrintBuyBackWithBill() {
    this._router.navigate(['printbuybackwithbill', this.DiscardID]);
  }
  public Refresh() {
    this.ngOnInit();
  }
}
