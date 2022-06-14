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
var deletesupplier_service_1 = require("./../../services/suppliers/deletesupplier.service");
var listsuppliers_service_1 = require("./../../services/suppliers/listsuppliers.service");
var suppliers_1 = require("./../../models/suppliers");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var angular_notifier_1 = require("angular-notifier");
var Oauthenticatedsession_Service_1 = require("src/app/services/general/Oauthenticatedsession.Service");
var SupplierslistComponent = /** @class */ (function () {
    function SupplierslistComponent(_listsuppliersService, _notifierService, modalService, _deletesupplierService, _oauthenticatedsessionService, router) {
        this._listsuppliersService = _listsuppliersService;
        this._notifierService = _notifierService;
        this.modalService = modalService;
        this._deletesupplierService = _deletesupplierService;
        this._oauthenticatedsessionService = _oauthenticatedsessionService;
        this.router = router;
    }
    SupplierslistComponent.prototype.ngOnInit = function () {
        this.SearchSuppliers = '';
        this.supplierList = [];
        this.resultSuppliers = new suppliers_1.ResultSuppliers();
        this.selectedSupplier = null;
        this.getAllSuppliers();
        this.getLoggedUser();
    };
    /**
       * getLoggedUser
       */
    SupplierslistComponent.prototype.getLoggedUser = function () {
        this.authenticatedUser = this._oauthenticatedsessionService.User;
    };
    SupplierslistComponent.prototype.getAllSuppliers = function () {
        var _this = this;
        this._listsuppliersService.ListSuppliers().subscribe(function (_result) {
            _this.supplierList = _result.SuppliersList;
        });
    };
    SupplierslistComponent.prototype.SelectRow = function (_supplier) {
        this.selectedSupplier = _supplier;
        this.buttonAdd.nativeElement.disabled = true;
    };
    SupplierslistComponent.prototype.RowSelected = function (_supplier) {
        if (!this.selectedSupplier) {
            return false;
        }
        return this.selectedSupplier.SupplierID === _supplier.SupplierID ? true : false;
    };
    SupplierslistComponent.prototype.RemoveSelection = function (_supplier) {
        this.selectedSupplier = null;
        this.buttonAdd.nativeElement.disabled = false;
    };
    SupplierslistComponent.prototype.openModal = function (template) {
        if (this.RowSelected(this.selectedSupplier) === true) {
            this.modalRef = this.modalService.show(template);
        }
        else if (this.RowSelected(this.selectedSupplier) === false) {
            this._notifierService.notify('error', 'من فضلك يجب تحديد مورد واحد على الاقل للقيام بعملية الحذف');
        }
        else {
            this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');
        }
    };
    SupplierslistComponent.prototype.DeleteSupplier = function (_supplier) {
        var _this = this;
        this._deletesupplierService.DeleteSupplier(_supplier).subscribe(function (_result) {
            if (_result.Status === true) {
                _this.modalRef.hide();
                _this._notifierService.notify('success', _result.Message);
                _this.ngOnInit();
            }
            else {
                _this.modalRef.hide();
                _this._notifierService.notify('error', _result.Message);
            }
        });
    };
    SupplierslistComponent.prototype.goToEdit = function (_supplier) {
        if (this.RowSelected(this.selectedSupplier) === true) {
            this.router.navigate(['filesupplier', this.selectedSupplier.SupplierID]);
        }
        else if (this.RowSelected(this.selectedSupplier) === false) {
            this._notifierService.notify('error', 'من فضلك يجب تحديد مورد واحد على الاقل للقيام بعملية التعديل ');
        }
        else {
            this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');
        }
    };
    SupplierslistComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    __decorate([
        core_1.ViewChild('ButtonAdd'),
        __metadata("design:type", core_1.ElementRef)
    ], SupplierslistComponent.prototype, "buttonAdd", void 0);
    SupplierslistComponent = __decorate([
        core_1.Component({
            selector: 'app-supplierslist',
            templateUrl: './supplierslist.component.html',
            styleUrls: ['./supplierslist.component.css']
        }),
        __metadata("design:paramtypes", [listsuppliers_service_1.ListsuppliersService,
            angular_notifier_1.NotifierService,
            ngx_bootstrap_1.BsModalService,
            deletesupplier_service_1.DeletesupplierService,
            Oauthenticatedsession_Service_1.OauthenticatedsessionService,
            router_1.Router])
    ], SupplierslistComponent);
    return SupplierslistComponent;
}());
exports.SupplierslistComponent = SupplierslistComponent;
//# sourceMappingURL=supplierslist.component.js.map