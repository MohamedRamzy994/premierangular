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
var ngx_bootstrap_1 = require("ngx-bootstrap");
var angular_notifier_1 = require("angular-notifier");
var router_1 = require("@angular/router");
var employees_1 = require("src/app/models/employees");
var listemployees_service_1 = require("src/app/services/employees/listemployees.service");
var deleteemployee_service_1 = require("src/app/services/employees/deleteemployee.service");
var Oauthenticatedsession_Service_1 = require("src/app/services/general/Oauthenticatedsession.Service");
var EmployeeslistComponent = /** @class */ (function () {
    function EmployeeslistComponent(_listemployeessService, _notifierService, modalService, _deleteemployeeService, _oauthenticatedsessionService, router) {
        this._listemployeessService = _listemployeessService;
        this._notifierService = _notifierService;
        this.modalService = modalService;
        this._deleteemployeeService = _deleteemployeeService;
        this._oauthenticatedsessionService = _oauthenticatedsessionService;
        this.router = router;
    }
    EmployeeslistComponent.prototype.ngOnInit = function () {
        this.SearchEmployees = '';
        this.employeeList = [];
        this.resultListEmployees = new employees_1.ResultListEmployees();
        this.selectedEmployee = null;
        this.getAllEmployees();
        this.getLoggedUser();
    };
    /**
       * getLoggedUser
       */
    EmployeeslistComponent.prototype.getLoggedUser = function () {
        this.authenticatedUser = this._oauthenticatedsessionService.User;
    };
    EmployeeslistComponent.prototype.getAllEmployees = function () {
        var _this = this;
        this._listemployeessService.ListEmployees().subscribe(function (_result) {
            _this.employeeList = _result.EmployeesList;
            if (_result.EmployeesList == null) {
                _this.employeeList = [];
            }
        });
    };
    EmployeeslistComponent.prototype.SelectRow = function (_supplier) {
        this.selectedEmployee = _supplier;
        this.buttonAdd.nativeElement.disabled = true;
    };
    EmployeeslistComponent.prototype.RowSelected = function (_supplier) {
        if (!this.selectedEmployee) {
            return false;
        }
        return this.selectedEmployee.EmpID === _supplier.EmpID ? true : false;
    };
    EmployeeslistComponent.prototype.RemoveSelection = function (_supplier) {
        this.selectedEmployee = null;
        this.buttonAdd.nativeElement.disabled = false;
    };
    EmployeeslistComponent.prototype.openModal = function (template) {
        if (this.RowSelected(this.selectedEmployee) === true) {
            this.modalRef = this.modalService.show(template);
        }
        else if (this.RowSelected(this.selectedEmployee) === false) {
            this._notifierService.notify('error', 'من فضلك يجب تحديد موظف واحد على الاقل للقيام بعملية الحذف');
        }
        else {
            this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');
        }
    };
    EmployeeslistComponent.prototype.DeleteEmployee = function (_supplier) {
        var _this = this;
        this._deleteemployeeService.DeleteEmployee(_supplier).subscribe(function (_result) {
            if (_result.Status === true) {
                _this.modalRef.hide();
                _this._notifierService.notify('success', _result.Message);
                _this.ngOnInit();
            }
            else {
                _this.modalRef.hide();
                _this._notifierService.notify('error', _result.Message);
            }
        });
    };
    EmployeeslistComponent.prototype.goToEdit = function (_supplier) {
        if (this.RowSelected(this.selectedEmployee) === true) {
            this.router.navigate(['fileemployee', this.selectedEmployee.EmpID]);
        }
        else if (this.RowSelected(this.selectedEmployee) === false) {
            this._notifierService.notify('error', 'من فضلك يجب تحديد موظف واحد على الاقل للقيام بعملية التعديل ');
        }
        else {
            this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');
        }
    };
    EmployeeslistComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    __decorate([
        core_1.ViewChild('ButtonAdd'),
        __metadata("design:type", core_1.ElementRef)
    ], EmployeeslistComponent.prototype, "buttonAdd", void 0);
    EmployeeslistComponent = __decorate([
        core_1.Component({
            selector: 'app-employeeslist',
            templateUrl: './employeeslist.component.html',
            styleUrls: ['./employeeslist.component.css']
        }),
        __metadata("design:paramtypes", [listemployees_service_1.ListemployeesService,
            angular_notifier_1.NotifierService,
            ngx_bootstrap_1.BsModalService,
            deleteemployee_service_1.DeleteemployeeService,
            Oauthenticatedsession_Service_1.OauthenticatedsessionService,
            router_1.Router])
    ], EmployeeslistComponent);
    return EmployeeslistComponent;
}());
exports.EmployeeslistComponent = EmployeeslistComponent;
//# sourceMappingURL=employeeslist.component.js.map