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
var listmoneyactiondetails_service_1 = require("./../../services/suppliers/listmoneyactiondetails.service");
var listsalespoints_service_1 = require("./../../services/salespoints/listsalespoints.service");
var angular_notifier_1 = require("angular-notifier");
var suppliers_1 = require("./../../models/suppliers");
var addrebateaction_service_1 = require("./../../services/suppliers/addrebateaction.service");
var core_1 = require("@angular/core");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var Oauthenticatedsession_Service_1 = require("../../services/general/Oauthenticatedsession.Service");
var router_1 = require("@angular/router");
var addpostbalanceaction_service_1 = require("../../services/suppliers/addpostbalanceaction.service");
var addcheckrebateaction_service_1 = require("../../services/suppliers/addcheckrebateaction.service");
var listbanks_service_1 = require("../../services/bankcheck/listbanks.service");
var listsuppliermoneydetails_service_1 = require("../../services/suppliers/listsuppliermoneydetails.service");
var addcancelmoneyaction_service_1 = require("src/app/services/suppliers/addcancelmoneyaction.service");
var suppliers_2 = require("../../models/suppliers");
var listsupplieradvancepaymentsdetails_service_1 = require("src/app/services/suppliers/listsupplieradvancepaymentsdetails.service");
var listsuppliercanceldmoneydetails_service_1 = require("src/app/services/suppliers/listsuppliercanceldmoneydetails.service");
var editsupplier_service_1 = require("src/app/services/suppliers/editsupplier.service");
var listsuppliers_service_1 = require("src/app/services/suppliers/listsuppliers.service");
var notificationsactivities_1 = require("src/app/models/notificationsactivities");
var createactivity_service_1 = require("src/app/services/notificationsactivities/createactivity.service");
var FilesupplierComponent = /** @class */ (function () {
    function FilesupplierComponent(_modalService, _addrebateactionService, _addcheckrebateactionService, _addpostbalanceactionService, _notifierService, _OauthenticatedsessionServiceService, _activatedRoute, _router, _listsalespointsService, _listbanksService, _listsuppliermoneydetailsService, _listsuppliercanceldmoneydetailsService, _listmoneyactiondetailsService, _listsupplieradvancepaymentsdetailsService, _addcancelmoneyactionService, _editsupplierService, _listsuppliersService, _createactivityService) {
        this._modalService = _modalService;
        this._addrebateactionService = _addrebateactionService;
        this._addcheckrebateactionService = _addcheckrebateactionService;
        this._addpostbalanceactionService = _addpostbalanceactionService;
        this._notifierService = _notifierService;
        this._OauthenticatedsessionServiceService = _OauthenticatedsessionServiceService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._listsalespointsService = _listsalespointsService;
        this._listbanksService = _listbanksService;
        this._listsuppliermoneydetailsService = _listsuppliermoneydetailsService;
        this._listsuppliercanceldmoneydetailsService = _listsuppliercanceldmoneydetailsService;
        this._listmoneyactiondetailsService = _listmoneyactiondetailsService;
        this._listsupplieradvancepaymentsdetailsService = _listsupplieradvancepaymentsdetailsService;
        this._addcancelmoneyactionService = _addcancelmoneyactionService;
        this._editsupplierService = _editsupplierService;
        this._listsuppliersService = _listsuppliersService;
        this._createactivityService = _createactivityService;
        this.myOptions = {
            // other options...
            dateFormat: 'mmm d, yyyy',
        };
    }
    FilesupplierComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeSalesPoints = [];
        this.allBanks = [];
        this.allSupplierMoneyDetails = [];
        this.allSupplierAdvancePaymentsDetails = [];
        this.allSupplierCancledMoneyDetails = [];
        this.supplierMoneyActionDetails = new suppliers_1.SupplierMoneyActionDetails();
        this.selectedSupplierMoneyDetails = new suppliers_1.ListSupplierMoneyDetailsModel();
        this.supplierTotalCommunicationSummaryModel = new suppliers_1.SupplierTotalCommunicationSummaryModel();
        this.addSelectedSupplierMoneyDetails = new suppliers_2.AddSupplierCancelMoneyAction();
        this.addRebateActionModel = new suppliers_1.AddRebateActionModel();
        this.addAdvancePaymentActionModel = new suppliers_1.AddRebateActionModel();
        this.addCheckRebateActionModel = new suppliers_1.AddCheckRebateActionModel();
        this.addCashdisCountActionModel = new suppliers_1.AddRebateActionModel();
        this.addPostBalanceActionModel = new suppliers_1.AddPostBalanceActionModel();
        this.addSupplier = new suppliers_1.AddSupplierModel();
        this.addActivityModel = new notificationsactivities_1.AddActivityModel();
        this._activatedRoute.paramMap.subscribe(function (params) {
            _this.addRebateActionModel.SupplierID = params.get('SupplierID');
            _this.addAdvancePaymentActionModel.SupplierID = params.get('SupplierID');
            _this.addCashdisCountActionModel.SupplierID = params.get('SupplierID');
            _this.addCheckRebateActionModel.SupplierID = params.get('SupplierID');
            _this.addPostBalanceActionModel.SupplierID = params.get('SupplierID');
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
    };
    FilesupplierComponent.prototype.getSupplier = function () {
        var _this = this;
        this._listsuppliersService.ListSuppliers().subscribe(function (_result) {
            _result.SuppliersList.forEach(function (element) {
                if (element.SupplierID.toString() === _this.addRebateActionModel.SupplierID) {
                    _this.addSupplier = element;
                }
            });
        });
    };
    FilesupplierComponent.prototype.GetDateFirstFrom = function (event) {
        this.DateFirstFrom = this.DateFromFirstObject.jsdate;
    };
    FilesupplierComponent.prototype.GetDateFirstTo = function (event) {
        this.DateFirstTo = this.DateToFirstObject.jsdate;
    };
    FilesupplierComponent.prototype.GetDateSecondFrom = function (event) {
        this.DateSecondFrom = this.DateFromSecondObject.jsdate;
    };
    FilesupplierComponent.prototype.GetDateSecondTo = function (event) {
        this.DateSecondTo = this.DateToSecondObject.jsdate;
    };
    FilesupplierComponent.prototype.openAddAccountModal = function (template) {
        this.modalRef = this._modalService.show(template);
    };
    FilesupplierComponent.prototype.addRebateAction = function (_addrebateactionModel, _formgroup) {
        var _this = this;
        _addrebateactionModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        _addrebateactionModel.ReasonID = 2;
        this._addrebateactionService.AddRebateAction(_addrebateactionModel)
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
    FilesupplierComponent.prototype.addPostBalanceAction = function (_addPostBalanceActionModel, _formgroup) {
        var _this = this;
        _addPostBalanceActionModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        _addPostBalanceActionModel.ReasonID = 4;
        this._addpostbalanceactionService.AddPostBalanceAction(_addPostBalanceActionModel)
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
    FilesupplierComponent.prototype.addAdvancedPaymentAction = function (_addAdvancePaymentActionModel, _formgroup) {
        var _this = this;
        _addAdvancePaymentActionModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        _addAdvancePaymentActionModel.ReasonID = 5;
        this._addrebateactionService.AddRebateAction(_addAdvancePaymentActionModel)
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
    FilesupplierComponent.prototype.addCashdisCountAction = function (_addAdvancePaymentActionModel, _formgroup) {
        var _this = this;
        _addAdvancePaymentActionModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        _addAdvancePaymentActionModel.ReasonID = 7;
        this._addrebateactionService.AddRebateAction(_addAdvancePaymentActionModel)
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
    FilesupplierComponent.prototype.addCheckRebateAction = function (_addCheckRebateActionModel, _formgroup) {
        var _this = this;
        _addCheckRebateActionModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        _addCheckRebateActionModel.ReasonID = 8;
        this._addcheckrebateactionService.AddCheckRebateAction(_addCheckRebateActionModel)
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
    FilesupplierComponent.prototype.getAllActiveSalesPoints = function () {
        var _this = this;
        this._listsalespointsService.ListAllSalesPoints().subscribe(function (_result) {
            _this.activeSalesPoints = _result.SalesPointsList;
        });
    };
    FilesupplierComponent.prototype.getAllBanks = function () {
        var _this = this;
        this._listbanksService.getAllBanks().subscribe(function (_result) {
            _this.allBanks = _result.BanksList;
        });
    };
    FilesupplierComponent.prototype.getAllSupplierMoneyDetails = function () {
        var _this = this;
        this._listsuppliermoneydetailsService
            .ListSupplierMoneyDetails(parseInt(this.addRebateActionModel.SupplierID, 10))
            .subscribe(function (_result) {
            if (_result.Status == true) {
                _this.allSupplierMoneyDetails = _result.SupplierMoneyDetailsList;
                _this.supplierTotalCommunicationSummaryModel = _result.SupplierTotalCommunicationSummary;
            }
            else {
                _this.allSupplierMoneyDetails = [];
                _this.supplierTotalCommunicationSummaryModel = { TotalCommunication: 0, RestCommunication: 0, CompletedCommunication: 0 };
            }
        });
    };
    FilesupplierComponent.prototype.getSupplierAdvancePaymentsDetails = function () {
        var _this = this;
        this._listsupplieradvancepaymentsdetailsService
            .ListSupplierAdvancePaymentsDetails(parseInt(this.addRebateActionModel.SupplierID, 10))
            .subscribe(function (_result) {
            if (_result.Status == true) {
                _this.allSupplierAdvancePaymentsDetails = _result.SupplierMoneyDetailsList;
            }
            else {
                _this.allSupplierAdvancePaymentsDetails = [];
            }
        });
    };
    FilesupplierComponent.prototype.getAllSupplierCancledMoneyDetails = function () {
        var _this = this;
        this._listsuppliercanceldmoneydetailsService
            .ListSupplierMoneyDetails(parseInt(this.addRebateActionModel.SupplierID, 10))
            .subscribe(function (_result) {
            if (_result.Status == true) {
                _this.allSupplierCancledMoneyDetails = _result.SupplierMoneyDetailsList;
                _this.supplierTotalCommunicationSummaryModel = _result.SupplierTotalCommunicationSummary;
            }
            else {
                _this.allSupplierCancledMoneyDetails = [];
                _this.supplierTotalCommunicationSummaryModel = { TotalCommunication: 0, RestCommunication: 0, CompletedCommunication: 0 };
            }
        });
    };
    FilesupplierComponent.prototype.getMoneyDetails = function () {
        var _this = this;
        this._listmoneyactiondetailsService
            .GetMoneyActionDetails(this.selectedSupplierMoneyDetails.PayID)
            .subscribe(function (_result) {
            if (_result.Status == true) {
                _this.supplierMoneyActionDetails = _result.MoneyDetails;
            }
            else {
                _this.supplierMoneyActionDetails = new suppliers_1.SupplierMoneyActionDetails();
            }
        });
    };
    FilesupplierComponent.prototype.SelectRow = function (_moneyDetails) {
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
    };
    FilesupplierComponent.prototype.RowSelected = function (_moneyDetails) {
        if (!this.selectedSupplierMoneyDetails) {
            return false;
        }
        return this.selectedSupplierMoneyDetails.PayID === _moneyDetails.PayID ? true : false;
    };
    FilesupplierComponent.prototype.RemoveSelection = function (_moneyDetails) {
        this.selectedSupplierMoneyDetails = new suppliers_1.ListSupplierMoneyDetailsModel();
        this.addSelectedSupplierMoneyDetails.PayID = null;
    };
    FilesupplierComponent.prototype.addCancelMoneyAction = function (_addSupplierCancelMoneyAction) {
        var _this = this;
        this._addcancelmoneyactionService.AddCancelMoneyAction(_addSupplierCancelMoneyAction)
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
    FilesupplierComponent.prototype.openCancleMoneyModal = function (template) {
        if (this.addSelectedSupplierMoneyDetails.PayID) {
            this.modalRef = this._modalService.show(template);
        }
        else {
            this._notifierService.notify('error', 'من فضلك يجب اختيار العملية التى تريد الغائها');
        }
    };
    FilesupplierComponent.prototype.openMoneyDetailsModal = function (template) {
        if (this.selectedSupplierMoneyDetails.PayID) {
            this.getMoneyDetails();
            this.modalRef = this._modalService.show(template);
        }
        else {
            this._notifierService.notify('error', 'من فضلك يجب اختيار العملية التى تريد عرض تفاصيلها ');
        }
    };
    FilesupplierComponent.prototype.goToPrintMoneyDetails = function () {
        this._router.navigate(['printfilesuppliermoneydetails', this.addRebateActionModel.SupplierID]);
    };
    FilesupplierComponent.prototype.goToPrintAdvancePaymentsDetails = function () {
        this._router.navigate(['printfilesupplieradvancepaymentsdetails', this.addRebateActionModel.SupplierID]);
    };
    FilesupplierComponent.prototype.EditSupplier = function (_supplier, _formGroup) {
        var _this = this;
        this.addSupplier.SupplierID = parseInt(this.addRebateActionModel.SupplierID, 10);
        this._editsupplierService.EditSupplier(this.addSupplier).subscribe(function (_result) {
            if (_result.Status === true) {
                _this._notifierService.notify('success', _result.Message);
            }
            else {
                _this._notifierService.notify('error', _result.Message);
            }
        });
    };
    FilesupplierComponent.prototype.CreateActivityRecordForDebate = function () {
        var _this = this;
        this.addActivityModel.DateSubmit = new Date();
        this.addActivityModel.Read = true;
        this.addActivityModel.Type = '  تنزيل من حساب المورد';
        this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addActivityModel.POS = this.addRebateActionModel.SalesPointID;
        this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe(function (_resultactivity) {
            _this._notifierService.notify('success', _resultactivity.Message);
        });
    };
    FilesupplierComponent.prototype.CreateActivityRecordForPostBalance = function () {
        var _this = this;
        this.addActivityModel.DateSubmit = new Date();
        this.addActivityModel.Read = true;
        this.addActivityModel.Type = '    رصيد سابق المورد';
        this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addActivityModel.POS = 1;
        this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe(function (_resultactivity) {
            _this._notifierService.notify('success', _resultactivity.Message);
        });
    };
    FilesupplierComponent.prototype.CreateActivityRecordForAdvancePayment = function () {
        var _this = this;
        this.addActivityModel.DateSubmit = new Date();
        this.addActivityModel.Read = true;
        this.addActivityModel.Type = ' دفعة مقدمة المورد';
        this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addActivityModel.POS = this.addAdvancePaymentActionModel.SalesPointID;
        this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe(function (_resultactivity) {
            _this._notifierService.notify('success', _resultactivity.Message);
        });
    };
    FilesupplierComponent.prototype.CreateActivityRecordForCashdisCount = function () {
        var _this = this;
        this.addActivityModel.DateSubmit = new Date();
        this.addActivityModel.Read = true;
        this.addActivityModel.Type = ' خصم نقدى المورد';
        this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addActivityModel.POS = 1;
        this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe(function (_resultactivity) {
            _this._notifierService.notify('success', _resultactivity.Message);
        });
    };
    FilesupplierComponent.prototype.CreateActivityRecordForCheckRebate = function () {
        var _this = this;
        this.addActivityModel.DateSubmit = new Date();
        this.addActivityModel.Read = true;
        this.addActivityModel.Type = ' شيك لحساب المورد';
        this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addActivityModel.POS = 1;
        this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe(function (_resultactivity) {
            _this._notifierService.notify('success', _resultactivity.Message);
        });
    };
    FilesupplierComponent.prototype.CreateActivityRecordForCancleAction = function () {
        var _this = this;
        this.addActivityModel.DateSubmit = new Date();
        this.addActivityModel.Read = true;
        this.addActivityModel.Type = '  الغاء عملية المورد';
        this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addActivityModel.POS = 1;
        this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe(function (_resultactivity) {
            _this._notifierService.notify('success', _resultactivity.Message);
        });
    };
    FilesupplierComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    FilesupplierComponent = __decorate([
        core_1.Component({
            selector: 'app-filesupplier',
            templateUrl: './filesupplier.component.html',
            styleUrls: ['./filesupplier.component.css']
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_1.BsModalService,
            addrebateaction_service_1.AddrebateactionService,
            addcheckrebateaction_service_1.AddcheckrebateactionService,
            addpostbalanceaction_service_1.AddpostbalanceactionService,
            angular_notifier_1.NotifierService,
            Oauthenticatedsession_Service_1.OauthenticatedsessionService,
            router_1.ActivatedRoute,
            router_1.Router,
            listsalespoints_service_1.ListsalespointsService,
            listbanks_service_1.ListbanksService,
            listsuppliermoneydetails_service_1.ListsuppliermoneydetailsService,
            listsuppliercanceldmoneydetails_service_1.ListsuppliercanceldmoneydetailsService,
            listmoneyactiondetails_service_1.ListmoneyactiondetailsService,
            listsupplieradvancepaymentsdetails_service_1.ListsupplieradvancepaymentsdetailsService,
            addcancelmoneyaction_service_1.AddcancelmoneyactionService,
            editsupplier_service_1.EditsupplierService,
            listsuppliers_service_1.ListsuppliersService,
            createactivity_service_1.CreateactivityService])
    ], FilesupplierComponent);
    return FilesupplierComponent;
}());
exports.FilesupplierComponent = FilesupplierComponent;
//# sourceMappingURL=filesupplier.component.js.map