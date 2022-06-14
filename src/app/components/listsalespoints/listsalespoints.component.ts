import { EditbranchService } from './../../services/branches/editbranch.service';
import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { ListcustomersService } from 'src/app/services/customers/listcustomers.service';
import { ResultWithdrawDepositReason, ResultAddAdditionalCostEvent, ResultListSalesPoints, AddSalesPointsModel, ResultAddSalesPoint } from 'src/app/models/salespoints';
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
import { ResultListBranches, AddBranchModel, ResultAddBranch } from 'src/app/models/branches';
import { AddbrancheService } from '../../services/branches/addbranch.service';
import { DeletebranchService } from 'src/app/services/branches/deletebranch.service';
import { ListallsalespointsService } from '../../services/salespoints/listallsalespoints.service';
import { ListsalespointsService } from 'src/app/services/salespoints/listsalespoints.service';
import { ListSalesPointsModel } from '../../models/salespoints';
import { AddsalespointService } from '../../services/salespoints/addsalespoint.service';
import { DeletsalespointService } from 'src/app/services/salespoints/deletsalespoint.service';
import { EditsalespointService } from 'src/app/services/salespoints/editsalespoint.service';
@Component({
  selector: 'app-listsalespoints',
  templateUrl: './listsalespoints.component.html',
  styleUrls: ['./listsalespoints.component.css']
})
export class ListsalespointsComponent implements OnInit {
  public p: any;
  public branchesList: ListSalesPointsModel[];
  public selectedReason: ListSalesPointsModel;
  @ViewChild('ButtonAdd') buttonAdd: ElementRef;
  // public checked: boolean;
  public modalRef: BsModalRef;
  public addBranchModel: AddSalesPointsModel;
  public SearchSuppliers: string;
  public reason: string ;
  constructor (
    private _notifierService: NotifierService,
    private modalService: BsModalService,
    private router: Router,
    private _listallsalespointsService: ListallsalespointsService ,
    private _addsalespointService: AddsalespointService ,
    private _deletsalespointService: DeletsalespointService ,
    private _editsalespointService: EditsalespointService
  ) { }

  ngOnInit() {
    this.addBranchModel = new AddSalesPointsModel();
    this.SearchSuppliers = '';
    this.branchesList = [];
    this.selectedReason = new ListSalesPointsModel();
    this.selectedReason.SalesPointID = 0 ;
    this.reason = '' ;
    this.GetAllSalesPoints();
  }

  public SelectRow(_customer: ListSalesPointsModel): void {

    this.selectedReason = _customer;
    this.buttonAdd.nativeElement.disabled = true;

  }

  public RowSelected(_customer: ListSalesPointsModel): boolean {

    if (!this.selectedReason) {
      return false;
    }
    return this.selectedReason.SalesPointID === _customer.SalesPointID ? true : false;

  }

  public RemoveSelection(_customer: ListSalesPointsModel) {

    this.selectedReason = new ListSalesPointsModel() ;
    this.selectedReason.SalesPointID = 0 ;
    this.buttonAdd.nativeElement.disabled = false;

  }
   public openModal(template: TemplateRef<any>) {


    if (this.selectedReason.SalesPointID === 0) {
      this._notifierService.notify('error', 'من فضلك يجب تحديد نقطة بيع واحد على الاقل للقيام بعملية الحذف');

    } else {
      this.modalRef = this.modalService.show(template);

    }
  }
  public GetAllSalesPoints(): void {

    this._listallsalespointsService.ListAllSalesPoints().subscribe((_result: ResultListSalesPoints) => {
      if (_result.SalesPointsList.length == 0) {

        this.branchesList = [];

      } else {
        this.branchesList = _result.SalesPointsList;
      }

      this.branchesList = _result.SalesPointsList;
    });

  }
  public openAddModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
  }
  public openEditModal(template: TemplateRef<any>): void {


    if (this.selectedReason.SalesPointID === 0) {

      this._notifierService.notify('error', 'من فضلك يجب تحديد نقطة بيع واحد على الاقل للقيام بعملية التعديل ');


    } else {

      if (this.RowSelected(this.selectedReason) === true) {


        this.modalRef = this.modalService.show(template);
      } else if (this.RowSelected(this.selectedReason) === false) {
        this._notifierService.notify('error', 'من فضلك يجب تحديد نقطة بيع واحد على الاقل للقيام بعملية التعديل ');

      } else {

        this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');


      }

    }
  }
  public AddSalesPoint(_addBranchModel: AddSalesPointsModel , _formGroup: FormGroup): void {
    this._addsalespointService
      .AddSalesPoint(_addBranchModel)
      .subscribe((_result: ResultAddSalesPoint) => {
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
  public DeletSalesPoint(_branchID: number ): void {
    this._deletsalespointService
      .DeletSalesPoint(_branchID)
      .subscribe((_result: ResultAddSalesPoint) => {
        if (_result.Status === true) {
          this.modalRef.hide();

          this._notifierService.notify('success', _result.Message);
          this.ngOnInit();
        } else {
          this._notifierService.notify('error', _result.Message);
        }
      });
  }
  public EditSalesPoint(_listBranchesModel: ListSalesPointsModel ): void {
    this._editsalespointService
      .EditSalesPoint(_listBranchesModel)
      .subscribe((_result: ResultAddSalesPoint) => {
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
