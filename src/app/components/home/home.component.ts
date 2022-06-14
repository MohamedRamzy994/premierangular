import { User } from './../../models/user';
import { Oauth } from './../../models/oauth';
import { OauthService } from './../../services/general/oauth.service';
import { NotifierService } from 'angular-notifier';
import { NotificationService } from './../../services/general/notification.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Result } from '../../models/result';
import { OauthenticatedsessionService } from '../../services/general/Oauthenticatedsession.Service';
import { AppsettingsService } from '../../services/general/appsettings.service';
import { ResultGetSystemSettings, SettingsModel } from '../../models/settings';
import { ApiurlService } from 'src/app/services/general/apiurl.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {


  public appSettings: SettingsModel;
  private user: User;
  private result: Result;
  private notifierService: NotifierService;
  private notificationService: NotificationService;
  public oauth: Oauth;
  public OauthenticatedsessionService: OauthenticatedsessionService;

  constructor(private router: Router,
    private _notificationService: NotificationService,
    private _notifierService: NotifierService,
    private _apiurlService: ApiurlService,
    private _oauthService: OauthService,
    private _appsettingsService: AppsettingsService,

    private _OauthenticatedsessionServiceService: OauthenticatedsessionService) {
  }


  ngOnInit(): void {
    this.notifierService = this._notifierService;
    this.notificationService = this._notificationService;
    this.OauthenticatedsessionService = this._OauthenticatedsessionServiceService;
    this.appSettings = new SettingsModel();
    this._notificationService.Notifyme();
    this.oauth = {
      LoginName: '',
      Password: ''

    };
    this.GetAppSettings();
  }

  /**
   * GetAppSettings
   */
  public GetAppSettings(): void {

    this._appsettingsService.AppSettings().subscribe((_result: ResultGetSystemSettings) => {

      if (_result.Status == true) {
        this.appSettings =  _result.SettingsModel[0];
        this.appSettings.Logo = this._apiurlService.apiUrl + this.appSettings.Logo;

      } else {

        this.appSettings = {
          ShopName: 'ماركـت شوت',
          WorkType: 'التجارة والحسابات والمبيعات',
          Address: 'الدراسات - المنصورة - الدقهلية - مصر ',
          Logo: '/bag.png',
          Background: '/bag.png'
        };
      }
    });
  }

  goIndex(_oauth: Oauth): void {

    this._oauthService.Login(_oauth).subscribe((_result: Result) => {
      this.result = _result;

      if (this.result.Status === true) {

        this.notifierService.notify('success', this.result.Message);

        setTimeout(() => {
          this.router.navigate(['root']);
        },
          2000);

        setTimeout(() => {
          this.notificationService.NotifyUser(_oauth);
        },
          1000);

        this.OauthenticatedsessionService.User = this.result.UserList[0];


      } else {
        this.notifierService.notify('error', this.result.Message);

      }
    },
      (_error: Error) => {

        console.log(_error.message);

      }
    );

  }

}
