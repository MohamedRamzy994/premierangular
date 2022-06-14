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
import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
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
import { ListcustomersService } from '../../services/customers/listcustomers.service';
import { ResultListCustomers, AddCustomerRebateActionModel,
   AddCustomerModel, ResultAddCustomer , AddCustomerPostBalanceActionModel,
    AddCustomerCheckRebateActionModel,
    ResultCustomerMoneyDetails,
    ListCustomerMoneyDetailsModel,
    AddCustomerCancelMoneyAction,
    ResultGetCustomerMonyActionDetails,
    CustomerMoneyActionDetails,
    ListCustomerCanceldMoneyDetailsModel,
    ResultCustomerCancledMoneyDetails} from '../../models/customers';
import { EditcustomerService } from '../../services/customers/editcustomer.service';
import { ListemployeesService } from '../../services/employees/listemployees.service';
import { ListEmployeesModel } from 'src/app/models/employees';
import { ResultListEmployees } from '../../models/employees';
import { AddcustomerrebateactionService } from 'src/app/services/customers/addcustomerrebateaction.service';
import { AddcustomerpostbalanceactionService } from 'src/app/services/customers/addcustomerpostbalanceaction.service';
import { AddcustomercheckrebateactionService } from 'src/app/services/customers/addcustomercheckrebateaction.service';
import { ListcustomermoneydetailsService } from 'src/app/services/customers/listcustomermoneydetails.service';
import { AddcustomercancelmoneyactionService } from 'src/app/services/customers/addcustomercancelmoneyaction.service';
import { ListcustomermoneyactiondetailsService } from 'src/app/services/customers/listcustomermoneyactiondetails.service';
import { ListcustomercanceldmoneydetailsService } from 'src/app/services/customers/listcustomercanceldmoneydetails.service';
import { ListcustomeradvancepaymentsdetailsService } from 'src/app/services/customers/listcustomeradvancepaymentsdetails.service';
import { AddActivityModel, ResultAddActivityRecord } from 'src/app/models/notificationsactivities';
import { CreateactivityService } from 'src/app/services/notificationsactivities/createactivity.service';
@Component({
  selector: 'app-fileclient',
  templateUrl: './fileclient.component.html',
  styleUrls: ['./fileclient.component.css']
})
export class FileclientComponent implements OnInit {
  public DateFirstFrom: Date;
  public DateFirstTo: Date;
  public DateToFirstObject: any;
  public DateFromFirstObject: any;
  public DateSecondTo: Date;
  public DateSecondFrom: Date;
  public DateToSecondObject: any;
  public p: any;
  public s: any;
  public t: any;
  public f: any;

  public DateFromSecondObject: any;
  public addCustomerRebateActionModel: AddCustomerRebateActionModel;
  public addCustomerAdvancePaymentActionModel: AddCustomerRebateActionModel;
  public addCustomerCheckRebateActionModel: AddCustomerRebateActionModel;
  public addCustomerCheckTanzelRebateActionModel: AddCustomerCheckRebateActionModel;
  public addCustomerCashdisCountActionModel: AddCustomerRebateActionModel;
  public addCustomerPostBalanceActionModel: AddCustomerPostBalanceActionModel;
  public activeSalesPoints: ListSalesPointsModel[];
  public allBanks: ListBanksModel[];
  public allEmployees: ListEmployeesModel[];
  public allCustomerMoneyDetails: ListCustomerMoneyDetailsModel[];
  public allCustomerCancledMoneyDetails: ListCustomerCanceldMoneyDetailsModel[];
  public allCustomerAdvancePaymentsDetails: ListCustomerMoneyDetailsModel[];
  public selectedCustomerMoneyDetails: ListCustomerMoneyDetailsModel;
  public addSelectedCustomerMoneyDetails: AddCustomerCancelMoneyAction;
  public customerMoneyActionDetails: CustomerMoneyActionDetails;
  public customerTotalCommunicationSummaryModel: SupplierTotalCommunicationSummaryModel;
  public addCustomer: AddCustomerModel;
  public templatesupplier: BsModalRef;
  public addActivityModel: AddActivityModel;

  myOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'mmm d, yyyy',
  };
  public modalRef: BsModalRef;
  constructor(
    private _modalService: BsModalService,
    private _addcustomerrebateactionService: AddcustomerrebateactionService,
    private _addcustomercheckrebateactionService: AddcustomercheckrebateactionService,
    private _addcustomerpostbalanceactionService: AddcustomerpostbalanceactionService,
    private _notifierService: NotifierService,
    private _OauthenticatedsessionServiceService: OauthenticatedsessionService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _listsalespointsService: ListsalespointsService,
    private _listbanksService: ListbanksService,
    private _listcustomermoneydetailsService: ListcustomermoneydetailsService,
    private _listcustomercanceldmoneydetailsService: ListcustomercanceldmoneydetailsService,
    private _listcustomermoneyactiondetailsService: ListcustomermoneyactiondetailsService,
    private _listcustomeradvancepaymentsdetailsService: ListcustomeradvancepaymentsdetailsService,
    private _addcustomercancelmoneyactionService: AddcustomercancelmoneyactionService,
    private _editcustomerService: EditcustomerService,
    private _listcustomersService: ListcustomersService,
    private _listemployeesService: ListemployeesService,
    private _createactivityService: CreateactivityService






  ) { 
    this.addActivityModel = new AddActivityModel();

  }

  ngOnInit() {
    this.activeSalesPoints = [];
    this.allBanks = [];
    this.allEmployees = [] ;
    this.allCustomerMoneyDetails = [];
    this.allCustomerAdvancePaymentsDetails = [];
    this.allCustomerCancledMoneyDetails = [];
    this.customerMoneyActionDetails = new CustomerMoneyActionDetails();
    this.selectedCustomerMoneyDetails = new ListCustomerMoneyDetailsModel();
    this.customerTotalCommunicationSummaryModel = {TotalCommunication : 0 , CompletedCommunication : 0 , RestCommunication : 0};
    this.addSelectedCustomerMoneyDetails = new AddCustomerCancelMoneyAction();
    this.addCustomerRebateActionModel = new AddCustomerRebateActionModel();
    this.addCustomerAdvancePaymentActionModel = new AddCustomerRebateActionModel();
    this.addCustomerCashdisCountActionModel = new AddCustomerRebateActionModel();
    this.addCustomerCheckRebateActionModel = new AddCustomerRebateActionModel();
    this.addCustomerCheckTanzelRebateActionModel = new AddCustomerCheckRebateActionModel();
    this.addCustomerPostBalanceActionModel = new AddCustomerPostBalanceActionModel();
    this.addCustomer = new AddCustomerModel();
    this._activatedRoute.paramMap.subscribe(
      (params: Params) => {
        this.addCustomerRebateActionModel.CustomerID = params.get('CustomerID');
        this.addCustomerAdvancePaymentActionModel.CustomerID = params.get('CustomerID');
        this.addCustomerCheckRebateActionModel.CustomerID = params.get('CustomerID');
        this.addCustomerCashdisCountActionModel.CustomerID = params.get('CustomerID');
        this.addCustomerPostBalanceActionModel.CustomerID = params.get('CustomerID');


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
    this.getAllCustomerMoneyDetails();
    this.getAllCustomerCancledMoneyDetails();
    this.getCustomerAdvancePaymentsDetails();
    // this.templatesupplier =  new BsModalRef();
    this.getCustomer();
    this.getAllEmployees();
  }
  public getCustomer(): void {
    this._listcustomersService.ListCustomers().subscribe((_result: ResultListCustomers) => {

      _result.CustomersList.forEach(element => {

        if (element.CustomerID.toString() === this.addCustomerRebateActionModel.CustomerID) {

          this.addCustomer.Name = element.CustomerName;
          this.addCustomer.Mob1 = element.Mobile1;
          this.addCustomer.Mob2 = element.Mobile2;
         if (element.Category === 'جملة') {
          this.addCustomer.CatID = 1;
         } else if (element.Category === 'قطاعى') {

          this.addCustomer.CatID = 2 ;
         }
        }


      });


    });
  }
  public getAllCustomers(): void {
    this._listcustomersService.ListCustomers().subscribe((_result: ResultListCustomers) => {

      _result.CustomersList.forEach(element => {

        if (element.CustomerID.toString() === this.addCustomerRebateActionModel.CustomerID) {

          this.addCustomer.Name = element.CustomerName;
          this.addCustomer.Mob1 = element.Mobile1;
          this.addCustomer.Mob2 = element.Mobile2;
         if (element.Category === 'جملة') {
          this.addCustomer.CatID = 1;
         } else if (element.Category === 'قطاعى') {

          this.addCustomer.CatID = 2 ;
         }
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


    this.templatesupplier = this._modalService.show(template);

  }
  public addCustomerRebateAction(_addcustomerrebateactionModel: AddCustomerRebateActionModel, _formgroup: FormGroup): void {

    _addcustomerrebateactionModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
    _addcustomerrebateactionModel.ReasonID = 2;
    this._addcustomerrebateactionService.AddCustomerRebateAction(_addcustomerrebateactionModel)
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
  public addCustomerPostBalanceAction(_addCustomerPostBalanceActionModel: AddCustomerPostBalanceActionModel, _formgroup: FormGroup): void {

    _addCustomerPostBalanceActionModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
    _addCustomerPostBalanceActionModel.CustomerID = this.addCustomerPostBalanceActionModel.CustomerID;
    _addCustomerPostBalanceActionModel.ReasonID = 1;
    this._addcustomerpostbalanceactionService.AddCustomerPostBalanceAction(_addCustomerPostBalanceActionModel)
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
  public addCustomerAdvancedPaymentAction(_addCustomerAdvancePaymentActionModel
    : AddCustomerPostBalanceActionModel, _formgroup: FormGroup): void {

    _addCustomerAdvancePaymentActionModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
    _addCustomerAdvancePaymentActionModel.CustomerID = this.addCustomerPostBalanceActionModel.CustomerID;
    _addCustomerAdvancePaymentActionModel.ReasonID = 3;
    this._addcustomerpostbalanceactionService.AddCustomerPostBalanceAction(_addCustomerAdvancePaymentActionModel)
      .subscribe((_result: ResultAddPostBalanceAction) => {

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
  public addCustomerCashdisCountAction(_addCustomerCashdisCountActionModel: AddCustomerRebateActionModel, _formgroup: FormGroup): void {
    _addCustomerCashdisCountActionModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
    _addCustomerCashdisCountActionModel.ReasonID = 4;
    _addCustomerCashdisCountActionModel.CustomerID = this.addCustomerCashdisCountActionModel.CustomerID;

    this._addcustomerrebateactionService.AddCustomerRebateAction(_addCustomerCashdisCountActionModel)
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
  public addCustomerCheckRebateAction(_addCustomerCheckRebateActionModel: AddCustomerCheckRebateActionModel,
     _formgroup: FormGroup): void {

    _addCustomerCheckRebateActionModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
    _addCustomerCheckRebateActionModel.ReasonID = 5;
    _addCustomerCheckRebateActionModel.CustomerID = this.addCustomerCheckRebateActionModel.CustomerID;
    console.log(_addCustomerCheckRebateActionModel);
    this._addcustomercheckrebateactionService.AddCustomerCheckRebateAction(_addCustomerCheckRebateActionModel)
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

      if (_result.SalesPointsList.length == 0 || _result.SalesPointsList == null) {
        this.activeSalesPoints = [];
      } else {
        this.activeSalesPoints = _result.SalesPointsList;
      }
    });

  }
  public getAllBanks() {

    this._listbanksService.getAllBanks().subscribe((_result: ResultListBanks) => {

      if (_result.BanksList.length == 0 || _result.BanksList == null) {
        this.allBanks = [];
      } else {
        this.allBanks = _result.BanksList;
      }
    });

  }
  public getAllEmployees() {

    this._listemployeesService.ListEmployees().subscribe((_result: ResultListEmployees) => {
      if (_result.EmployeesList.length == 0 || _result.EmployeesList == null) {
        this.allEmployees = [];
      } else {
        this.allEmployees = _result.EmployeesList;
      }
    });

  }
  public getAllCustomerMoneyDetails() {

    this._listcustomermoneydetailsService
      .ListCustomerMoneyDetails(parseInt(this.addCustomerRebateActionModel.CustomerID, 10))
      .subscribe((_result: ResultCustomerMoneyDetails) => {

        if (_result.CustomerMoneyDetailsList == null || _result.CustomerMoneyDetailsList.length == 0) {
          this.allCustomerMoneyDetails = [];

        } else {

          this.allCustomerMoneyDetails = _result.CustomerMoneyDetailsList;
          this.customerTotalCommunicationSummaryModel = _result.CustomerTotalCommunicationSummary;
        }
      });

  }
  public getCustomerAdvancePaymentsDetails() {

    this._listcustomeradvancepaymentsdetailsService
      .ListCustomerAdvancePaymentsDetails(parseInt(this.addCustomerRebateActionModel.CustomerID, 10))
      .subscribe((_result: ResultCustomerMoneyDetails) => {
        if (_result.CustomerMoneyDetailsList == null || _result.CustomerMoneyDetailsList.length == 0) {
          this.allCustomerAdvancePaymentsDetails = [] ;

        } else {
        this.allCustomerAdvancePaymentsDetails = _result.CustomerMoneyDetailsList;

        }

      });

  }
  public getAllCustomerCancledMoneyDetails() {
    this._listcustomercanceldmoneydetailsService
      .ListCustomerMoneyDetails(parseInt(this.addCustomerRebateActionModel.CustomerID, 10))
      .subscribe((_result: ResultCustomerCancledMoneyDetails) => {

        if (_result.CustomerMoneyDetailsList == null || _result.CustomerMoneyDetailsList.length == 0 ) {

          this.allCustomerCancledMoneyDetails = [];
        } else {

          this.allCustomerCancledMoneyDetails = _result.CustomerMoneyDetailsList;
          this.customerTotalCommunicationSummaryModel = _result.CustomerTotalCommunicationSummary;
        }

      });

  }

  public getMoneyDetails() {

    this._listcustomermoneyactiondetailsService
      .GetMoneyActionDetails(this.selectedCustomerMoneyDetails.PayID)
      .subscribe((_result: ResultGetCustomerMonyActionDetails) => {

        if (_result.MoneyDetails == null) {
          this.customerMoneyActionDetails = new CustomerMoneyActionDetails() ;
        } else {
          this.customerMoneyActionDetails = _result.MoneyDetails;
        }

      });

  }

  public SelectRow(_moneyDetails: ListCustomerMoneyDetailsModel): void {

    this.selectedCustomerMoneyDetails = _moneyDetails;
    this.addSelectedCustomerMoneyDetails.PayID = this.selectedCustomerMoneyDetails.PayID;
    this.addSelectedCustomerMoneyDetails.ReasonID = this.selectedCustomerMoneyDetails.ReasonID;
    this.addSelectedCustomerMoneyDetails.MoneyValue = this.selectedCustomerMoneyDetails.MoneyValue;
    this.addSelectedCustomerMoneyDetails.DateSubmit = this.selectedCustomerMoneyDetails.DateSubmit;
    this.addSelectedCustomerMoneyDetails.SalesPointID = this.selectedCustomerMoneyDetails.SalesPointID;
    this.addSelectedCustomerMoneyDetails.UserID = this._OauthenticatedsessionServiceService.User.UserId;
    // this.addSelectedSupplierMoneyDetails.SupplierID = parseInt(this.addRebateActionModel.SupplierID, 10);


    // this.buttonAdd.nativeElement.disabled = true;
    // this.searchfield.nativeElement.disabled = true;

  }

  public RowSelected(_moneyDetails: ListSupplierMoneyDetailsModel): boolean {

    if (!this.selectedCustomerMoneyDetails) {
      return false;
    }
    return this.selectedCustomerMoneyDetails.PayID === _moneyDetails.PayID ? true : false;

  }

  public RemoveSelection(_moneyDetails: ListSupplierMoneyDetailsModel) {

    this.selectedCustomerMoneyDetails = new ListCustomerMoneyDetailsModel();
    this.selectedCustomerMoneyDetails.PayID = null;

  }

  public addCustomerCancelMoneyAction(_addCustomerCancelMoneyAction: AddCustomerCancelMoneyAction): void {
    this._addcustomercancelmoneyactionService.AddCustomerCancelMoneyAction(_addCustomerCancelMoneyAction)
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

    if (this.selectedCustomerMoneyDetails.PayID) {
      this.modalRef = this._modalService.show(template);


    } else {

      this._notifierService.notify('error', 'من فضلك يجب اختيار العملية التى تريد الغائها');


    }


  }
  public openMoneyDetailsModal(template: TemplateRef<any>): void {

    if (this.selectedCustomerMoneyDetails.PayID) {
      this.getMoneyDetails();

      this.modalRef = this._modalService.show(template);


    } else {

      this._notifierService.notify('error', 'من فضلك يجب اختيار العملية التى تريد عرض تفاصيلها ');


    }


  }

  public goToPrintMoneyDetails(): void {


    this._router.navigate(['printfileclientmoneydetails', this.addCustomerPostBalanceActionModel.CustomerID]);

  }

  public goToPrintAdvancePaymentsDetails(): void {


    this._router.navigate(['printfileclientadvancepaymentsdetails', this.addCustomerRebateActionModel.CustomerID]);


  }

  public EditCustomer(_customer: AddCustomerModel): void {

    this.addCustomer.CustomerID = parseInt(this.addCustomerRebateActionModel.CustomerID , 10);

    this._editcustomerService.EditCustomer(this.addCustomer).subscribe((_result: ResultAddCustomer) => {
      if (_result.Status === true) {

        this.modalRef.hide();
        this._notifierService.notify('success', _result.Message);

      } else {
        this.modalRef.hide();

        this._notifierService.notify('error', _result.Message);
      }



    });


  }
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this._modalService.show(template);

  }
  public CloseModal() {
     this.templatesupplier.hide();

  }
  public CreateActivityRecordForDebate() {
    this.addActivityModel.DateSubmit = new Date();
    this.addActivityModel.Read = true;
    this.addActivityModel.Type = '  تنزيل من حساب العميل';
    this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId ;
    this.addActivityModel.POS = this.addCustomerRebateActionModel.SalesPointID;
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
    this.addActivityModel.Type = '    رصيد سابق العميل';
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
    this.addActivityModel.Type = ' دفعة مقدمة العميل';
    this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId ;
    this.addActivityModel.POS = this.addCustomerAdvancePaymentActionModel.SalesPointID;
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
    this.addActivityModel.Type = ' خصم نقدى العميل';
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
    this.addActivityModel.Type = ' شيك لحساب العميل';
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
    this.addActivityModel.Type = '  الغاء عملية العميل';
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
