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
var result_1 = require("./../../models/result");
var core_1 = require("@angular/core");
var userlist_service_1 = require("../../services/user/userlist.service");
var deleteuser_service_1 = require("../../services/user/deleteuser.service");
var angular_notifier_1 = require("angular-notifier");
var modal_1 = require("ngx-bootstrap/modal");
var Oauthenticatedsession_Service_1 = require("src/app/services/general/Oauthenticatedsession.Service");
var UserslistComponent = /** @class */ (function () {
    function UserslistComponent(_userlistService, _deleteuserService, _oauthenticatedsessionService, _notifierService, modalService, router) {
        this._userlistService = _userlistService;
        this._deleteuserService = _deleteuserService;
        this._oauthenticatedsessionService = _oauthenticatedsessionService;
        this._notifierService = _notifierService;
        this.modalService = modalService;
        this.router = router;
        this.userListService = this._userlistService;
    }
    UserslistComponent.prototype.ngOnInit = function () {
        this.userList = new result_1.Result();
        this.selectedUser = null;
        this.getAllUsers();
        this.getLoggedUser();
    };
    /**
       * getLoggedUser
       */
    UserslistComponent.prototype.getLoggedUser = function () {
        this.authenticatedUser = this._oauthenticatedsessionService.User;
    };
    UserslistComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.userListService.listUsers().subscribe(function (_userlist) {
            _this.userList.UserList = _userlist.UserList;
        });
    };
    UserslistComponent.prototype.SelectRow = function (_user) {
        this.selectedUser = _user;
    };
    UserslistComponent.prototype.RowSelected = function (_user) {
        if (!this.selectedUser) {
            return false;
        }
        return this.selectedUser.UserId === _user.UserId ? true : false;
    };
    UserslistComponent.prototype.RemoveSelection = function (_user) {
        this.selectedUser = null;
    };
    UserslistComponent.prototype.openModal = function (template) {
        if (this.RowSelected(this.selectedUser) === true) {
            this.modalRef = this.modalService.show(template);
        }
        else if (this.RowSelected(this.selectedUser) === false) {
            this._notifierService.notify('error', 'من فضلك يجب تحديد مستخدم واحد على الاقل للقيام بعملية الحذف');
        }
        else {
            this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');
        }
    };
    UserslistComponent.prototype.DeleteUser = function (user) {
        var _this = this;
        this._deleteuserService.deleteUser(user).subscribe(function (_result) {
            _this.userList = _result;
            if (_this.userList.Status === true) {
                _this.modalRef.hide();
                _this._notifierService.notify('success', _this.userList.Message);
                _this.ngOnInit();
            }
            else {
                _this.modalRef.hide();
                _this._notifierService.notify('error', _this.userList.Message);
            }
        }, function (error) {
            _this.modalRef.hide();
            _this._notifierService.notify('error', error.message);
        });
    };
    UserslistComponent.prototype.goToEdit = function (user) {
        if (this.RowSelected(this.selectedUser) === true) {
            this.router.navigate(['modifyuser', this.selectedUser.UserId]);
        }
        else if (this.RowSelected(this.selectedUser) === false) {
            this._notifierService.notify('error', 'من فضلك يجب تحديد مستخدم واحد على الاقل للقيام بعملية التعديل ');
        }
        else {
            this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');
        }
    };
    UserslistComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    UserslistComponent = __decorate([
        core_1.Component({
            selector: 'app-userslist',
            templateUrl: './userslist.component.html',
            styleUrls: ['./userslist.component.css']
        }),
        __metadata("design:paramtypes", [userlist_service_1.UserlistService,
            deleteuser_service_1.DeleteuserService,
            Oauthenticatedsession_Service_1.OauthenticatedsessionService,
            angular_notifier_1.NotifierService,
            modal_1.BsModalService,
            router_1.Router])
    ], UserslistComponent);
    return UserslistComponent;
}());
exports.UserslistComponent = UserslistComponent;
//# sourceMappingURL=userslist.component.js.map