import { Component, OnInit, TemplateRef } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { ListsalespointsService } from 'src/app/services/salespoints/listsalespoints.service';
import { ListwithdrawdepositreasonsService } from 'src/app/services/salespoints/listwithdrawdepositreasons.service';
import { AddadditionalcosteventService } from 'src/app/services/salespoints/addadditionalcostevent.service';
import { OauthenticatedsessionService } from 'src/app/services/general/Oauthenticatedsession.Service';
import {
  ResultListSalesPoints, ResultWithdrawDepositReason,
  ListSalesPointsModel, ListWithdrawDepositReasonModel,
  AddAdditionalCostEventModel,
  ResultAddAdditionalCostEvent
} from 'src/app/models/salespoints';
import { FormGroup } from '@angular/forms';
import { AddwithdrawdepositeventeventService } from '../../services/salespoints/addwithdrawdepositevent.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { GetsalespointbalanceService } from '../../services/salespoints/getsalespointbalance.service';
import { AddActivityModel, ResultAddActivityRecord } from 'src/app/models/notificationsactivities';
import { CreateactivityService } from 'src/app/services/notificationsactivities/createactivity.service';

@Component({
  selector: 'app-pulldepositdrawerstorage',
  templateUrl: './pulldepositdrawerstorage.component.html',
  styleUrls: ['./pulldepositdrawerstorage.component.css']
})
export class PulldepositdrawerstorageComponent implements OnInit {


  public listSalesPointsModel: ListSalesPointsModel[];
  public listWithdrawDepositReasons: ListWithdrawDepositReasonModel[];
  public _addAdditionalCostEventModel: AddAdditionalCostEventModel;
  public withdraw: number;
  public modalRef: BsModalRef;
  public SalesPointBalance: number; 
  public addActivityModel: AddActivityModel;


  constructor(

    private _notifierService: NotifierService,
    private _listsalespointsService: ListsalespointsService,
    private _getsalespointbalanceService: GetsalespointbalanceService,
    private modalService: BsModalService,
    private _listwithdrawdepositreasonsService: ListwithdrawdepositreasonsService,
    private _addwithdrawdepositeventeventService: AddwithdrawdepositeventeventService,
    private _OauthenticatedsessionServiceService: OauthenticatedsessionService,
   private _createactivityService: CreateactivityService

  ) {

    this.listSalesPointsModel = [];
    this.listWithdrawDepositReasons = [];
    this._addAdditionalCostEventModel = new AddAdditionalCostEventModel();
    this.addActivityModel = new AddActivityModel();

    this.withdraw = 1;
    this.SalesPointBalance = 0;
  }

  ngOnInit() {


    this.GetAllSalesPoints();
    this.GetAllWithdrawDepositReason();
  }

  public GetAllSalesPoints() {

    this._listsalespointsService.ListAllSalesPoints().subscribe((result: ResultListSalesPoints) => {
      if (result.SalesPointsList.length == 0 || result.SalesPointsList == null) {

        this.listSalesPointsModel = [] ;
      } else {

        this.listSalesPointsModel = result.SalesPointsList ;
      }
     
    });
  }
  public GetAllWithdrawDepositReason() {

    this._listwithdrawdepositreasonsService.GetAllWithdrawDepositReason()
      .subscribe((result: ResultWithdrawDepositReason) => {
        if (result.ListWithdrawDepositReason.length == 0 || result.ListWithdrawDepositReason == null) {

          this.listWithdrawDepositReasons = [];
        } else {
  
          this.listWithdrawDepositReasons = result.ListWithdrawDepositReason;
        }
      });
  }
  public AddWithdrawDepositEvent(addAdditionalCostEventModel: AddAdditionalCostEventModel, _formGroup: FormGroup) {

    addAdditionalCostEventModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
    if (this.withdraw === 1) {
      this._addwithdrawdepositeventeventService.AddWithdrawEvent(addAdditionalCostEventModel)
      .subscribe((_result: ResultAddAdditionalCostEvent) => {

        if (_result.Status === true) {
          this.CreateActivityRecordDebits();
          this.modalRef.hide();

          this._notifierService.notify('success', _result.Message);
          _formGroup.reset();

        } else {
          this.modalRef.hide();

          this._notifierService.notify('error', _result.Message);
        }
      });
    } else if (this.withdraw === 2) {

      this._addwithdrawdepositeventeventService.AddDepositEvent(addAdditionalCostEventModel)
      .subscribe((_result: ResultAddAdditionalCostEvent) => {

        if (_result.Status === true) {
          this.CreateActivityRecordDebits();

          this.modalRef.hide();

          this._notifierService.notify('success', _result.Message);
          _formGroup.reset();

        } else {
          this.modalRef.hide();

          this._notifierService.notify('error', _result.Message);
        }
      });
    }

  }
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  /**
   * getSalesPointBalance
   */
  public getSalesPointBalance(SalesPointID: number): void {
    this._getsalespointbalanceService.GetSalesPointBalance(this._addAdditionalCostEventModel.SalesPointID)
    .subscribe((_result: ResultListSalesPoints) => {
      this.SalesPointBalance = _result.SalesPointsList[0].Balance;

    });

  }
  public CreateActivityRecordDebits() {
    this.addActivityModel.DateSubmit = new Date();
    this.addActivityModel.Read = true;
    this.addActivityModel.Type = ' تسجيل سحب وايداع';
    this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId ;
    this.addActivityModel.POS = this._addAdditionalCostEventModel.SalesPointID;
    this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe((_resultactivity: ResultAddActivityRecord) => {
  this._notifierService.notify(
    'success',
    _resultactivity.Message
  );
});
  }
  public Refresh() {
    this.ngOnInit();
  }
}
