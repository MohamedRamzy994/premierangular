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
@Component({
  selector: 'app-reasonwithdrawdeposit',
  templateUrl: './reasonwithdrawdeposit.component.html',
  styleUrls: ['./reasonwithdrawdeposit.component.css']
})
export class ReasonwithdrawdepositComponent implements OnInit {
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
    private _listwithdrawdepositreasonsService: ListwithdrawdepositreasonsService ,
    private _addwithdrawdepositreasonService: AddwithdrawdepositreasonService ,
    private _deletewithdrawdepositreasonService: DeletewithdrawdepositreasonService ,
    private _editWithdrawDepositReasonService: EditwithdrawdepositreasonService
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

      this._notifierService.notify('error', 'من فضلك يجب تحديد سبب واحد على الاقل للقيام بعملية الحذف ');


    } else {

      if (this.RowSelected(this.selectedReason) === true) {


        this.modalRef = this.modalService.show(template);
      } else if (this.RowSelected(this.selectedReason) === false) {
        this._notifierService.notify('error', 'من فضلك يجب تحديد سبب واحد على الاقل للقيام بعملية الحذف ');

      } else {

        this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');


      }

    }
  }
  public getAllWithdrawDepositReasons(): void {

    this._listwithdrawdepositreasonsService.GetAllWithdrawDepositReason().subscribe((_result: ResultWithdrawDepositReason) => {
      if (_result.ListWithdrawDepositReason.length == 0) {

        this.WithdrawDepositReasonList = [];

      } else {
        this.WithdrawDepositReasonList = _result.ListWithdrawDepositReason;
      }

      this.WithdrawDepositReasonList = _result.ListWithdrawDepositReason;
    });

  }
  public openAddModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
  }
  public openEditModal(template: TemplateRef<any>): void {


    if (this.selectedReason.ReasonID === 0) {

      this._notifierService.notify('error', 'من فضلك يجب تحديد سبب واحد على الاقل للقيام بعملية التعديل ');


    } else {

      if (this.RowSelected(this.selectedReason) === true) {


        this.modalRef = this.modalService.show(template);
      } else if (this.RowSelected(this.selectedReason) === false) {
        this._notifierService.notify('error', 'من فضلك يجب تحديد سبب واحد على الاقل للقيام بعملية التعديل ');

      } else {

        this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');


      }

    }


  }
  public AddWithdrawDepositReason(_reason: string , _formGroup: FormGroup): void {
    this._addwithdrawdepositreasonService
      .AddWithdrawDepositReason(_reason)
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
      .DeleteWithdrawDepositReason(_reasonID)
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
      .EditWithdrawDepositReason(_listWithdrawDepositReasonModel)
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
  }
}
