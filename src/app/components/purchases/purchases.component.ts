import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { OauthenticatedsessionService } from 'src/app/services/general/Oauthenticatedsession.Service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {
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
