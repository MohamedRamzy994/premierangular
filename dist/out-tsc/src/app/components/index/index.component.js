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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var IndexComponent = /** @class */ (function () {
    function IndexComponent(_OauthenticatedsessionServiceService, router) {
        this._OauthenticatedsessionServiceService = _OauthenticatedsessionServiceService;
        this.router = router;
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.authenticationCheck();
        this.hiddenref = true;
        this.hiddenscreen = true;
    };
    /**
     * authenticationCheck
     */
    IndexComponent.prototype.authenticationCheck = function () {
        if (this._OauthenticatedsessionServiceService.User.UserName === '' && this._OauthenticatedsessionServiceService.User.Password === '') {
            this.router.navigate(['home']);
            sessionStorage.clear();
        }
    };
    IndexComponent.prototype.ToggleMenu = function () {
        this.hiddenref = !this.hiddenref;
        $('.menu-toggle').toggleClass('open');
        $('#slideme').fadeToggle('slow');
    };
    IndexComponent.prototype.CloseMenu = function () {
        this.hiddenref = !this.hiddenref;
        $('.menu-toggle').toggleClass('open');
        $('#slideme').fadeToggle('slow');
    };
    IndexComponent.prototype.ToggleScreen = function () {
        this.hiddenscreen = !this.hiddenscreen;
        $('#SalesScreen').fadeToggle('slow');
    };
    IndexComponent.prototype.CloseScreenIndex = function (closed) {
        this.hiddenscreen = closed;
        $('#SalesScreen').fadeToggle('slow');
    };
    IndexComponent = __decorate([
        core_1.Component({
            selector: 'app-index',
            templateUrl: './index.component.html'
        }),
        __metadata("design:paramtypes", [Oauthenticatedsession_Service_1.OauthenticatedsessionService,
            router_1.Router])
    ], IndexComponent);
    return IndexComponent;
}());
exports.IndexComponent = IndexComponent;
//# sourceMappingURL=index.component.js.map