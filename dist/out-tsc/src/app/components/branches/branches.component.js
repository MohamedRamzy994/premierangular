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
var editbranch_service_1 = require("./../../services/branches/editbranch.service");
var core_1 = require("@angular/core");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var angular_notifier_1 = require("angular-notifier");
var router_1 = require("@angular/router");
var listbranches_service_1 = require("../../services/branches/listbranches.service");
var branches_1 = require("src/app/models/branches");
var addbranch_service_1 = require("../../services/branches/addbranch.service");
var deletebranch_service_1 = require("src/app/services/branches/deletebranch.service");
var BranchesComponent = /** @class */ (function () {
    function BranchesComponent(_notifierService, modalService, router, _listbranchesService, _addbranchService, _deletebranchService, _editbranchService) {
        this._notifierService = _notifierService;
        this.modalService = modalService;
        this.router = router;
        this._listbranchesService = _listbranchesService;
        this._addbranchService = _addbranchService;
        this._deletebranchService = _deletebranchService;
        this._editbranchService = _editbranchService;
    }
    BranchesComponent.prototype.ngOnInit = function () {
        this.addBranchModel = new branches_1.AddBranchModel();
        this.SearchSuppliers = '';
        this.branchesList = [];
        this.selectedReason = new branches_1.ListBranchesModel();
        this.selectedReason.BranchID = 0;
        this.reason = '';
        this.GetAllBranches();
    };
    BranchesComponent.prototype.SelectRow = function (_customer) {
        this.selectedReason = _customer;
        this.buttonAdd.nativeElement.disabled = true;
    };
    BranchesComponent.prototype.RowSelected = function (_customer) {
        if (!this.selectedReason) {
            return false;
        }
        return this.selectedReason.BranchID === _customer.BranchID ? true : false;
    };
    BranchesComponent.prototype.RemoveSelection = function (_customer) {
        this.selectedReason = new branches_1.ListBranchesModel();
        this.selectedReason.BranchID = 0;
        this.buttonAdd.nativeElement.disabled = false;
    };
    BranchesComponent.prototype.openModal = function (template) {
        if (this.selectedReason.BranchID === 0) {
            this._notifierService.notify('error', 'من فضلك يجب تحديد فرع واحد على الاقل للقيام بعملية الحذف');
        }
        else {
            this.modalRef = this.modalService.show(template);
        }
    };
    BranchesComponent.prototype.GetAllBranches = function () {
        var _this = this;
        this._listbranchesService.GetAllBranches().subscribe(function (_result) {
            if (_result.BranchesList.length == 0) {
                _this.branchesList = [];
            }
            else {
                _this.branchesList = _result.BranchesList;
            }
            _this.branchesList = _result.BranchesList;
        });
    };
    BranchesComponent.prototype.openAddModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    BranchesComponent.prototype.openEditModal = function (template) {
        if (this.selectedReason.BranchID === 0) {
            this._notifierService.notify('error', 'من فضلك يجب تحديد فرع واحد على الاقل للقيام بعملية التعديل ');
        }
        else {
            if (this.RowSelected(this.selectedReason) === true) {
                this.modalRef = this.modalService.show(template);
            }
            else if (this.RowSelected(this.selectedReason) === false) {
                this._notifierService.notify('error', 'من فضلك يجب تحديد فرع واحد على الاقل للقيام بعملية التعديل ');
            }
            else {
                this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');
            }
        }
    };
    BranchesComponent.prototype.AddBranch = function (_addBranchModel, _formGroup) {
        var _this = this;
        this._addbranchService
            .AddBranch(_addBranchModel)
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
    BranchesComponent.prototype.DeleteBranch = function (_branchID) {
        var _this = this;
        this._deletebranchService
            .DeleteBranch(_branchID)
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
    BranchesComponent.prototype.EditBranch = function (_listBranchesModel) {
        var _this = this;
        this._editbranchService
            .EditBranch(_listBranchesModel)
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
    BranchesComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    __decorate([
        core_1.ViewChild('ButtonAdd'),
        __metadata("design:type", core_1.ElementRef)
    ], BranchesComponent.prototype, "buttonAdd", void 0);
    BranchesComponent = __decorate([
        core_1.Component({
            selector: 'app-branches',
            templateUrl: './branches.component.html',
            styleUrls: ['./branches.component.css']
        }),
        __metadata("design:paramtypes", [angular_notifier_1.NotifierService,
            ngx_bootstrap_1.BsModalService,
            router_1.Router,
            listbranches_service_1.ListbranchesService,
            addbranch_service_1.AddbrancheService,
            deletebranch_service_1.DeletebranchService,
            editbranch_service_1.EditbranchService])
    ], BranchesComponent);
    return BranchesComponent;
}());
exports.BranchesComponent = BranchesComponent;
//# sourceMappingURL=branches.component.js.map