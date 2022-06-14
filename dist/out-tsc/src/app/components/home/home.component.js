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
var oauth_service_1 = require("./../../services/general/oauth.service");
var angular_notifier_1 = require("angular-notifier");
var notification_service_1 = require("./../../services/general/notification.service");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var Oauthenticatedsession_Service_1 = require("../../services/general/Oauthenticatedsession.Service");
var appsettings_service_1 = require("../../services/general/appsettings.service");
var settings_1 = require("../../models/settings");
var apiurl_service_1 = require("src/app/services/general/apiurl.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, _notificationService, _notifierService, _apiurlService, _oauthService, _appsettingsService, _OauthenticatedsessionServiceService) {
        this.router = router;
        this._notificationService = _notificationService;
        this._notifierService = _notifierService;
        this._apiurlService = _apiurlService;
        this._oauthService = _oauthService;
        this._appsettingsService = _appsettingsService;
        this._OauthenticatedsessionServiceService = _OauthenticatedsessionServiceService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.notifierService = this._notifierService;
        this.notificationService = this._notificationService;
        this.OauthenticatedsessionService = this._OauthenticatedsessionServiceService;
        this.appSettings = new settings_1.SettingsModel();
        this._notificationService.Notifyme();
        this.oauth = {
            LoginName: '',
            Password: ''
        };
        this.GetAppSettings();
    };
    /**
     * GetAppSettings
     */
    HomeComponent.prototype.GetAppSettings = function () {
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
    HomeComponent.prototype.goIndex = function (_oauth) {
        var _this = this;
        this._oauthService.Login(_oauth).subscribe(function (_result) {
            _this.result = _result;
            if (_this.result.Status === true) {
                _this.notifierService.notify('success', _this.result.Message);
                setTimeout(function () {
                    _this.router.navigate(['root']);
                }, 2000);
                setTimeout(function () {
                    _this.notificationService.NotifyUser(_oauth);
                }, 1000);
                _this.OauthenticatedsessionService.User = _this.result.UserList[0];
            }
            else {
                _this.notifierService.notify('error', _this.result.Message);
            }
        }, function (_error) {
            console.log(_error.message);
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css'],
        }),
        __metadata("design:paramtypes", [router_1.Router,
            notification_service_1.NotificationService,
            angular_notifier_1.NotifierService,
            apiurl_service_1.ApiurlService,
            oauth_service_1.OauthService,
            appsettings_service_1.AppsettingsService,
            Oauthenticatedsession_Service_1.OauthenticatedsessionService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map