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
var ngx_bootstrap_1 = require("ngx-bootstrap");
var angular_notifier_1 = require("angular-notifier");
var router_1 = require("@angular/router");
var salespoints_1 = require("src/app/models/salespoints");
var listallsalespoints_service_1 = require("../../services/salespoints/listallsalespoints.service");
var salespoints_2 = require("../../models/salespoints");
var addsalespoint_service_1 = require("../../services/salespoints/addsalespoint.service");
var deletsalespoint_service_1 = require("src/app/services/salespoints/deletsalespoint.service");
var editsalespoint_service_1 = require("src/app/services/salespoints/editsalespoint.service");
var ListsalespointsComponent = /** @class */ (function () {
    function ListsalespointsComponent(_notifierService, modalService, router, _listallsalespointsService, _addsalespointService, _deletsalespointService, _editsalespointService) {
        this._notifierService = _notifierService;
        this.modalService = modalService;
        this.router = router;
        this._listallsalespointsService = _listallsalespointsService;
        this._addsalespointService = _addsalespointService;
        this._deletsalespointService = _deletsalespointService;
        this._editsalespointService = _editsalespointService;
    }
    ListsalespointsComponent.prototype.ngOnInit = function () {
        this.addBranchModel = new salespoints_1.AddSalesPointsModel();
        this.SearchSuppliers = '';
        this.branchesList = [];
        this.selectedReason = new salespoints_2.ListSalesPointsModel();
        this.selectedReason.SalesPointID = 0;
        this.reason = '';
        this.GetAllSalesPoints();
    };
    ListsalespointsComponent.prototype.SelectRow = function (_customer) {
        this.selectedReason = _customer;
        this.buttonAdd.nativeElement.disabled = true;
    };
    ListsalespointsComponent.prototype.RowSelected = function (_customer) {
        if (!this.selectedReason) {
            return false;
        }
        return this.selectedReason.SalesPointID === _customer.SalesPointID ? true : false;
    };
    ListsalespointsComponent.prototype.RemoveSelection = function (_customer) {
        this.selectedReason = new salespoints_2.ListSalesPointsModel();
        this.selectedReason.SalesPointID = 0;
        this.buttonAdd.nativeElement.disabled = false;
    };
    ListsalespointsComponent.prototype.openModal = function (template) {
        if (this.selectedReason.SalesPointID === 0) {
            this._notifierService.notify('error', 'من فضلك يجب تحديد نقطة بيع واحد على الاقل للقيام بعملية الحذف');
        }
        else {
            this.modalRef = this.modalService.show(template);
        }
    };
    ListsalespointsComponent.prototype.GetAllSalesPoints = function () {
        var _this = this;
        this._listallsalespointsService.ListAllSalesPoints().subscribe(function (_result) {
            if (_result.SalesPointsList.length == 0) {
                _this.branchesList = [];
            }
            else {
                _this.branchesList = _result.SalesPointsList;
            }
            _this.branchesList = _result.SalesPointsList;
        });
    };
    ListsalespointsComponent.prototype.openAddModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    ListsalespointsComponent.prototype.openEditModal = function (template) {
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
    ListsalespointsComponent.prototype.AddSalesPoint = function (_addBranchModel, _formGroup) {
        var _this = this;
        this._addsalespointService
            .AddSalesPoint(_addBranchModel)
            .subscribe(function (_result) {
            if (_result.Status === true) {
                _formGroup.reset();
                _this.modalRef.hide();
                _this._notifierService.notify('success', _result.Message);
                _this.ngOnInit();
            }
            else {
                _this._notifierService.notify('error', _result.Message);
            }
        });
    };
    ListsalespointsComponent.prototype.DeletSalesPoint = function (_branchID) {
        var _this = this;
        this._deletsalespointService
            .DeletSalesPoint(_branchID)
            .subscribe(function (_result) {
            if (_result.Status === true) {
                _this.modalRef.hide();
                _this._notifierService.notify('success', _result.Message);
                _this.ngOnInit();
            }
            else {
                _this._notifierService.notify('error', _result.Message);
            }
        });
    };
    ListsalespointsComponent.prototype.EditSalesPoint = function (_listBranchesModel) {
        var _this = this;
        this._editsalespointService
            .EditSalesPoint(_listBranchesModel)
            .subscribe(function (_result) {
            if (_result.Status === true) {
                _this.modalRef.hide();
                _this._notifierService.notify('success', _result.Message);
                _this.ngOnInit();
            }
            else {
                _this._notifierService.notify('error', _result.Message);
            }
        });
    };
    ListsalespointsComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    __decorate([
        core_1.ViewChild('ButtonAdd'),
        __metadata("design:type", core_1.ElementRef)
    ], ListsalespointsComponent.prototype, "buttonAdd", void 0);
    ListsalespointsComponent = __decorate([
        core_1.Component({
            selector: 'app-listsalespoints',
            templateUrl: './listsalespoints.component.html',
            styleUrls: ['./listsalespoints.component.css']
        }),
        __metadata("design:paramtypes", [angular_notifier_1.NotifierService,
            ngx_bootstrap_1.BsModalService,
            router_1.Router,
            listallsalespoints_service_1.ListallsalespointsService,
            addsalespoint_service_1.AddsalespointService,
            deletsalespoint_service_1.DeletsalespointService,
            editsalespoint_service_1.EditsalespointService])
    ], ListsalespointsComponent);
    return ListsalespointsComponent;
}());
exports.ListsalespointsComponent = ListsalespointsComponent;
//# sourceMappingURL=listsalespoints.component.js.map