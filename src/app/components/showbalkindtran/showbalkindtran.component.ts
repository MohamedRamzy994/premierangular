import { ListtransferinvoiceitemsService } from './../../services/transferkinds/listtransferinvoiceitems.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import {
  ResultTransfer, ListTransferKindModel,
  ResultListTransferItems, ListTransferInvoiceItemsModel
} from './../../models/transferkinds';
import { ListtransferkindinvoicesService } from './../../services/transferkinds/listtransferkindinvoices.service';
import { Component, OnInit } from '@angular/core';
import { ResultListTransfer } from '../../models/transferkinds';

@Component({
  selector: 'app-showbalkindtran',
  templateUrl: './showbalkindtran.component.html',
  styleUrls: ['./showbalkindtran.component.css']
})
export class ShowbalkindtranComponent implements OnInit {

  public SelectedInvoice: ListTransferKindModel;
  public SelectedInvoiceID: string;
  public SelectedInvoiceItems: ListTransferInvoiceItemsModel[];
  constructor(
    private _listtransferkindinvoicesService: ListtransferkindinvoicesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _listtransferinvoiceitemsService: ListtransferinvoiceitemsService


  ) {

    this.SelectedInvoice = new ListTransferKindModel();
    this.SelectedInvoiceItems = new Array<ListTransferInvoiceItemsModel>();


  }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(params => {

      this.SelectedInvoiceID = params.get('InvoiceId');

    });
    this.getSelectedInvoiceDetails();

    this.getSelectedInvoiceItemsDetails();
  }


  public getSelectedInvoiceDetails(): void {

    this._listtransferkindinvoicesService.GeAllTransferKindInvoices().subscribe((_result: ResultListTransfer) => {
      _result.InvoicesList.forEach((element: ListTransferKindModel) => {

        if (element.InvoiceID === parseInt(this.SelectedInvoiceID, 10)) {

          this.SelectedInvoice = element;

        }


      });


    });

  }
  public getSelectedInvoiceItemsDetails(): void {

    this._listtransferinvoiceitemsService.GeAllTransferKindInvoices(parseInt(this.SelectedInvoiceID, 10))
      .subscribe((_result: ResultListTransferItems) => {
        this.SelectedInvoiceItems = _result.InvoiceItemsList;

      });

  }


  public goToPrintPreview(): void {

    this._router.navigate(['printkindbaltransbill', this.SelectedInvoiceID]);

  }
  public Refresh() {
    this.ngOnInit();
  }

}
