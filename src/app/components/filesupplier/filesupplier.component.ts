import { ListmoneyactiondetailsService } from './../../services/suppliers/listmoneyactiondetails.service';
import { ResultListBanks, ListBanksModel } from './../../models/bankcheck';
import { ResultListSalesPoints, ListSalesPointsModel } from './../../models/salespoints';
import { ListsalespointsService } from './../../services/salespoints/listsalespoints.service';
import { NotifierService } from 'angular-notifier';
import {
  ResultAddRebateAction, AddRebateActionModel,
  AddPostBalanceActionModel, ResultAddPostBalanceAction,
  AddCheckRebateActionModel, ResultAddCheckRebateAction,
  ResultSupplierMoneyDetails, ListSupplierMoneyDetailsModel,
  SupplierTotalCommunicationSummaryModel,
  SupplierMoneyActionDetails,
  ResultSupplierCancledMoneyDetails,
  ListSupplierCanceldMoneyDetailsModel,
  AddSupplierModel,
  ResultAddSupplier,
  ResultSuppliers
} from './../../models/suppliers';
import { AddrebateactionService } from './../../services/suppliers/addrebateaction.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { INgxMyDpOptions } from 'ngx-mydatepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { OauthenticatedsessionService } from '../../services/general/Oauthenticatedsession.Service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { AddpostbalanceactionService } from '../../services/suppliers/addpostbalanceaction.service';
import { AddcheckrebateactionService } from '../../services/suppliers/addcheckrebateaction.service';
import { ListbanksService } from '../../services/bankcheck/listbanks.service';
import { ListsuppliermoneydetailsService } from '../../services/suppliers/listsuppliermoneydetails.service';
import { AddcancelmoneyactionService } from 'src/app/services/suppliers/addcancelmoneyaction.service';
import { AddSupplierCancelMoneyAction, ResultAddCancelMoneyAction, ResultGetSupplierMonyActionDetails } from '../../models/suppliers';
import { ListsupplieradvancepaymentsdetailsService } from 'src/app/services/suppliers/listsupplieradvancepaymentsdetails.service';
import { ListsuppliercanceldmoneydetailsService } from 'src/app/services/suppliers/listsuppliercanceldmoneydetails.service';
import { EditsupplierService } from 'src/app/services/suppliers/editsupplier.service';
import { ListsuppliersService } from 'src/app/services/suppliers/listsuppliers.service';
import { AddActivityModel, ResultAddActivityRecord } from 'src/app/models/notificationsactivities';
import { CreateactivityService } from 'src/app/services/notificationsactivities/createactivity.service';

@Component({
  selector: 'app-filesupplier',
  templateUrl: './filesupplier.component.html',
  styleUrls: ['./filesupplier.component.css']
})
export class FilesupplierComponent implements OnInit {
  public DateFirstFrom: Date;
  public DateFirstTo: Date;
  public p: any;
  public s: any;
  public m: any;

  public DateToFirstObject: any;
  public DateFromFirstObject: any;
  public DateSecondTo: Date;
  public DateSecondFrom: Date;
  public DateToSecondObject: any;
  public DateFromSecondObject: any;
  public addRebateActionModel: AddRebateActionModel;
  public addAdvancePaymentActionModel: AddRebateActionModel;
  public addCheckRebateActionModel: AddCheckRebateActionModel;
  public addCashdisCountActionModel: AddRebateActionModel;
  public addPostBalanceActionModel: AddPostBalanceActionModel;
  public activeSalesPoints: ListSalesPointsModel[];
  public allBanks: ListBanksModel[];
  public allSupplierMoneyDetails: ListSupplierMoneyDetailsModel[];
  public allSupplierCancledMoneyDetails: ListSupplierCanceldMoneyDetailsModel[];
  public allSupplierAdvancePaymentsDetails: ListSupplierMoneyDetailsModel[];
  public selectedSupplierMoneyDetails: ListSupplierMoneyDetailsModel;
  public addSelectedSupplierMoneyDetails: AddSupplierCancelMoneyAction;
  public supplierMoneyActionDetails: SupplierMoneyActionDetails;
  public supplierTotalCommunicationSummaryModel: SupplierTotalCommunicationSummaryModel;
  public addSupplier: AddSupplierModel;
  public addActivityModel: AddActivityModel;

  myOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'mmm d, yyyy',
  };
  public modalRef: BsModalRef;
  constructor(
    private _modalService: BsModalService,
    private _addrebateactionService: AddrebateactionService,
    private _addcheckrebateactionService: AddcheckrebateactionService,
    private _addpostbalanceactionService: AddpostbalanceactionService,
    private _notifierService: NotifierService,
    private _OauthenticatedsessionServiceService: OauthenticatedsessionService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _listsalespointsService: ListsalespointsService,
    private _listbanksService: ListbanksService,
    private _listsuppliermoneydetailsService: ListsuppliermoneydetailsService,
    private _listsuppliercanceldmoneydetailsService: ListsuppliercanceldmoneydetailsService,
    private _listmoneyactiondetailsService: ListmoneyactiondetailsService,
    private _listsupplieradvancepaymentsdetailsService: ListsupplieradvancepaymentsdetailsService,
    private _addcancelmoneyactionService: AddcancelmoneyactionService,
    private _editsupplierService: EditsupplierService,
    private _listsuppliersService: ListsuppliersService ,
    private _createactivityService: CreateactivityService






  ) { 
    this.supplierTotalCommunicationSummaryModel = {TotalCommunication: 0 , RestCommunication: 0 , CompletedCommunication: 0 };

  }

  ngOnInit() {
    this.activeSalesPoints = [];
    this.allBanks = [];
    this.allSupplierMoneyDetails = [];
    this.allSupplierAdvancePaymentsDetails = [];
    this.allSupplierCancledMoneyDetails = [];
    this.supplierMoneyActionDetails = new SupplierMoneyActionDetails();
    this.selectedSupplierMoneyDetails = new ListSupplierMoneyDetailsModel();
    this.addSelectedSupplierMoneyDetails = new AddSupplierCancelMoneyAction();
    this.addRebateActionModel = new AddRebateActionModel();
    this.addAdvancePaymentActionModel = new AddRebateActionModel();
    this.addCheckRebateActionModel = new AddCheckRebateActionModel();
    this.addCashdisCountActionModel = new AddRebateActionModel();
    this.addPostBalanceActionModel = new AddPostBalanceActionModel();
    this.addSupplier = new AddSupplierModel();
    this.addActivityModel = new AddActivityModel();


    this._activatedRoute.paramMap.subscribe(
      (params: Params) => {

        this.addRebateActionModel.SupplierID = params.get('SupplierID');
        this.addAdvancePaymentActionModel.SupplierID = params.get('SupplierID');
        this.addCashdisCountActionModel.SupplierID = params.get('SupplierID');
        this.addCheckRebateActionModel.SupplierID = params.get('SupplierID');
        this.addPostBalanceActionModel.SupplierID = params.get('SupplierID');


      });

    this.DateFromFirstObject = {
      'date': {
        'year': 2000,
        'month': 1,
        'day': 1
      },
      'jsdate': '2000-01-01T22:00:00.000Z',
      'formatted': 'Jan 1, 2018'
    };
    this.DateToFirstObject = {
      'date': {
        'year': 2030,
        'month': 1,
        'day': 1
      },
      'jsdate': '2030-01-01T22:00:00.000Z',
      'formatted': 'Jan 1, 2030'
    };
    this.DateFromSecondObject = {
      'date': {
        'year': 2000,
        'month': 1,
        'day': 1
      },
      'jsdate': '2000-01-01T22:00:00.000Z',
      'formatted': 'Jan 1, 2018'
    };
    this.DateToSecondObject = {
      'date': {
        'year': 2030,
        'month': 1,
        'day': 1
      },
      'jsdate': '2030-01-01T22:00:00.000Z',
      'formatted': 'Jan 1, 2030'
    };
    this.DateSecondFrom = this.DateFromSecondObject.jsdate;
    this.DateSecondTo = this.DateToSecondObject.jsdate;
    this.DateFirstFrom = this.DateFromFirstObject.jsdate;
    this.DateFirstTo = this.DateToFirstObject.jsdate;


    this.getAllActiveSalesPoints();
    this.getAllBanks();
    this.getAllSupplierMoneyDetails();
    this.getAllSupplierCancledMoneyDetails();
    this.getSupplierAdvancePaymentsDetails();

    this.getSupplier();

  }
  public getSupplier(): void {


    this._listsuppliersService.ListSuppliers().subscribe((_result: ResultSuppliers) => {


      _result.SuppliersList.forEach(element => {



        if (element.SupplierID.toString() === this.addRebateActionModel.SupplierID) {

          this.addSupplier = element;


        }


      });


    });



  }
  public GetDateFirstFrom(event) {


    this.DateFirstFrom = this.DateFromFirstObject.jsdate;
  }
  public GetDateFirstTo(event) {

    this.DateFirstTo = this.DateToFirstObject.jsdate;
  }
  public GetDateSecondFrom(event) {


    this.DateSecondFrom = this.DateFromSecondObject.jsdate;
  }
  public GetDateSecondTo(event) {

    this.DateSecondTo = this.DateToSecondObject.jsdate;
  }

  public openAddAccountModal(template: TemplateRef<any>): void {


    this.modalRef = this._modalService.show(template);

  }

  public addRebateAction(_addrebateactionModel: AddRebateActionModel, _formgroup: FormGroup): void {

    _addrebateactionModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
    _addrebateactionModel.ReasonID = 2;


    this._addrebateactionService.AddRebateAction(_addrebateactionModel)
      .subscribe((_result: ResultAddRebateAction) => {

        if (_result.Status === true) {
          this.CreateActivityRecordForDebate();

          _formgroup.reset();

          this.modalRef.hide();



          this._notifierService.notify('success', _result.Message);



          this.ngOnInit();


        } else {

          this._notifierService.notify('error', _result.Message);

        }


      });


  }

  public addPostBalanceAction(_addPostBalanceActionModel: AddPostBalanceActionModel, _formgroup: FormGroup): void {

    _addPostBalanceActionModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
    _addPostBalanceActionModel.ReasonID = 4;


    this._addpostbalanceactionService.AddPostBalanceAction(_addPostBalanceActionModel)
      .subscribe((_result: ResultAddPostBalanceAction) => {

        if (_result.Status === true) {

          this.CreateActivityRecordForPostBalance();
          _formgroup.reset();

          this.modalRef.hide();



          this._notifierService.notify('success', _result.Message);



          this.ngOnInit();


        } else {

          this._notifierService.notify('error', _result.Message);

        }


      });


  }
  public addAdvancedPaymentAction(_addAdvancePaymentActionModel: AddRebateActionModel, _formgroup: FormGroup): void {

    _addAdvancePaymentActionModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
    _addAdvancePaymentActionModel.ReasonID = 5;


    this._addrebateactionService.AddRebateAction(_addAdvancePaymentActionModel)
      .subscribe((_result: ResultAddRebateAction) => {

        if (_result.Status === true) {
          this.CreateActivityRecordForAdvancePayment();
          _formgroup.reset();

          this.modalRef.hide();



          this._notifierService.notify('success', _result.Message);



          this.ngOnInit();


        } else {

          this._notifierService.notify('error', _result.Message);

        }


      });








  }

  public addCashdisCountAction(_addAdvancePaymentActionModel: AddRebateActionModel, _formgroup: FormGroup): void {

    _addAdvancePaymentActionModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
    _addAdvancePaymentActionModel.ReasonID = 7;
    _addAdvancePaymentActionModel.SalesPointID = 1;


    this._addrebateactionService.AddRebateAction(_addAdvancePaymentActionModel)
      .subscribe((_result: ResultAddRebateAction) => {

        if (_result.Status === true) {
          this.CreateActivityRecordForCashdisCount();
          _formgroup.reset();

          this.modalRef.hide();



          this._notifierService.notify('success', _result.Message);



          this.ngOnInit();


        } else {

          this._notifierService.notify('error', _result.Message);

        }


      });








  }
  public addCheckRebateAction(_addCheckRebateActionModel: AddCheckRebateActionModel, _formgroup: FormGroup): void {

    _addCheckRebateActionModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
    _addCheckRebateActionModel.ReasonID = 8;


    this._addcheckrebateactionService.AddCheckRebateAction(_addCheckRebateActionModel)
      .subscribe((_result: ResultAddCheckRebateAction) => {

        if (_result.Status === true) {
          this.CreateActivityRecordForCheckRebate();
          _formgroup.reset();

          this.modalRef.hide();



          this._notifierService.notify('success', _result.Message);



          this.ngOnInit();


        } else {

          this._notifierService.notify('error', _result.Message);

        }


      });








  }
  public getAllActiveSalesPoints() {

    this._listsalespointsService.ListAllSalesPoints().subscribe((_result: ResultListSalesPoints) => {

      this.activeSalesPoints = _result.SalesPointsList;


    });

  }
  public getAllBanks() {

    this._listbanksService.getAllBanks().subscribe((_result: ResultListBanks) => {

      this.allBanks = _result.BanksList;


    });

  }

  public getAllSupplierMoneyDetails() {

    this._listsuppliermoneydetailsService
      .ListSupplierMoneyDetails(parseInt(this.addRebateActionModel.SupplierID, 10))
      .subscribe((_result: ResultSupplierMoneyDetails) => {
        if (_result.Status == true) {
          this.allSupplierMoneyDetails = _result.SupplierMoneyDetailsList;
          this.supplierTotalCommunicationSummaryModel = _result.SupplierTotalCommunicationSummary;
        } else {
          this.allSupplierMoneyDetails = [];
          this.supplierTotalCommunicationSummaryModel = {TotalCommunication: 0 , RestCommunication: 0 , CompletedCommunication: 0 };
        }

      });

  }
  public getSupplierAdvancePaymentsDetails() {

    this._listsupplieradvancepaymentsdetailsService
      .ListSupplierAdvancePaymentsDetails(parseInt(this.addRebateActionModel.SupplierID, 10))
      .subscribe((_result: ResultSupplierMoneyDetails) => {
        if (_result.Status == true) {
          this.allSupplierAdvancePaymentsDetails = _result.SupplierMoneyDetailsList;
        } else {
          this.allSupplierAdvancePaymentsDetails = [];
        }

      });

  }
  public getAllSupplierCancledMoneyDetails() {

    this._listsuppliercanceldmoneydetailsService
      .ListSupplierMoneyDetails(parseInt(this.addRebateActionModel.SupplierID, 10))
      .subscribe((_result: ResultSupplierCancledMoneyDetails) => {
        if (_result.Status == true) {
          this.allSupplierCancledMoneyDetails = _result.SupplierMoneyDetailsList;
        } else {
          this.allSupplierCancledMoneyDetails = [] ;
        
        }
      });

  }

  public getMoneyDetails() {

    this._listmoneyactiondetailsService
      .GetMoneyActionDetails(this.selectedSupplierMoneyDetails.PayID)
      .subscribe((_result: ResultGetSupplierMonyActionDetails) => {
        if (_result.Status == true) {
          this.supplierMoneyActionDetails = _result.MoneyDetails;
        } else {
        this.supplierMoneyActionDetails = new SupplierMoneyActionDetails();
        }
      });

  }

  public SelectRow(_moneyDetails: ListSupplierMoneyDetailsModel): void {

    this.selectedSupplierMoneyDetails = _moneyDetails;
    this.addSelectedSupplierMoneyDetails.PayID = this.selectedSupplierMoneyDetails.PayID;
    this.addSelectedSupplierMoneyDetails.ReasonID = this.selectedSupplierMoneyDetails.ReasonID;
    this.addSelectedSupplierMoneyDetails.MoneyValue = this.selectedSupplierMoneyDetails.MoneyValue;
    this.addSelectedSupplierMoneyDetails.DateSubmit = this.selectedSupplierMoneyDetails.DateSubmit;
    this.addSelectedSupplierMoneyDetails.SalesPointID = this.selectedSupplierMoneyDetails.SalesPointID;
    this.addSelectedSupplierMoneyDetails.UserID = this._OauthenticatedsessionServiceService.User.UserId;
    this.addSelectedSupplierMoneyDetails.SupplierID = parseInt(this.addRebateActionModel.SupplierID, 10);


    // this.buttonAdd.nativeElement.disabled = true;
    // this.searchfield.nativeElement.disabled = true;

  }

  public RowSelected(_moneyDetails: ListSupplierMoneyDetailsModel): boolean {

    if (!this.selectedSupplierMoneyDetails) {
      return false;
    }
    return this.selectedSupplierMoneyDetails.PayID === _moneyDetails.PayID ? true : false;

  }

  public RemoveSelection(_moneyDetails: ListSupplierMoneyDetailsModel) {

    this.selectedSupplierMoneyDetails = new ListSupplierMoneyDetailsModel();
    this.addSelectedSupplierMoneyDetails.PayID = null;

  }

  public addCancelMoneyAction(_addSupplierCancelMoneyAction: AddSupplierCancelMoneyAction): void {

    this._addcancelmoneyactionService.AddCancelMoneyAction(_addSupplierCancelMoneyAction)
      .subscribe((_result: ResultAddCancelMoneyAction) => {

        if (_result.Status === true) {

          this.modalRef.hide();

          this.CreateActivityRecordForCancleAction();

          this._notifierService.notify('success', _result.Message);



          this.ngOnInit();


        } else {

          this._notifierService.notify('error', _result.Message);

        }


      });
  }

  public openCancleMoneyModal(template: TemplateRef<any>): void {

    if (this.addSelectedSupplierMoneyDetails.PayID) {
      this.modalRef = this._modalService.show(template);


    } else {

      this._notifierService.notify('error', 'من فضلك يجب اختيار العملية التى تريد الغائها');


    }


  }
  public openMoneyDetailsModal(template: TemplateRef<any>): void {

    if (this.selectedSupplierMoneyDetails.PayID) {
      this.getMoneyDetails();

      this.modalRef = this._modalService.show(template);


    } else {

      this._notifierService.notify('error', 'من فضلك يجب اختيار العملية التى تريد عرض تفاصيلها ');


    }


  }

  public goToPrintMoneyDetails(): void {


    this._router.navigate(['printfilesuppliermoneydetails', this.addRebateActionModel.SupplierID]);


  }
  public goToBankList(): void {


    this._router.navigate(['banks']);


  }

  public goToPrintAdvancePaymentsDetails(): void {


    this._router.navigate(['printfilesupplieradvancepaymentsdetails', this.addRebateActionModel.SupplierID]);


  }

  public EditSupplier(_supplier: AddSupplierModel, _formGroup: FormGroup): void {

    this.addSupplier.SupplierID = parseInt(this.addRebateActionModel.SupplierID,10);

    this._editsupplierService.EditSupplier(this.addSupplier).subscribe((_result: ResultAddSupplier) => {
      if (_result.Status === true) {

        this._notifierService.notify('success', _result.Message);

      

      } else {

        this._notifierService.notify('error', _result.Message);
      }



    });


  }
  public CreateActivityRecordForDebate() {
    this.addActivityModel.DateSubmit = new Date();
    this.addActivityModel.Read = true;
    this.addActivityModel.Type = '  تنزيل من حساب المورد';
    this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId ;
    this.addActivityModel.POS = this.addRebateActionModel.SalesPointID;
    this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe((_resultactivity: ResultAddActivityRecord) => {
  this._notifierService.notify(
    'success',
    _resultactivity.Message
  );
});
  }
  public CreateActivityRecordForPostBalance() {
    this.addActivityModel.DateSubmit = new Date();
    this.addActivityModel.Read = true;
    this.addActivityModel.Type = '    رصيد سابق المورد';
    this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId ;
    this.addActivityModel.POS = 1;
    this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe((_resultactivity: ResultAddActivityRecord) => {
  this._notifierService.notify(
    'success',
    _resultactivity.Message
  );
});
  }
  public CreateActivityRecordForAdvancePayment() {
    this.addActivityModel.DateSubmit = new Date();
    this.addActivityModel.Read = true;
    this.addActivityModel.Type = ' دفعة مقدمة المورد';
    this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId ;
    this.addActivityModel.POS = this.addAdvancePaymentActionModel.SalesPointID;
    this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe((_resultactivity: ResultAddActivityRecord) => {
  this._notifierService.notify(
    'success',
    _resultactivity.Message
  );
});
  }
  public CreateActivityRecordForCashdisCount() {
    this.addActivityModel.DateSubmit = new Date();
    this.addActivityModel.Read = true;
    this.addActivityModel.Type = ' خصم نقدى المورد';
    this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId ;
    this.addActivityModel.POS = 1;
    this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe((_resultactivity: ResultAddActivityRecord) => {
  this._notifierService.notify(
    'success',
    _resultactivity.Message
  );
});
  }
  public CreateActivityRecordForCheckRebate() {
    this.addActivityModel.DateSubmit = new Date();
    this.addActivityModel.Read = true;
    this.addActivityModel.Type = ' شيك لحساب المورد';
    this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId ;
    this.addActivityModel.POS = 1;
    this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe((_resultactivity: ResultAddActivityRecord) => {
  this._notifierService.notify(
    'success',
    _resultactivity.Message
  );
});
  }
  public CreateActivityRecordForCancleAction() {
    this.addActivityModel.DateSubmit = new Date();
    this.addActivityModel.Read = true;
    this.addActivityModel.Type = '  الغاء عملية المورد';
    this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId ;
    this.addActivityModel.POS = 1;
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
