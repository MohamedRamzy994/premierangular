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
var core_1 = require("@angular/core");
var angular_notifier_1 = require("angular-notifier");
var listsalespoints_service_1 = require("src/app/services/salespoints/listsalespoints.service");
var listwithdrawdepositreasons_service_1 = require("src/app/services/salespoints/listwithdrawdepositreasons.service");
var Oauthenticatedsession_Service_1 = require("src/app/services/general/Oauthenticatedsession.Service");
var salespoints_1 = require("src/app/models/salespoints");
var addwithdrawdepositevent_service_1 = require("../../services/salespoints/addwithdrawdepositevent.service");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var getsalespointbalance_service_1 = require("../../services/salespoints/getsalespointbalance.service");
var notificationsactivities_1 = require("src/app/models/notificationsactivities");
var createactivity_service_1 = require("src/app/services/notificationsactivities/createactivity.service");
var PulldepositdrawerstorageComponent = /** @class */ (function () {
    function PulldepositdrawerstorageComponent(_notifierService, _listsalespointsService, _getsalespointbalanceService, modalService, _listwithdrawdepositreasonsService, _addwithdrawdepositeventeventService, _OauthenticatedsessionServiceService, _createactivityService) {
        this._notifierService = _notifierService;
        this._listsalespointsService = _listsalespointsService;
        this._getsalespointbalanceService = _getsalespointbalanceService;
        this.modalService = modalService;
        this._listwithdrawdepositreasonsService = _listwithdrawdepositreasonsService;
        this._addwithdrawdepositeventeventService = _addwithdrawdepositeventeventService;
        this._OauthenticatedsessionServiceService = _OauthenticatedsessionServiceService;
        this._createactivityService = _createactivityService;
        this.listSalesPointsModel = [];
        this.listWithdrawDepositReasons = [];
        this._addAdditionalCostEventModel = new salespoints_1.AddAdditionalCostEventModel();
        this.addActivityModel = new notificationsactivities_1.AddActivityModel();
        this.withdraw = 1;
        this.SalesPointBalance = 0;
    }
    PulldepositdrawerstorageComponent.prototype.ngOnInit = function () {
        this.GetAllSalesPoints();
        this.GetAllWithdrawDepositReason();
    };
    PulldepositdrawerstorageComponent.prototype.GetAllSalesPoints = function () {
        var _this = this;
        this._listsalespointsService.ListAllSalesPoints().subscribe(function (result) {
            _this.listSalesPointsModel = result.SalesPointsList;
        });
    };
    PulldepositdrawerstorageComponent.prototype.GetAllWithdrawDepositReason = function () {
        var _this = this;
        this._listwithdrawdepositreasonsService.GetAllWithdrawDepositReason()
            .subscribe(function (result) {
            _this.listWithdrawDepositReasons = result.ListWithdrawDepositReason;
        });
    };
    PulldepositdrawerstorageComponent.prototype.AddWithdrawDepositEvent = function (addAdditionalCostEventModel, _formGroup) {
        var _this = this;
        addAdditionalCostEventModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        if (this.withdraw === 1) {
            this._addwithdrawdepositeventeventService.AddWithdrawEvent(addAdditionalCostEventModel)
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
        }
        else if (this.withdraw === 2) {
            this._addwithdrawdepositeventeventService.AddDepositEvent(addAdditionalCostEventModel)
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
        }
    };
    PulldepositdrawerstorageComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    /**
     * getSalesPointBalance
     */
    PulldepositdrawerstorageComponent.prototype.getSalesPointBalance = function () {
        var _this = this;
        this._getsalespointbalanceService.GetSalesPointBalance(this._addAdditionalCostEventModel.SalesPointID)
            .subscribe(function (_result) {
            _this.SalesPointBalance = _result.SalesPointsList[0].Balance;
        });
    };
    PulldepositdrawerstorageComponent.prototype.CreateActivityRecordDebits = function () {
        var _this = this;
        this.addActivityModel.DateSubmit = new Date();
        this.addActivityModel.Read = true;
        this.addActivityModel.Type = ' تسجيل سحب وايداع';
        this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addActivityModel.POS = this._addAdditionalCostEventModel.SalesPointID;
        this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe(function (_resultactivity) {
            _this._notifierService.notify('success', _resultactivity.Message);
        });
    };
    PulldepositdrawerstorageComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    PulldepositdrawerstorageComponent = __decorate([
        core_1.Component({
            selector: 'app-pulldepositdrawerstorage',
            templateUrl: './pulldepositdrawerstorage.component.html',
            styleUrls: ['./pulldepositdrawerstorage.component.css']
        }),
        __metadata("design:paramtypes", [angular_notifier_1.NotifierService,
            listsalespoints_service_1.ListsalespointsService,
            getsalespointbalance_service_1.GetsalespointbalanceService,
            ngx_bootstrap_1.BsModalService,
            listwithdrawdepositreasons_service_1.ListwithdrawdepositreasonsService,
            addwithdrawdepositevent_service_1.AddwithdrawdepositeventeventService,
            Oauthenticatedsession_Service_1.OauthenticatedsessionService,
            createactivity_service_1.CreateactivityService])
    ], PulldepositdrawerstorageComponent);
    return PulldepositdrawerstorageComponent;
}());
exports.PulldepositdrawerstorageComponent = PulldepositdrawerstorageComponent;
//# sourceMappingURL=pulldepositdrawerstorage.component.js.map