import { EditbranchService } from './../../services/branches/editbranch.service';
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
import { AddbankService } from 'src/app/services/bankcheck/addbank.service';
import { DeletebankService } from 'src/app/services/bankcheck/deletebank.service';
import { EditbankService } from '../../services/bankcheck/editbank.service';
import { ListbranchesService } from '../../services/branches/listbranches.service';
import { ResultListBranches, ListBranchesModel, AddBranchModel, ResultAddBranch } from 'src/app/models/branches';
import { AddbrancheService } from '../../services/branches/addbranch.service';
import { DeletebranchService } from 'src/app/services/branches/deletebranch.service';
@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {
  public p: any;
  public branchesList: ListBranchesModel[];
  public selectedReason: ListBranchesModel;
  @ViewChild('ButtonAdd') buttonAdd: ElementRef;
  // public checked: boolean;
  public modalRef: BsModalRef;
  public addBranchModel: AddBranchModel;
  public SearchSuppliers: string;
  public reason: string ;
  constructor (
    private _notifierService: NotifierService,
    private modalService: BsModalService,
    private router: Router,
    private _listbranchesService: ListbranchesService ,
    private _addbranchService: AddbrancheService ,
    private _deletebranchService: DeletebranchService ,
    private _editbranchService: EditbranchService
  ) { }

  ngOnInit() {
    this.addBranchModel = new AddBranchModel();
    this.SearchSuppliers = '';
    this.branchesList = [];
    this.selectedReason = new ListBranchesModel();
    this.selectedReason.BranchID = 0 ;
    this.reason = '' ;
    this.GetAllBranches();
  }

  public SelectRow(_customer: ListBranchesModel): void {

    this.selectedReason = _customer;
    this.buttonAdd.nativeElement.disabled = true;

  }

  public RowSelected(_customer: ListBranchesModel): boolean {

    if (!this.selectedReason) {
      return false;
    }
    return this.selectedReason.BranchID === _customer.BranchID ? true : false;

  }

  public RemoveSelection(_customer: ListBranchesModel) {

    this.selectedReason = new ListBranchesModel() ;
    this.selectedReason.BranchID = 0 ;
    this.buttonAdd.nativeElement.disabled = false;

  }
   public openModal(template: TemplateRef<any>) {


    if (this.selectedReason.BranchID === 0) {
      this._notifierService.notify('error', 'من فضلك يجب تحديد فرع واحد على الاقل للقيام بعملية الحذف');

    } else {
      this.modalRef = this.modalService.show(template);

    }
  }
  public GetAllBranches(): void {

    this._listbranchesService.GetAllBranches().subscribe((_result: ResultListBranches) => {
      if (_result.BranchesList.length == 0) {

        this.branchesList = [];

      } else {
        this.branchesList = _result.BranchesList;
      }

      this.branchesList = _result.BranchesList;
    });

  }
  public openAddModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
  }
  public openEditModal(template: TemplateRef<any>): void {


    if (this.selectedReason.BranchID === 0) {

      this._notifierService.notify('error', 'من فضلك يجب تحديد فرع واحد على الاقل للقيام بعملية التعديل ');


    } else {

      if (this.RowSelected(this.selectedReason) === true) {


        this.modalRef = this.modalService.show(template);
      } else if (this.RowSelected(this.selectedReason) === false) {
        this._notifierService.notify('error', 'من فضلك يجب تحديد فرع واحد على الاقل للقيام بعملية التعديل ');

      } else {

        this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');


      }

    }
  }
  public AddBranch(_addBranchModel: AddBranchModel , _formGroup: FormGroup): void {
    this._addbranchService
      .AddBranch(_addBranchModel)
      .subscribe((_result: ResultAddBranch) => {
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
  public DeleteBranch(_branchID: number ): void {
    this._deletebranchService
      .DeleteBranch(_branchID)
      .subscribe((_result: ResultAddBranch) => {
        if (_result.Status === true) {
          this.modalRef.hide();

          this._notifierService.notify('success', _result.Message);
          this.ngOnInit();
        } else {
          this._notifierService.notify('error', _result.Message);
        }
      });
  }
  public EditBranch(_listBranchesModel: ListBranchesModel ): void {
    this._editbranchService
      .EditBranch(_listBranchesModel)
      .subscribe((_result: ResultAddBranch) => {
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

