import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { OauthenticatedsessionService } from 'src/app/services/general/Oauthenticatedsession.Service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  public authenticatedUser: User;

  constructor(
    private _oauthenticatedsessionService: OauthenticatedsessionService,

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
