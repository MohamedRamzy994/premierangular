import { OauthenticatedsessionService } from 'src/app/services/general/Oauthenticatedsession.Service';
import { CancleopeningbalanceinvoiceService } from './../../services/productopeningbalance/cancleopeningbalanceinvoice.service';
// tslint:disable-next-line:max-line-length
import { ListProductOpenningBalanceInvoiceItemsModel, ResultListOpeningBalance, ResultListOpeningBalanceItems, ProductOpenningCancleInvoiceModel, ResultOpenningBalance } from './../../models/productopenningbalance';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, TemplateRef } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { ListproductopenningbalanceinvoiceitemsService } from '../../services/productopeningbalance/listproductopenningbalanceinvoiceitems.service';
import { ListproductopenningbalanceinvoicesService } from '../../services/productopeningbalance/listproductopenningbalanceinvoices.service';
import { ListProductOpenningBalanceInvoicesModel } from '../../models/productopenningbalance';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-showbalancebill',
  templateUrl: './showbalancebill.component.html',
  styleUrls: ['./showbalancebill.component.css']
})
export class ShowbalancebillComponent implements OnInit {
  public modalRef: BsModalRef;
  public modalService: BsModalService;
  notifierService: NotifierService;
  public productOpenningCancleInvoiceModel: ProductOpenningCancleInvoiceModel;
  public SelectedInvoice: ListProductOpenningBalanceInvoicesModel;
  public SelectedInvoiceID: string;
  public SelectedInvoiceItems: ListProductOpenningBalanceInvoiceItemsModel[];
  constructor(
    private _listproductopenningbalanceinvoicesService: ListproductopenningbalanceinvoicesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _notifierService: NotifierService,
    private _modalService: BsModalService,
    private _cancleopeningbalanceinvoiceService: CancleopeningbalanceinvoiceService,
    private _OauthenticatedsessionServiceService: OauthenticatedsessionService,
    private _listproductopenningbalanceinvoiceitemsService: ListproductopenningbalanceinvoiceitemsService


  ) {
    this.modalService = _modalService;
    this.notifierService = _notifierService;
    this.SelectedInvoice = new ListProductOpenningBalanceInvoicesModel();
    this.SelectedInvoiceItems = new Array<ListProductOpenningBalanceInvoiceItemsModel>();
    this.productOpenningCancleInvoiceModel =  new ProductOpenningCancleInvoiceModel();

  }

  ngOnInit() {
   
    this._activatedRoute.paramMap.subscribe(params => {

      this.SelectedInvoiceID = params.get('InvoiceId');

    });
    this.productOpenningCancleInvoiceModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
    this.productOpenningCancleInvoiceModel.InvoiceID = parseInt(this.SelectedInvoiceID , 10);
   
    this.getSelectedInvoiceDetails();

    this.getSelectedInvoiceItemsDetails();
  }


  public getSelectedInvoiceDetails(): void {

    this._listproductopenningbalanceinvoicesService.GeAllProductOpenningBalanceInvoices()
      .subscribe((_result: ResultListOpeningBalance) => {
        _result.InvoicesList.forEach((element: ListProductOpenningBalanceInvoicesModel) => {

          if (element.InvoiceID === parseInt(this.SelectedInvoiceID, 10)) {

            this.SelectedInvoice = element;

          }


        });


      });

  }
  public getSelectedInvoiceItemsDetails(): void {

    this._listproductopenningbalanceinvoiceitemsService.GeAllProducOpeningtBalancInvoiceItems(parseInt(this.SelectedInvoiceID, 10))
      .subscribe((_result: ResultListOpeningBalanceItems) => {
        this.SelectedInvoiceItems = _result.InvoiceItemsList;

      });

  }

  public DeleteStore() {

  }
  public goToPrintPreview(): void {

    this._router.navigate(['printopeningbalancekindbill', this.SelectedInvoiceID]);

  }
  public openCancleModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);

  }
  /**
   * ProductOpenningCancleInvoice
   */
  public ProductOpenningCancleInvoice(): void {
    this._cancleopeningbalanceinvoiceService.CancleOpeningBalanceInvoice(this.productOpenningCancleInvoiceModel)
    .subscribe((_resultOpenningBalance: ResultOpenningBalance) => {

      if (_resultOpenningBalance.Status === true) {
        this.modalRef.hide();

        this._notifierService.notify('success', _resultOpenningBalance.Message);
        this.ngOnInit();

      }

    });
  }
  public Refresh() {
    this.ngOnInit();
  }

}
