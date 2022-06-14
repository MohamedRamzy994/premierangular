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
var Oauthenticatedsession_Service_1 = require("src/app/services/general/Oauthenticatedsession.Service");
var PurchasesComponent = /** @class */ (function () {
    function PurchasesComponent(_oauthenticatedsessionService) {
        this._oauthenticatedsessionService = _oauthenticatedsessionService;
    }
    PurchasesComponent.prototype.ngOnInit = function () {
        this.getLoggedUser();
    };
    /**
       * getLoggedUser
       */
    PurchasesComponent.prototype.getLoggedUser = function () {
        this.authenticatedUser = this._oauthenticatedsessionService.User;
    };
    PurchasesComponent = __decorate([
        core_1.Component({
            selector: 'app-purchases',
            templateUrl: './purchases.component.html',
            styleUrls: ['./purchases.component.css']
        }),
        __metadata("design:paramtypes", [Oauthenticatedsession_Service_1.OauthenticatedsessionService])
    ], PurchasesComponent);
    return PurchasesComponent;
}());
exports.PurchasesComponent = PurchasesComponent;
//# sourceMappingURL=purchases.component.js.map