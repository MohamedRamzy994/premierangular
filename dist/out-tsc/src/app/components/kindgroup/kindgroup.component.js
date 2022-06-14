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
var deletegroup_service_1 = require("./../../services/productgroups/deletegroup.service");
var editgroup_service_1 = require("./../../services/productgroups/editgroup.service");
var listgroups_service_1 = require("./../../services/productgroups/listgroups.service");
var addgroup_service_1 = require("./../../services/productgroups/addgroup.service");
var core_1 = require("@angular/core");
var angular_notifier_1 = require("angular-notifier");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var KindgroupComponent = /** @class */ (function () {
    function KindgroupComponent(_addgroupService, _notifierService, _modalService, _listgroupsService, _editgroupService, _deletegroupService) {
        this._addgroupService = _addgroupService;
        this._notifierService = _notifierService;
        this._modalService = _modalService;
        this._listgroupsService = _listgroupsService;
        this._editgroupService = _editgroupService;
        this._deletegroupService = _deletegroupService;
        this.modalService = _modalService;
        this.notifierService = _notifierService;
        this.resultlist = { Status: false, Message: '', GroupsList: [] };
    }
    KindgroupComponent.prototype.ngOnInit = function () {
        this.searchterm = '';
        this.group = {
            CatID: '',
            CatName: ''
        };
        this.GetAllGroups();
    };
    KindgroupComponent.prototype.AddGroup = function (_group, _formGroup) {
        var _this = this;
        this.group = _group;
        this._addgroupService
            .AddGroup(this.group)
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
    KindgroupComponent.prototype.GetAllGroups = function () {
        var _this = this;
        this._listgroupsService
            .listGroups()
            .subscribe(function (_resultlist) {
            _this.resultlist = _resultlist;
            if (_this.resultlist.GroupsList === null) {
                _this.resultlist = { Status: false, Message: '', GroupsList: [] };
            }
        });
    };
    KindgroupComponent.prototype.EditGroup = function (_group, _formGroup) {
        var _this = this;
        this._editgroupService.editGroup(_group).subscribe(function (_result) {
            _this.result = _result;
            if (_this.result.Status === true) {
                _this.modalRef.hide();
                _this.notifierService.notify('success', _this.result.Message);
                _formGroup.reset();
                _this.buttonAdd.nativeElement.disabled = false;
                _this.searchfield.nativeElement.disabled = false;
                _this.ngOnInit();
            }
            else {
                _this.notifierService.notify('error', _this.result.Message);
            }
        });
    };
    KindgroupComponent.prototype.DeleteGroup = function (_group) {
        var _this = this;
        this._deletegroupService.deleteGroup(_group).subscribe(function (_result) {
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
    KindgroupComponent.prototype.openEditModal = function (template) {
        if (this.group.CatID === '') {
            this._notifierService.notify('error', 'من فضلك يجب تحديد مجموعة واحد على الاقل للقيام بعملية التعديل ');
        }
        else {
            if (this.RowSelected(this.group) === true) {
                this.modalRef = this.modalService.show(template);
            }
            else if (this.RowSelected(this.group) === false) {
                this._notifierService.notify('error', 'من فضلك يجب تحديد مجموعة واحد على الاقل للقيام بعملية التعديل ');
            }
            else {
                this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');
            }
        }
    };
    KindgroupComponent.prototype.openDeleteModal = function (template) {
        if (this.group.CatID === '') {
            this._notifierService.notify('error', 'من فضلك يجب تحديد مجموعة واحد على الاقل للقيام بعملية الحذف ');
        }
        else {
            if (this.RowSelected(this.group) === true) {
                this.modalRef = this.modalService.show(template);
            }
            else if (this.RowSelected(this.group) === false) {
                this._notifierService.notify('error', 'من فضلك يجب تحديد مجموعة واحد على الاقل للقيام بعملية الحذف ');
            }
            else {
                this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');
            }
        }
    };
    KindgroupComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    KindgroupComponent.prototype.SelectRow = function (_group) {
        this.group = _group;
        this.buttonAdd.nativeElement.disabled = true;
        this.searchfield.nativeElement.disabled = true;
    };
    KindgroupComponent.prototype.RowSelected = function (_group) {
        if (!this.group) {
            return false;
        }
        return this.group.CatID === _group.CatID ? true : false;
    };
    KindgroupComponent.prototype.RemoveSelection = function (_group) {
        this.group = {
            CatID: '',
            CatName: ''
        };
        this.buttonAdd.nativeElement.disabled = false;
        // this.searchfield.nativeElement.disabled = false;
    };
    KindgroupComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    __decorate([
        core_1.ViewChild('ButtonAdd'),
        __metadata("design:type", core_1.ElementRef)
    ], KindgroupComponent.prototype, "buttonAdd", void 0);
    __decorate([
        core_1.ViewChild('SearchField'),
        __metadata("design:type", core_1.ElementRef)
    ], KindgroupComponent.prototype, "searchfield", void 0);
    KindgroupComponent = __decorate([
        core_1.Component({
            selector: 'app-kindgroup',
            templateUrl: './kindgroup.component.html',
            styleUrls: ['./kindgroup.component.css']
        }),
        __metadata("design:paramtypes", [addgroup_service_1.AddgroupService,
            angular_notifier_1.NotifierService,
            ngx_bootstrap_1.BsModalService,
            listgroups_service_1.ListgroupsService,
            editgroup_service_1.EditgroupService,
            deletegroup_service_1.DeletegroupService])
    ], KindgroupComponent);
    return KindgroupComponent;
}());
exports.KindgroupComponent = KindgroupComponent;
//# sourceMappingURL=kindgroup.component.js.map