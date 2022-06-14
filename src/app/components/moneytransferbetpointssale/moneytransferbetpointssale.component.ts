import { AddTransferMoneyEventModel } from './../../models/salespoints';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ListSalesPointsModel, ListWithdrawDepositReasonModel,
AddAdditionalCostEventModel, ResultListSalesPoints, ResultWithdrawDepositReason,
ResultAddAdditionalCostEvent } from 'src/app/models/salespoints';
import { NotifierService } from 'angular-notifier';
import { ListsalespointsService } from 'src/app/services/salespoints/listsalespoints.service';
import { ListwithdrawdepositreasonsService } from 'src/app/services/salespoints/listwithdrawdepositreasons.service';
import { AddwithdrawdepositeventeventService } from 'src/app/services/salespoints/addwithdrawdepositevent.service';
import { OauthenticatedsessionService } from 'src/app/services/general/Oauthenticatedsession.Service';
import { FormGroup } from '@angular/forms';
import { AddadditionalcosteventService } from 'src/app/services/salespoints/addadditionalcostevent.service';
import { AddtransfermoneyeventService } from '../../services/salespoints/addtransfermoneyevent.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { GetsalespointbalanceService } from 'src/app/services/salespoints/getsalespointbalance.service';
import { AddActivityModel, ResultAddActivityRecord } from 'src/app/models/notificationsactivities';
import { CreateactivityService } from 'src/app/services/notificationsactivities/createactivity.service';
@Component({
  selector: 'app-moneytransferbetpointssale',
  templateUrl: './moneytransferbetpointssale.component.html',
  styleUrls: ['./moneytransferbetpointssale.component.css']
})
export class MoneytransferbetpointssaleComponent implements OnInit {
  public listSalesPointsModel: ListSalesPointsModel[];
  public listWithdrawDepositReasons: ListWithdrawDepositReasonModel[];
  public _addAdditionalCostEventModel: AddTransferMoneyEventModel;
  public withdraw: number;
  public modalRef: BsModalRef;
  public SalesPointFromBalance: number;
  public SalesPointToBalance: number;
  public addActivityModel: AddActivityModel;



  constructor(

    private _notifierService: NotifierService,
    private _listsalespointsService: ListsalespointsService,
    private _getsalespointbalanceService: GetsalespointbalanceService,
    private modalService: BsModalService,
    private _listwithdrawdepositreasonsService: ListwithdrawdepositreasonsService,
    private _addtransfermoneyeventService: AddtransfermoneyeventService,
    private _OauthenticatedsessionServiceService: OauthenticatedsessionService,
   private _createactivityService: CreateactivityService

  ) {
    this.addActivityModel = new AddActivityModel();
    this.listSalesPointsModel = [];
    this.listWithdrawDepositReasons = [];
    this._addAdditionalCostEventModel = new AddTransferMoneyEventModel();
    this.withdraw = 1;
    this.SalesPointFromBalance = 0;
    this.SalesPointToBalance = 0;
  }

  ngOnInit() {


    this.GetAllSalesPoints();
    this.GetAllWithdrawDepositReason();
  }

  public GetAllSalesPoints() {

    this._listsalespointsService.ListAllSalesPoints().subscribe((result: ResultListSalesPoints) => {

      this.listSalesPointsModel = result.SalesPointsList;
    });
  }
  public GetAllWithdrawDepositReason() {

    this._listwithdrawdepositreasonsService.GetAllWithdrawDepositReason()
      .subscribe((result: ResultWithdrawDepositReason) => {

        this.listWithdrawDepositReasons = result.ListWithdrawDepositReason;
      });
  }
  public AddTransferMoneyEvent(addAdditionalCostEventModel: AddTransferMoneyEventModel,
     _formGroup: FormGroup) {

    addAdditionalCostEventModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
      this._addtransfermoneyeventService.AddTransferMoneyEvent(addAdditionalCostEventModel)
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

    public openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }
     /**
   * getSalesPointFromBalance
   */
  public getSalesPointFromBalance( salesPointID: number): void {
    this._getsalespointbalanceService.GetSalesPointBalance(salesPointID)
    .subscribe((_result: ResultListSalesPoints) => {
      this.SalesPointFromBalance = _result.SalesPointsList[0].Balance;

    });

  }
     /**
   * getSalesPointToBalance
   */
  public getSalesPointToBalance(salesPointID:number): void {
    this._getsalespointbalanceService.GetSalesPointBalance(salesPointID)
    .subscribe((_result: ResultListSalesPoints) => {
      this.SalesPointToBalance = _result.SalesPointsList[0].Balance;

    });

  }
  public CreateActivityRecordDebits() {
    this.addActivityModel.DateSubmit = new Date();
    this.addActivityModel.Read = true;
    this.addActivityModel.Type = '     حركة تحويل أموال';
    this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId ;
    this.addActivityModel.POS = this._addAdditionalCostEventModel.SalesPointIDFrom;
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
