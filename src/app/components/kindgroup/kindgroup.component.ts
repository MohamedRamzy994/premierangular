import { DeletegroupService } from './../../services/productgroups/deletegroup.service';
import { EditgroupService } from './../../services/productgroups/editgroup.service';
import { ListgroupsService } from './../../services/productgroups/listgroups.service';
import { AddgroupService } from './../../services/productgroups/addgroup.service';
import { Productgroups } from './../../models/productgroups';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Resultproductgroups } from './../../models/resultproductgroups';
import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { BsModalService } from 'ngx-bootstrap';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-kindgroup',
  templateUrl: './kindgroup.component.html',
  styleUrls: ['./kindgroup.component.css']
})
export class KindgroupComponent implements OnInit {
  public result: Resultproductgroups;
  public resultlist: Resultproductgroups;
  public modalRef: BsModalRef;
  public p: any;
  public modalService: BsModalService;
  public group: Productgroups;
  @ViewChild('ButtonAdd') buttonAdd: ElementRef;
  @ViewChild('SearchField') searchfield: ElementRef;
  notifierService: NotifierService;
  public searchterm:string;

  constructor(
    private _addgroupService: AddgroupService,
    private _notifierService: NotifierService,
    private _modalService: BsModalService,
    private _listgroupsService: ListgroupsService,
    private _editgroupService: EditgroupService,
    private _deletegroupService: DeletegroupService,
  ) {
    this.modalService = _modalService;
    this.notifierService = _notifierService;
    this.resultlist = { Status: false, Message: '', GroupsList: [] };
  }

  ngOnInit() {
    this.searchterm=''
    this.group = {
      CatID: '',
      CatName: ''
    };



    this.GetAllGroups();
  }

  public AddGroup(_group: Productgroups, _formGroup: FormGroup): void {
    this.group = _group;

    this._addgroupService
      .AddGroup(this.group)
      .subscribe((_result: Resultproductgroups) => {
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

  public GetAllGroups(): void {
    this._listgroupsService
      .listGroups()
      .subscribe((_resultlist: Resultproductgroups) => {
        this.resultlist = _resultlist;
        if (this.resultlist.GroupsList === null) {
          this.resultlist = { Status: false, Message: '', GroupsList: [] };

        }
      });
  }

  public EditGroup(_group: Productgroups, _formGroup: FormGroup) {

    this._editgroupService.editGroup(_group).subscribe((_result: Resultproductgroups) => {
      this.result = _result;
      if (this.result.Status === true) {
        this.ngOnInit();
        this.modalRef.hide();
        this.notifierService.notify('success', this.result.Message);
        this.buttonAdd.nativeElement.disabled = false;
        this.searchfield.nativeElement.disabled = false;
      } else {
        this.notifierService.notify('error', this.result.Message);
      }
    });

  }

  public DeleteGroup(_group: Productgroups) {

    this._deletegroupService.deleteGroup(_group).subscribe((_result: Resultproductgroups) => {

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


    if (this.group.CatID === '') {

      this._notifierService.notify('error', 'من فضلك يجب تحديد مجموعة واحد على الاقل للقيام بعملية التعديل ');


    } else {

      if (this.RowSelected(this.group) === true) {


        this.modalRef = this.modalService.show(template);
      } else if (this.RowSelected(this.group) === false) {
        this._notifierService.notify('error', 'من فضلك يجب تحديد مجموعة واحد على الاقل للقيام بعملية التعديل ');

      } else {

        this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');


      }

    }


  }
  public openDeleteModal(template: TemplateRef<any>): void {


    if (this.group.CatID === '') {

      this._notifierService.notify('error', 'من فضلك يجب تحديد مجموعة واحد على الاقل للقيام بعملية الحذف ');


    } else {

      if (this.RowSelected(this.group) === true) {


        this.modalRef = this.modalService.show(template);
      } else if (this.RowSelected(this.group) === false) {
        this._notifierService.notify('error', 'من فضلك يجب تحديد مجموعة واحد على الاقل للقيام بعملية الحذف ');

      } else {

        this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');


      }

    }


  }
  public openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

  public SelectRow(_group: Productgroups): void {
    this.group = _group;
    this.buttonAdd.nativeElement.disabled = true;
     this.searchfield.nativeElement.disabled = true;


  }

  public RowSelected(_group: Productgroups): boolean {

    if (!this.group) {
      return false;
    }
    return this.group.CatID === _group.CatID ? true : false;

  }

  public RemoveSelection(_group: Productgroups) {

    this.group = {
      CatID: '',
      CatName: ''
    };

    this.buttonAdd.nativeElement.disabled = false;
    // this.searchfield.nativeElement.disabled = false;


  }

  public Refresh() {
    this.ngOnInit();
  }





}
