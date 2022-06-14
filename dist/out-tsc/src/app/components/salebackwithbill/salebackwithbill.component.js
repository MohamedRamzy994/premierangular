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
var liststorebyname_service_1 = require("./../../services/stores/liststorebyname.service");
var core_1 = require("@angular/core");
var liststores_service_1 = require("src/app/services/stores/liststores.service");
var angular_notifier_1 = require("angular-notifier");
var router_1 = require("@angular/router");
var listproductunitsbyid_service_1 = require("src/app/services/transferkinds/listproductunitsbyid.service");
var Oauthenticatedsession_Service_1 = require("src/app/services/general/Oauthenticatedsession.Service");
var listproductsalemaininvoices_service_1 = require("src/app/services/productsales/listproductsalemaininvoices.service");
var listcustomers_service_1 = require("../../services/customers/listcustomers.service");
var listproductsalemaininvoicemainitems_service_1 = require("src/app/services/productsales/listproductsalemaininvoicemainitems.service");
var productsales_1 = require("src/app/models/productsales");
var addproductsalediscardmain_service_1 = require("src/app/services/productsales/addproductsalediscardmain.service");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var notificationsactivities_1 = require("src/app/models/notificationsactivities");
var createactivity_service_1 = require("src/app/services/notificationsactivities/createactivity.service");
var SalebackwithbillComponent = /** @class */ (function () {
    function SalebackwithbillComponent(_listproductsalemaininvoicesService, _liststoresService, _liststorebynameService, _listcustomersService, _listproductsalemaininvoicemainitemsService, _notifierService, _listproductunitsbyidService, _addproductsalediscardmainService, _OauthenticatedsessionServiceService, modalService, _createactivityService, _router) {
        this._listproductsalemaininvoicesService = _listproductsalemaininvoicesService;
        this._liststoresService = _liststoresService;
        this._liststorebynameService = _liststorebynameService;
        this._listcustomersService = _listcustomersService;
        this._listproductsalemaininvoicemainitemsService = _listproductsalemaininvoicemainitemsService;
        this._notifierService = _notifierService;
        this._listproductunitsbyidService = _listproductunitsbyidService;
        this._addproductsalediscardmainService = _addproductsalediscardmainService;
        this._OauthenticatedsessionServiceService = _OauthenticatedsessionServiceService;
        this.modalService = modalService;
        this._createactivityService = _createactivityService;
        this._router = _router;
        this.myOptions = {
            // other options...
            dateFormat: 'mmm d, yyyy',
        };
        this.AllProductSaleMainInvoices = [];
        this.SelectedProductBuyMainInvoice = new productsales_1.ProductSaleSelectMainInvoices();
        this.SelectedProductBuyMainInvoice.InvoiceID = 0;
        this.productSaleMainInvoicesItems = [];
        this.ProductStores = [];
        this.Customers = [];
        this.UserName = '';
        this.GetMoneyBack = false;
        this.DateFromObject = {
            'date': {
                'year': 2000,
                'month': 1,
                'day': 1
            },
            'jsdate': '2000-01-01T22:00:00.000Z',
            'formatted': 'Jan 1, 2018'
        };
        this.DateToObject = {
            'date': {
                'year': 2030,
                'month': 1,
                'day': 1
            },
            'jsdate': '2030-01-01T22:00:00.000Z',
            'formatted': 'Jan 1, 2030'
        };
        this.addActivityModel = new notificationsactivities_1.AddActivityModel();
        this.DateFrom = this.DateFromObject.jsdate;
        this.DateTo = this.DateToObject.jsdate;
        this.StoreName = '';
        this.CustomerName = '';
        this.InvoiceID = '';
        this.selectedInvoiceID = 0;
        this.selectedInvoiceStoreID = 0;
        this.SupplierName = '';
        this.InvoiceID = '';
    }
    SalebackwithbillComponent.prototype.ngOnInit = function () {
        this.getAllProductSaleMainInvoices();
        this.getAllStores();
        this.getAllCustomers();
    };
    SalebackwithbillComponent.prototype.getAllProductSaleMainInvoices = function () {
        var _this = this;
        this._listproductsalemaininvoicesService.listProductSaleMainInvoices()
            .subscribe(function (_result) {
            _this.AllProductSaleMainInvoices = _result.ProductSaleInvoices;
        });
    };
    SalebackwithbillComponent.prototype.GetDateFrom = function () {
        this.DateFrom = this.DateFromObject.jsdate;
    };
    SalebackwithbillComponent.prototype.GetDateTo = function () {
        this.DateTo = this.DateToObject.jsdate;
    };
    SalebackwithbillComponent.prototype.SelectRow = function (_invoicemain) {
        var _this = this;
        this.productSaleMainInvoicesItems = [];
        this.SelectedProductBuyMainInvoice = _invoicemain;
        this.selectedInvoiceID = this.SelectedProductBuyMainInvoice.InvoiceID;
        this._liststorebynameService.listStoreByName(this.SelectedProductBuyMainInvoice.StoreName).
            subscribe(function (_result) {
            _this.selectedInvoiceStoreID = parseInt(_result.StoresList[0].StoreID, 10);
        });
        this.getProductSaleMainInvoiceItems();
    };
    SalebackwithbillComponent.prototype.RowSelected = function (_invoicemain) {
        if (!this.SelectedProductBuyMainInvoice) {
            return false;
        }
        return this.SelectedProductBuyMainInvoice.InvoiceID === _invoicemain.InvoiceID ? true : false;
    };
    SalebackwithbillComponent.prototype.RemoveSelection = function (_invoicemain) {
        this.SelectedProductBuyMainInvoice = new productsales_1.ProductSaleSelectMainInvoices();
        this.productSaleMainInvoicesItems = [];
    };
    SalebackwithbillComponent.prototype.getAllStores = function () {
        var _this = this;
        this._liststoresService.listStores().subscribe(function (_result) {
            _this.ProductStores = _result.StoresList;
        });
    };
    SalebackwithbillComponent.prototype.getAllCustomers = function () {
        var _this = this;
        this._listcustomersService.ListCustomers().subscribe(function (_result) {
            _this.Customers = _result.CustomersList;
        });
    };
    SalebackwithbillComponent.prototype.goToShowPurchaseBill = function () {
        if (this.SelectedProductBuyMainInvoice.InvoiceID === 0) {
            this._notifierService.notify('error', 'من فضلك يجب تحديد فاتورة واحدة على الاقل للقيام بعملية العرض ');
        }
        else {
            this._router.navigate(['showpurchasebill', this.SelectedProductBuyMainInvoice.InvoiceID]);
        }
    };
    SalebackwithbillComponent.prototype.GetSumTotal = function (From, To, StoreName, CustomerName) {
        var SumTotal = 0;
        if (From && To && StoreName && CustomerName) {
            this.AllProductSaleMainInvoices.filter(function (x) { return (x.StoreName.startsWith(StoreName) &&
                new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To) &&
                x.CustomerName.startsWith(CustomerName)); }).forEach(function (element) {
                SumTotal += element.Net;
            });
            return SumTotal;
        }
        else if (From && To && StoreName) {
            this.AllProductSaleMainInvoices.filter(function (x) { return (x.StoreName.startsWith(StoreName) &&
                new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To)); }).forEach(function (element) {
                SumTotal += element.Net;
            });
            return SumTotal;
        }
        else if (From && To) {
            this.AllProductSaleMainInvoices.filter(function (x) { return (new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To)); }).forEach(function (element) {
                SumTotal += element.Net;
            });
            return SumTotal;
        }
        else {
            return SumTotal;
        }
    };
    SalebackwithbillComponent.prototype.getProductSaleMainInvoiceItems = function () {
        var _this = this;
        this._listproductsalemaininvoicemainitemsService.listProductSaleMainInvoiceItems(this.selectedInvoiceID)
            .subscribe(function (_result) {
            _result.ProductSaleInvoiceItems.forEach(function (element) {
                _this._listproductunitsbyidService
                    .GetProductUnites(element.ProductID)
                    .subscribe(function (_resultunits) {
                    var productSaleInvoiceItem = {
                        ProductID: element.ProductID,
                        Price: element.Price,
                        TotalDisc: element.TotalDisc,
                        NetPrice: element.NetPrice,
                        Num: element.Num,
                        ProductName: element.ProductName,
                        ProductUnits: _resultunits.UnitsList,
                        Stock: element.Stock,
                        UnitID: _resultunits.UnitsList[0].UnitID,
                        ChangeNum: element.ChangeNum,
                        DiscardNum: element.DiscardNum,
                        UnitName: element.UnitName
                    };
                    _this.productSaleMainInvoicesItems.push(productSaleInvoiceItem);
                });
            });
        });
    };
    SalebackwithbillComponent.prototype.AddProductSaleDiscardMain = function () {
        var _this = this;
        // tslint:disable-next-line:prefer-const
        var _InvoiceItems = new Array();
        this.productSaleMainInvoicesItems.forEach(function (element) {
            // tslint:disable-next-line:prefer-const
            var _invoiceItem = new productsales_1.ProductSaleDiscardMainItemsModel();
            element.ProductUnits.forEach(function (unit) {
                if (unit.UnitID === element.UnitID) {
                    element.ChangeNum = unit.ChangeNum;
                }
            });
            _invoiceItem.UnitID = element.UnitID;
            _invoiceItem.DiscNum = element.DiscardNum;
            _invoiceItem.DiscChangeNum = element.ChangeNum;
            _invoiceItem.ProductID = element.ProductID;
            _invoiceItem.Price = element.NetPrice;
            _invoiceItem.DiscNum_In_Max = element.DiscardNum;
            _invoiceItem.DiscNum_In_Old = element.DiscardNum;
            _invoiceItem.SequanceID = element.SequanceID;
            _InvoiceItems.push(_invoiceItem);
        });
        var DiscardValueTotal = 0;
        _InvoiceItems.forEach(function (element) {
            DiscardValueTotal += element.DiscNum * element.Price;
        });
        var productSaleMainTableModel = {
            InvoiceID: this.selectedInvoiceID,
            UserID: this._OauthenticatedsessionServiceService.User.UserId,
            StoreID: this.selectedInvoiceStoreID,
            DiscardSaleMainItems: _InvoiceItems,
            DiscardValue: DiscardValueTotal,
            ThisSalesPointID: 3,
            DefaultSalesPointID: 1,
            GetMoneyBack: this.GetMoneyBack
        };
        this._addproductsalediscardmainService
            .addProductSaleDiscardAddMain(productSaleMainTableModel)
            .subscribe(function (_result) {
            if (_result.Status === true) {
                _this.modalRef.hide();
                _this._notifierService.notify('success', _result.Message);
                _this.CreateActivityRecord();
                _this.ngOnInit();
                _this.productSaleMainInvoicesItems = [];
                _this.RemoveSelection(_this.SelectedProductBuyMainInvoice);
            }
            else {
                _this.modalRef.hide();
                _this._notifierService.notify('error', _result.Message);
            }
        });
    };
    SalebackwithbillComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    SalebackwithbillComponent.prototype.CreateActivityRecord = function () {
        var _this = this;
        this.addActivityModel.DateSubmit = new Date();
        this.addActivityModel.Read = true;
        this.addActivityModel.Type = 'فاتورة مرتجع بيع';
        this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addActivityModel.POS = 1;
        this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe(function (_resultactivity) {
            _this._notifierService.notify('success', _resultactivity.Message);
        });
    };
    SalebackwithbillComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    SalebackwithbillComponent = __decorate([
        core_1.Component({
            selector: 'app-salebackwithbill',
            templateUrl: './salebackwithbill.component.html',
            styleUrls: ['./salebackwithbill.component.css']
        }),
        __metadata("design:paramtypes", [listproductsalemaininvoices_service_1.ListproductsalemaininvoicesService,
            liststores_service_1.ListstoresService,
            liststorebyname_service_1.ListstorebynameService,
            listcustomers_service_1.ListcustomersService,
            listproductsalemaininvoicemainitems_service_1.ListproductsalemaininvoicemainitemsService,
            angular_notifier_1.NotifierService,
            listproductunitsbyid_service_1.ListproductunitsbyidService,
            addproductsalediscardmain_service_1.AddproductsalediscardmainService,
            Oauthenticatedsession_Service_1.OauthenticatedsessionService,
            ngx_bootstrap_1.BsModalService,
            createactivity_service_1.CreateactivityService,
            router_1.Router])
    ], SalebackwithbillComponent);
    return SalebackwithbillComponent;
}());
exports.SalebackwithbillComponent = SalebackwithbillComponent;
//# sourceMappingURL=salebackwithbill.component.js.map