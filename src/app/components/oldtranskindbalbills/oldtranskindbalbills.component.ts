import { Router } from '@angular/router';
import { Stores } from './../../models/stores';
import { Resultstores } from './../../models/resultstores';
import { ListstoresService } from './../../services/stores/liststores.service';
import { ResultListTransfer, TransferKindsModel, ListTransferKindModel } from './../../models/transferkinds';
import { NotifierService } from 'angular-notifier';
import { ListtransferkindinvoicesService } from './../../services/transferkinds/listtransferkindinvoices.service';
import { Component, OnInit, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { INgxMyDpOptions } from 'ngx-mydatepicker';

@Component({
  selector: 'app-oldtranskindbalbills',
  templateUrl: './oldtranskindbalbills.component.html',
  styleUrls: ['./oldtranskindbalbills.component.css']
})
export class OldtranskindbalbillsComponent implements OnInit {
  public ListInvoices: ListTransferKindModel[];
  public ListStores: Stores[];
  public p: any;
  public SelectedInvoice: ListTransferKindModel;
  public UserName: string;
  public StoreName: string;
  public StoreTo: string;
  public DateFrom: Date;
  public DateTo: Date;
  public DateToObject: any;
  public DateFromObject: any;

  myOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'mmm d, yyyy',
  };

  constructor(
    private _listtransferkindinvoicesService: ListtransferkindinvoicesService,
    private _notifierService: NotifierService,
    private _liststoresService: ListstoresService,
    private _router: Router

  ) {

    this.ListInvoices = [];
    this.UserName = '';
    this.StoreName = '';
    this.StoreTo = '';
    this.DateFromObject = {
      'date': {
        'year': 2000,
        'month': 1,
        'day': 1
      },
      'jsdate': '2000-01-01T22:00:00.000Z',
      'formatted': 'Jan 1, 2018'
    };
    this.DateToObject = {
      'date': {
        'year': 2030,
        'month': 1,
        'day': 1
      },
      'jsdate': '2030-01-01T22:00:00.000Z',
      'formatted': 'Jan 1, 2030'
    };


    this.DateFrom = this.DateFromObject.jsdate;
    this.DateTo = this.DateToObject.jsdate;

    this.SelectedInvoice = new ListTransferKindModel();


  }



  ngOnInit() {

    this.GetAllTransferKindsInvoices();
    this.GetAllStores();

  }


  public GetAllTransferKindsInvoices() {

    this._listtransferkindinvoicesService.GeAllTransferKindInvoices().subscribe((_result: ResultListTransfer) => {

      if (_result.InvoicesList.length == 0 || _result.InvoicesList == null) {
        this.ListInvoices = [];
      } else {
        this.ListInvoices = _result.InvoicesList;
      }



    });
  }

  public GetAllStores() {

    this._liststoresService.listStores().subscribe((_result: Resultstores) => {

      this.ListStores = _result.StoresList;

    });
  }

  public GetDateFrom(event) {

    console.log(this.DateFrom);
    this.DateFrom = this.DateFromObject.jsdate;
  }
  public GetDateTo(event) {

    this.DateTo = this.DateToObject.jsdate;
  }

  public SelectRow(_kindInvoice: ListTransferKindModel): void {

    this.SelectedInvoice = _kindInvoice;


  }

  public RowSelected(_kindInvoice: ListTransferKindModel): boolean {

    if (!this.SelectedInvoice) {
      return false;
    }
    return this.SelectedInvoice.InvoiceID === _kindInvoice.InvoiceID ? true : false;

  }

  public RemoveSelection(_kindInvoice: ListTransferKindModel) {

    this.SelectedInvoice = null;

  }

  public goshowInvoice(): void {

    if (this.SelectedInvoice.InvoiceID) {
      this._router.navigate(['showbalkindtran', this.SelectedInvoice.InvoiceID]);

    } else {

      this._notifierService.notify('error', 'من فضلك يجب اختيار الفاتورة التى تريد عرض بياناتها ');


    }


  }
  public Refresh() {
    this.ngOnInit();
  }
}
