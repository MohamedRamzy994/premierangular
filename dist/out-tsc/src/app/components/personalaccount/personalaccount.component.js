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
var angular_notifier_1 = require("angular-notifier");
var editmyaccount_service_1 = require("./../../services/user/editmyaccount.service");
var core_1 = require("@angular/core");
var Oauthenticatedsession_Service_1 = require("../../services/general/Oauthenticatedsession.Service");
var user_1 = require("../../models/user");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var PersonalaccountComponent = /** @class */ (function () {
    function PersonalaccountComponent(_OauthenticatedsessionServiceService, _editmyaccountService, modalService, _notifierService) {
        this._OauthenticatedsessionServiceService = _OauthenticatedsessionServiceService;
        this._editmyaccountService = _editmyaccountService;
        this.modalService = modalService;
        this._notifierService = _notifierService;
        this.user = new user_1.User();
    }
    PersonalaccountComponent.prototype.ngOnInit = function () {
        this.user.UserName = this._OauthenticatedsessionServiceService.User.UserName;
        this.user.LoginName = this._OauthenticatedsessionServiceService.User.LoginName;
    };
    PersonalaccountComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    PersonalaccountComponent.prototype.onSubmit = function (_user) {
        var _this = this;
        _user.UserId = this._OauthenticatedsessionServiceService.User.UserId;
        this._editmyaccountService.EditMyAccount(_user).subscribe(function (_result) {
            _this.result = _result;
            if (_this.result.Status === true) {
                _this.modalRef.hide();
                _this._notifierService.notify('success', _this.result.Message);
            }
            else {
                _this._notifierService.notify('error', _this.result.Message);
            }
        });
    };
    PersonalaccountComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    PersonalaccountComponent = __decorate([
        core_1.Component({
            selector: 'app-personalaccount',
            templateUrl: './personalaccount.component.html',
            styleUrls: ['./personalaccount.component.css']
        }),
        __metadata("design:paramtypes", [Oauthenticatedsession_Service_1.OauthenticatedsessionService,
            editmyaccount_service_1.EditmyaccountService,
            ngx_bootstrap_1.BsModalService,
            angular_notifier_1.NotifierService])
    ], PersonalaccountComponent);
    return PersonalaccountComponent;
}());
exports.PersonalaccountComponent = PersonalaccountComponent;
//# sourceMappingURL=personalaccount.component.js.map