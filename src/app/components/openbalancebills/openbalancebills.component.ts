import { ListProductOpenningBalanceModel, ResultListOpeningBalance, ListProductOpenningBalanceInvoicesModel } from './../../models/productopenningbalance';
import { Router } from '@angular/router';
import { Stores } from './../../models/stores';
import { Resultstores } from './../../models/resultstores';
import { ListstoresService } from './../../services/stores/liststores.service';
import { ResultListTransfer, TransferKindsModel, ListTransferKindModel } from './../../models/transferkinds';
import { NotifierService } from 'angular-notifier';
import { Component, OnInit, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { INgxMyDpOptions } from 'ngx-mydatepicker';
import { ListproductopenningbalanceinvoicesService } from '../../services/productopeningbalance/listproductopenningbalanceinvoices.service';
@Component({
  selector: 'app-openbalancebills',
  templateUrl: './openbalancebills.component.html',
  styleUrls: ['./openbalancebills.component.css']
})
export class OpenbalancebillsComponent implements OnInit {
  public ListInvoices: ListProductOpenningBalanceInvoicesModel[];
  public ListStores: Stores[];
  public p: any;
  public SelectedInvoice: ListProductOpenningBalanceInvoicesModel;
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
    private _listproductopenningbalanceinvoicesService: ListproductopenningbalanceinvoicesService,
    private _notifierService: NotifierService,
    private _liststoresService: ListstoresService,
    private _router: Router

  ) {

    this.ListInvoices = [];
    this.UserName = '';
    this.StoreName = '';
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

    this.SelectedInvoice = new ListProductOpenningBalanceInvoicesModel();


  }



  ngOnInit() {

    this.GetAllTransferKindsInvoices();
    this.GetAllStores();

  }


  public GetAllTransferKindsInvoices() {

    this._listproductopenningbalanceinvoicesService.GeAllProductOpenningBalanceInvoices().subscribe((_result: ResultListOpeningBalance) => {



      if (_result.InvoicesList.length == 0 || _result.InvoicesList == null) {

        this.ListInvoices = [];

      } else {
        this.ListInvoices = _result.InvoicesList;
        this.ListInvoices.forEach(element => {
          if (element.Existing == true) {

            element.Status = 'فاتورة صحيحة ';
          }  else if (element.Existing == false) {
            element.Status = 'فاتـورة ملـغـيـة ';

          }
        });
      }

    });
  }

  public GetAllStores() {

    this._liststoresService.listStores().subscribe((_result: Resultstores) => {

      this.ListStores = _result.StoresList;

    });
  }

  public GetDateFrom(event) {

    this.DateFrom = this.DateFromObject.jsdate;
  }
  public GetDateTo(event) {

    this.DateTo = this.DateToObject.jsdate;
  }

  public SelectRow(_kindInvoice: ListProductOpenningBalanceInvoicesModel): void {

    this.SelectedInvoice = _kindInvoice;


  }

  public RowSelected(_kindInvoice: ListProductOpenningBalanceInvoicesModel): boolean {

    if (!this.SelectedInvoice) {
      return false;
    }
    return this.SelectedInvoice.InvoiceID === _kindInvoice.InvoiceID ? true : false;

  }

  public RemoveSelection(_kindInvoice: ListProductOpenningBalanceInvoicesModel) {

    this.SelectedInvoice = null;

  }

  public goshowInvoice(): void {

    if (this.SelectedInvoice.InvoiceID) {
      this._router.navigate(['showbalancebill', this.SelectedInvoice.InvoiceID]);

    } else {

      this._notifierService.notify('error', 'من فضلك يجب اختيار الفاتورة التى تريد عرض بياناتها ');


    }


  }
  public Refresh() {
    this.ngOnInit();
  }
}
