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
var employees_1 = require("src/app/models/employees");
var uploademployeeimage_service_1 = require("./../../services/employees/uploademployeeimage.service");
var apiurl_service_1 = require("./../../services/general/apiurl.service");
var core_1 = require("@angular/core");
var angular_notifier_1 = require("angular-notifier");
var addemployee_service_1 = require("../../services/employees/addemployee.service");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var AddemployeeComponent = /** @class */ (function () {
    function AddemployeeComponent(_apiurlService, _uploademployeeimageService, _notifierService, modalService, _addemployeeService) {
        this._apiurlService = _apiurlService;
        this._uploademployeeimageService = _uploademployeeimageService;
        this._notifierService = _notifierService;
        this.modalService = modalService;
        this._addemployeeService = _addemployeeService;
    }
    AddemployeeComponent.prototype.ngOnInit = function () {
        this.actionname = this._apiurlService.apiUrl.concat('/api/EmployeesApi/AddEmployee');
        this.fileList = null;
        this.addEmployeeModel = new employees_1.AddEmployeeModel();
        this.imagepreview = './assets/images/user.jpg';
    };
    AddemployeeComponent.prototype.AddEmployee = function (_formgroup) {
        var _this = this;
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
                    _this._addemployeeService.AddEmployee(_this.addEmployeeModel).subscribe(function (_resultadd) {
                        if (_resultadd.Status === true) {
                            _this.modalRef.hide();
                            _this._notifierService.notify('success', _resultadd.Message);
                            _formgroup.reset();
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
    };
    AddemployeeComponent.prototype.ImagePreviewChange = function (_event) {
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
    AddemployeeComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    __decorate([
        core_1.ViewChild('pic'),
        __metadata("design:type", core_1.ElementRef)
    ], AddemployeeComponent.prototype, "pic", void 0);
    AddemployeeComponent = __decorate([
        core_1.Component({
            selector: 'app-addemployee',
            templateUrl: './addemployee.component.html',
            styleUrls: ['./addemployee.component.css']
        }),
        __metadata("design:paramtypes", [apiurl_service_1.ApiurlService,
            uploademployeeimage_service_1.UploademployeeimageService,
            angular_notifier_1.NotifierService,
            ngx_bootstrap_1.BsModalService,
            addemployee_service_1.AddemployeeService])
    ], AddemployeeComponent);
    return AddemployeeComponent;
}());
exports.AddemployeeComponent = AddemployeeComponent;
//# sourceMappingURL=addemployee.component.js.map