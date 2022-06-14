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
var listbanks_service_1 = require("../../services/bankcheck/listbanks.service");
var bankcheck_1 = require("../../models/bankcheck");
var addbank_service_1 = require("src/app/services/bankcheck/addbank.service");
var deletebank_service_1 = require("src/app/services/bankcheck/deletebank.service");
var editbank_service_1 = require("../../services/bankcheck/editbank.service");
var BanksComponent = /** @class */ (function () {
    function BanksComponent(_notifierService, modalService, router, _listbanksService, _addbankService, _deletebankService, _editbankService) {
        this._notifierService = _notifierService;
        this.modalService = modalService;
        this.router = router;
        this._listbanksService = _listbanksService;
        this._addbankService = _addbankService;
        this._deletebankService = _deletebankService;
        this._editbankService = _editbankService;
    }
    BanksComponent.prototype.ngOnInit = function () {
        this.SearchSuppliers = '';
        this.banksList = [];
        this.selectedReason = new bankcheck_1.ListBanksModel();
        this.selectedReason.BankID = 0;
        this.reason = '';
        this.GetAllBanks();
    };
    BanksComponent.prototype.SelectRow = function (_customer) {
        this.selectedReason = _customer;
        this.buttonAdd.nativeElement.disabled = true;
    };
    BanksComponent.prototype.RowSelected = function (_customer) {
        if (!this.selectedReason) {
            return false;
        }
        return this.selectedReason.BankID === _customer.BankID ? true : false;
    };
    BanksComponent.prototype.RemoveSelection = function (_customer) {
        this.selectedReason = new bankcheck_1.ListBanksModel();
        this.selectedReason.BankID = 0;
        this.buttonAdd.nativeElement.disabled = false;
    };
    BanksComponent.prototype.openModal = function (template) {
        if (this.selectedReason.BankID === 0) {
            this._notifierService.notify('error', 'من فضلك يجب تحديد بنك واحد على الاقل للقيام بعملية الحذف');
        }
        else {
            this.modalRef = this.modalService.show(template);
        }
    };
    BanksComponent.prototype.GetAllBanks = function () {
        var _this = this;
        this._listbanksService.getAllBanks().subscribe(function (_result) {
            if (_result.BanksList.length == 0) {
                _this.banksList = [];
            }
            else {
                _this.banksList = _result.BanksList;
            }
            _this.banksList = _result.BanksList;
        });
    };
    BanksComponent.prototype.openAddModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    BanksComponent.prototype.openEditModal = function (template) {
        if (this.selectedReason.BankID === 0) {
            this._notifierService.notify('error', 'من فضلك يجب تحديد بنك واحد على الاقل للقيام بعملية التعديل ');
        }
        else {
            if (this.RowSelected(this.selectedReason) === true) {
                this.modalRef = this.modalService.show(template);
            }
            else if (this.RowSelected(this.selectedReason) === false) {
                this._notifierService.notify('error', 'من فضلك يجب تحديد بنك واحد على الاقل للقيام بعملية التعديل ');
            }
            else {
                this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');
            }
        }
    };
    BanksComponent.prototype.AddBank = function (_reason, _formGroup) {
        var _this = this;
        this._addbankService
            .AddBank(_reason)
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
    BanksComponent.prototype.DeleteBank = function (_reasonID) {
        var _this = this;
        this._deletebankService
            .DeleteBank(_reasonID)
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
    BanksComponent.prototype.EditBank = function (_listWithdrawDepositReasonModel) {
        var _this = this;
        this._editbankService
            .EditBank(_listWithdrawDepositReasonModel)
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
    BanksComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    __decorate([
        core_1.ViewChild('ButtonAdd'),
        __metadata("design:type", core_1.ElementRef)
    ], BanksComponent.prototype, "buttonAdd", void 0);
    BanksComponent = __decorate([
        core_1.Component({
            selector: 'app-banks',
            templateUrl: './banks.component.html',
            styleUrls: ['./banks.component.css']
        }),
        __metadata("design:paramtypes", [angular_notifier_1.NotifierService,
            ngx_bootstrap_1.BsModalService,
            router_1.Router,
            listbanks_service_1.ListbanksService,
            addbank_service_1.AddbankService,
            deletebank_service_1.DeletebankService,
            editbank_service_1.EditbankService])
    ], BanksComponent);
    return BanksComponent;
}());
exports.BanksComponent = BanksComponent;
//# sourceMappingURL=banks.component.js.map