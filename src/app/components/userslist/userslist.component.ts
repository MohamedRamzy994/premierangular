import { Router } from '@angular/router';
import { User } from './../../models/user';
import { Result } from './../../models/result';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserlistService } from '../../services/user/userlist.service';
import { DeleteuserService } from '../../services/user/deleteuser.service';
import { NotifierService } from 'angular-notifier';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { OauthenticatedsessionService } from 'src/app/services/general/Oauthenticatedsession.Service';
@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  public authenticatedUser: User;
  public userList: Result;
  public userListService: UserlistService;
  public selectedUser: User;
  public checked: boolean;
  public modalRef: BsModalRef;
  public p: any;
  constructor(private _userlistService: UserlistService,
    private _deleteuserService: DeleteuserService,
    private _oauthenticatedsessionService: OauthenticatedsessionService,
    private _notifierService: NotifierService,
    private modalService: BsModalService,
    private router: Router) {

      this.userListService = this._userlistService;
     }

  ngOnInit() {

    this.userList = new Result();
    this.selectedUser = null;
    this.getAllUsers();
    this.getLoggedUser();

  }

/**
   * getLoggedUser
   */
  public getLoggedUser() {
    this.authenticatedUser = this._oauthenticatedsessionService.User;
  }
  public getAllUsers(): void {

    this.userListService.listUsers().subscribe((_userlist: Result) => {
      this.userList.UserList = _userlist.UserList;
    });

  }

  public SelectRow(_user: User): void {

    this.selectedUser = _user;


  }

  public RowSelected(_user: User): boolean {

    if (!this.selectedUser) {
      return false;
    }
    return this.selectedUser.UserId === _user.UserId ? true : false;

  }

  public RemoveSelection(_user: User) {

    this.selectedUser = null;
  }


  public openModal(template: TemplateRef<any>) {


    if (this.RowSelected(this.selectedUser) === true) {
      this.modalRef = this.modalService.show(template);
    } else if (this.RowSelected(this.selectedUser) === false) {
      this._notifierService.notify('error', 'من فضلك يجب تحديد مستخدم واحد على الاقل للقيام بعملية الحذف');

    } else {

      this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');


    }
  }
  public DeleteUser(user: User) {

    this._deleteuserService.deleteUser(user).subscribe((_result: Result) => {

      this.userList = _result;
      if (this.userList.Status === true) {
        this.modalRef.hide();
        this._notifierService.notify('success', this.userList.Message);
        this.ngOnInit();

      } else {
        this.modalRef.hide();
        this._notifierService.notify('error', this.userList.Message);

      }

    }
      ,
      (error: Error) => {
        this.modalRef.hide();
        this._notifierService.notify('error', error.message);

      }

    );

  }

  public goToEdit(user: User) {

    if (this.RowSelected(this.selectedUser) === true) {
     this.router.navigate(['modifyuser', this.selectedUser.UserId]);
    } else if (this.RowSelected(this.selectedUser) === false) {
      this._notifierService.notify('error', 'من فضلك يجب تحديد مستخدم واحد على الاقل للقيام بعملية التعديل ');

    } else {

      this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');


    }


  }
  public Refresh() {
    this.ngOnInit();
  }

}
