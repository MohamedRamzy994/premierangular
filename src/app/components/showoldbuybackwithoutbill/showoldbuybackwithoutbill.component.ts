import { Component, OnInit } from '@angular/core';
import { ProductBuyDiscardSelectMainInvoices, ProductBuyDiscardSelectMainInvoicesItems,
  ResultProductBuyDiscardSelectMainInvoicesItems,
   ResultProductBuyDiscardSelectMainInvoices } from 'src/app/models/productbuy';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ListproductbuydiscardmaininvoicesService } from 'src/app/services/productbuy/listproductbuydiscardmaininvoices.service';
import { ListproductbuydiscardmaininvoiceitemsService } from 'src/app/services/productbuy/listproductbuydiscardmaininvoiceitems.service';
// tslint:disable-next-line:max-line-length
import { ListproductbuydiscardnotmaininvoiceitemsService } from 'src/app/services/productbuy/listproductbuydiscardnotmaininvoiceitems.service';
import { ListproductbuydiscardnotmaininvoicesService } from 'src/app/services/productbuy/listproductbuydiscardnotmaininvoices.service';

@Component({
  selector: 'app-showoldbuybackwithoutbill',
  templateUrl: './showoldbuybackwithoutbill.component.html',
  styleUrls: ['./showoldbuybackwithoutbill.component.css']
})
export class ShowoldbuybackwithoutbillComponent implements OnInit {
  public p: any;
  public DiscardID: number;
  public productBuyDiscardMainInvoice: ProductBuyDiscardSelectMainInvoices;
  public productBuyDiscardMainInvoicesItems: ProductBuyDiscardSelectMainInvoicesItems[];
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _listproductbuydiscardmaininvoicesService: ListproductbuydiscardnotmaininvoicesService,
    private _listproductbuydiscardnotmaininvoiceitemsService: ListproductbuydiscardnotmaininvoiceitemsService
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
    this._listproductbuydiscardnotmaininvoiceitemsService.listProductBuyDiscardMainInvoiceItems(this.DiscardID)
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

  public goToPrintBuyBackWithoutBill() {
    this._router.navigate(['printbuybackwithoutbill', this.DiscardID]);
  }

  public Refresh() {
    this.ngOnInit();
  }
}
