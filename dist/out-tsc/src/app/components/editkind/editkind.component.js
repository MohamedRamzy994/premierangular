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
var router_1 = require("@angular/router");
var getproductdetails_service_1 = require("./../../services/products/getproductdetails.service");
var Oauthenticatedsession_Service_1 = require("../../services/general/Oauthenticatedsession.Service");
var liststores_service_1 = require("./../../services/stores/liststores.service");
// tslint:disable-next-line:max-line-length
var products_1 = require("./../../models/products");
var angular_notifier_1 = require("angular-notifier");
var core_1 = require("@angular/core");
var listgroups_service_1 = require("../../services/productgroups/listgroups.service");
var listproductunits_service_1 = require("../../services/products/listproductunits.service");
var listproductunitscats_service_1 = require("../../services/products/listproductunitscats.service");
var products_2 = require("../../models/products");
var listsuppliers_service_1 = require("../../services/suppliers/listsuppliers.service");
var editproductbasic_service_1 = require("../../services/products/editproductbasic.service");
var editproductunits_service_1 = require("../../services/products/editproductunits.service");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var EditkindComponent = /** @class */ (function () {
    function EditkindComponent(_notifierService, _editproductbasicService, _productgroups, _productunits, _productunitscats, _editproductunitsService, _liststoresService, modalService, _OauthenticatedsessionServiceService, _listsuppliersService, _getproductdetailsService, router) {
        this._notifierService = _notifierService;
        this._editproductbasicService = _editproductbasicService;
        this._productgroups = _productgroups;
        this._productunits = _productunits;
        this._productunitscats = _productunitscats;
        this._editproductunitsService = _editproductunitsService;
        this._liststoresService = _liststoresService;
        this.modalService = modalService;
        this._OauthenticatedsessionServiceService = _OauthenticatedsessionServiceService;
        this._listsuppliersService = _listsuppliersService;
        this._getproductdetailsService = _getproductdetailsService;
        this.router = router;
        this.productbasic = new products_1.ProductBasicModel();
        this.ProductsUnitsSupplierModel = new products_2.ProductsUnitsSupplierModel();
    }
    EditkindComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productId = parseInt(this.router.snapshot.paramMap.get('productId'), 10);
        this._getproductdetailsService.getProductDetails(this.productId)
            .subscribe(function (_result) {
            _this.prdoucteditresult = _result;
            _this.productbasic = _this.prdoucteditresult.SelectedProductBasic;
            _this.productbasic.ProductID = _this.productId;
            _this.ProductsUnitsSupplierModel = _this.prdoucteditresult.SelectedProductUnites;
            _this.ProductUnitsDefault = [];
            if (_this.ProductsUnitsSupplierModel.UnitCat13 === 13) {
                _this.unitcatcheckbox13 = true;
            }
            else {
                _this.unitcatcheckbox13 = false;
            }
            if (_this.ProductsUnitsSupplierModel.UnitCat13 === 12) {
                _this.unitcatcheckbox12 = true;
            }
            else {
                _this.unitcatcheckbox13 = false;
            }
            if (_this.ProductsUnitsSupplierModel.Unit11) {
                _this.ProductsUnitsSupplierModel.UnitCat11 = 11;
                _this.ProductUnitsDefault.push({
                    UnitCatID: _this.ProductsUnitsSupplierModel.UnitCat11,
                    UnitCat: 'الوحدة الكبرى'
                });
            }
            if (_this.ProductsUnitsSupplierModel.Unit12) {
                _this.ProductsUnitsSupplierModel.UnitCat12 = 12;
                _this.ProductUnitsDefault.push({
                    UnitCatID: _this.ProductsUnitsSupplierModel.UnitCat12,
                    UnitCat: 'الوحدة المتوسطة'
                });
            }
            if (_this.ProductsUnitsSupplierModel.Unit13) {
                _this.ProductsUnitsSupplierModel.UnitCat13 = 13;
                _this.ProductUnitsDefault.push({
                    UnitCatID: _this.ProductsUnitsSupplierModel.UnitCat13,
                    UnitCat: 'الوحدة الصغرى'
                });
            }
            console.log(_this.ProductsUnitsSupplierModel);
        });
        this.unitcatcheckbox11 = false;
        this.opensupplierenabled = false;
        this.getAllGroups();
        this.getAllProductUnits();
        this.getAllProductUnitsCats();
        this.getAllStores();
        this.getAllSuppliers();
    };
    EditkindComponent.prototype.editProductBasic = function (_productbasic, _formGroup) {
        var _this = this;
        this.productbasic = _productbasic;
        this.productbasic.ProductID = this.productId;
        this._editproductbasicService
            .EditProductBasic(_productbasic)
            .subscribe(function (_result) {
            _this.result = _result;
            if (_this.result.Status === true) {
                _this.modalRef.hide();
                _this._notifierService.notify('success', _this.result.Message);
                _this.addedprdouctId = _this.result.SelectedProduct.ProductID;
            }
            else {
                _this.modalRef.hide();
                _this._notifierService.notify('error', _this.result.Message);
            }
        });
    };
    EditkindComponent.prototype.editProductUnits = function (_productsUnitsSupplierModel) {
        var _this = this;
        this.ProductsUnitsSupplierModel = _productsUnitsSupplierModel;
        this.ProductsUnitsSupplierModel.ProductID = this.productId;
        this.ProductsUnitsSupplierModel.UserId = this._OauthenticatedsessionServiceService.User.UserId;
        if (this.ProductsUnitsSupplierModel.ProductID) {
            this._editproductunitsService
                .EditProductunits(this.ProductsUnitsSupplierModel)
                .subscribe(function (_result) {
                _this.resultunits = _result;
                if (_this.resultunits.Status === true) {
                    _this.modalRef.hide();
                    _this._notifierService.notify('success', _this.resultunits.Message);
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
    EditkindComponent.prototype.getAllGroups = function () {
        var _this = this;
        this._productgroups
            .listGroups()
            .subscribe(function (_result) {
            _this.productgroups = _result.GroupsList;
        });
    };
    EditkindComponent.prototype.getAllProductUnits = function () {
        var _this = this;
        this._productunits
            .listproductunits()
            .subscribe(function (_result) {
            _this.productunits = _result.ProductsUnitsList;
        });
    };
    EditkindComponent.prototype.getAllProductUnitsCats = function () {
        var _this = this;
        this._productunitscats
            .listproductunitscats()
            .subscribe(function (_result) {
            _this.productunitscats = _result.ProductsUnitsCatsList;
        });
    };
    EditkindComponent.prototype.getAllStores = function () {
        var _this = this;
        this._liststoresService.listStores().subscribe(function (_result) {
            _this.ProductStores = _result.StoresList;
        });
    };
    EditkindComponent.prototype.getAllSuppliers = function () {
        var _this = this;
        this._listsuppliersService
            .ListSuppliers()
            .subscribe(function (_result) {
            _this.Suppliers = _result.SuppliersList;
        });
    };
    EditkindComponent.prototype.changeUnitCat12 = function () {
        this.unitcatcheckbox12 = !this.unitcatcheckbox12;
        if (this.unitcatcheckbox12 === false) {
            if (this.ProductsUnitsSupplierModel.Unit12) {
                this.ProductUnitsDefault.splice(this.ProductUnitsDefault.lastIndexOf(this.ProductUnitsDefault.find(function (x) { return x.UnitCatID === 12; })), 1);
            }
            this.ProductsUnitsSupplierModel.Unit12 = null;
            this.ProductsUnitsSupplierModel.ChangeNum12 = null;
        }
    };
    EditkindComponent.prototype.changeUnitCat11 = function () {
        this.unitcatcheckbox11 = !this.unitcatcheckbox11;
    };
    EditkindComponent.prototype.changeUnitCat13 = function () {
        this.unitcatcheckbox13 = !this.unitcatcheckbox13;
        if (this.unitcatcheckbox13 === false) {
            if (this.ProductsUnitsSupplierModel.Unit13) {
                this.ProductUnitsDefault.splice(this.ProductUnitsDefault.lastIndexOf(this.ProductUnitsDefault.find(function (x) { return x.UnitCatID === 13; })), 1);
            }
            this.ProductsUnitsSupplierModel.Unit13 = null;
            this.ProductsUnitsSupplierModel.ChangeNum13 = null;
        }
    };
    EditkindComponent.prototype.changeUnitCat12buyorsale = function () {
        if (this.ProductsUnitsSupplierModel.Unit12) {
            this.ProductsUnitsSupplierModel.UnitCat12 = 12;
            if (this.ProductUnitsDefault.find(function (x) { return x.UnitCatID === 12; })) {
            }
            else {
                this.ProductUnitsDefault.push({
                    UnitCatID: this.ProductsUnitsSupplierModel.UnitCat12,
                    UnitCat: 'الوحدة المتوسطة'
                });
            }
        }
    };
    EditkindComponent.prototype.changeUnitCat13buyorsale = function () {
        if (this.ProductsUnitsSupplierModel.Unit13) {
            this.ProductsUnitsSupplierModel.UnitCat13 = 13;
            if (this.ProductUnitsDefault.find(function (x) { return x.UnitCatID === 13; })) {
            }
            else {
                this.ProductUnitsDefault.push({
                    UnitCatID: this.ProductsUnitsSupplierModel.UnitCat13,
                    UnitCat: 'الوحدة الصغرى '
                });
            }
        }
    };
    EditkindComponent.prototype.opensupplier = function () {
        this.opensupplierenabled = !this.opensupplierenabled;
        this.ProductsUnitsSupplierModel.SelectedProductSuppliers = null;
    };
    EditkindComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    EditkindComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    EditkindComponent = __decorate([
        core_1.Component({
            selector: 'app-editkind',
            templateUrl: './editkind.component.html',
            styleUrls: ['./editkind.component.css']
        }),
        __metadata("design:paramtypes", [angular_notifier_1.NotifierService,
            editproductbasic_service_1.EditproductbasicService,
            listgroups_service_1.ListgroupsService,
            listproductunits_service_1.ListproductunitsService,
            listproductunitscats_service_1.ListproductunitscatsService,
            editproductunits_service_1.EditproductunitsService,
            liststores_service_1.ListstoresService,
            ngx_bootstrap_1.BsModalService,
            Oauthenticatedsession_Service_1.OauthenticatedsessionService,
            listsuppliers_service_1.ListsuppliersService,
            getproductdetails_service_1.GetproductdetailsService,
            router_1.ActivatedRoute])
    ], EditkindComponent);
    return EditkindComponent;
}());
exports.EditkindComponent = EditkindComponent;
//# sourceMappingURL=editkind.component.js.map