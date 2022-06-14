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
var listsalespoints_service_1 = require("../../services/salespoints/listsalespoints.service");
var salespoints_1 = require("../../models/salespoints");
var listwithdrawdepositreasons_service_1 = require("src/app/services/salespoints/listwithdrawdepositreasons.service");
var addadditionalcostevent_service_1 = require("src/app/services/salespoints/addadditionalcostevent.service");
var angular_notifier_1 = require("angular-notifier");
var Oauthenticatedsession_Service_1 = require("src/app/services/general/Oauthenticatedsession.Service");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var notificationsactivities_1 = require("src/app/models/notificationsactivities");
var createactivity_service_1 = require("src/app/services/notificationsactivities/createactivity.service");
var AddexpensesComponent = /** @class */ (function () {
    function AddexpensesComponent(_notifierService, _listsalespointsService, modalService, _listwithdrawdepositreasonsService, _addadditionalcosteventService, _OauthenticatedsessionServiceService, _createactivityService) {
        this._notifierService = _notifierService;
        this._listsalespointsService = _listsalespointsService;
        this.modalService = modalService;
        this._listwithdrawdepositreasonsService = _listwithdrawdepositreasonsService;
        this._addadditionalcosteventService = _addadditionalcosteventService;
        this._OauthenticatedsessionServiceService = _OauthenticatedsessionServiceService;
        this._createactivityService = _createactivityService;
        this.addActivityModel = new notificationsactivities_1.AddActivityModel();
        this.listSalesPointsModel = [];
        this.listWithdrawDepositReasons = [];
        this._addAdditionalCostEventModel = new salespoints_1.AddAdditionalCostEventModel();
    }
    AddexpensesComponent.prototype.ngOnInit = function () {
        this.GetAllSalesPoints();
        this.GetAllWithdrawDepositReason();
    };
    AddexpensesComponent.prototype.GetAllSalesPoints = function () {
        var _this = this;
        this._listsalespointsService.ListAllSalesPoints().subscribe(function (result) {
            _this.listSalesPointsModel = result.SalesPointsList;
        });
    };
    AddexpensesComponent.prototype.GetAllWithdrawDepositReason = function () {
        var _this = this;
        this._listwithdrawdepositreasonsService.GetAllWithdrawDepositReason()
            .subscribe(function (result) {
            _this.listWithdrawDepositReasons = result.ListWithdrawDepositReason;
        });
    };
    AddexpensesComponent.prototype.AddAdditionalCostEvent = function (addAdditionalCostEventModel, _formGroup) {
        var _this = this;
        addAdditionalCostEventModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this._addadditionalcosteventService.AddAdditionalCostEvent(addAdditionalCostEventModel)
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
    AddexpensesComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    AddexpensesComponent.prototype.CreateActivityRecordDebits = function () {
        var _this = this;
        this.addActivityModel.DateSubmit = new Date();
        this.addActivityModel.Read = true;
        this.addActivityModel.Type = '   تسجيل مصروف اضافى';
        this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addActivityModel.POS = this._addAdditionalCostEventModel.SalesPointID;
        this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe(function (_resultactivity) {
            _this._notifierService.notify('success', _resultactivity.Message);
        });
    };
    AddexpensesComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    AddexpensesComponent = __decorate([
        core_1.Component({
            selector: 'app-addexpenses',
            templateUrl: './addexpenses.component.html',
            styleUrls: ['./addexpenses.component.css']
        }),
        __metadata("design:paramtypes", [angular_notifier_1.NotifierService,
            listsalespoints_service_1.ListsalespointsService,
            ngx_bootstrap_1.BsModalService,
            listwithdrawdepositreasons_service_1.ListwithdrawdepositreasonsService,
            addadditionalcostevent_service_1.AddadditionalcosteventService,
            Oauthenticatedsession_Service_1.OauthenticatedsessionService,
            createactivity_service_1.CreateactivityService])
    ], AddexpensesComponent);
    return AddexpensesComponent;
}());
exports.AddexpensesComponent = AddexpensesComponent;
//# sourceMappingURL=addexpenses.component.js.map