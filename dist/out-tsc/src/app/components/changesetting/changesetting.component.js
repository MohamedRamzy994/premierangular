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
var SystemUpdateSettings_service_1 = require("../../services/settings/SystemUpdateSettings.service");
var angular_notifier_1 = require("angular-notifier");
var apiurl_service_1 = require("src/app/services/general/apiurl.service");
var settings_1 = require("../../models/settings");
var Uploadsettingsimage_Service_1 = require("../../services/settings/Uploadsettingsimage.Service");
var listgetsystemsettings_service_1 = require("../../services/settings/listgetsystemsettings.service");
var listsettingsthemesmodel_service_1 = require("src/app/services/settings/listsettingsthemesmodel.service");
var systemselectSettingsthemes_service_1 = require("../../services/settings/systemselectSettingsthemes.service");
var systemsettingsbackup_service_1 = require("src/app/services/settings/systemsettingsbackup.service");
var ChangesettingComponent = /** @class */ (function () {
    function ChangesettingComponent(_uploadsettingsimageService, _SystemUpdateSettingsService, _apiurlService, _notifierService, _listgetsystemsettingsService, _listsettingsthemesmodelService, _systemselectSettingsthemesService, _systemsettingsbackupService) {
        this._uploadsettingsimageService = _uploadsettingsimageService;
        this._SystemUpdateSettingsService = _SystemUpdateSettingsService;
        this._apiurlService = _apiurlService;
        this._notifierService = _notifierService;
        this._listgetsystemsettingsService = _listgetsystemsettingsService;
        this._listsettingsthemesmodelService = _listsettingsthemesmodelService;
        this._systemselectSettingsthemesService = _systemselectSettingsthemesService;
        this._systemsettingsbackupService = _systemsettingsbackupService;
        this.fileList = null;
        this.imagepreview = '';
    }
    ChangesettingComponent.prototype.ngOnInit = function () {
        this.actionname = this._apiurlService.apiUrl.concat('/api/SettingsApi/SystemUpdateSettings');
        this.fileList = null;
        this.settingsModel = new settings_1.SettingsModel();
        this.settingsThemesModel = [];
        this.updateSettingsThemesModel = new settings_1.SettingsThemesModel();
        this.getSystemSettings();
        this.getSystemSettingsThemes();
    };
    ChangesettingComponent.prototype.SystemUpdateSettings = function (_event, _formgroup) {
        var _this = this;
        _event.preventDefault();
        this.fileList = this.pic.nativeElement.files;
        if (this.fileList.length > 0) {
            // tslint:disable-next-line:prefer-const
            var file = this.fileList[0];
            // tslint:disable-next-line:prefer-const
            var _formdata = new FormData();
            _formdata.append('pic', file, file.name);
            this._uploadsettingsimageService.UploadSettingsImage(_formdata).subscribe(function (_result) {
                if (_result != null || _result !== '') {
                    _this.settingsModel.Logo = _result;
                    _this.settingsModel.Background = _result;
                    _this._SystemUpdateSettingsService.SystemUpdateSettings(_this.settingsModel)
                        .subscribe(function (_resultadd) {
                        if (_resultadd.Status === true) {
                            _this._notifierService.notify('success', _resultadd.Message);
                            _this.ngOnInit();
                        }
                        else {
                            _this._notifierService.notify('error', _resultadd.Message);
                        }
                    });
                }
                else {
                    _this._notifierService.notify('error', 'من فضلك يجب اختيار الصورة صحيحة  وفقا للمواصفات الصحيحة');
                }
            });
        }
    };
    ChangesettingComponent.prototype.ImagePreviewChange = function (_event) {
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
    /**
     * getSystemSettings
     */
    ChangesettingComponent.prototype.getSystemSettings = function () {
        var _this = this;
        this._listgetsystemsettingsService.getSystemSettings().subscribe(function (_result) {
            _this.settingsModel = _result.SettingsModel[0];
            _this.imagepreview = _this._apiurlService.apiUrl + _this.settingsModel.Logo;
        });
    };
    /**
     * getSystemSettingsThemes
     */
    ChangesettingComponent.prototype.getSystemSettingsThemes = function () {
        var _this = this;
        this._listsettingsthemesmodelService.getSystemSettingsThemes().subscribe(function (_result) {
            _this.settingsThemesModel = _result.SettingsThemesModel;
        });
    };
    ChangesettingComponent.prototype.SystemSelectSettingsThemes = function () {
        var _this = this;
        this._systemselectSettingsthemesService.SystemUpdateSettings(this.updateSettingsThemesModel)
            .subscribe(function (_result) {
            console.log(_result);
            if (_result.Status === true) {
                _this._notifierService.notify('success', _result.Message);
                location.reload();
            }
            else {
                _this._notifierService.notify('error', _result.Message);
            }
        });
    };
    ChangesettingComponent.prototype.systemDataBaseFullBackup = function () {
        var _this = this;
        this._systemsettingsbackupService.SystemSettingsBackup().subscribe(function (_result) {
            if (_result.Status === true) {
                _this._notifierService.notify('success', _result.Message);
                _this.ngOnInit();
            }
            else {
                _this._notifierService.notify('error', _result.Message);
            }
        });
    };
    ChangesettingComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    __decorate([
        core_1.ViewChild('pic'),
        __metadata("design:type", core_1.ElementRef)
    ], ChangesettingComponent.prototype, "pic", void 0);
    ChangesettingComponent = __decorate([
        core_1.Component({
            selector: 'app-changesetting',
            templateUrl: './changesetting.component.html',
            styleUrls: ['./changesetting.component.css']
        }),
        __metadata("design:paramtypes", [Uploadsettingsimage_Service_1.UploadsettingsimageService,
            SystemUpdateSettings_service_1.SystemUpdateSettingsService,
            apiurl_service_1.ApiurlService,
            angular_notifier_1.NotifierService,
            listgetsystemsettings_service_1.ListgetsystemsettingsService,
            listsettingsthemesmodel_service_1.ListsettingsthemesmodelService,
            systemselectSettingsthemes_service_1.SystemselectSettingsthemesService,
            systemsettingsbackup_service_1.SystemsettingsbackupService])
    ], ChangesettingComponent);
    return ChangesettingComponent;
}());
exports.ChangesettingComponent = ChangesettingComponent;
//# sourceMappingURL=changesetting.component.js.map