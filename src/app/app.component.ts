import { Route, Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OauthenticatedsessionService } from './services/general/Oauthenticatedsession.Service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  header: boolean;
  constructor(private _OauthenticatedsessionServiceService: OauthenticatedsessionService,
    private router: Router) {
    if (_OauthenticatedsessionServiceService.User.LoginName === null || _OauthenticatedsessionServiceService.User.LoginName === '') {

      router.navigate(['home']);
    } else {

      router.navigate(['root']);
    }
  }
  ngOnInit() {
  }


}
