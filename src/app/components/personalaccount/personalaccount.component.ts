import { NotifierService } from 'angular-notifier';
import { Result } from './../../models/result';
import { EditmyaccountService } from './../../services/user/editmyaccount.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { OauthenticatedsessionService } from '../../services/general/Oauthenticatedsession.Service';
import { User } from '../../models/user';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-personalaccount',
  templateUrl: './personalaccount.component.html',
  styleUrls: ['./personalaccount.component.css']
})
export class PersonalaccountComponent implements OnInit {

  public user: User;
  public result: Result;
  public modalRef: BsModalRef;

  constructor(private _OauthenticatedsessionServiceService: OauthenticatedsessionService,
    private _editmyaccountService: EditmyaccountService,
    private modalService: BsModalService,
    private _notifierService: NotifierService) {
    this.user = new User();

  }

  ngOnInit() {


    this.user.UserName = this._OauthenticatedsessionServiceService.User.UserName;
    this.user.LoginName = this._OauthenticatedsessionServiceService.User.LoginName;
  }
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  public onSubmit(_user: User): void {

    _user.UserId = this._OauthenticatedsessionServiceService.User.UserId;

    this._editmyaccountService.EditMyAccount(_user).subscribe((_result: Result) => {

      this.result = _result;


      if (this.result.Status === true) {
        this.modalRef.hide();

        this._notifierService.notify('success', this.result.Message);


      } else {
        this._notifierService.notify('error', this.result.Message);
      }

    });




  }
  public Refresh() {
    this.ngOnInit();
  }

}
