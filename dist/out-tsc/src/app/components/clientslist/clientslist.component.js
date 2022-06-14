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
var listcustomers_service_1 = require("../../services/customers/listcustomers.service");
var angular_notifier_1 = require("angular-notifier");
var router_1 = require("@angular/router");
var deletecustomer_service_1 = require("src/app/services/customers/deletecustomer.service");
var Oauthenticatedsession_Service_1 = require("src/app/services/general/Oauthenticatedsession.Service");
var ClientslistComponent = /** @class */ (function () {
    function ClientslistComponent(_listcustomersService, _notifierService, modalService, _oauthenticatedsessionService, _deletecustomerService, router) {
        this._listcustomersService = _listcustomersService;
        this._notifierService = _notifierService;
        this.modalService = modalService;
        this._oauthenticatedsessionService = _oauthenticatedsessionService;
        this._deletecustomerService = _deletecustomerService;
        this.router = router;
    }
    ClientslistComponent.prototype.ngOnInit = function () {
        this.CustomerName = '';
        this.CustomerType = 2;
        this.SearchSuppliers = '';
        this.customerList = [];
        this.selectedCustomer = null;
        this.getAllCustomers();
        this.getLoggedUser();
    };
    /**
     * getLoggedUser
     */
    ClientslistComponent.prototype.getLoggedUser = function () {
        this.authenticatedUser = this._oauthenticatedsessionService.User;
    };
    ClientslistComponent.prototype.getAllCustomers = function () {
        var _this = this;
        this._listcustomersService.ListCustomers().subscribe(function (_result) {
            if (_result.CustomersList.length == 0) {
                _this.customerList = [];
            }
            else {
                _this.customerList = _result.CustomersList;
            }
            _this.customerList = _result.CustomersList;
        });
    };
    ClientslistComponent.prototype.SelectRow = function (_customer) {
        this.selectedCustomer = _customer;
        this.buttonAdd.nativeElement.disabled = true;
    };
    ClientslistComponent.prototype.RowSelected = function (_customer) {
        if (!this.selectedCustomer) {
            return false;
        }
        return this.selectedCustomer.CustomerID === _customer.CustomerID ? true : false;
    };
    ClientslistComponent.prototype.RemoveSelection = function (_customer) {
        this.selectedCustomer = null;
        this.buttonAdd.nativeElement.disabled = false;
    };
    ClientslistComponent.prototype.openModal = function (template) {
        if (this.RowSelected(this.selectedCustomer) === true) {
            this.modalRef = this.modalService.show(template);
        }
        else if (this.RowSelected(this.selectedCustomer) === false) {
            this._notifierService.notify('error', 'من فضلك يجب تحديد عميل واحد على الاقل للقيام بعملية الحذف');
        }
        else {
            this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');
        }
    };
    ClientslistComponent.prototype.DeleteCustomer = function (_customer) {
        var _this = this;
        this._deletecustomerService.DeleteCustomer(_customer).subscribe(function (_result) {
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
    ClientslistComponent.prototype.goToEdit = function (_customer) {
        if (this.RowSelected(this.selectedCustomer) === true) {
            this.router.navigate(['fileclient', this.selectedCustomer.CustomerID]);
        }
        else if (this.RowSelected(this.selectedCustomer) === false) {
            this._notifierService.notify('error', 'من فضلك يجب تحديد عميل واحد على الاقل للقيام بعملية التعديل ');
        }
        else {
            this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');
        }
    };
    ClientslistComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    __decorate([
        core_1.ViewChild('ButtonAdd'),
        __metadata("design:type", core_1.ElementRef)
    ], ClientslistComponent.prototype, "buttonAdd", void 0);
    ClientslistComponent = __decorate([
        core_1.Component({
            selector: 'app-clientslist',
            templateUrl: './clientslist.component.html',
            styleUrls: ['./clientslist.component.css']
        }),
        __metadata("design:paramtypes", [listcustomers_service_1.ListcustomersService,
            angular_notifier_1.NotifierService,
            ngx_bootstrap_1.BsModalService,
            Oauthenticatedsession_Service_1.OauthenticatedsessionService,
            deletecustomer_service_1.DeletecustomerService,
            router_1.Router])
    ], ClientslistComponent);
    return ClientslistComponent;
}());
exports.ClientslistComponent = ClientslistComponent;
//# sourceMappingURL=clientslist.component.js.map