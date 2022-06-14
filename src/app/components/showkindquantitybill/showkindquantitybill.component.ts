import { ListproductresetstockinvoicesService } from './../../services/productresetstock/listproductresetstockinvoices.service';
// tslint:disable-next-line:max-line-length
import { ListProductOpenningBalanceInvoiceItemsModel, ResultListOpeningBalance, ResultListOpeningBalanceItems } from '../../models/productopenningbalance';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { ListproductopenningbalanceinvoiceitemsService } from '../../services/productopeningbalance/listproductopenningbalanceinvoiceitems.service';
import { ListproductopenningbalanceinvoicesService } from '../../services/productopeningbalance/listproductopenningbalanceinvoices.service';
import { ListProductOpenningBalanceInvoicesModel } from '../../models/productopenningbalance';
import { ListproductresetstockinvoiceitemsService } from '../../services/productresetstock/listproductresetstockinvoiceitems.service';
import { ListProductResetStockeModel,
  ListProductResetStockItemseModel, ResultListResetStockInvoices,
   ResultListResetStockItems } from '../../models/productresetstock';
@Component({
  selector: 'app-showbalancebill',
  templateUrl: './showkindquantitybill.component.html',
  styleUrls: ['./showkindquantitybill.component.css']
})
export class ShowkindquantitybillComponent implements OnInit {

  public SelectedInvoice: ListProductResetStockeModel;
  public SelectedInvoiceID: string;
  public SelectedInvoiceItems: ListProductResetStockItemseModel[];
  constructor(
    private _listproductresetstockinvoicesService: ListproductresetstockinvoicesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _listproductresetstockinvoiceitemsService: ListproductresetstockinvoiceitemsService


  ) {

    this.SelectedInvoice = new ListProductResetStockeModel();
    this.SelectedInvoiceItems = new Array<ListProductResetStockItemseModel>();


  }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(params => {

      this.SelectedInvoiceID = params.get('InvoiceId');

    });
    this.getSelectedInvoiceDetails();

    this.getSelectedInvoiceItemsDetails();
  }


  public getSelectedInvoiceDetails(): void {

    this._listproductresetstockinvoicesService.GeAllProductResetStockInvoices()
    .subscribe((_result: ResultListResetStockInvoices) => {
      _result.InvoicesList.forEach((element: ListProductResetStockeModel) => {

        if (element.InvoiceID === parseInt(this.SelectedInvoiceID, 10)) {

          this.SelectedInvoice = element;

        }


      });


    });

  }
  public getSelectedInvoiceItemsDetails(): void {

    this._listproductresetstockinvoiceitemsService.GeAllProductResetStockInvoiceItems(parseInt(this.SelectedInvoiceID, 10))
      .subscribe((_result: ResultListResetStockItems) => {
        this.SelectedInvoiceItems = _result.InvoiceItemsList;

      });

  }


  public goToPrintPreview(): void {

    this._router.navigate(['printresetstockkindbill', this.SelectedInvoiceID]);

  }
  public Refresh() {
    this.ngOnInit();
  }
}
