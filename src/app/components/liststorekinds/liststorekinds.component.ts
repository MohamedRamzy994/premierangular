import { FormGroup } from '@angular/forms';
import { EditstoreService } from './../../services/stores/editstore.service';
import { ListstoresService } from './../../services/stores/liststores.service';
import { Component, OnInit, TemplateRef, ElementRef, ViewChild } from '@angular/core';
import { Resultstores } from '../../models/resultstores';
import { AddstoreService } from '../../services/stores/addstore.service';
import { NotifierService } from 'angular-notifier';
import { Stores } from '../../models/stores';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DeletestoreService } from '../../services/stores/deletestore.service';
import { User } from 'src/app/models/user';
import { OauthenticatedsessionService } from 'src/app/services/general/Oauthenticatedsession.Service';
@Component({
  selector: 'app-liststorekinds',
  templateUrl: './liststorekinds.component.html',
  styleUrls: ['./liststorekinds.component.css']
})
export class ListstorekindsComponent implements OnInit {
  public result: Resultstores;
  public resultlist: Resultstores;
  public modalRef: BsModalRef;
  public modalService: BsModalService;
  public store: Stores;
  public searchterm: string;
  @ViewChild('ButtonAdd') buttonAdd: ElementRef;
  @ViewChild('SearchField') searchfield: ElementRef;
  notifierService: NotifierService;
  public authenticatedUser: User;
  public p: any;

  constructor(
    private _addstoreService: AddstoreService,
    private _notifierService: NotifierService,
    private _modalService: BsModalService,
    private _liststoresService: ListstoresService,
    private _editstoreService: EditstoreService,
    private _deletestoreService: DeletestoreService,
    private _oauthenticatedsessionService: OauthenticatedsessionService

  ) {
    this.modalService = _modalService;
    this.notifierService = _notifierService;
  }

  ngOnInit() {

    this.searchterm = '';

    this.store = {
      StoreID: '',
      StoreName: ''
    };

    this.result = { Status: false, Message: '', StoresList: [] };

    this.resultlist = { Status: false, Message: '', StoresList: [] };

    this.GetAllStores();
    this.getLoggedUser();

  }
 /**
   * getLoggedUser
   */
  public getLoggedUser() {
    this.authenticatedUser = this._oauthenticatedsessionService.User;
  }
  public AddStore(_store: Stores, _formGroup: FormGroup): void {
    this.store = _store;

    this._addstoreService
      .AddStore(this.store)
      .subscribe((_result: Resultstores) => {
        this.result = _result;
        if (this.result.Status === true) {

          _formGroup.reset();
          this.modalRef.hide();

          this._notifierService.notify('success', this.result.Message);
          this.ngOnInit();
        } else {
          this._notifierService.notify('error', this.result.Message);
        }
      });
  }

  public GetAllStores(): void {
    this._liststoresService
      .listStores()
      .subscribe((_resultlist: Resultstores) => {
        this.resultlist = _resultlist;
        if (this.resultlist.StoresList === null) {
          this.resultlist = { Status: false, Message: '', StoresList: [] };

        }

      });
  }

  public EditStore(_store: Stores, _formGroup: FormGroup) {

    this._editstoreService.editStore(_store).subscribe((_result: Resultstores) => {
      this.result = _result;
      if (this.result.Status === true) {
        this.modalRef.hide();
        this.notifierService.notify('success', this.result.Message);
        _formGroup.reset();
        this.buttonAdd.nativeElement.disabled = false;
        this.ngOnInit();
      } else {
        this.notifierService.notify('error', this.result.Message);
      }
    });

  }

  public DeleteStore(_store: Stores) {

    this._deletestoreService.deleteStore(_store).subscribe((_result: Resultstores) => {

      this.result = _result;
      if (this.result.Status === true) {
        this.modalRef.hide();
        this._notifierService.notify('success', this.result.Message);
        this.ngOnInit();

      } else {
        this.modalRef.hide();
        this._notifierService.notify('error', this.result.Message);

      }

    }
      ,
      (error: Error) => {
        this.modalRef.hide();
        this._notifierService.notify('error', error.message);

      }

    );

  }

  public openEditModal(template: TemplateRef<any>): void {


    if (this.store.StoreID === '') {

      this._notifierService.notify('error', 'من فضلك يجب تحديد مخزن واحد على الاقل للقيام بعملية التعديل ');


    } else {

      if (this.RowSelected(this.store) === true) {


        this.modalRef = this.modalService.show(template);
      } else if (this.RowSelected(this.store) === false) {
        this._notifierService.notify('error', 'من فضلك يجب تحديد مخزن واحد على الاقل للقيام بعملية التعديل ');

      } else {

        this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');


      }

    }


  }
  public openDeleteModal(template: TemplateRef<any>): void {


    if (this.store.StoreID === '') {

      this._notifierService.notify('error', 'من فضلك يجب تحديد مخزن واحد على الاقل للقيام بعملية الحذف ');


    } else {

      if (this.RowSelected(this.store) === true) {


        this.modalRef = this.modalService.show(template);
      } else if (this.RowSelected(this.store) === false) {
        this._notifierService.notify('error', 'من فضلك يجب تحديد مخزن واحد على الاقل للقيام بعملية الحذف ');

      } else {

        this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');


      }

    }


  }
  public openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }


  public SelectRow(_store: Stores): void {

    this.store = _store;
    this.buttonAdd.nativeElement.disabled = true;
    this.searchfield.nativeElement.disabled = true;


  }

  public RowSelected(_store: Stores): boolean {

    if (!this.store) {
      return false;
    }
    return this.store.StoreID === _store.StoreID ? true : false;

  }

  public RemoveSelection(_store: Stores) {

    this.store = {
      StoreID: '',
      StoreName: ''
    };

    this.buttonAdd.nativeElement.disabled = false;
    this.searchfield.nativeElement.disabled = false;

  }


 public Refresh() {
    this.ngOnInit();
  }


}
