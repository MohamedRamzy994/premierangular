import { DeleteresetstockreasonService } from './../../services/productresetstock/deleteresetstockreason.service';
import { ResultListResetStockReasons } from './../../models/productresetstock';
import { ListresetstockreasonsService } from './../../services/productresetstock/listresetstockreasons.service';
import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { ListcustomersService } from 'src/app/services/customers/listcustomers.service';
import { ResultWithdrawDepositReason, ListWithdrawDepositReasonModel, ResultAddAdditionalCostEvent } from 'src/app/models/salespoints';
import { ListwithdrawdepositreasonsService } from 'src/app/services/salespoints/listwithdrawdepositreasons.service';
import { FormGroup } from '@angular/forms';
import { AddwithdrawdepositreasonService } from 'src/app/services/salespoints/addwithdrawdepositreason.service';
import { DeletewithdrawdepositreasonService } from 'src/app/services/salespoints/deletewithdrawdepositreason.service';
import { EditwithdrawdepositreasonService } from '../../services/salespoints/editwithdrawdepositreason.service';
import { AddproductresetstockreasonService } from 'src/app/services/productresetstock/addproductresetstockreason.service';
import { EditresetstockreasonService } from 'src/app/services/productresetstock/editresetstockreason.service';
@Component({
  selector: 'app-listkindquantityreasons',
  templateUrl: './listkindquantityreasons.component.html',
  styleUrls: ['./listkindquantityreasons.component.css']
})
export class ListkindquantityreasonsComponent implements OnInit {
  public p: any;
  public WithdrawDepositReasonList: ListWithdrawDepositReasonModel[];
  public selectedReason: ListWithdrawDepositReasonModel;
  @ViewChild('ButtonAdd') buttonAdd: ElementRef;
  // public checked: boolean;
  public modalRef: BsModalRef;
  public SearchSuppliers: string;
  public reason: string ;
  constructor (
    private _notifierService: NotifierService,
    private modalService: BsModalService,
    private router: Router,
    private _listwithdrawdepositreasonsService: ListresetstockreasonsService ,
    private _addwithdrawdepositreasonService: AddproductresetstockreasonService ,
    private _deletewithdrawdepositreasonService: DeleteresetstockreasonService ,
    private _editWithdrawDepositReasonService: EditresetstockreasonService
  ) { }

  ngOnInit() {

    this.SearchSuppliers = '';
    this.WithdrawDepositReasonList = [];
    this.selectedReason = new ListWithdrawDepositReasonModel();
    this.selectedReason.ReasonID = 0 ;
    this.reason = '' ;
    this.getAllWithdrawDepositReasons();
  }

  public SelectRow(_customer: ListWithdrawDepositReasonModel): void {

    this.selectedReason = _customer;
    this.buttonAdd.nativeElement.disabled = true;

  }

  public RowSelected(_customer: ListWithdrawDepositReasonModel): boolean {

    if (!this.selectedReason) {
      return false;
    }
    return this.selectedReason.ReasonID === _customer.ReasonID ? true : false;

  }

  public RemoveSelection(_customer: ListWithdrawDepositReasonModel) {

    this.selectedReason =  new ListWithdrawDepositReasonModel();
    this.selectedReason.ReasonID = 0;
    this.buttonAdd.nativeElement.disabled = false;

  }
   public openModal(template: TemplateRef<any>) {


    if (this.selectedReason.ReasonID === 0) {

      this._notifierService.notify('error', '???? ???????? ?????? ?????????? ?????? ???????? ?????? ?????????? ???????????? ???????????? ?????????? ');


    } else {

      if (this.RowSelected(this.selectedReason) === true) {


        this.modalRef = this.modalService.show(template);
      } else if (this.RowSelected(this.selectedReason) === false) {
        this._notifierService.notify('error', '???? ???????? ?????? ?????????? ?????? ???????? ?????? ?????????? ???????????? ???????????? ?????????? ');

      } else {

        this._notifierService.notify('error', '???? ???? ???????? ???? ???????? ???????? ?????? ???????? ??????????');


      }

    }
  }
  public getAllWithdrawDepositReasons(): void {

    this._listwithdrawdepositreasonsService.GeAllResetStockReasons().subscribe((_result: ResultListResetStockReasons) => {
      if (_result.ReasonsList.length == 0) {

        this.WithdrawDepositReasonList = [];

      } else {
        this.WithdrawDepositReasonList = _result.ReasonsList;
      }

      this.WithdrawDepositReasonList = _result.ReasonsList;
    });

  }
  public openAddModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
  }
  public openEditModal(template: TemplateRef<any>): void {


    if (this.selectedReason.ReasonID === 0) {

      this._notifierService.notify('error', '???? ???????? ?????? ?????????? ?????? ???????? ?????? ?????????? ???????????? ???????????? ?????????????? ');


    } else {

      if (this.RowSelected(this.selectedReason) === true) {


        this.modalRef = this.modalService.show(template);
      } else if (this.RowSelected(this.selectedReason) === false) {
        this._notifierService.notify('error', '???? ???????? ?????? ?????????? ?????? ???????? ?????? ?????????? ???????????? ???????????? ?????????????? ');

      } else {

        this._notifierService.notify('error', '???? ???? ???????? ???? ???????? ???????? ?????? ???????? ??????????');


      }

    }


  }
  public AddWithdrawDepositReason(_reason: string , _formGroup: FormGroup): void {
    this._addwithdrawdepositreasonService
      .AddProductResetStockReason(_reason)
      .subscribe((_result: ResultAddAdditionalCostEvent) => {
        if (_result.Status === true) {

          _formGroup.reset();
          this.modalRef.hide();

          this._notifierService.notify('success', _result.Message);
          this.ngOnInit();
        } else {
          this._notifierService.notify('error', _result.Message);
        }
      });
  }
  public DeleteWithdrawDepositReason(_reasonID: number ): void {
    this._deletewithdrawdepositreasonService
      .DeleteResetStockReason(_reasonID)
      .subscribe((_result: ResultAddAdditionalCostEvent) => {
        if (_result.Status === true) {
          this.modalRef.hide();

          this._notifierService.notify('success', _result.Message);
          this.ngOnInit();
        } else {
          this._notifierService.notify('error', _result.Message);
        }
      });
  }
  public EditWithdrawDepositReason(_listWithdrawDepositReasonModel: ListWithdrawDepositReasonModel ): void {
    this._editWithdrawDepositReasonService
      .EditResetStockReason(_listWithdrawDepositReasonModel)
      .subscribe((_result: ResultAddAdditionalCostEvent) => {
        if (_result.Status === true) {
          this.modalRef.hide();

          this._notifierService.notify('success', _result.Message);
          this.ngOnInit();
        } else {
          this._notifierService.notify('error', _result.Message);
        }
      });
  }
  public Refresh() {
    this.ngOnInit();
    this.buttonAdd.nativeElement.disabled = false;

  }
}
