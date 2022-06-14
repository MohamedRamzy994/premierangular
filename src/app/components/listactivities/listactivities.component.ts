import { UpdateactivityService } from './../../services/notificationsactivities/updateactivity.service';
import { User } from 'src/app/models/user';
import { UserlistService } from './../../services/user/userlist.service';
import { ListAllActivitiesRecordsModel } from './../../models/notificationsactivities';
import { EditbranchService } from './../../services/branches/editbranch.service';
import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { ListcustomersService } from 'src/app/services/customers/listcustomers.service';
import { ResultWithdrawDepositReason, ResultAddAdditionalCostEvent, ResultListSalesPoints,
   AddSalesPointsModel, ResultAddSalesPoint } from 'src/app/models/salespoints';
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
import { ListactivitiesService } from 'src/app/services/notificationsactivities/listactivities.service';
import { ResultListAllActivitiesRecords, ResultAddActivityRecord } from 'src/app/models/notificationsactivities';
import { Result } from 'src/app/models/result';
@Component({
  selector: 'app-listactivities',
  templateUrl: './listactivities.component.html',
  styleUrls: ['./listactivities.component.css']
})
export class ListactivitiesComponent implements OnInit {
  public p: any;
  public activitiesList: ListAllActivitiesRecordsModel[];
  public listSalesPoints: ListSalesPointsModel[];
  public selectedReason: ListSalesPointsModel;
  @ViewChild('ButtonAdd') buttonAdd: ElementRef;
  // public checked: boolean;
  public modalRef: BsModalRef;
  public addBranchModel: AddSalesPointsModel;
  public SearchSuppliers: string;
  public reason: string ;
  public usersResult: Result;
  constructor (
    private _notifierService: NotifierService,
    private modalService: BsModalService,
    private router: Router,
    private _listactivitiesService: ListactivitiesService ,
    private _userlistService: UserlistService ,
    private _listsalespointsService: ListallsalespointsService ,
    private _updateactivityService: UpdateactivityService
  ) {
    this.GetAllUsers();
    this.usersResult = new  Result();
    this.usersResult.UserList = [];
    this.listSalesPoints = [];
    this.GetAllActivities();
  }

  ngOnInit() {
    this.addBranchModel = new AddSalesPointsModel();
    this.SearchSuppliers = '';
    this.activitiesList = [];
    this.selectedReason = new ListSalesPointsModel();
    this.selectedReason.SalesPointID = 0 ;
    this.reason = '' ;
    // this.usersResult =  new Result();
    this.GetAllUsers();
    this.GetAllSalesPoints();
    this.GetAllActivities();
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
  public UpdateActivityRecord(ID: number , Read: boolean) {
    this._updateactivityService.UpdateActivityRecord(ID , Read).subscribe((_result: ResultAddActivityRecord) =>{

      if(_result.Status === true) {
      this._notifierService.notify('success' , _result.Message);
      this.GetAllActivities();
    } else {
      this.GetAllActivities();
      this._notifierService.notify('error' , _result.Message);
    }
    });
  }
  public GetAllActivities(): void {

    this._listactivitiesService.ListAllActivities().subscribe((_result: ResultListAllActivitiesRecords) => {
      if (_result.AllActivitiesRecords.length == 0) {

        this.activitiesList = [];

      } else {
        this.activitiesList = _result.AllActivitiesRecords.reverse();
        this.activitiesList.forEach(value => {
          value.ShowFormat = ' تم تحرير ' + value.Type + ' بواسطة ' + '   '
          + this.usersResult.UserList.find((_user: User) => _user.UserId == value.UserID).UserName + '   '
          + 'فى تاريخ' + '   ' + value.DateSubmit + '   ' + 'من خلال نقطة  بيع' + '   '
          + this.listSalesPoints.find((_salespoint: ListSalesPointsModel) => _salespoint.SalesPointID == value.POS).SalesPoint;
        });
      }
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
  public GetAllUsers(): void {
    this._userlistService.listUsers().subscribe((_result: Result) => {
    this.usersResult = _result ;
    this.usersResult.UserList = _result.UserList ;
    });
  }
  public GetAllSalesPoints(): void {
    this._listsalespointsService.ListAllSalesPoints().subscribe((_result: ResultListSalesPoints) => {
    this.listSalesPoints = _result.SalesPointsList ;
    });
  }
  public Refresh() {
    this.ngOnInit();
  }
}
