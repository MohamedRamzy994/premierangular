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
var updateactivity_service_1 = require("./../../services/notificationsactivities/updateactivity.service");
var userlist_service_1 = require("./../../services/user/userlist.service");
var core_1 = require("@angular/core");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var angular_notifier_1 = require("angular-notifier");
var router_1 = require("@angular/router");
var salespoints_1 = require("src/app/models/salespoints");
var listallsalespoints_service_1 = require("../../services/salespoints/listallsalespoints.service");
var salespoints_2 = require("../../models/salespoints");
var listactivities_service_1 = require("src/app/services/notificationsactivities/listactivities.service");
var result_1 = require("src/app/models/result");
var ListactivitiesComponent = /** @class */ (function () {
    function ListactivitiesComponent(_notifierService, modalService, router, _listactivitiesService, _userlistService, _listsalespointsService, _updateactivityService) {
        this._notifierService = _notifierService;
        this.modalService = modalService;
        this.router = router;
        this._listactivitiesService = _listactivitiesService;
        this._userlistService = _userlistService;
        this._listsalespointsService = _listsalespointsService;
        this._updateactivityService = _updateactivityService;
        this.GetAllUsers();
        this.usersResult = new result_1.Result();
        this.usersResult.UserList = [];
        this.listSalesPoints = [];
        this.GetAllActivities();
    }
    ListactivitiesComponent.prototype.ngOnInit = function () {
        this.addBranchModel = new salespoints_1.AddSalesPointsModel();
        this.SearchSuppliers = '';
        this.activitiesList = [];
        this.selectedReason = new salespoints_2.ListSalesPointsModel();
        this.selectedReason.SalesPointID = 0;
        this.reason = '';
        // this.usersResult =  new Result();
        this.GetAllUsers();
        this.GetAllSalesPoints();
        this.GetAllActivities();
    };
    ListactivitiesComponent.prototype.SelectRow = function (_customer) {
        this.selectedReason = _customer;
        this.buttonAdd.nativeElement.disabled = true;
    };
    ListactivitiesComponent.prototype.RowSelected = function (_customer) {
        if (!this.selectedReason) {
            return false;
        }
        return this.selectedReason.SalesPointID === _customer.SalesPointID ? true : false;
    };
    ListactivitiesComponent.prototype.RemoveSelection = function (_customer) {
        this.selectedReason = new salespoints_2.ListSalesPointsModel();
        this.selectedReason.SalesPointID = 0;
        this.buttonAdd.nativeElement.disabled = false;
    };
    ListactivitiesComponent.prototype.openModal = function (template) {
        if (this.selectedReason.SalesPointID === 0) {
            this._notifierService.notify('error', 'من فضلك يجب تحديد نقطة بيع واحد على الاقل للقيام بعملية الحذف');
        }
        else {
            this.modalRef = this.modalService.show(template);
        }
    };
    ListactivitiesComponent.prototype.UpdateActivityRecord = function (ID, Read) {
        var _this = this;
        this._updateactivityService.UpdateActivityRecord(ID, Read).subscribe(function (_result) {
            if (_result.Status === true) {
                _this._notifierService.notify('success', _result.Message);
                _this.GetAllActivities();
            }
            else {
                _this.GetAllActivities();
                _this._notifierService.notify('error', _result.Message);
            }
        });
    };
    ListactivitiesComponent.prototype.GetAllActivities = function () {
        var _this = this;
        this._listactivitiesService.ListAllActivities().subscribe(function (_result) {
            if (_result.AllActivitiesRecords.length == 0) {
                _this.activitiesList = [];
            }
            else {
                _this.activitiesList = _result.AllActivitiesRecords.reverse();
                _this.activitiesList.forEach(function (value) {
                    value.ShowFormat = ' تم تحرير ' + value.Type + ' بواسطة ' + '   '
                        + _this.usersResult.UserList.find(function (_user) { return _user.UserId == value.UserID; }).UserName + '   '
                        + 'فى تاريخ' + '   ' + value.DateSubmit + '   ' + 'من خلال نقطة  بيع' + '   '
                        + _this.listSalesPoints.find(function (_salespoint) { return _salespoint.SalesPointID == value.POS; }).SalesPoint;
                });
            }
        });
    };
    ListactivitiesComponent.prototype.openAddModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    ListactivitiesComponent.prototype.openEditModal = function (template) {
        if (this.selectedReason.SalesPointID === 0) {
            this._notifierService.notify('error', 'من فضلك يجب تحديد نقطة بيع واحد على الاقل للقيام بعملية التعديل ');
        }
        else {
            if (this.RowSelected(this.selectedReason) === true) {
                this.modalRef = this.modalService.show(template);
            }
            else if (this.RowSelected(this.selectedReason) === false) {
                this._notifierService.notify('error', 'من فضلك يجب تحديد نقطة بيع واحد على الاقل للقيام بعملية التعديل ');
            }
            else {
                this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');
            }
        }
    };
    ListactivitiesComponent.prototype.GetAllUsers = function () {
        var _this = this;
        this._userlistService.listUsers().subscribe(function (_result) {
            _this.usersResult = _result;
            _this.usersResult.UserList = _result.UserList;
        });
    };
    ListactivitiesComponent.prototype.GetAllSalesPoints = function () {
        var _this = this;
        this._listsalespointsService.ListAllSalesPoints().subscribe(function (_result) {
            _this.listSalesPoints = _result.SalesPointsList;
        });
    };
    ListactivitiesComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    __decorate([
        core_1.ViewChild('ButtonAdd'),
        __metadata("design:type", core_1.ElementRef)
    ], ListactivitiesComponent.prototype, "buttonAdd", void 0);
    ListactivitiesComponent = __decorate([
        core_1.Component({
            selector: 'app-listactivities',
            templateUrl: './listactivities.component.html',
            styleUrls: ['./listactivities.component.css']
        }),
        __metadata("design:paramtypes", [angular_notifier_1.NotifierService,
            ngx_bootstrap_1.BsModalService,
            router_1.Router,
            listactivities_service_1.ListactivitiesService,
            userlist_service_1.UserlistService,
            listallsalespoints_service_1.ListallsalespointsService,
            updateactivity_service_1.UpdateactivityService])
    ], ListactivitiesComponent);
    return ListactivitiesComponent;
}());
exports.ListactivitiesComponent = ListactivitiesComponent;
//# sourceMappingURL=listactivities.component.js.map