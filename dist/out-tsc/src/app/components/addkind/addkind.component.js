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
var Oauthenticatedsession_Service_1 = require("../../services/general/Oauthenticatedsession.Service");
var liststores_service_1 = require("./../../services/stores/liststores.service");
var addproductunits_service_1 = require("./../../services/products/addproductunits.service");
// tslint:disable-next-line:max-line-length
var products_1 = require("./../../models/products");
var angular_notifier_1 = require("angular-notifier");
var core_1 = require("@angular/core");
var addproductbasic_service_1 = require("../../services/products/addproductbasic.service");
var listgroups_service_1 = require("../../services/productgroups/listgroups.service");
var listproductunits_service_1 = require("../../services/products/listproductunits.service");
var listproductunitscats_service_1 = require("../../services/products/listproductunitscats.service");
var products_2 = require("../../models/products");
var listsuppliers_service_1 = require("../../services/suppliers/listsuppliers.service");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var AddkindComponent = /** @class */ (function () {
    function AddkindComponent(_notifierService, _addproductbasicService, _productgroups, _productunits, _productunitscats, _addproductunitsService, _liststoresService, modalService, _OauthenticatedsessionServiceService, _listsuppliersService) {
        this._notifierService = _notifierService;
        this._addproductbasicService = _addproductbasicService;
        this._productgroups = _productgroups;
        this._productunits = _productunits;
        this._productunitscats = _productunitscats;
        this._addproductunitsService = _addproductunitsService;
        this._liststoresService = _liststoresService;
        this.modalService = modalService;
        this._OauthenticatedsessionServiceService = _OauthenticatedsessionServiceService;
        this._listsuppliersService = _listsuppliersService;
    }
    AddkindComponent.prototype.ngOnInit = function () {
        this.productbasic = new products_1.ProductBasicModel();
        this.ProductsUnitsSupplierModel = new products_2.ProductsUnitsSupplierModel();
        this.ProductUnitsDefault = [];
        this.ProductsUnitsSupplierModel.Unit11 = 3;
        this.ProductsUnitsSupplierModel.UnitSale = 11;
        this.ProductsUnitsSupplierModel.UnitBuy = 11;
        this.unitcatcheckbox12 = false;
        this.unitcatcheckbox13 = false;
        this.unitcatcheckbox11 = false;
        this.enableopeningbalance = false;
        this.opensupplierenabled = false;
        this.getAllGroups();
        this.getAllProductUnits();
        this.getAllProductUnitsCats();
        this.getAllStores();
        this.getAllSuppliers();
        console.log(this.ProductsUnitsSupplierModel);
        if (this.ProductsUnitsSupplierModel.Unit11) {
            this.ProductsUnitsSupplierModel.UnitCat11 = 11;
            this.ProductUnitsDefault.push({ UnitCatID: this.ProductsUnitsSupplierModel.UnitCat11, UnitCat: 'الوحدة الكبرى' });
        }
        if (this.ProductsUnitsSupplierModel.Unit12) {
            this.ProductsUnitsSupplierModel.UnitCat12 = 12;
            this.ProductUnitsDefault.push({ UnitCatID: this.ProductsUnitsSupplierModel.UnitCat12, UnitCat: 'الوحدة المتوسطة' });
        }
        if (this.ProductsUnitsSupplierModel.Unit13) {
            this.ProductsUnitsSupplierModel.UnitCat13 = 13;
            this.ProductUnitsDefault.push({ UnitCatID: this.ProductsUnitsSupplierModel.UnitCat13, UnitCat: 'الوحدة الصغرى' });
        }
    };
    AddkindComponent.prototype.addProductBasic = function (_productbasic, _formGroup) {
        var _this = this;
        this.productbasic = _productbasic;
        this._addproductbasicService.AddProductBasic(_productbasic).subscribe(function (_result) {
            _this.result = _result;
            if (_this.result.Status === true) {
                _this.modalRef.hide();
                _this._notifierService.notify('success', _this.result.Message);
                _formGroup.reset();
                _this.addedprdouctId = _this.result.SelectedProduct.ProductID;
            }
            else {
                _this._notifierService.notify('error', _this.result.Message);
            }
        });
    };
    AddkindComponent.prototype.addProductUnits = function (_productsUnitsSupplierModel, _formGroup) {
        var _this = this;
        this.ProductsUnitsSupplierModel = _productsUnitsSupplierModel;
        this.ProductsUnitsSupplierModel.ProductID = this.addedprdouctId;
        this.ProductsUnitsSupplierModel.UserId = this._OauthenticatedsessionServiceService.User.UserId;
        console.log(this.ProductsUnitsSupplierModel.ProductID);
        if (this.ProductsUnitsSupplierModel.ProductID) {
            if (this.ProductsUnitsSupplierModel.Unit11) {
                this.ProductsUnitsSupplierModel.UnitCat11 = this.productunitscats[0].UnitCatID;
            }
            if (this.ProductsUnitsSupplierModel.Unit12) {
                this.ProductsUnitsSupplierModel.UnitCat12 = this.productunitscats[1].UnitCatID;
            }
            if (this.ProductsUnitsSupplierModel.Unit13) {
                this.ProductsUnitsSupplierModel.UnitCat13 = this.productunitscats[2].UnitCatID;
            }
            console.log(this.ProductsUnitsSupplierModel);
            this._addproductunitsService.AddProductunits(this.ProductsUnitsSupplierModel).subscribe(function (_result) {
                _this.resultunits = _result;
                if (_this.resultunits.Status === true) {
                    _this.modalRef.hide();
                    _this._notifierService.notify('success', _this.resultunits.Message);
                    _formGroup.reset();
                    _this.ngOnInit();
                    _this.addedprdouctId = null;
                    _this.unitcatcheckbox12 = false;
                    _this.unitcatcheckbox13 = false;
                    _this.enableopeningbalance = false;
                    _this.opensupplierenabled = false;
                }
                else {
                    _this.modalRef.hide();
                    _this._notifierService.notify('error', _this.result.Message);
                }
            });
        }
        else {
            this.modalRef.hide();
            this._notifierService.notify('error', 'من فضلك يجب ادخال اسم الصنف اولا او اختيار الصنف الذى تريد تعديل بياناته');
        }
    };
    AddkindComponent.prototype.getAllGroups = function () {
        var _this = this;
        this._productgroups.listGroups().subscribe(function (_result) {
            _this.productgroups = _result.GroupsList;
        });
    };
    AddkindComponent.prototype.getAllProductUnits = function () {
        var _this = this;
        this._productunits.listproductunits().subscribe(function (_result) {
            console.log(_result.ProductsUnitsList);
            _this.productunits = _result.ProductsUnitsList;
        });
    };
    AddkindComponent.prototype.getAllProductUnitsCats = function () {
        var _this = this;
        this._productunitscats.listproductunitscats().subscribe(function (_result) {
            _this.productunitscats = _result.ProductsUnitsCatsList;
            console.log(_this.productunitscats);
        });
    };
    AddkindComponent.prototype.getAllStores = function () {
        var _this = this;
        this._liststoresService.listStores().subscribe(function (_result) {
            _this.ProductStores = _result.StoresList;
        });
    };
    AddkindComponent.prototype.getAllSuppliers = function () {
        var _this = this;
        this._listsuppliersService.ListSuppliers().subscribe(function (_result) {
            _this.Suppliers = _result.SuppliersList;
        });
    };
    AddkindComponent.prototype.changeUnitCat12 = function () {
        this.unitcatcheckbox12 = !this.unitcatcheckbox12;
        if (this.unitcatcheckbox12 === false) {
            if (this.ProductsUnitsSupplierModel.Unit12) {
                this.ProductUnitsDefault.splice(this.ProductUnitsDefault.lastIndexOf(this.ProductUnitsDefault.find(function (x) { return x.UnitCatID === 12; })), 1);
            }
            this.ProductsUnitsSupplierModel.Unit12 = null;
            this.ProductsUnitsSupplierModel.ChangeNum12 = null;
        }
    };
    AddkindComponent.prototype.changeUnitCat11 = function () {
        this.unitcatcheckbox11 = !this.unitcatcheckbox11;
    };
    AddkindComponent.prototype.changeUnitCat13 = function () {
        this.unitcatcheckbox13 = !this.unitcatcheckbox13;
        if (this.unitcatcheckbox13 === false) {
            if (this.ProductsUnitsSupplierModel.Unit13) {
                this.ProductUnitsDefault.splice(this.ProductUnitsDefault.lastIndexOf(this.ProductUnitsDefault.find(function (x) { return x.UnitCatID === 13; })), 1);
            }
            this.ProductsUnitsSupplierModel.Unit13 = null;
            this.ProductsUnitsSupplierModel.ChangeNum13 = null;
        }
    };
    AddkindComponent.prototype.changeUnitCat12buyorsale = function () {
        if (this.ProductsUnitsSupplierModel.Unit12) {
            this.ProductsUnitsSupplierModel.UnitCat12 = 12;
            if (this.ProductUnitsDefault.find(function (x) { return x.UnitCatID === 12; })) {
            }
            else {
                this.ProductUnitsDefault.push({ UnitCatID: this.ProductsUnitsSupplierModel.UnitCat12, UnitCat: 'الوحدة المتوسطة' });
            }
        }
    };
    AddkindComponent.prototype.changeUnitCat13buyorsale = function () {
        if (this.ProductsUnitsSupplierModel.Unit13) {
            this.ProductsUnitsSupplierModel.UnitCat13 = 13;
            if (this.ProductUnitsDefault.find(function (x) { return x.UnitCatID === 13; })) {
            }
            else {
                this.ProductUnitsDefault.push({ UnitCatID: this.ProductsUnitsSupplierModel.UnitCat13, UnitCat: 'الوحدة الصغرى ' });
            }
        }
    };
    AddkindComponent.prototype.openbalance = function () {
        this.enableopeningbalance = !this.enableopeningbalance;
        this.ProductsUnitsSupplierModel.OpeningNum = null;
        this.ProductsUnitsSupplierModel.StoreId = null;
        this.ProductsUnitsSupplierModel.UnitCatId = null;
    };
    AddkindComponent.prototype.opensupplier = function () {
        this.opensupplierenabled = !this.opensupplierenabled;
        this.ProductsUnitsSupplierModel.SelectedProductSuppliers = null;
    };
    AddkindComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    AddkindComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    AddkindComponent = __decorate([
        core_1.Component({
            selector: 'app-addkind',
            templateUrl: './addkind.component.html',
            styleUrls: ['./addkind.component.css']
        }),
        __metadata("design:paramtypes", [angular_notifier_1.NotifierService,
            addproductbasic_service_1.AddproductbasicService,
            listgroups_service_1.ListgroupsService,
            listproductunits_service_1.ListproductunitsService,
            listproductunitscats_service_1.ListproductunitscatsService,
            addproductunits_service_1.AddproductunitsService,
            liststores_service_1.ListstoresService,
            ngx_bootstrap_1.BsModalService,
            Oauthenticatedsession_Service_1.OauthenticatedsessionService,
            listsuppliers_service_1.ListsuppliersService])
    ], AddkindComponent);
    return AddkindComponent;
}());
exports.AddkindComponent = AddkindComponent;
//# sourceMappingURL=addkind.component.js.map