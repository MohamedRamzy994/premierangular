import { User } from './../../models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OauthenticatedsessionService } from '../../services/general/Oauthenticatedsession.Service';
import * as screenfull from 'screenfull';
import { SettingsModel, ResultGetSystemSettings } from 'src/app/models/settings';
import { AppsettingsService } from 'src/app/services/general/appsettings.service';
import { ApiurlService } from 'src/app/services/general/apiurl.service';
import { CurrentMacAddresses } from '../../models/settings';
import { CurrentsalespointmacsService } from '../../services/general/currentsalespointmacs.service';
import { ListsalespointsService } from 'src/app/services/salespoints/listsalespoints.service';
import { ResultListSalesPoints, ListSalesPointsModel } from '../../models/salespoints';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  public user: User;
  public appSettings: SettingsModel;
  public currentMacAddresses: CurrentMacAddresses;
  public currentsalespoint: ListSalesPointsModel;


  constructor(private _OauthenticatedsessionServiceService: OauthenticatedsessionService,
    private router: Router,
    private _apiurlService: ApiurlService,
    private _appsettingsService: AppsettingsService,
    private _listsalespointsService: ListsalespointsService,
    private _currentMacAddresses: CurrentsalespointmacsService,

    private activatedRoute: ActivatedRoute  ) {



  }

  ngOnInit() {
    this.appSettings = new SettingsModel();
    this.currentMacAddresses = new CurrentMacAddresses();
    this.currentsalespoint = new ListSalesPointsModel();
    this.user = this._OauthenticatedsessionServiceService.User;
    this.GetAppSettings();
    this.GetCurrentSalesPointMacs();

  }

  public logOut(): void {

    sessionStorage.clear();
    this.router.navigate(['home']);



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
  public ToggelFullScreen(event: Event) {

    if (screenfull.enabled) {
      screenfull.toggle(document.documentElement);
    }
  }
  /**
   * GetCurrentSalesPointMacs
   */
  public GetCurrentSalesPointMacs() {
    this._currentMacAddresses.GetCurrentSalesPointMacs().subscribe((_result: CurrentMacAddresses) => {

      if (_result.NotFoundMac == null) {

        this.currentMacAddresses = _result;
this._listsalespointsService.ListAllSalesPoints().subscribe((_resultsales: ResultListSalesPoints) => {
_resultsales.SalesPointsList.forEach(element => {
  if (element.SalesPointMACEthernet === _result.EtherNetMac || element.SalesPointMACWireless === _result.WireLessMac ) {

    this.currentsalespoint = element;
  }

});

});

      } else {
        this.currentMacAddresses = new CurrentMacAddresses();

      }

    });
  }

}
