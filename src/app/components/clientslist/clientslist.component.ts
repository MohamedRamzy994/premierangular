import { ResultListCustomers } from './../../models/customers';
import { Component, OnInit, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { ListCustomersModel, ResultDeletCustomer, } from 'src/app/models/customers';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ListcustomersService } from '../../services/customers/listcustomers.service';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { DeletecustomerService } from 'src/app/services/customers/deletecustomer.service';
import { User } from 'src/app/models/user';
import { OauthenticatedsessionService } from 'src/app/services/general/Oauthenticatedsession.Service';
@Component({
  selector: 'app-clientslist',
  templateUrl: './clientslist.component.html',
  styleUrls: ['./clientslist.component.css']
})
export class ClientslistComponent implements OnInit {
  public authenticatedUser: User;
  public customerList: ListCustomersModel[];
  public selectedCustomer: ListCustomersModel;
  public CustomerName: string;
  public CustomerType: number;
  
  @ViewChild('ButtonAdd') buttonAdd: ElementRef;
  public p: any;
  // public checked: boolean;
  public modalRef: BsModalRef;
  public SearchSuppliers: string;

  constructor(private _listcustomersService: ListcustomersService,
    private _notifierService: NotifierService,
    private modalService: BsModalService,
    private _oauthenticatedsessionService: OauthenticatedsessionService,
    private _deletecustomerService: DeletecustomerService,
    private router: Router
  ) {


  }

  ngOnInit() {
    this.CustomerName = '';
    this.CustomerType = 2;
    this.SearchSuppliers = '';
    this.customerList = [];
    this.selectedCustomer = null;
    this.getAllCustomers();
    this.getLoggedUser();


  }
  /**
   * getLoggedUser
   */
  public getLoggedUser() {
    this.authenticatedUser = this._oauthenticatedsessionService.User;
  }
  public getAllCustomers(): void {

    this._listcustomersService.ListCustomers().subscribe((_result: ResultListCustomers) => {
      if (_result.CustomersList.length == 0) {

        this.customerList = [];

      } else {
        this.customerList = _result.CustomersList;
      }

      this.customerList = _result.CustomersList;
    });

  }

  public SelectRow(_customer: ListCustomersModel): void {

    this.selectedCustomer = _customer;
    this.buttonAdd.nativeElement.disabled = true;

  }

  public RowSelected(_customer: ListCustomersModel): boolean {

    if (!this.selectedCustomer) {
      return false;
    }
    return this.selectedCustomer.CustomerID === _customer.CustomerID ? true : false;

  }

  public RemoveSelection(_customer: ListCustomersModel) {

    this.selectedCustomer = null;
    this.buttonAdd.nativeElement.disabled = false;

  }


  public openModal(template: TemplateRef<any>) {


    if (this.RowSelected(this.selectedCustomer) === true) {
      this.modalRef = this.modalService.show(template);
    } else if (this.RowSelected(this.selectedCustomer) === false) {
      this._notifierService.notify('error', 'من فضلك يجب تحديد عميل واحد على الاقل للقيام بعملية الحذف');

    } else {

      this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');


    }
  }
  public DeleteCustomer(_customer: ListCustomersModel) {

    this._deletecustomerService.DeleteCustomer(_customer).subscribe((_result: ResultDeletCustomer) => {

      if (_result.Status === true) {
        this.modalRef.hide();
        this._notifierService.notify('success', _result.Message);
        this.ngOnInit();

      } else {
        this.modalRef.hide();
        this._notifierService.notify('error', _result.Message);

      }
    }
    );

  }

  public goToEdit(_customer: ListCustomersModel) {
    if (this.RowSelected(this.selectedCustomer) === true) {
      this.router.navigate(['fileclient', this.selectedCustomer.CustomerID]);
    } else if (this.RowSelected(this.selectedCustomer) === false) {
      this._notifierService.notify('error', 'من فضلك يجب تحديد عميل واحد على الاقل للقيام بعملية التعديل ');

    } else {

      this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');


    }


  }
  public Refresh() {
    this.ngOnInit();
  }

}
