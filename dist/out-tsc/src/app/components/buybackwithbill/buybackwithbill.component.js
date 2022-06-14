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
var productbuy_1 = require("./../../models/productbuy");
var core_1 = require("@angular/core");
var productbuy_2 = require("src/app/models/productbuy");
var listproductbuymaininvoices_service_1 = require("src/app/services/productbuy/listproductbuymaininvoices.service");
var liststores_service_1 = require("src/app/services/stores/liststores.service");
var listsuppliers_service_1 = require("src/app/services/suppliers/listsuppliers.service");
var angular_notifier_1 = require("angular-notifier");
var router_1 = require("@angular/router");
var listproductbuymaininvoiceitems_service_1 = require("src/app/services/productbuy/listproductbuymaininvoiceitems.service");
var listproductunitsbyid_service_1 = require("src/app/services/transferkinds/listproductunitsbyid.service");
var addproductbuydiscardmain_service_1 = require("src/app/services/productbuy/addproductbuydiscardmain.service");
var Oauthenticatedsession_Service_1 = require("src/app/services/general/Oauthenticatedsession.Service");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var notificationsactivities_1 = require("src/app/models/notificationsactivities");
var createactivity_service_1 = require("src/app/services/notificationsactivities/createactivity.service");
var BuybackwithbillComponent = /** @class */ (function () {
    function BuybackwithbillComponent(_listproductbuymaininvoicesService, _liststoresService, _liststorebynameService, _listsuppliersService, _listproductbuymaininvoiceitemsService, _notifierService, modalService, _listproductunitsbyidService, _addproductbuydiscardmainService, _OauthenticatedsessionServiceService, _router, _createactivityService) {
        this._listproductbuymaininvoicesService = _listproductbuymaininvoicesService;
        this._liststoresService = _liststoresService;
        this._liststorebynameService = _liststorebynameService;
        this._listsuppliersService = _listsuppliersService;
        this._listproductbuymaininvoiceitemsService = _listproductbuymaininvoiceitemsService;
        this._notifierService = _notifierService;
        this.modalService = modalService;
        this._listproductunitsbyidService = _listproductunitsbyidService;
        this._addproductbuydiscardmainService = _addproductbuydiscardmainService;
        this._OauthenticatedsessionServiceService = _OauthenticatedsessionServiceService;
        this._router = _router;
        this._createactivityService = _createactivityService;
        this.myOptions = {
            // other options...
            dateFormat: 'mmm d, yyyy',
        };
        this.AllProductBuyMainInvoices = [];
        this.SelectedProductBuyMainInvoice = new productbuy_2.ProductBuySelectMainInvoices();
        this.SelectedProductBuyMainInvoice.InvoiceID = 0;
        this.productBuyMainInvoicesItems = [];
        this.ProductStores = [];
        this.Suppliers = [];
        this.UserName = '';
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
        this.DateFrom = this.DateFromObject.jsdate;
        this.DateTo = this.DateToObject.jsdate;
        this.StoreName = '';
        this.SupplierName = '';
        this.InvoiceID = '';
        this.selectedInvoiceID = 0;
        this.selectedInvoiceStoreID = 0;
        this.addActivityModel = new notificationsactivities_1.AddActivityModel();
    }
    BuybackwithbillComponent.prototype.ngOnInit = function () {
        this.getAllProductBuyMainInvoices();
        this.getAllStores();
        this.getAllSuppliers();
    };
    BuybackwithbillComponent.prototype.getAllProductBuyMainInvoices = function () {
        var _this = this;
        this._listproductbuymaininvoicesService.listProductBuyMainInvoices().subscribe(function (_result) {
            _this.AllProductBuyMainInvoices = _result.ProductBuyInvoices;
        });
    };
    BuybackwithbillComponent.prototype.GetDateFrom = function (event) {
        this.DateFrom = this.DateFromObject.jsdate;
    };
    BuybackwithbillComponent.prototype.GetDateTo = function (event) {
        this.DateTo = this.DateToObject.jsdate;
    };
    BuybackwithbillComponent.prototype.SelectRow = function (_invoicemain) {
        var _this = this;
        this.productBuyMainInvoicesItems = [];
        this.SelectedProductBuyMainInvoice = _invoicemain;
        this.selectedInvoiceID = this.SelectedProductBuyMainInvoice.InvoiceID;
        this._liststorebynameService.listStoreByName(this.SelectedProductBuyMainInvoice.StoreName).
            subscribe(function (_result) {
            _this.selectedInvoiceStoreID = parseInt(_result.StoresList[0].StoreID, 10);
        });
        this.getProductBuyMainInvoiceItems();
    };
    BuybackwithbillComponent.prototype.RowSelected = function (_invoicemain) {
        if (!this.SelectedProductBuyMainInvoice) {
            return false;
        }
        return this.SelectedProductBuyMainInvoice.InvoiceID === _invoicemain.InvoiceID ? true : false;
    };
    BuybackwithbillComponent.prototype.RemoveSelection = function (_invoicemain) {
        this.SelectedProductBuyMainInvoice = new productbuy_2.ProductBuySelectMainInvoices();
        this.productBuyMainInvoicesItems = [];
    };
    BuybackwithbillComponent.prototype.getAllStores = function () {
        var _this = this;
        this._liststoresService.listStores().subscribe(function (_result) {
            _this.ProductStores = _result.StoresList;
        });
    };
    BuybackwithbillComponent.prototype.getAllSuppliers = function () {
        var _this = this;
        this._listsuppliersService.ListSuppliers().subscribe(function (_result) {
            _this.Suppliers = _result.SuppliersList;
        });
    };
    BuybackwithbillComponent.prototype.goToShowPurchaseBill = function () {
        if (this.SelectedProductBuyMainInvoice.InvoiceID === 0) {
            this._notifierService.notify('error', 'من فضلك يجب تحديد فاتورة واحدة على الاقل للقيام بعملية العرض ');
        }
        else {
            this._router.navigate(['showpurchasebill', this.SelectedProductBuyMainInvoice.InvoiceID]);
        }
    };
    BuybackwithbillComponent.prototype.GetSumTotal = function (From, To, StoreName, SupplierName) {
        var SumTotal = 0;
        if (From && To && StoreName && SupplierName) {
            this.AllProductBuyMainInvoices.filter(function (x) { return (x.StoreName.startsWith(StoreName) &&
                new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To) &&
                x.SupplierName.startsWith(SupplierName)); }).forEach(function (element) {
                SumTotal += element.Total;
            });
            return SumTotal;
        }
        else if (From && To && StoreName) {
            this.AllProductBuyMainInvoices.filter(function (x) { return (x.StoreName.startsWith(StoreName) &&
                new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To)); }).forEach(function (element) {
                SumTotal += element.Total;
            });
            return SumTotal;
        }
        else if (From && To) {
            this.AllProductBuyMainInvoices.filter(function (x) { return (new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To)); }).forEach(function (element) {
                SumTotal += element.Total;
            });
            return SumTotal;
        }
        else {
            return SumTotal;
        }
    };
    BuybackwithbillComponent.prototype.getProductBuyMainInvoiceItems = function () {
        var _this = this;
        this._listproductbuymaininvoiceitemsService.listProductBuyMainInvoiceItems(this.selectedInvoiceID)
            .subscribe(function (_result) {
            _result.ProductBuyInvoiceItems.forEach(function (element) {
                _this._listproductunitsbyidService
                    .GetProductUnites(element.ProductID)
                    .subscribe(function (_resultunits) {
                    var productBuyInvoiceItem = {
                        ProductID: element.ProductID,
                        Price: element.Price,
                        Num: element.Num,
                        ProductName: element.ProductName,
                        ProductUnits: _resultunits.UnitsList,
                        Stock: element.Stock,
                        UnitID: _resultunits.UnitsList[0].UnitID,
                        ChangeNum: element.ChangeNum,
                        DiscardNum: element.DiscardNum,
                        UnitName: element.UnitName
                    };
                    _this.productBuyMainInvoicesItems.push(productBuyInvoiceItem);
                });
            });
        });
    };
    BuybackwithbillComponent.prototype.AddProductBuyDiscardMain = function () {
        var _this = this;
        // tslint:disable-next-line:prefer-const
        var _InvoiceItems = new Array();
        this.productBuyMainInvoicesItems.forEach(function (element) {
            // tslint:disable-next-line:prefer-const
            var _invoiceItem = new productbuy_1.ProductBuyDiscardMainItemsModel();
            element.ProductUnits.forEach(function (unit) {
                if (unit.UnitID === element.UnitID) {
                    element.ChangeNum = unit.ChangeNum;
                }
            });
            _invoiceItem.UnitID = element.UnitID;
            _invoiceItem.DiscNum = element.Num;
            _invoiceItem.DiscChangeNum = element.ChangeNum;
            _invoiceItem.ProductID = element.ProductID;
            _invoiceItem.Price = element.Price;
            _invoiceItem.DiscNum_In_Max = element.DiscardNum;
            _invoiceItem.DiscNum_In_Old = element.DiscardNum;
            _InvoiceItems.push(_invoiceItem);
        });
        var DiscardValueTotal = 0;
        _InvoiceItems.forEach(function (element) {
            DiscardValueTotal += element.DiscNum;
        });
        var productBuyMainTableModel = {
            InvoiceID: this.selectedInvoiceID,
            UserID: this._OauthenticatedsessionServiceService.User.UserId,
            StoreID: this.selectedInvoiceStoreID,
            DiscardMainItems: _InvoiceItems,
            DiscardValue: DiscardValueTotal
        };
        this._addproductbuydiscardmainService
            .addProductBuyDiscardAddMain(productBuyMainTableModel)
            .subscribe(function (_result) {
            if (_result.Status === true) {
                _this.modalRef.hide();
                _this._notifierService.notify('success', _result.Message);
                _this.CreateActivityRecord();
                _this.ngOnInit();
                _this.productBuyMainInvoicesItems = [];
                _this.RemoveSelection(_this.SelectedProductBuyMainInvoice);
            }
            else {
                _this.modalRef.hide();
                _this._notifierService.notify('error', _result.Message);
            }
        });
    };
    BuybackwithbillComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    BuybackwithbillComponent.prototype.CreateActivityRecord = function () {
        var _this = this;
        this.addActivityModel.DateSubmit = new Date();
        this.addActivityModel.Read = true;
        this.addActivityModel.Type = 'فاتورة مرتجع شراء';
        this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addActivityModel.POS = 1;
        this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe(function (_resultactivity) {
            _this._notifierService.notify('success', _resultactivity.Message);
        });
    };
    BuybackwithbillComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    BuybackwithbillComponent = __decorate([
        core_1.Component({
            selector: 'app-buybackwithbill',
            templateUrl: './buybackwithbill.component.html',
            styleUrls: ['./buybackwithbill.component.css']
        }),
        __metadata("design:paramtypes", [listproductbuymaininvoices_service_1.ListproductbuymaininvoicesService,
            liststores_service_1.ListstoresService,
            liststorebyname_service_1.ListstorebynameService,
            listsuppliers_service_1.ListsuppliersService,
            listproductbuymaininvoiceitems_service_1.ListproductbuymaininvoiceitemsService,
            angular_notifier_1.NotifierService,
            ngx_bootstrap_1.BsModalService,
            listproductunitsbyid_service_1.ListproductunitsbyidService,
            addproductbuydiscardmain_service_1.AddproductbuydiscardmainService,
            Oauthenticatedsession_Service_1.OauthenticatedsessionService,
            router_1.Router,
            createactivity_service_1.CreateactivityService])
    ], BuybackwithbillComponent);
    return BuybackwithbillComponent;
}());
exports.BuybackwithbillComponent = BuybackwithbillComponent;
//# sourceMappingURL=buybackwithbill.component.js.map