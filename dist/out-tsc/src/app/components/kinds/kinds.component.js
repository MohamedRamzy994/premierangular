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
var listproductswithsupplier_service_1 = require("./../../services/products/listproductswithsupplier.service");
var router_1 = require("@angular/router");
var deleteproduct_service_1 = require("./../../services/products/deleteproduct.service");
var products_1 = require("./../../models/products");
var listproducts_service_1 = require("./../../services/products/listproducts.service");
var core_1 = require("@angular/core");
var angular_notifier_1 = require("angular-notifier");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var liststores_service_1 = require("../../services/stores/liststores.service");
var listgroups_service_1 = require("../../services/productgroups/listgroups.service");
var listsuppliers_service_1 = require("../../services/suppliers/listsuppliers.service");
var listproductsinstore_service_1 = require("../../services/products/listproductsinstore.service");
var Oauthenticatedsession_Service_1 = require("src/app/services/general/Oauthenticatedsession.Service");
var KindsComponent = /** @class */ (function () {
    function KindsComponent(_listproductsService, _notifierService, _modalService, _deleteproductService, _router, _productgroups, _listsuppliersService, _liststoresService, _listproductsinstoreService, _oauthenticatedsessionService, _listproductswithsupplierService) {
        this._listproductsService = _listproductsService;
        this._notifierService = _notifierService;
        this._modalService = _modalService;
        this._deleteproductService = _deleteproductService;
        this._router = _router;
        this._productgroups = _productgroups;
        this._listsuppliersService = _listsuppliersService;
        this._liststoresService = _liststoresService;
        this._listproductsinstoreService = _listproductsinstoreService;
        this._oauthenticatedsessionService = _oauthenticatedsessionService;
        this._listproductswithsupplierService = _listproductswithsupplierService;
        this.result = { Status: false, Message: '', ProductsList: [], SelectedProduct: new products_1.ProductBasicModel() };
        this.result.ProductsList = [];
        this.modalService = _modalService;
        this.product = {
            ProductID: 0,
            ProductName: '',
            CatID: 0,
            MinLimit: 0,
            StopBuy: false,
            StopSale: false,
            PrintBarcode: false,
            Price: 0,
            P_Price: 0,
            Discount: 0,
            MinSalePrice: 0,
            ProductCode: '',
            CatName: '',
            Stock: 0,
            IsSelected: false
        };
    }
    KindsComponent.prototype.ngOnInit = function () {
        this.searchterm = {
            ProductName: '',
            ProductCode: '',
            CatName: '',
            StopBuy: null,
            StopSale: null,
            HasStock: null,
            HasNoStock: null,
            PriceFrom: null,
            PriceTo: null
        };
        this.StoreID = 0;
        this.getAllProducts();
        this.getAllStores();
        this.getAllGroups();
        this.getAllSuppliers();
        this.getLoggedUser();
    };
    /**
     * getLoggedUser
     */
    KindsComponent.prototype.getLoggedUser = function () {
        this.authenticatedUser = this._oauthenticatedsessionService.User;
    };
    KindsComponent.prototype.getAllProducts = function () {
        var _this = this;
        this._listproductsService.listproducts().subscribe(function (_result) {
            _this.result = _result;
            if (_this.result.ProductsList === null) {
                _this.result = { Status: false, Message: '', ProductsList: [], SelectedProduct: new products_1.ProductBasicModel() };
            }
        });
    };
    KindsComponent.prototype.getAllProductsInStore = function (_storeID) {
        var _this = this;
        if (_storeID == 0) {
            this.getAllProducts();
        }
        else {
            this._listproductsinstoreService.listproductsinstore(_storeID).subscribe(function (_result) {
                _this.result = _result;
                if (_this.result.ProductsList === null) {
                    _this.result = { Status: false, Message: '', ProductsList: [], SelectedProduct: new products_1.ProductBasicModel() };
                }
            });
        }
    };
    KindsComponent.prototype.getAllProductsWithSupplier = function (_supplierID) {
        var _this = this;
        if (_supplierID == 0) {
            this.getAllProducts();
        }
        else {
            this._listproductswithsupplierService.listproductswithsupplier(_supplierID).subscribe(function (_result) {
                _this.result = _result;
                if (_this.result.ProductsList === null) {
                    _this.result = { Status: false, Message: '', ProductsList: [], SelectedProduct: new products_1.ProductBasicModel() };
                }
            });
        }
    };
    KindsComponent.prototype.DeleteProduct = function (_product) {
        var _this = this;
        this._deleteproductService.DeleteProduct(_product).subscribe(function (_result) {
            _this.result = _result;
            if (_this.result.Status === true) {
                _this.modalRef.hide();
                _this._notifierService.notify('success', _this.result.Message);
                _this.ngOnInit();
                _this.buttonAdd.nativeElement.disabled = false;
            }
            else {
                _this.modalRef.hide();
                _this._notifierService.notify('error', _this.result.Message);
            }
        }, function (error) {
            _this.modalRef.hide();
            _this._notifierService.notify('error', error.message);
        });
    };
    KindsComponent.prototype.openDeleteModal = function (template) {
        console.log(this.product);
        if (this.product.ProductID === 0) {
            this._notifierService.notify('error', 'من فضلك يجب تحديد صنف واحد على الاقل للقيام بعملية الحذف ');
        }
        else {
            if (this.RowSelected(this.product) === true) {
                this.modalRef = this.modalService.show(template);
            }
            else if (this.RowSelected(this.product) === false) {
                this._notifierService.notify('error', 'من فضلك يجب تحديد صنف واحد على الاقل للقيام بعملية الحذف ');
            }
            else {
                this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');
            }
        }
    };
    KindsComponent.prototype.goToEditKind = function (product) {
        if (this.product.ProductID === 0) {
            this._notifierService.notify('error', 'من فضلك يجب تحديد صنف واحد على الاقل للقيام بعملية التعديل ');
        }
        else {
            this._router.navigate(['editkind', this.product.ProductID]);
        }
    };
    KindsComponent.prototype.SelectRow = function (_product) {
        this.product = _product;
        this.buttonAdd.nativeElement.disabled = true;
        // this.searchfield.nativeElement.disabled = true;
    };
    KindsComponent.prototype.RowSelected = function (_product) {
        if (!this.product) {
            return false;
        }
        return this.product.ProductID === _product.ProductID ? true : false;
    };
    KindsComponent.prototype.RemoveSelection = function (_product) {
        this.product = {
            ProductID: 0,
            ProductName: '',
            CatID: 0,
            MinLimit: 0,
            StopBuy: false,
            StopSale: false,
            PrintBarcode: false,
            Price: 0,
            P_Price: 0,
            Discount: 0,
            MinSalePrice: 0,
            ProductCode: '',
            CatName: '',
            Stock: 0,
            IsSelected: false
        };
        this.buttonAdd.nativeElement.disabled = false;
        // this.searchfield.nativeElement.disabled = false;
    };
    KindsComponent.prototype.getAllStores = function () {
        var _this = this;
        this._liststoresService.listStores().subscribe(function (_result) {
            _this.ProductStores = _result.StoresList;
        });
    };
    KindsComponent.prototype.getAllGroups = function () {
        var _this = this;
        this._productgroups.listGroups().subscribe(function (_result) {
            _this.productgroups = _result.GroupsList;
        });
    };
    KindsComponent.prototype.getAllSuppliers = function () {
        var _this = this;
        this._listsuppliersService.ListSuppliers().subscribe(function (_result) {
            _this.Suppliers = _result.SuppliersList;
        });
    };
    KindsComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    __decorate([
        core_1.ViewChild('ButtonAdd'),
        __metadata("design:type", core_1.ElementRef)
    ], KindsComponent.prototype, "buttonAdd", void 0);
    __decorate([
        core_1.ViewChild('SearchField'),
        __metadata("design:type", core_1.ElementRef)
    ], KindsComponent.prototype, "searchfield", void 0);
    KindsComponent = __decorate([
        core_1.Component({
            selector: 'app-kinds',
            templateUrl: './kinds.component.html',
            styleUrls: ['./kinds.component.css']
        }),
        __metadata("design:paramtypes", [listproducts_service_1.ListproductsService,
            angular_notifier_1.NotifierService,
            ngx_bootstrap_1.BsModalService,
            deleteproduct_service_1.DeleteproductService,
            router_1.Router,
            listgroups_service_1.ListgroupsService,
            listsuppliers_service_1.ListsuppliersService,
            liststores_service_1.ListstoresService,
            listproductsinstore_service_1.ListproductsinstoreService,
            Oauthenticatedsession_Service_1.OauthenticatedsessionService,
            listproductswithsupplier_service_1.ListproductswithsupplierService])
    ], KindsComponent);
    return KindsComponent;
}());
exports.KindsComponent = KindsComponent;
//# sourceMappingURL=kinds.component.js.map