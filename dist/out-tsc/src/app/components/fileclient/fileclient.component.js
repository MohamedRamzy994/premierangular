"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var listsalespoints_service_1 = require("./../../services/salespoints/listsalespoints.service");
var angular_notifier_1 = require("angular-notifier");
var suppliers_1 = require("./../../models/suppliers");
var core_1 = require("@angular/core");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var Oauthenticatedsession_Service_1 = require("../../services/general/Oauthenticatedsession.Service");
var router_1 = require("@angular/router");
var listbanks_service_1 = require("../../services/bankcheck/listbanks.service");
var listcustomers_service_1 = require("../../services/customers/listcustomers.service");
var customers_1 = require("../../models/customers");
var editcustomer_service_1 = require("../../services/customers/editcustomer.service");
var listemployees_service_1 = require("../../services/employees/listemployees.service");
var addcustomerrebateaction_service_1 = require("src/app/services/customers/addcustomerrebateaction.service");
var addcustomerpostbalanceaction_service_1 = require("src/app/services/customers/addcustomerpostbalanceaction.service");
var addcustomercheckrebateaction_service_1 = require("src/app/services/customers/addcustomercheckrebateaction.service");
var listcustomermoneydetails_service_1 = require("src/app/services/customers/listcustomermoneydetails.service");
var addcustomercancelmoneyaction_service_1 = require("src/app/services/customers/addcustomercancelmoneyaction.service");
var listcustomermoneyactiondetails_service_1 = require("src/app/services/customers/listcustomermoneyactiondetails.service");
var listcustomercanceldmoneydetails_service_1 = require("src/app/services/customers/listcustomercanceldmoneydetails.service");
var listcustomeradvancepaymentsdetails_service_1 = require("src/app/services/customers/listcustomeradvancepaymentsdetails.service");
var notificationsactivities_1 = require("src/app/models/notificationsactivities");
var createactivity_service_1 = require("src/app/services/notificationsactivities/createactivity.service");
var FileclientComponent = /** @class */ (function () {
    function FileclientComponent(_modalService, _addcustomerrebateactionService, _addcustomercheckrebateactionService, _addcustomerpostbalanceactionService, _notifierService, _OauthenticatedsessionServiceService, _activatedRoute, _router, _listsalespointsService, _listbanksService, _listcustomermoneydetailsService, _listcustomercanceldmoneydetailsService, _listcustomermoneyactiondetailsService, _listcustomeradvancepaymentsdetailsService, _addcustomercancelmoneyactionService, _editcustomerService, _listcustomersService, _listemployeesService, _createactivityService) {
        this._modalService = _modalService;
        this._addcustomerrebateactionService = _addcustomerrebateactionService;
        this._addcustomercheckrebateactionService = _addcustomercheckrebateactionService;
        this._addcustomerpostbalanceactionService = _addcustomerpostbalanceactionService;
        this._notifierService = _notifierService;
        this._OauthenticatedsessionServiceService = _OauthenticatedsessionServiceService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._listsalespointsService = _listsalespointsService;
        this._listbanksService = _listbanksService;
        this._listcustomermoneydetailsService = _listcustomermoneydetailsService;
        this._listcustomercanceldmoneydetailsService = _listcustomercanceldmoneydetailsService;
        this._listcustomermoneyactiondetailsService = _listcustomermoneyactiondetailsService;
        this._listcustomeradvancepaymentsdetailsService = _listcustomeradvancepaymentsdetailsService;
        this._addcustomercancelmoneyactionService = _addcustomercancelmoneyactionService;
        this._editcustomerService = _editcustomerService;
        this._listcustomersService = _listcustomersService;
        this._listemployeesService = _listemployeesService;
        this._createactivityService = _createactivityService;
        this.myOptions = {
            // other options...
            dateFormat: 'mmm d, yyyy',
        };
        this.addActivityModel = new notificationsactivities_1.AddActivityModel();
    }
    FileclientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeSalesPoints = [];
        this.allBanks = [];
        this.allEmployees = [];
        this.allCustomerMoneyDetails = [];
        this.allCustomerAdvancePaymentsDetails = [];
        this.allCustomerCancledMoneyDetails = [];
        this.customerMoneyActionDetails = new customers_1.CustomerMoneyActionDetails();
        this.selectedCustomerMoneyDetails = new customers_1.ListCustomerMoneyDetailsModel();
        this.customerTotalCommunicationSummaryModel = new suppliers_1.SupplierTotalCommunicationSummaryModel();
        this.addSelectedCustomerMoneyDetails = new customers_1.AddCustomerCancelMoneyAction();
        this.addCustomerRebateActionModel = new customers_1.AddCustomerRebateActionModel();
        this.addCustomerAdvancePaymentActionModel = new customers_1.AddCustomerRebateActionModel();
        this.addCustomerCashdisCountActionModel = new customers_1.AddCustomerRebateActionModel();
        this.addCustomerCheckRebateActionModel = new customers_1.AddCustomerRebateActionModel();
        this.addCustomerCheckTanzelRebateActionModel = new customers_1.AddCustomerCheckRebateActionModel();
        this.addCustomerPostBalanceActionModel = new customers_1.AddCustomerPostBalanceActionModel();
        this.addCustomer = new customers_1.AddCustomerModel();
        this._activatedRoute.paramMap.subscribe(function (params) {
            _this.addCustomerRebateActionModel.CustomerID = params.get('CustomerID');
            _this.addCustomerAdvancePaymentActionModel.CustomerID = params.get('CustomerID');
            _this.addCustomerCheckRebateActionModel.CustomerID = params.get('CustomerID');
            _this.addCustomerCashdisCountActionModel.CustomerID = params.get('CustomerID');
            _this.addCustomerPostBalanceActionModel.CustomerID = params.get('CustomerID');
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
    };
    FileclientComponent.prototype.getCustomer = function () {
        var _this = this;
        this._listcustomersService.ListCustomers().subscribe(function (_result) {
            _result.CustomersList.forEach(function (element) {
                if (element.CustomerID.toString() === _this.addCustomerRebateActionModel.CustomerID) {
                    _this.addCustomer.Name = element.CustomerName;
                    _this.addCustomer.Mob1 = element.Mobile1;
                    _this.addCustomer.Mob2 = element.Mobile2;
                    if (element.Category === 'جملة') {
                        _this.addCustomer.CatID = 1;
                    }
                    else if (element.Category === 'قطاعى') {
                        _this.addCustomer.CatID = 2;
                    }
                }
            });
        });
    };
    FileclientComponent.prototype.getAllCustomers = function () {
        var _this = this;
        this._listcustomersService.ListCustomers().subscribe(function (_result) {
            _result.CustomersList.forEach(function (element) {
                if (element.CustomerID.toString() === _this.addCustomerRebateActionModel.CustomerID) {
                    _this.addCustomer.Name = element.CustomerName;
                    _this.addCustomer.Mob1 = element.Mobile1;
                    _this.addCustomer.Mob2 = element.Mobile2;
                    if (element.Category === 'جملة') {
                        _this.addCustomer.CatID = 1;
                    }
                    else if (element.Category === 'قطاعى') {
                        _this.addCustomer.CatID = 2;
                    }
                }
            });
        });
    };
    FileclientComponent.prototype.GetDateFirstFrom = function (event) {
        this.DateFirstFrom = this.DateFromFirstObject.jsdate;
    };
    FileclientComponent.prototype.GetDateFirstTo = function (event) {
        this.DateFirstTo = this.DateToFirstObject.jsdate;
    };
    FileclientComponent.prototype.GetDateSecondFrom = function (event) {
        this.DateSecondFrom = this.DateFromSecondObject.jsdate;
    };
    FileclientComponent.prototype.GetDateSecondTo = function (event) {
        this.DateSecondTo = this.DateToSecondObject.jsdate;
    };
    FileclientComponent.prototype.openAddAccountModal = function (template) {
        this.templatesupplier = this._modalService.show(template);
    };
    FileclientComponent.prototype.addCustomerRebateAction = function (_addcustomerrebateactionModel, _formgroup) {
        var _this = this;
        _addcustomerrebateactionModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        _addcustomerrebateactionModel.ReasonID = 2;
        this._addcustomerrebateactionService.AddCustomerRebateAction(_addcustomerrebateactionModel)
            .subscribe(function (_result) {
            if (_result.Status === true) {
                _this.CreateActivityRecordForDebate();
                _formgroup.reset();
                _this.modalRef.hide();
                _this._notifierService.notify('success', _result.Message);
                _this.ngOnInit();
            }
            else {
                _this._notifierService.notify('error', _result.Message);
            }
        });
    };
    FileclientComponent.prototype.addCustomerPostBalanceAction = function (_addCustomerPostBalanceActionModel, _formgroup) {
        var _this = this;
        _addCustomerPostBalanceActionModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        _addCustomerPostBalanceActionModel.CustomerID = this.addCustomerPostBalanceActionModel.CustomerID;
        _addCustomerPostBalanceActionModel.ReasonID = 4;
        this._addcustomerpostbalanceactionService.AddCustomerPostBalanceAction(_addCustomerPostBalanceActionModel)
            .subscribe(function (_result) {
            if (_result.Status === true) {
                _this.CreateActivityRecordForPostBalance();
                _formgroup.reset();
                _this.modalRef.hide();
                _this._notifierService.notify('success', _result.Message);
                _this.ngOnInit();
            }
            else {
                _this._notifierService.notify('error', _result.Message);
            }
        });
    };
    FileclientComponent.prototype.addCustomerAdvancedPaymentAction = function (_addCustomerAdvancePaymentActionModel, _formgroup) {
        var _this = this;
        _addCustomerAdvancePaymentActionModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        _addCustomerAdvancePaymentActionModel.CustomerID = this.addCustomerPostBalanceActionModel.CustomerID;
        _addCustomerAdvancePaymentActionModel.ReasonID = 5;
        this._addcustomerpostbalanceactionService.AddCustomerPostBalanceAction(_addCustomerAdvancePaymentActionModel)
            .subscribe(function (_result) {
            if (_result.Status === true) {
                _this.CreateActivityRecordForAdvancePayment();
                _formgroup.reset();
                _this.modalRef.hide();
                _this._notifierService.notify('success', _result.Message);
                _this.ngOnInit();
            }
            else {
                _this._notifierService.notify('error', _result.Message);
            }
        });
    };
    FileclientComponent.prototype.addCustomerCashdisCountAction = function (_addCustomerCashdisCountActionModel, _formgroup) {
        var _this = this;
        _addCustomerCashdisCountActionModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        _addCustomerCashdisCountActionModel.ReasonID = 7;
        _addCustomerCashdisCountActionModel.CustomerID = this.addCustomerCashdisCountActionModel.CustomerID;
        this._addcustomerrebateactionService.AddCustomerRebateAction(_addCustomerCashdisCountActionModel)
            .subscribe(function (_result) {
            if (_result.Status === true) {
                _this.CreateActivityRecordForCashdisCount();
                _formgroup.reset();
                _this.modalRef.hide();
                _this._notifierService.notify('success', _result.Message);
                _this.ngOnInit();
            }
            else {
                _this._notifierService.notify('error', _result.Message);
            }
        });
    };
    FileclientComponent.prototype.addCustomerCheckRebateAction = function (_addCustomerCheckRebateActionModel, _formgroup) {
        var _this = this;
        _addCustomerCheckRebateActionModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        _addCustomerCheckRebateActionModel.ReasonID = 8;
        _addCustomerCheckRebateActionModel.CustomerID = this.addCustomerCheckRebateActionModel.CustomerID;
        console.log(_addCustomerCheckRebateActionModel);
        this._addcustomercheckrebateactionService.AddCustomerCheckRebateAction(_addCustomerCheckRebateActionModel)
            .subscribe(function (_result) {
            if (_result.Status === true) {
                _this.CreateActivityRecordForCheckRebate();
                _formgroup.reset();
                _this.modalRef.hide();
                _this._notifierService.notify('success', _result.Message);
                _this.ngOnInit();
            }
            else {
                _this._notifierService.notify('error', _result.Message);
            }
        });
    };
    FileclientComponent.prototype.getAllActiveSalesPoints = function () {
        var _this = this;
        this._listsalespointsService.ListAllSalesPoints().subscribe(function (_result) {
            _this.activeSalesPoints = _result.SalesPointsList;
        });
    };
    FileclientComponent.prototype.getAllBanks = function () {
        var _this = this;
        this._listbanksService.getAllBanks().subscribe(function (_result) {
            _this.allBanks = _result.BanksList;
        });
    };
    FileclientComponent.prototype.getAllEmployees = function () {
        var _this = this;
        this._listemployeesService.ListEmployees().subscribe(function (_result) {
            _this.allEmployees = _result.EmployeesList;
        });
    };
    FileclientComponent.prototype.getAllCustomerMoneyDetails = function () {
        var _this = this;
        this._listcustomermoneydetailsService
            .ListCustomerMoneyDetails(parseInt(this.addCustomerRebateActionModel.CustomerID, 10))
            .subscribe(function (_result) {
            if (_result.CustomerMoneyDetailsList == null) {
                _this.allCustomerMoneyDetails = [];
            }
            else {
                _this.allCustomerMoneyDetails = _result.CustomerMoneyDetailsList;
                _this.customerTotalCommunicationSummaryModel = _result.CustomerTotalCommunicationSummary;
            }
        });
    };
    FileclientComponent.prototype.getCustomerAdvancePaymentsDetails = function () {
        var _this = this;
        this._listcustomeradvancepaymentsdetailsService
            .ListCustomerAdvancePaymentsDetails(parseInt(this.addCustomerRebateActionModel.CustomerID, 10))
            .subscribe(function (_result) {
            if (_result.CustomerMoneyDetailsList == null) {
                _this.allCustomerAdvancePaymentsDetails = [];
            }
            else {
                _this.allCustomerAdvancePaymentsDetails = _result.CustomerMoneyDetailsList;
            }
        });
    };
    FileclientComponent.prototype.getAllCustomerCancledMoneyDetails = function () {
        var _this = this;
        this._listcustomercanceldmoneydetailsService
            .ListCustomerMoneyDetails(parseInt(this.addCustomerRebateActionModel.CustomerID, 10))
            .subscribe(function (_result) {
            if (_result.CustomerMoneyDetailsList == null) {
                _this.allCustomerCancledMoneyDetails = [];
            }
            else {
                _this.allCustomerCancledMoneyDetails = _result.CustomerMoneyDetailsList;
                _this.customerTotalCommunicationSummaryModel = _result.CustomerTotalCommunicationSummary;
            }
        });
    };
    FileclientComponent.prototype.getMoneyDetails = function () {
        var _this = this;
        this._listcustomermoneyactiondetailsService
            .GetMoneyActionDetails(this.selectedCustomerMoneyDetails.PayID)
            .subscribe(function (_result) {
            if (_result.MoneyDetails == null) {
                _this.customerMoneyActionDetails = new customers_1.CustomerMoneyActionDetails();
            }
            else {
                _this.customerMoneyActionDetails = _result.MoneyDetails;
            }
        });
    };
    FileclientComponent.prototype.SelectRow = function (_moneyDetails) {
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
    };
    FileclientComponent.prototype.RowSelected = function (_moneyDetails) {
        if (!this.selectedCustomerMoneyDetails) {
            return false;
        }
        return this.selectedCustomerMoneyDetails.PayID === _moneyDetails.PayID ? true : false;
    };
    FileclientComponent.prototype.RemoveSelection = function (_moneyDetails) {
        this.selectedCustomerMoneyDetails = new customers_1.ListCustomerMoneyDetailsModel();
        this.selectedCustomerMoneyDetails.PayID = null;
    };
    FileclientComponent.prototype.addCustomerCancelMoneyAction = function (_addCustomerCancelMoneyAction) {
        var _this = this;
        this._addcustomercancelmoneyactionService.AddCustomerCancelMoneyAction(_addCustomerCancelMoneyAction)
            .subscribe(function (_result) {
            if (_result.Status === true) {
                _this.modalRef.hide();
                _this.CreateActivityRecordForCancleAction();
                _this._notifierService.notify('success', _result.Message);
                _this.ngOnInit();
            }
            else {
                _this._notifierService.notify('error', _result.Message);
            }
        });
    };
    FileclientComponent.prototype.openCancleMoneyModal = function (template) {
        if (this.selectedCustomerMoneyDetails.PayID) {
            this.modalRef = this._modalService.show(template);
        }
        else {
            this._notifierService.notify('error', 'من فضلك يجب اختيار العملية التى تريد الغائها');
        }
    };
    FileclientComponent.prototype.openMoneyDetailsModal = function (template) {
        if (this.selectedCustomerMoneyDetails.PayID) {
            this.getMoneyDetails();
            this.modalRef = this._modalService.show(template);
        }
        else {
            this._notifierService.notify('error', 'من فضلك يجب اختيار العملية التى تريد عرض تفاصيلها ');
        }
    };
    FileclientComponent.prototype.goToPrintMoneyDetails = function () {
        this._router.navigate(['printfileclientmoneydetails', this.addCustomerPostBalanceActionModel.CustomerID]);
    };
    FileclientComponent.prototype.goToPrintAdvancePaymentsDetails = function () {
        this._router.navigate(['printfileclientadvancepaymentsdetails', this.addCustomerRebateActionModel.CustomerID]);
    };
    FileclientComponent.prototype.EditCustomer = function (_customer) {
        var _this = this;
        this.addCustomer.CustomerID = parseInt(this.addCustomerRebateActionModel.CustomerID, 10);
        this._editcustomerService.EditCustomer(this.addCustomer).subscribe(function (_result) {
            if (_result.Status === true) {
                _this.modalRef.hide();
                _this._notifierService.notify('success', _result.Message);
            }
            else {
                _this.modalRef.hide();
                _this._notifierService.notify('error', _result.Message);
            }
        });
    };
    FileclientComponent.prototype.openModal = function (template) {
        this.modalRef = this._modalService.show(template);
    };
    FileclientComponent.prototype.CloseModal = function () {
        this.templatesupplier.hide();
    };
    FileclientComponent.prototype.CreateActivityRecordForDebate = function () {
        var _this = this;
        this.addActivityModel.DateSubmit = new Date();
        this.addActivityModel.Read = true;
        this.addActivityModel.Type = '  تنزيل من حساب العميل';
        this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addActivityModel.POS = this.addCustomerRebateActionModel.SalesPointID;
        this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe(function (_resultactivity) {
            _this._notifierService.notify('success', _resultactivity.Message);
        });
    };
    FileclientComponent.prototype.CreateActivityRecordForPostBalance = function () {
        var _this = this;
        this.addActivityModel.DateSubmit = new Date();
        this.addActivityModel.Read = true;
        this.addActivityModel.Type = '    رصيد سابق العميل';
        this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addActivityModel.POS = 1;
        this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe(function (_resultactivity) {
            _this._notifierService.notify('success', _resultactivity.Message);
        });
    };
    FileclientComponent.prototype.CreateActivityRecordForAdvancePayment = function () {
        var _this = this;
        this.addActivityModel.DateSubmit = new Date();
        this.addActivityModel.Read = true;
        this.addActivityModel.Type = ' دفعة مقدمة العميل';
        this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addActivityModel.POS = this.addCustomerAdvancePaymentActionModel.SalesPointID;
        this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe(function (_resultactivity) {
            _this._notifierService.notify('success', _resultactivity.Message);
        });
    };
    FileclientComponent.prototype.CreateActivityRecordForCashdisCount = function () {
        var _this = this;
        this.addActivityModel.DateSubmit = new Date();
        this.addActivityModel.Read = true;
        this.addActivityModel.Type = ' خصم نقدى العميل';
        this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addActivityModel.POS = 1;
        this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe(function (_resultactivity) {
            _this._notifierService.notify('success', _resultactivity.Message);
        });
    };
    FileclientComponent.prototype.CreateActivityRecordForCheckRebate = function () {
        var _this = this;
        this.addActivityModel.DateSubmit = new Date();
        this.addActivityModel.Read = true;
        this.addActivityModel.Type = ' شيك لحساب العميل';
        this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addActivityModel.POS = 1;
        this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe(function (_resultactivity) {
            _this._notifierService.notify('success', _resultactivity.Message);
        });
    };
    FileclientComponent.prototype.CreateActivityRecordForCancleAction = function () {
        var _this = this;
        this.addActivityModel.DateSubmit = new Date();
        this.addActivityModel.Read = true;
        this.addActivityModel.Type = '  الغاء عملية العميل';
        this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addActivityModel.POS = 1;
        this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe(function (_resultactivity) {
            _this._notifierService.notify('success', _resultactivity.Message);
        });
    };
    FileclientComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    FileclientComponent = __decorate([
        core_1.Component({
            selector: 'app-fileclient',
            templateUrl: './fileclient.component.html',
            styleUrls: ['./fileclient.component.css']
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_1.BsModalService,
            addcustomerrebateaction_service_1.AddcustomerrebateactionService,
            addcustomercheckrebateaction_service_1.AddcustomercheckrebateactionService,
            addcustomerpostbalanceaction_service_1.AddcustomerpostbalanceactionService,
            angular_notifier_1.NotifierService,
            Oauthenticatedsession_Service_1.OauthenticatedsessionService,
            router_1.ActivatedRoute,
            router_1.Router,
            listsalespoints_service_1.ListsalespointsService,
            listbanks_service_1.ListbanksService,
            listcustomermoneydetails_service_1.ListcustomermoneydetailsService,
            listcustomercanceldmoneydetails_service_1.ListcustomercanceldmoneydetailsService,
            listcustomermoneyactiondetails_service_1.ListcustomermoneyactiondetailsService,
            listcustomeradvancepaymentsdetails_service_1.ListcustomeradvancepaymentsdetailsService,
            addcustomercancelmoneyaction_service_1.AddcustomercancelmoneyactionService,
            editcustomer_service_1.EditcustomerService,
            listcustomers_service_1.ListcustomersService,
            listemployees_service_1.ListemployeesService,
            createactivity_service_1.CreateactivityService])
    ], FileclientComponent);
    return FileclientComponent;
}());
exports.FileclientComponent = FileclientComponent;
//# sourceMappingURL=fileclient.component.js.map