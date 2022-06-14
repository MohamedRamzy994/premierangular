import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { OauthenticatedsessionService } from 'src/app/services/general/Oauthenticatedsession.Service';

@Component({
  selector: 'app-storeskinds',
  templateUrl: './storeskinds.component.html',
  styleUrls: ['./storeskinds.component.css']
})
export class StoreskindsComponent implements OnInit {
  public authenticatedUser: User;

  constructor(
    private _oauthenticatedsessionService: OauthenticatedsessionService
  ) { }

  ngOnInit() {
    this.getLoggedUser();

  }
   /**
   * getLoggedUser
   */
  public getLoggedUser() {
    this.authenticatedUser = this._oauthenticatedsessionService.User;
  }
}
