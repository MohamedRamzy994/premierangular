import { DeletesupplierService } from './../../services/suppliers/deletesupplier.service';
import { ListsuppliersService } from './../../services/suppliers/listsuppliers.service';
import { ResultSuppliers, SupplierModel, ResultDeletSupplier } from './../../models/suppliers';
import { Component, OnInit, TemplateRef, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { NotifierService } from 'angular-notifier';
import { User } from 'src/app/models/user';
import { OauthenticatedsessionService } from 'src/app/services/general/Oauthenticatedsession.Service';


@Component({
  selector: 'app-supplierslist',
  templateUrl: './supplierslist.component.html',
  styleUrls: ['./supplierslist.component.css']
})
export class SupplierslistComponent implements OnInit {
  public authenticatedUser: User;
  public resultSuppliers: ResultSuppliers;
  public supplierList: SupplierModel [];
  public p: any;
  public selectedSupplier: SupplierModel ;
  @ViewChild('ButtonAdd') buttonAdd: ElementRef;
  // public checked: boolean;
  public modalRef: BsModalRef;
  public SearchSuppliers: string;

  constructor(private _listsuppliersService: ListsuppliersService,
    private _notifierService: NotifierService,
    private modalService: BsModalService,
    private _deletesupplierService: DeletesupplierService,
    private _oauthenticatedsessionService: OauthenticatedsessionService,
    private router: Router
    ) {


     }

  ngOnInit() {
  this.SearchSuppliers = '';
    this.supplierList = [];
    this.resultSuppliers = new ResultSuppliers();
    this.selectedSupplier = null;
    this.getAllSuppliers();
    this.getLoggedUser();


  }
/**
   * getLoggedUser
   */
  public getLoggedUser() {
    this.authenticatedUser = this._oauthenticatedsessionService.User;
  }
  public getAllSuppliers(): void {

    this._listsuppliersService.ListSuppliers().subscribe((_result: ResultSuppliers) => {
      if ( _result.SuppliersList.length == 0 ||  _result.SuppliersList == null) {
        this.supplierList = [];
      } else {
        this.supplierList = _result.SuppliersList;
      }
    });

  }

  public SelectRow(_supplier: SupplierModel): void {

    this.selectedSupplier = _supplier;
    this.buttonAdd.nativeElement.disabled = true;

  }

  public RowSelected(_supplier: SupplierModel): boolean {

    if (!this.selectedSupplier) {
      return false;
    }
    return this.selectedSupplier.SupplierID === _supplier.SupplierID ? true : false;

  }

  public RemoveSelection(_supplier: SupplierModel) {

    this.selectedSupplier = null;
    this.buttonAdd.nativeElement.disabled = false;

  }


  public openModal(template: TemplateRef<any>) {


    if (this.RowSelected(this.selectedSupplier) === true) {
      this.modalRef = this.modalService.show(template);
    } else if (this.RowSelected(this.selectedSupplier) === false) {
      this._notifierService.notify('error', 'من فضلك يجب تحديد مورد واحد على الاقل للقيام بعملية الحذف');

    } else {

      this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');


    }
  }
  public DeleteSupplier(_supplier: SupplierModel) {

    this._deletesupplierService.DeleteSupplier(_supplier).subscribe((_result: ResultDeletSupplier) => {

      if (_result.Status === true) {
        this.modalRef.hide();
        this._notifierService.notify('success', _result.Message);
        this.ngOnInit();

      } else {
        this.modalRef.hide();
        this._notifierService.notify('error', _result.Message);

      }}
    );

  }

  public goToEdit(_supplier: SupplierModel) {

    if (this.RowSelected(this.selectedSupplier) === true) {
     this.router.navigate(['filesupplier', this.selectedSupplier.SupplierID]);
    } else if (this.RowSelected(this.selectedSupplier) === false) {
      this._notifierService.notify('error', 'من فضلك يجب تحديد مورد واحد على الاقل للقيام بعملية التعديل ');

    } else {

      this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');


    }


  }
  public Refresh() {
    this.ngOnInit();
  }

}
