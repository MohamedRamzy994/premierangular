import { Component, OnInit, TemplateRef } from '@angular/core';
import { ListsalespointsService } from '../../services/salespoints/listsalespoints.service';
import { ResultListSalesPoints, ListSalesPointsModel,
   ResultWithdrawDepositReason, ListWithdrawDepositReasonModel,
    AddAdditionalCostEventModel, ResultAddAdditionalCostEvent } from '../../models/salespoints';
import { ListwithdrawdepositreasonsService } from 'src/app/services/salespoints/listwithdrawdepositreasons.service';
import { AddadditionalcosteventService } from 'src/app/services/salespoints/addadditionalcostevent.service';
import { NotifierService } from 'angular-notifier';
import { FormGroup } from '@angular/forms';
import { OauthenticatedsessionService } from 'src/app/services/general/Oauthenticatedsession.Service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { AddActivityModel, ResultAddActivityRecord } from 'src/app/models/notificationsactivities';
import { CreateactivityService } from 'src/app/services/notificationsactivities/createactivity.service';
@Component({
  selector: 'app-addexpenses',
  templateUrl: './addexpenses.component.html',
  styleUrls: ['./addexpenses.component.css']
})
export class AddexpensesComponent implements OnInit {
  public modalRef: BsModalRef;
  public addActivityModel: AddActivityModel;
  public listSalesPointsModel: ListSalesPointsModel [];
  public listWithdrawDepositReasons: ListWithdrawDepositReasonModel [];
  public _addAdditionalCostEventModel: AddAdditionalCostEventModel ;

  constructor(
    private _notifierService: NotifierService,
   private _listsalespointsService: ListsalespointsService,
   private modalService: BsModalService,
   private _listwithdrawdepositreasonsService: ListwithdrawdepositreasonsService ,
   private _addadditionalcosteventService: AddadditionalcosteventService ,
   private _OauthenticatedsessionServiceService: OauthenticatedsessionService,
   private _createactivityService: CreateactivityService
  ) {
    this.addActivityModel = new AddActivityModel();
    this.listSalesPointsModel = [] ;
    this.listWithdrawDepositReasons = [] ;
    this._addAdditionalCostEventModel = new AddAdditionalCostEventModel();
  }

  ngOnInit() {

    this.GetAllSalesPoints();
    this.GetAllWithdrawDepositReason();
  }
  public GetAllSalesPoints() {

    this._listsalespointsService.ListAllSalesPoints().subscribe((result: ResultListSalesPoints)=>{
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

        this.listWithdrawDepositReasons = [] ;
      } else {

        this.listWithdrawDepositReasons = result.ListWithdrawDepositReason ;
      }
    });
  }

  public AddAdditionalCostEvent(addAdditionalCostEventModel: AddAdditionalCostEventModel , _formGroup: FormGroup) {

    addAdditionalCostEventModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
    this._addadditionalcosteventService.AddAdditionalCostEvent(addAdditionalCostEventModel)
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
   public CreateActivityRecordDebits() {
    this.addActivityModel.DateSubmit = new Date();
    this.addActivityModel.Read = true;
    this.addActivityModel.Type = '   تسجيل مصروف اضافى';
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
