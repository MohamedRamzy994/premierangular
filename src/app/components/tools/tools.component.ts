import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { User } from 'src/app/models/user';
import { OauthenticatedsessionService } from 'src/app/services/general/Oauthenticatedsession.Service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  public modalRef: BsModalRef;
  public modalService: BsModalService;
  public  authenticatedUser: User;


  constructor(
    private _oauthenticatedsessionService: OauthenticatedsessionService,
    private _modalService: BsModalService,

  ) {
    this.modalService = _modalService;


  }

  ngOnInit() {
    this.getLoggedUser();

  }
  public openCalculatorModal(template: TemplateRef<any>): void {


    this.modalRef = this.modalService.show(template);

  }
  /**
   * getLoggedUser
   */
  public getLoggedUser() {
    this.authenticatedUser = this._oauthenticatedsessionService.User;
  }

}
