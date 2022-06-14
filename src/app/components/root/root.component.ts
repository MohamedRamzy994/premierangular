import { OauthenticatedsessionService } from '../../services/general/Oauthenticatedsession.Service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  public  authenticatedUser: User;
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
