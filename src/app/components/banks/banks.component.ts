import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { ListcustomersService } from 'src/app/services/customers/listcustomers.service';
import { ResultWithdrawDepositReason, ResultAddAdditionalCostEvent } from 'src/app/models/salespoints';
import { ListwithdrawdepositreasonsService } from 'src/app/services/salespoints/listwithdrawdepositreasons.service';
import { FormGroup } from '@angular/forms';
import { AddwithdrawdepositreasonService } from 'src/app/services/salespoints/addwithdrawdepositreason.service';
import { DeletewithdrawdepositreasonService } from 'src/app/services/salespoints/deletewithdrawdepositreason.service';
import { EditwithdrawdepositreasonService } from '../../services/salespoints/editwithdrawdepositreason.service';
import { ListbanksService } from '../../services/bankcheck/listbanks.service';
import { ResultListBanks, ListBanksModel } from '../../models/bankcheck';
import { AddbankService } from 'src/app/services/bankcheck/addbank.service';
import { DeletebankService } from 'src/app/services/bankcheck/deletebank.service';
import { EditbankService } from '../../services/bankcheck/editbank.service';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {
  public p: any;
  public banksList: ListBanksModel[];
  public selectedReason: ListBanksModel;
  @ViewChild('ButtonAdd') buttonAdd: ElementRef;
  // public checked: boolean;
  public modalRef: BsModalRef;
  public SearchSuppliers: string;
  public reason: string ;
  constructor (
    private _notifierService: NotifierService,
    private modalService: BsModalService,
    private router: Router,
    private _listbanksService: ListbanksService ,
    private _addbankService: AddbankService ,
    private _deletebankService: DeletebankService ,
    private _editbankService: EditbankService
  ) { }

  ngOnInit() {

    this.SearchSuppliers = '';
    this.banksList = [];
    this.selectedReason = new ListBanksModel();
    this.selectedReason.BankID = 0 ;
    this.reason = '' ;
    this.GetAllBanks();
  }

  public SelectRow(_customer: ListBanksModel): void {

    this.selectedReason = _customer;
    this.buttonAdd.nativeElement.disabled = true;

  }

  public RowSelected(_customer: ListBanksModel): boolean {

    if (!this.selectedReason) {
      return false;
    }
    return this.selectedReason.BankID === _customer.BankID ? true : false;

  }

  public RemoveSelection(_customer: ListBanksModel) {

    this.selectedReason = new ListBanksModel() ;
    this.selectedReason.BankID = 0 ;
    this.buttonAdd.nativeElement.disabled = false;

  }
   public openModal(template: TemplateRef<any>) {


    if (this.selectedReason.BankID === 0) {
      this._notifierService.notify('error', 'من فضلك يجب تحديد بنك واحد على الاقل للقيام بعملية الحذف');

    } else {
      this.modalRef = this.modalService.show(template);

    }
  }
  public GetAllBanks(): void {

    this._listbanksService.getAllBanks().subscribe((_result: ResultListBanks) => {
      if (_result.BanksList.length == 0) {

        this.banksList = [];

      } else {
        this.banksList = _result.BanksList;
      }

      this.banksList = _result.BanksList;
    });

  }
  public openAddModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
  }
  public openEditModal(template: TemplateRef<any>): void {


    if (this.selectedReason.BankID === 0) {

      this._notifierService.notify('error', 'من فضلك يجب تحديد بنك واحد على الاقل للقيام بعملية التعديل ');


    } else {

      if (this.RowSelected(this.selectedReason) === true) {


        this.modalRef = this.modalService.show(template);
      } else if (this.RowSelected(this.selectedReason) === false) {
        this._notifierService.notify('error', 'من فضلك يجب تحديد بنك واحد على الاقل للقيام بعملية التعديل ');

      } else {

        this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');


      }

    }
  }
  public AddBank(_reason: string , _formGroup: FormGroup): void {
    this._addbankService
      .AddBank(_reason)
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
  public DeleteBank(_reasonID: number ): void {
    this._deletebankService
      .DeleteBank(_reasonID)
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
  public EditBank(_listWithdrawDepositReasonModel: ListBanksModel ): void {
    this._editbankService
      .EditBank(_listWithdrawDepositReasonModel)
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
