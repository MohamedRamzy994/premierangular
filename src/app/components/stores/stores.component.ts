import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { OauthenticatedsessionService } from '../../services/general/Oauthenticatedsession.Service';
@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {
  public authenticatedUser: User;
  constructor(
    private _oauthenticatedsessionService: OauthenticatedsessionService
  ) {

  }

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
