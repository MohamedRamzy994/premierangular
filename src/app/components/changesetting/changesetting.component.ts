import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UploademployeeimageService } from 'src/app/services/employees/uploademployeeimage.service';
import { SystemUpdateSettingsService } from '../../services/settings/SystemUpdateSettings.service';
import { FormGroup } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { ApiurlService } from 'src/app/services/general/apiurl.service';
import {
  SettingsModel, ResultUpdateSettings, ResultGetSystemSettings,
  ResultSettingsThemesModel, SettingsThemesModel
} from '../../models/settings';
import { UploadsettingsimageService } from '../../services/settings/Uploadsettingsimage.Service';
import { ListgetsystemsettingsService } from '../../services/settings/listgetsystemsettings.service';
import { ListsettingsthemesmodelService } from 'src/app/services/settings/listsettingsthemesmodel.service';
import {
  SystemselectSettingsthemesService
} from '../../services/settings/systemselectSettingsthemes.service';
import { SystemsettingsbackupService } from 'src/app/services/settings/systemsettingsbackup.service';

@Component({
  selector: 'app-changesetting',
  templateUrl: './changesetting.component.html',
  styleUrls: ['./changesetting.component.css']
})
export class ChangesettingComponent implements OnInit {
  public actionname: string;
  @ViewChild('pic') pic: ElementRef;
  public fileList: FileList;
  public settingsModel: SettingsModel;
  public settingsThemesModel: SettingsThemesModel[];
  public updateSettingsThemesModel: SettingsThemesModel;
  public imagepreview: string;

  constructor(
    private _uploadsettingsimageService: UploadsettingsimageService,
    private _SystemUpdateSettingsService: SystemUpdateSettingsService,
    private _apiurlService: ApiurlService,
    private _notifierService: NotifierService,
    private _listgetsystemsettingsService: ListgetsystemsettingsService,
    private _listsettingsthemesmodelService: ListsettingsthemesmodelService,
    private _systemselectSettingsthemesService: SystemselectSettingsthemesService,
    private _systemsettingsbackupService: SystemsettingsbackupService
  ) {
    this.fileList = null;
    this.imagepreview = '';
  }

  ngOnInit() {
    this.actionname = this._apiurlService.apiUrl.concat('/api/SettingsApi/SystemUpdateSettings');
    this.fileList = null;
    this.settingsModel = new SettingsModel();
    this.settingsThemesModel = [];
    this.updateSettingsThemesModel = new SettingsThemesModel();
    this.getSystemSettings();
    this.getSystemSettingsThemes();
  }
  public SystemUpdateSettings(_event: Event, _formgroup: FormGroup): void {
    _event.preventDefault();
    this.fileList = this.pic.nativeElement.files;
    if (this.fileList.length > 0) {
      // tslint:disable-next-line:prefer-const
      let file: File = this.fileList[0];
      // tslint:disable-next-line:prefer-const
      let _formdata: FormData = new FormData();

      _formdata.append('pic', file, file.name);
      this._uploadsettingsimageService.UploadSettingsImage(_formdata).subscribe((_result: any) => {
        if (_result != null || _result !== '') {

          this.settingsModel.Logo = _result;
          this.settingsModel.Background = _result;

          this._SystemUpdateSettingsService.SystemUpdateSettings(this.settingsModel)
            .subscribe((_resultadd: ResultUpdateSettings) => {

              if (_resultadd.Status === true) {

                this._notifierService.notify('success', _resultadd.Message);
                this.ngOnInit();

              } else {

                this._notifierService.notify('error', _resultadd.Message);

              }
            });
        } else {
          this._notifierService.notify('error', 'من فضلك يجب اختيار الصورة صحيحة  وفقا للمواصفات الصحيحة');
        }
      });
    }
  }
  public ImagePreviewChange(_event: any): void {
    if (_event.target.files && _event.target.files[0]) {
      // tslint:disable-next-line:prefer-const
      let reader = new FileReader();

      reader.readAsDataURL(_event.target.files[0]); // read file as data url

      reader.onload = (_eventload: any) => { // called once readAsDataURL is completed
        this.imagepreview = _eventload.target.result;
      };
    }
  }
  /**
   * getSystemSettings
   */
  public getSystemSettings() {
    this._listgetsystemsettingsService.getSystemSettings().subscribe((_result: ResultGetSystemSettings) => {


      this.settingsModel = _result.SettingsModel[0];
      this.imagepreview = this._apiurlService.apiUrl + this.settingsModel.Logo;

    });
  }
  /**
   * getSystemSettingsThemes
   */
  public getSystemSettingsThemes() {
    this._listsettingsthemesmodelService.getSystemSettingsThemes().subscribe((_result: ResultSettingsThemesModel) => {
      this.settingsThemesModel = _result.SettingsThemesModel;
    });
  }
  public SystemSelectSettingsThemes() {
    this._systemselectSettingsthemesService.SystemUpdateSettings(this.updateSettingsThemesModel)
      .subscribe((_result: ResultUpdateSettings) => {
        console.log(_result);
        if (_result.Status === true) {

          this._notifierService.notify('success', _result.Message);
          location.reload();

        } else {

          this._notifierService.notify('error', _result.Message);

        }
      });
  }

  public systemDataBaseFullBackup() {
    this._systemsettingsbackupService.SystemSettingsBackup().subscribe((_result: ResultUpdateSettings) => {

      if (_result.Status === true) {
        this._notifierService.notify('success', _result.Message);
        this.ngOnInit();

      } else {

        this._notifierService.notify('error', _result.Message);

      }
    });
  }
  public Refresh() {
    this.ngOnInit();
  }
}
