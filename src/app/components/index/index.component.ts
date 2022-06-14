import { OauthenticatedsessionService } from '../../services/general/Oauthenticatedsession.Service';
import { Router } from '@angular/router';
import { Component, OnInit, TemplateRef, ElementRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { User } from 'src/app/models/user';
declare var $: JQueryStatic;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {
  public authenticatedUser: User;
  public hiddenref: boolean;
  public hiddenscreen: boolean;


  constructor(private _OauthenticatedsessionServiceService: OauthenticatedsessionService,
    private router: Router,

  ) {




  }

  ngOnInit() {
    this.authenticationCheck();
    this.getLoggedUser();

    this.hiddenref = true;
    this.hiddenscreen = true;
  }

  /**
   * authenticationCheck
   */
  public authenticationCheck() {
    if (this._OauthenticatedsessionServiceService.User.UserName === '' && this._OauthenticatedsessionServiceService.User.Password === '') {
      this.router.navigate(['home']);
      sessionStorage.clear();

    }
  }
  /**
   * getLoggedUser
   */
  public getLoggedUser() {
    this.authenticatedUser = this._OauthenticatedsessionServiceService.User;
  }

  public ToggleMenu() {
    this.hiddenref = !this.hiddenref;
    $('.menu-toggle').toggleClass('open');


    $('#slideme').fadeToggle('slow');
  }

  public CloseMenu() {
    this.hiddenref = !this.hiddenref;
    $('.menu-toggle').toggleClass('open');
    $('#slideme').fadeToggle('slow');
  }
  public ToggleScreen() {
    this.hiddenscreen = !this.hiddenscreen;
    $('#SalesScreen').fadeToggle('slow');
  }
  public CloseScreenIndex(closed: boolean) {
    this.hiddenscreen = closed;
    $('#SalesScreen').fadeToggle('slow');

  }
}
