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
var core_1 = require("@angular/core");
var Oauthenticatedsession_Service_1 = require("../../services/general/Oauthenticatedsession.Service");
var screenfull = require("screenfull");
var settings_1 = require("src/app/models/settings");
var appsettings_service_1 = require("src/app/services/general/appsettings.service");
var apiurl_service_1 = require("src/app/services/general/apiurl.service");
var settings_2 = require("../../models/settings");
var currentsalespointmacs_service_1 = require("../../services/general/currentsalespointmacs.service");
var listsalespoints_service_1 = require("src/app/services/salespoints/listsalespoints.service");
var salespoints_1 = require("../../models/salespoints");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_OauthenticatedsessionServiceService, router, _apiurlService, _appsettingsService, _listsalespointsService, _currentMacAddresses, activatedRoute) {
        this._OauthenticatedsessionServiceService = _OauthenticatedsessionServiceService;
        this.router = router;
        this._apiurlService = _apiurlService;
        this._appsettingsService = _appsettingsService;
        this._listsalespointsService = _listsalespointsService;
        this._currentMacAddresses = _currentMacAddresses;
        this.activatedRoute = activatedRoute;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.appSettings = new settings_1.SettingsModel();
        this.currentMacAddresses = new settings_2.CurrentMacAddresses();
        this.currentsalespoint = new salespoints_1.ListSalesPointsModel();
        this.user = this._OauthenticatedsessionServiceService.User;
        this.GetAppSettings();
        this.GetCurrentSalesPointMacs();
    };
    HeaderComponent.prototype.logOut = function () {
        sessionStorage.clear();
        this.router.navigate(['home']);
    };
    /**
       * GetAppSettings
       */
    HeaderComponent.prototype.GetAppSettings = function () {
        var _this = this;
        this._appsettingsService.AppSettings().subscribe(function (_result) {
            if (_result.Status == true) {
                _this.appSettings = _result.SettingsModel[0];
                _this.appSettings.Logo = _this._apiurlService.apiUrl + _this.appSettings.Logo;
            }
            else {
                _this.appSettings = {
                    ShopName: 'ماركـت شوت',
                    WorkType: 'التجارة والحسابات والمبيعات',
                    Address: 'الدراسات - المنصورة - الدقهلية - مصر ',
                    Logo: '/bag.png',
                    Background: '/bag.png'
                };
            }
        });
    };
    HeaderComponent.prototype.ToggelFullScreen = function (event) {
        if (screenfull.enabled) {
            screenfull.toggle(document.documentElement);
        }
    };
    /**
     * GetCurrentSalesPointMacs
     */
    HeaderComponent.prototype.GetCurrentSalesPointMacs = function () {
        var _this = this;
        this._currentMacAddresses.GetCurrentSalesPointMacs().subscribe(function (_result) {
            if (_result.NotFoundMac == null) {
                _this.currentMacAddresses = _result;
                _this._listsalespointsService.ListAllSalesPoints().subscribe(function (_resultsales) {
                    _resultsales.SalesPointsList.forEach(function (element) {
                        if (element.SalesPointMACEthernet === _result.EtherNetMac || element.SalesPointMACWireless === _result.WireLessMac) {
                            _this.currentsalespoint = element;
                        }
                    });
                });
            }
            else {
                _this.currentMacAddresses = new settings_2.CurrentMacAddresses();
            }
        });
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html'
        }),
        __metadata("design:paramtypes", [Oauthenticatedsession_Service_1.OauthenticatedsessionService,
            router_1.Router,
            apiurl_service_1.ApiurlService,
            appsettings_service_1.AppsettingsService,
            listsalespoints_service_1.ListsalespointsService,
            currentsalespointmacs_service_1.CurrentsalespointmacsService,
            router_1.ActivatedRoute])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map