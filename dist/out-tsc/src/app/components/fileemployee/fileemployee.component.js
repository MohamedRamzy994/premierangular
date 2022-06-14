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
var addemployeecommisionpunishcancel_service_1 = require("./../../services/employees/addemployeecommisionpunishcancel.service");
var listemployeeallsalary_service_1 = require("./../../services/employees/listemployeeallsalary.service");
var addemployeesalary_service_1 = require("./../../services/employees/addemployeesalary.service");
var listemployeesdebitstoke_service_1 = require("./../../services/employees/listemployeesdebitstoke.service");
var addemployeepayeddebits_service_1 = require("./../../services/employees/addemployeepayeddebits.service");
var addemployeecommisionpunish_service_1 = require("./../../services/employees/addemployeecommisionpunish.service");
var editemployee_service_1 = require("./../../services/employees/editemployee.service");
var listemployees_service_1 = require("./../../services/employees/listemployees.service");
var employees_1 = require("./../../models/employees");
var core_1 = require("@angular/core");
var employees_2 = require("src/app/models/employees");
var apiurl_service_1 = require("src/app/services/general/apiurl.service");
var uploademployeeimage_service_1 = require("src/app/services/employees/uploademployeeimage.service");
var angular_notifier_1 = require("angular-notifier");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var employees_3 = require("../../models/employees");
var addemployeedebits_service_1 = require("src/app/services/employees/addemployeedebits.service");
var listsalespoints_service_1 = require("src/app/services/salespoints/listsalespoints.service");
var Oauthenticatedsession_Service_1 = require("../../services/general/Oauthenticatedsession.Service");
var listemployeecompunreasons_service_1 = require("../../services/employees/listemployeecompunreasons.service");
var addemployeegivemoney_service_1 = require("../../services/employees/addemployeegivemoney.service");
var listemployeesdebitspayed_service_1 = require("src/app/services/employees/listemployeesdebitspayed.service");
var listemployeescompunbydate_service_1 = require("../../services/employees/listemployeescompunbydate.service");
var listemployeeallgivedmoney_service_1 = require("src/app/services/employees/listemployeeallgivedmoney.service");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var listemployeescompuncanceld_service_1 = require("src/app/services/employees/listemployeescompuncanceld.service");
var notificationsactivities_1 = require("src/app/models/notificationsactivities");
var createactivity_service_1 = require("src/app/services/notificationsactivities/createactivity.service");
var FileemployeeComponent = /** @class */ (function () {
    function FileemployeeComponent(_apiurlService, _uploademployeeimageService, _notifierService, _editemployeeService, _addemployeedebitsService, _addemployeecommisionpunishService, _activatedRoute, _listsalespointsService, _OauthenticatedsessionServiceService, _listemployeesService, _listemployeesdebitstokeService, _listemployeesdebitspayedService, _listemployeecompunreasonsService, _listemployeescompunbydateService, _listemployeeallsalaryService, _listemployeeallgivedmoneyService, _listemployeescompuncanceldService, _addemployeegivemoneyService, _addemployeesalaryService, _addemployeecommisionpunishcancelService, modalService, _addemployeepayeddebitsService, _createactivityService) {
        this._apiurlService = _apiurlService;
        this._uploademployeeimageService = _uploademployeeimageService;
        this._notifierService = _notifierService;
        this._editemployeeService = _editemployeeService;
        this._addemployeedebitsService = _addemployeedebitsService;
        this._addemployeecommisionpunishService = _addemployeecommisionpunishService;
        this._activatedRoute = _activatedRoute;
        this._listsalespointsService = _listsalespointsService;
        this._OauthenticatedsessionServiceService = _OauthenticatedsessionServiceService;
        this._listemployeesService = _listemployeesService;
        this._listemployeesdebitstokeService = _listemployeesdebitstokeService;
        this._listemployeesdebitspayedService = _listemployeesdebitspayedService;
        this._listemployeecompunreasonsService = _listemployeecompunreasonsService;
        this._listemployeescompunbydateService = _listemployeescompunbydateService;
        this._listemployeeallsalaryService = _listemployeeallsalaryService;
        this._listemployeeallgivedmoneyService = _listemployeeallgivedmoneyService;
        this._listemployeescompuncanceldService = _listemployeescompuncanceldService;
        this._addemployeegivemoneyService = _addemployeegivemoneyService;
        this._addemployeesalaryService = _addemployeesalaryService;
        this._addemployeecommisionpunishcancelService = _addemployeecommisionpunishcancelService;
        this.modalService = modalService;
        this._addemployeepayeddebitsService = _addemployeepayeddebitsService;
        this._createactivityService = _createactivityService;
        this.myOptions = {
            // other options...
            dateFormat: 'mmm d, yyyy',
        };
    }
    FileemployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addActivityModel = new notificationsactivities_1.AddActivityModel();
        this.editEmployeeModel = new employees_1.ListEmployeesModel();
        this.listDebitsTokenModel = [];
        this.listDebitsPayedModel = [];
        this.listEmployeeSalaryModel = [];
        this.listEmployeeGivedMoneyModel = [];
        this.listCommisionAndPunishByDateModel = [];
        this.addEmployeeModel = new employees_2.AddEmployeeModel();
        this.addEmployeeDebitsModel = new employees_1.AddEmployeeDebitsModel();
        this.addEmployeeComPunModel = new employees_3.AddEmployeeComPunModel();
        this.addEmployeePunModel = new employees_3.AddEmployeeComPunModel();
        this.addEmployeeGiveMoneyModel = new employees_1.AddEmployeeGiveMoneyModel();
        this.addEmployeePayDebitsDirecteModel = new employees_1.AddEmployeePayDebitsDirecteModel();
        this.selectedActiontoCancel = new employees_1.ListCommisionAndPunishByDateModel();
        this.debitsPayedTotal = 0;
        this.debitsResetTotal = 0;
        this.debitsTokenTotal = 0;
        this.addEmployeeAddSalaryModel = new employees_1.AddEmployeeAddSalaryModel();
        this.addEmployeeAddSalaryModel.Comm = 0;
        this.addEmployeeAddSalaryModel.Punish = 0;
        this.addEmployeeAddSalaryModel.PayForDebit = 0;
        this.activeSalesPoints = [];
        this.comPunReasons = [];
        this.listAllCanceldCommisionAndPunishCancled = [];
        this._activatedRoute.paramMap.subscribe(function (params) {
            _this.editEmployeeModel.EmpID = params.get('EmpID');
            _this.addEmployeeModel.EmpID = params.get('EmpID');
            _this.addEmployeeDebitsModel.EmpID = params.get('EmpID');
            _this.addEmployeeComPunModel.EmpID = params.get('EmpID');
            _this.addEmployeePunModel.EmpID = params.get('EmpID');
            _this.addEmployeeGiveMoneyModel.EmpID = params.get('EmpID');
            _this.addEmployeePayDebitsDirecteModel.EmpID = params.get('EmpID');
        });
        this.fileList = null;
        this.GetEmployeeDetails();
        this.getAllActiveSalesPoints();
        this.getAllEmployeeComPunishReasons();
        this.GetAllDebitsToken();
        this.GetAllDebitsPayed();
        this.GetAllCommisionAndPunishByDate();
        this.GetAllEmployeeSalary();
        this.GetAllEmployeeGivedMoney();
        this.GetAllCanceldCommisionAndPunishCancled();
        this.imagepreview = this.editEmployeeModel.PPCard;
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
    };
    FileemployeeComponent.prototype.GetDateFrom = function (event) {
        this.DateFrom = this.DateFromObject.jsdate;
    };
    FileemployeeComponent.prototype.GetDateTo = function (event) {
        this.DateTo = this.DateToObject.jsdate;
    };
    FileemployeeComponent.prototype.EditEmployee = function (_event, _formgroup) {
        var _this = this;
        // _event.preventDefault();
        this.fileList = this.pic.nativeElement.files;
        if (this.fileList.length > 0) {
            // tslint:disable-next-line:prefer-const
            var file = this.fileList[0];
            // tslint:disable-next-line:prefer-const
            var _formdata = new FormData();
            _formdata.append('pic', file, file.name);
            this._uploademployeeimageService.UploadEmployeeImage(_formdata).subscribe(function (_result) {
                if (_result != null || _result !== '') {
                    _this.addEmployeeModel.Image = _result;
                    _this._editemployeeService.EditEmployee(_this.addEmployeeModel).subscribe(function (_resultadd) {
                        if (_resultadd.Status === true) {
                            _this.modalRef.hide();
                            _this._notifierService.notify('success', _resultadd.Message);
                            _this.ngOnInit();
                        }
                        else {
                            _this.modalRef.hide();
                            _this._notifierService.notify('error', _resultadd.Message);
                        }
                    });
                }
                else {
                    _this.modalRef.hide();
                    _this._notifierService.notify('error', 'من فضلك يجب اختيار الصورة صحيحة  وفقا للمواصفات الصحيحة');
                }
            });
        }
        else {
            this.addEmployeeModel.Image = this.editEmployeeModel.PPCard;
            this._editemployeeService.EditEmployee(this.addEmployeeModel).subscribe(function (_resultadd) {
                if (_resultadd.Status === true) {
                    _this.modalRef.hide();
                    _this._notifierService.notify('success', _resultadd.Message);
                    _this.ngOnInit();
                }
                else {
                    _this.modalRef.hide();
                    _this._notifierService.notify('error', _resultadd.Message);
                }
            });
        }
    };
    FileemployeeComponent.prototype.ImagePreviewChange = function (_event) {
        var _this = this;
        if (_event.target.files && _event.target.files[0]) {
            // tslint:disable-next-line:prefer-const
            var reader = new FileReader();
            reader.readAsDataURL(_event.target.files[0]); // read file as data url
            reader.onload = function (_eventload) {
                _this.imagepreview = _eventload.target.result;
            };
        }
    };
    FileemployeeComponent.prototype.GetEmployeeDetails = function () {
        var _this = this;
        this._listemployeesService.ListEmployees().subscribe(function (_result) {
            _result.EmployeesList.forEach(function (element) {
                if (element.EmpID == _this.editEmployeeModel.EmpID) {
                    _this.editEmployeeModel = element;
                    _this.editEmployeeModel.PPCard = _this._apiurlService.apiUrl + element.PPCard;
                    _this.imagepreview = _this.editEmployeeModel.PPCard;
                    _this.addEmployeeModel.Name = element.EmpName;
                    _this.addEmployeeModel.Mob = element.Mobile;
                    _this.addEmployeeModel.Salary = element.Salary;
                    _this.addEmployeeModel.EmpID = element.EmpID;
                    _this.addEmployeeModel.IsSalesMan = element.IsSalesMan;
                }
            });
        });
    };
    FileemployeeComponent.prototype.AddEmployeeDebits = function (_formGroup) {
        var _this = this;
        this.addEmployeeDebitsModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this._addemployeedebitsService.AddEmployeeDebits(this.addEmployeeDebitsModel)
            .subscribe(function (_result) {
            if (_result.Status === true) {
                _this.CreateActivityRecordDebits();
                _this.modalRef.hide();
                _this._notifierService.notify('success', _result.Message);
                _formGroup.reset(_this.AddEmployeeDebitsForm);
            }
            else {
                _this.modalRef.hide();
                _this._notifierService.notify('error', _result.Message);
            }
        });
    };
    FileemployeeComponent.prototype.AddEmployeeCommision = function (_formGroup) {
        var _this = this;
        this.addEmployeeComPunModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addEmployeeComPunModel.ReasonID = 1;
        this._addemployeecommisionpunishService.AddEmployeeCommisionPunish(this.addEmployeeComPunModel)
            .subscribe(function (_result) {
            if (_result.Status === true) {
                _this.CreateActivityRecordCommision();
                _this.modalRef.hide();
                _this._notifierService.notify('success', _result.Message);
                _formGroup.reset();
            }
            else {
                _this.modalRef.hide();
                _this._notifierService.notify('error', _result.Message);
            }
        });
    };
    FileemployeeComponent.prototype.AddEmployeePunish = function (_formGroup) {
        var _this = this;
        this.addEmployeePunModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addEmployeePunModel.ReasonID = 2;
        this._addemployeecommisionpunishService.AddEmployeeCommisionPunish(this.addEmployeePunModel)
            .subscribe(function (_result) {
            if (_result.Status === true) {
                _this.CreateActivityRecordForPunish();
                _this.modalRef.hide();
                _this._notifierService.notify('success', _result.Message);
                _formGroup.reset();
            }
            else {
                _this.modalRef.hide();
                _this._notifierService.notify('error', _result.Message);
            }
        });
    };
    FileemployeeComponent.prototype.AddEmployeeGiveMoney = function (_formGroup) {
        var _this = this;
        this.addEmployeeGiveMoneyModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addEmployeeGiveMoneyModel.ReasonID = 1;
        this._addemployeegivemoneyService.AddEmployeeGiveMoney(this.addEmployeeGiveMoneyModel)
            .subscribe(function (_result) {
            if (_result.Status === true) {
                _this.CreateActivityRecordForGiveMoney();
                _this.modalRef.hide();
                _this._notifierService.notify('success', _result.Message);
                _formGroup.reset();
            }
            else {
                _this.modalRef.hide();
                _this._notifierService.notify('error', _result.Message);
            }
        });
    };
    FileemployeeComponent.prototype.AddEmployeePayDebitsDirecte = function (_formGroup) {
        var _this = this;
        this.addEmployeePayDebitsDirecteModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addEmployeePayDebitsDirecteModel.SalesPointID = 1;
        this._addemployeepayeddebitsService.AddEmployeePayedDebits(this.addEmployeePayDebitsDirecteModel)
            .subscribe(function (_result) {
            if (_result.Status === true) {
                _this.CreateActivityRecordForPayDebitsDirecte();
                _this.modalRef.hide();
                _this._notifierService.notify('success', _result.Message);
                _formGroup.reset();
            }
            else {
                _this.modalRef.hide();
                _this._notifierService.notify('error', _result.Message);
            }
        });
    };
    FileemployeeComponent.prototype.AddEmployeeSalary = function (_formGroup) {
        var _this = this;
        this.addEmployeeAddSalaryModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addEmployeeAddSalaryModel.EmpID = this.editEmployeeModel.EmpID;
        this._addemployeesalaryService.AddEmployeeSalary(this.addEmployeeAddSalaryModel)
            .subscribe(function (_result) {
            if (_result.Status === true) {
                _this.CreateActivityRecordForSalary();
                _this.modalRef.hide();
                _this._notifierService.notify('success', _result.Message);
            }
            else {
                _this.modalRef.hide();
                _this._notifierService.notify('error', _result.Message);
            }
        });
    };
    FileemployeeComponent.prototype.GetAllCommisionAndPunishByDate = function () {
        var _this = this;
        this._listemployeescompunbydateService
            .ListCommisionAndPunishByDate(this.addEmployeeDebitsModel.EmpID)
            .subscribe(function (_result) {
            _this.addEmployeeAddSalaryModel.BasicSalary = _this.editEmployeeModel.Salary;
            _this.listCommisionAndPunishByDateModel = _result.CommisionAndPunishByDateList;
            if (_result.CommisionAndPunishByDateList == null) {
                _this.listCommisionAndPunishByDateModel = [];
            }
            else {
                _this.listCommisionAndPunishByDateModel.forEach(function (element) {
                    if (element.ReasonID == 1) {
                        _this.addEmployeeAddSalaryModel.Comm += element.MoneyValue;
                    }
                    else if (element.ReasonID == 2) {
                        _this.addEmployeeAddSalaryModel.Punish += element.MoneyValue;
                    }
                });
            }
        });
    };
    FileemployeeComponent.prototype.GetAllEmployeeSalary = function () {
        var _this = this;
        this._listemployeeallsalaryService
            .ListEmployeeAllSalary(this.editEmployeeModel.EmpID)
            .subscribe(function (_result) {
            if (_result.AllEmployeeSalaryList == null) {
                _this.listEmployeeSalaryModel = [];
            }
            else {
                _this.listEmployeeSalaryModel = _result.AllEmployeeSalaryList;
            }
        });
    };
    FileemployeeComponent.prototype.GetAllEmployeeGivedMoney = function () {
        var _this = this;
        this._listemployeeallgivedmoneyService
            .ListEmployeeAllGivedMoney(this.editEmployeeModel.EmpID)
            .subscribe(function (_result) {
            if (_result.AllEmployeeGivedMoneyList == null) {
                _this.listEmployeeGivedMoneyModel = [];
            }
            else {
                _this.listEmployeeGivedMoneyModel = _result.AllEmployeeGivedMoneyList;
            }
        });
    };
    FileemployeeComponent.prototype.getAllActiveSalesPoints = function () {
        var _this = this;
        this._listsalespointsService
            .ListAllSalesPoints()
            .subscribe(function (_result) {
            _this.activeSalesPoints = _result.SalesPointsList;
        });
    };
    FileemployeeComponent.prototype.getAllEmployeeComPunishReasons = function () {
        var _this = this;
        this._listemployeecompunreasonsService
            .ListEmployeeComPunReasons()
            .subscribe(function (_result) {
            _this.comPunReasons = _result.ListEmployeeComPunReasons;
        });
    };
    FileemployeeComponent.prototype.GetAllDebitsToken = function () {
        var _this = this;
        this._listemployeesdebitstokeService
            .ListDebitsToken(this.editEmployeeModel.EmpID)
            .subscribe(function (_result) {
            if (_result.DebitsTokeList == null) {
                _this.listDebitsTokenModel = [];
            }
            else {
                _this.listDebitsTokenModel = _result.DebitsTokeList;
                _this.listDebitsTokenModel.forEach(function (element) {
                    _this.debitsTokenTotal += element.MoneyValue;
                });
            }
        });
    };
    FileemployeeComponent.prototype.GetAllDebitsPayed = function () {
        var _this = this;
        this._listemployeesdebitspayedService
            .ListDebitsPayed(this.editEmployeeModel.EmpID)
            .subscribe(function (_result) {
            if (_result.DebitsTokeList == null) {
                _this.listDebitsPayedModel = [];
            }
            else {
                _this.listDebitsPayedModel = _result.DebitsTokeList;
                _this.listDebitsPayedModel.forEach(function (element) {
                    _this.debitsPayedTotal += element.MoneyValue;
                });
            }
        });
    };
    FileemployeeComponent.prototype.SelectRow = function (_supplier) {
        this.selectedEmployee = _supplier;
    };
    FileemployeeComponent.prototype.RowSelected = function (_supplier) {
        if (!this.selectedEmployee) {
            return false;
        }
        return this.selectedEmployee.ActionID === _supplier.ActionID ? true : false;
    };
    FileemployeeComponent.prototype.RemoveSelection = function (_supplier) {
        this.selectedEmployee = null;
    };
    FileemployeeComponent.prototype.openModal = function (template, _item) {
        this.modalRef = this.modalService.show(template);
        this.selectedActiontoCancel.ActionID = _item.ActionID;
    };
    FileemployeeComponent.prototype.AddEmployeeCancelCommisionAndPunish = function () {
        var _this = this;
        var _addEmployeeCancelCommisionAndPunishModel = new employees_1.AddEmployeeCancelCommisionAndPunishModel();
        _addEmployeeCancelCommisionAndPunishModel.ActionID = this.selectedActiontoCancel.ActionID;
        _addEmployeeCancelCommisionAndPunishModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this._addemployeecommisionpunishcancelService.AddEmployeeCancelCommisionAndPunish(_addEmployeeCancelCommisionAndPunishModel)
            .subscribe(function (_result) {
            if (_result.Status === true) {
                _this.CreateActivityRecordForCancleCommisionAndPunish();
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
    FileemployeeComponent.prototype.GetAllCanceldCommisionAndPunishCancled = function () {
        var _this = this;
        this._listemployeescompuncanceldService
            .ListEmployeesCommisionPunishCanceld(this.editEmployeeModel.EmpID)
            .subscribe(function (_result) {
            if (_result.CommisionAndPunishCanceldList == null) {
                _this.listAllCanceldCommisionAndPunishCancled = [];
            }
            else {
                _this.listAllCanceldCommisionAndPunishCancled = _result.CommisionAndPunishCanceldList;
            }
        });
    };
    FileemployeeComponent.prototype.openEditModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    FileemployeeComponent.prototype.CreateActivityRecordForSalary = function () {
        var _this = this;
        this.addActivityModel.DateSubmit = new Date();
        this.addActivityModel.Read = true;
        this.addActivityModel.Type = '     صرف راتب موظف';
        this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addActivityModel.POS = this.addEmployeeAddSalaryModel.SalesPointID;
        this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe(function (_resultactivity) {
            _this._notifierService.notify('success', _resultactivity.Message);
        });
    };
    FileemployeeComponent.prototype.CreateActivityRecordForCancleCommisionAndPunish = function () {
        var _this = this;
        this.addActivityModel.DateSubmit = new Date();
        this.addActivityModel.Read = true;
        this.addActivityModel.Type = '       الغاء معاملة مادية موظف';
        this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addActivityModel.POS = 1;
        this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe(function (_resultactivity) {
            _this._notifierService.notify('success', _resultactivity.Message);
        });
    };
    FileemployeeComponent.prototype.CreateActivityRecordForPayDebitsDirecte = function () {
        var _this = this;
        this.addActivityModel.DateSubmit = new Date();
        this.addActivityModel.Read = true;
        this.addActivityModel.Type = '         تسديد سلفة مباشرة موظف';
        this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addActivityModel.POS = 1;
        this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe(function (_resultactivity) {
            _this._notifierService.notify('success', _resultactivity.Message);
        });
    };
    FileemployeeComponent.prototype.CreateActivityRecordForGiveMoney = function () {
        var _this = this;
        this.addActivityModel.DateSubmit = new Date();
        this.addActivityModel.Read = true;
        this.addActivityModel.Type = '           صرف قيمة مالية موظف';
        this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addActivityModel.POS = 1;
        this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe(function (_resultactivity) {
            _this._notifierService.notify('success', _resultactivity.Message);
        });
    };
    FileemployeeComponent.prototype.CreateActivityRecordForPunish = function () {
        var _this = this;
        this.addActivityModel.DateSubmit = new Date();
        this.addActivityModel.Read = true;
        this.addActivityModel.Type = ' إعطاء خصم موظف';
        this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addActivityModel.POS = 1;
        this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe(function (_resultactivity) {
            _this._notifierService.notify('success', _resultactivity.Message);
        });
    };
    FileemployeeComponent.prototype.CreateActivityRecordCommision = function () {
        var _this = this;
        this.addActivityModel.DateSubmit = new Date();
        this.addActivityModel.Read = true;
        this.addActivityModel.Type = ' إعطاء مكافأة موظف';
        this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addActivityModel.POS = 1;
        this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe(function (_resultactivity) {
            _this._notifierService.notify('success', _resultactivity.Message);
        });
    };
    FileemployeeComponent.prototype.CreateActivityRecordDebits = function () {
        var _this = this;
        this.addActivityModel.DateSubmit = new Date();
        this.addActivityModel.Read = true;
        this.addActivityModel.Type = ' إعطاء سلفة موظف';
        this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addActivityModel.POS = 1;
        this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe(function (_resultactivity) {
            _this._notifierService.notify('success', _resultactivity.Message);
        });
    };
    FileemployeeComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    __decorate([
        core_1.ViewChild('pic'),
        __metadata("design:type", core_1.ElementRef)
    ], FileemployeeComponent.prototype, "pic", void 0);
    __decorate([
        core_1.ViewChild('AddEmployeeDebitsForm'),
        __metadata("design:type", forms_1.NgForm)
    ], FileemployeeComponent.prototype, "AddEmployeeDebitsForm", void 0);
    FileemployeeComponent = __decorate([
        core_1.Component({
            selector: 'app-fileemployee',
            templateUrl: './fileemployee.component.html',
            styleUrls: ['./fileemployee.component.css']
        }),
        __metadata("design:paramtypes", [apiurl_service_1.ApiurlService,
            uploademployeeimage_service_1.UploademployeeimageService,
            angular_notifier_1.NotifierService,
            editemployee_service_1.EditemployeeService,
            addemployeedebits_service_1.AddemployeedebitsService,
            addemployeecommisionpunish_service_1.AddemployeecommisionpunishService,
            router_1.ActivatedRoute,
            listsalespoints_service_1.ListsalespointsService,
            Oauthenticatedsession_Service_1.OauthenticatedsessionService,
            listemployees_service_1.ListemployeesService,
            listemployeesdebitstoke_service_1.ListemployeesdebitstokeService,
            listemployeesdebitspayed_service_1.ListemployeesdebitspayedService,
            listemployeecompunreasons_service_1.ListemployeecompunreasonsService,
            listemployeescompunbydate_service_1.ListemployeescompunbydateService,
            listemployeeallsalary_service_1.ListemployeeallsalaryService,
            listemployeeallgivedmoney_service_1.ListemployeeallgivedmoneyService,
            listemployeescompuncanceld_service_1.ListemployeescompuncanceldService,
            addemployeegivemoney_service_1.AddemployeegivemoneyService,
            addemployeesalary_service_1.AddemployeesalaryService,
            addemployeecommisionpunishcancel_service_1.AddemployeecommisionpunishcancelService,
            ngx_bootstrap_1.BsModalService,
            addemployeepayeddebits_service_1.AddemployeepayeddebitsService,
            createactivity_service_1.CreateactivityService])
    ], FileemployeeComponent);
    return FileemployeeComponent;
}());
exports.FileemployeeComponent = FileemployeeComponent;
//# sourceMappingURL=fileemployee.component.js.map