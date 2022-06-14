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
var salespoints_1 = require("./../../models/salespoints");
var core_1 = require("@angular/core");
var angular_notifier_1 = require("angular-notifier");
var listsalespoints_service_1 = require("src/app/services/salespoints/listsalespoints.service");
var listwithdrawdepositreasons_service_1 = require("src/app/services/salespoints/listwithdrawdepositreasons.service");
var Oauthenticatedsession_Service_1 = require("src/app/services/general/Oauthenticatedsession.Service");
var addtransfermoneyevent_service_1 = require("../../services/salespoints/addtransfermoneyevent.service");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var getsalespointbalance_service_1 = require("src/app/services/salespoints/getsalespointbalance.service");
var notificationsactivities_1 = require("src/app/models/notificationsactivities");
var createactivity_service_1 = require("src/app/services/notificationsactivities/createactivity.service");
var MoneytransferbetpointssaleComponent = /** @class */ (function () {
    function MoneytransferbetpointssaleComponent(_notifierService, _listsalespointsService, _getsalespointbalanceService, modalService, _listwithdrawdepositreasonsService, _addtransfermoneyeventService, _OauthenticatedsessionServiceService, _createactivityService) {
        this._notifierService = _notifierService;
        this._listsalespointsService = _listsalespointsService;
        this._getsalespointbalanceService = _getsalespointbalanceService;
        this.modalService = modalService;
        this._listwithdrawdepositreasonsService = _listwithdrawdepositreasonsService;
        this._addtransfermoneyeventService = _addtransfermoneyeventService;
        this._OauthenticatedsessionServiceService = _OauthenticatedsessionServiceService;
        this._createactivityService = _createactivityService;
        this.addActivityModel = new notificationsactivities_1.AddActivityModel();
        this.listSalesPointsModel = [];
        this.listWithdrawDepositReasons = [];
        this._addAdditionalCostEventModel = new salespoints_1.AddTransferMoneyEventModel();
        this.withdraw = 1;
        this.SalesPointFromBalance = 0;
        this.SalesPointToBalance = 0;
    }
    MoneytransferbetpointssaleComponent.prototype.ngOnInit = function () {
        this.GetAllSalesPoints();
        this.GetAllWithdrawDepositReason();
    };
    MoneytransferbetpointssaleComponent.prototype.GetAllSalesPoints = function () {
        var _this = this;
        this._listsalespointsService.ListAllSalesPoints().subscribe(function (result) {
            _this.listSalesPointsModel = result.SalesPointsList;
        });
    };
    MoneytransferbetpointssaleComponent.prototype.GetAllWithdrawDepositReason = function () {
        var _this = this;
        this._listwithdrawdepositreasonsService.GetAllWithdrawDepositReason()
            .subscribe(function (result) {
            _this.listWithdrawDepositReasons = result.ListWithdrawDepositReason;
        });
    };
    MoneytransferbetpointssaleComponent.prototype.AddTransferMoneyEvent = function (addAdditionalCostEventModel, _formGroup) {
        var _this = this;
        addAdditionalCostEventModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this._addtransfermoneyeventService.AddTransferMoneyEvent(addAdditionalCostEventModel)
            .subscribe(function (_result) {
            if (_result.Status === true) {
                _this.CreateActivityRecordDebits();
                _this.modalRef.hide();
                _this._notifierService.notify('success', _result.Message);
                _formGroup.reset();
            }
            else {
                _this.modalRef.hide();
                _this._notifierService.notify('error', _result.Message);
            }
        });
    };
    MoneytransferbetpointssaleComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    /**
  * getSalesPointFromBalance
  */
    MoneytransferbetpointssaleComponent.prototype.getSalesPointFromBalance = function (salesPointID) {
        var _this = this;
        this._getsalespointbalanceService.GetSalesPointBalance(salesPointID)
            .subscribe(function (_result) {
            _this.SalesPointFromBalance = _result.SalesPointsList[0].Balance;
        });
    };
    /**
  * getSalesPointToBalance
  */
    MoneytransferbetpointssaleComponent.prototype.getSalesPointToBalance = function (salesPointID) {
        var _this = this;
        this._getsalespointbalanceService.GetSalesPointBalance(salesPointID)
            .subscribe(function (_result) {
            _this.SalesPointToBalance = _result.SalesPointsList[0].Balance;
        });
    };
    MoneytransferbetpointssaleComponent.prototype.CreateActivityRecordDebits = function () {
        var _this = this;
        this.addActivityModel.DateSubmit = new Date();
        this.addActivityModel.Read = true;
        this.addActivityModel.Type = '     حركة تحويل أموال';
        this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addActivityModel.POS = this._addAdditionalCostEventModel.SalesPointIDFrom;
        this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe(function (_resultactivity) {
            _this._notifierService.notify('success', _resultactivity.Message);
        });
    };
    MoneytransferbetpointssaleComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    MoneytransferbetpointssaleComponent = __decorate([
        core_1.Component({
            selector: 'app-moneytransferbetpointssale',
            templateUrl: './moneytransferbetpointssale.component.html',
            styleUrls: ['./moneytransferbetpointssale.component.css']
        }),
        __metadata("design:paramtypes", [angular_notifier_1.NotifierService,
            listsalespoints_service_1.ListsalespointsService,
            getsalespointbalance_service_1.GetsalespointbalanceService,
            ngx_bootstrap_1.BsModalService,
            listwithdrawdepositreasons_service_1.ListwithdrawdepositreasonsService,
            addtransfermoneyevent_service_1.AddtransfermoneyeventService,
            Oauthenticatedsession_Service_1.OauthenticatedsessionService,
            createactivity_service_1.CreateactivityService])
    ], MoneytransferbetpointssaleComponent);
    return MoneytransferbetpointssaleComponent;
}());
exports.MoneytransferbetpointssaleComponent = MoneytransferbetpointssaleComponent;
//# sourceMappingURL=moneytransferbetpointssale.component.js.map