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
var editstore_service_1 = require("./../../services/stores/editstore.service");
var liststores_service_1 = require("./../../services/stores/liststores.service");
var core_1 = require("@angular/core");
var addstore_service_1 = require("../../services/stores/addstore.service");
var angular_notifier_1 = require("angular-notifier");
var modal_1 = require("ngx-bootstrap/modal");
var deletestore_service_1 = require("../../services/stores/deletestore.service");
var Oauthenticatedsession_Service_1 = require("src/app/services/general/Oauthenticatedsession.Service");
var ListstorekindsComponent = /** @class */ (function () {
    function ListstorekindsComponent(_addstoreService, _notifierService, _modalService, _liststoresService, _editstoreService, _deletestoreService, _oauthenticatedsessionService) {
        this._addstoreService = _addstoreService;
        this._notifierService = _notifierService;
        this._modalService = _modalService;
        this._liststoresService = _liststoresService;
        this._editstoreService = _editstoreService;
        this._deletestoreService = _deletestoreService;
        this._oauthenticatedsessionService = _oauthenticatedsessionService;
        this.modalService = _modalService;
        this.notifierService = _notifierService;
    }
    ListstorekindsComponent.prototype.ngOnInit = function () {
        this.searchterm = '';
        this.store = {
            StoreID: '',
            StoreName: ''
        };
        this.result = { Status: false, Message: '', StoresList: [] };
        this.resultlist = { Status: false, Message: '', StoresList: [] };
        this.GetAllStores();
        this.getLoggedUser();
    };
    /**
      * getLoggedUser
      */
    ListstorekindsComponent.prototype.getLoggedUser = function () {
        this.authenticatedUser = this._oauthenticatedsessionService.User;
    };
    ListstorekindsComponent.prototype.AddStore = function (_store, _formGroup) {
        var _this = this;
        this.store = _store;
        this._addstoreService
            .AddStore(this.store)
            .subscribe(function (_result) {
            _this.result = _result;
            if (_this.result.Status === true) {
                _formGroup.reset();
                _this.modalRef.hide();
                _this._notifierService.notify('success', _this.result.Message);
                _this.ngOnInit();
            }
            else {
                _this._notifierService.notify('error', _this.result.Message);
            }
        });
    };
    ListstorekindsComponent.prototype.GetAllStores = function () {
        var _this = this;
        this._liststoresService
            .listStores()
            .subscribe(function (_resultlist) {
            _this.resultlist = _resultlist;
            if (_this.resultlist.StoresList === null) {
                _this.resultlist = { Status: false, Message: '', StoresList: [] };
            }
        });
    };
    ListstorekindsComponent.prototype.EditStore = function (_store, _formGroup) {
        var _this = this;
        this._editstoreService.editStore(_store).subscribe(function (_result) {
            _this.result = _result;
            if (_this.result.Status === true) {
                _this.modalRef.hide();
                _this.notifierService.notify('success', _this.result.Message);
                _formGroup.reset();
                _this.buttonAdd.nativeElement.disabled = false;
                _this.ngOnInit();
            }
            else {
                _this.notifierService.notify('error', _this.result.Message);
            }
        });
    };
    ListstorekindsComponent.prototype.DeleteStore = function (_store) {
        var _this = this;
        this._deletestoreService.deleteStore(_store).subscribe(function (_result) {
            _this.result = _result;
            if (_this.result.Status === true) {
                _this.modalRef.hide();
                _this._notifierService.notify('success', _this.result.Message);
                _this.ngOnInit();
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
    ListstorekindsComponent.prototype.openEditModal = function (template) {
        if (this.store.StoreID === '') {
            this._notifierService.notify('error', 'من فضلك يجب تحديد مخزن واحد على الاقل للقيام بعملية التعديل ');
        }
        else {
            if (this.RowSelected(this.store) === true) {
                this.modalRef = this.modalService.show(template);
            }
            else if (this.RowSelected(this.store) === false) {
                this._notifierService.notify('error', 'من فضلك يجب تحديد مخزن واحد على الاقل للقيام بعملية التعديل ');
            }
            else {
                this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');
            }
        }
    };
    ListstorekindsComponent.prototype.openDeleteModal = function (template) {
        if (this.store.StoreID === '') {
            this._notifierService.notify('error', 'من فضلك يجب تحديد مخزن واحد على الاقل للقيام بعملية الحذف ');
        }
        else {
            if (this.RowSelected(this.store) === true) {
                this.modalRef = this.modalService.show(template);
            }
            else if (this.RowSelected(this.store) === false) {
                this._notifierService.notify('error', 'من فضلك يجب تحديد مخزن واحد على الاقل للقيام بعملية الحذف ');
            }
            else {
                this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');
            }
        }
    };
    ListstorekindsComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    ListstorekindsComponent.prototype.SelectRow = function (_store) {
        this.store = _store;
        this.buttonAdd.nativeElement.disabled = true;
        this.searchfield.nativeElement.disabled = true;
    };
    ListstorekindsComponent.prototype.RowSelected = function (_store) {
        if (!this.store) {
            return false;
        }
        return this.store.StoreID === _store.StoreID ? true : false;
    };
    ListstorekindsComponent.prototype.RemoveSelection = function (_store) {
        this.store = {
            StoreID: '',
            StoreName: ''
        };
        this.buttonAdd.nativeElement.disabled = false;
        this.searchfield.nativeElement.disabled = false;
    };
    ListstorekindsComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    __decorate([
        core_1.ViewChild('ButtonAdd'),
        __metadata("design:type", core_1.ElementRef)
    ], ListstorekindsComponent.prototype, "buttonAdd", void 0);
    __decorate([
        core_1.ViewChild('SearchField'),
        __metadata("design:type", core_1.ElementRef)
    ], ListstorekindsComponent.prototype, "searchfield", void 0);
    ListstorekindsComponent = __decorate([
        core_1.Component({
            selector: 'app-liststorekinds',
            templateUrl: './liststorekinds.component.html',
            styleUrls: ['./liststorekinds.component.css']
        }),
        __metadata("design:paramtypes", [addstore_service_1.AddstoreService,
            angular_notifier_1.NotifierService,
            modal_1.BsModalService,
            liststores_service_1.ListstoresService,
            editstore_service_1.EditstoreService,
            deletestore_service_1.DeletestoreService,
            Oauthenticatedsession_Service_1.OauthenticatedsessionService])
    ], ListstorekindsComponent);
    return ListstorekindsComponent;
}());
exports.ListstorekindsComponent = ListstorekindsComponent;
//# sourceMappingURL=liststorekinds.component.js.map