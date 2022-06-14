import { UpdatenotificationService } from './../../services/notificationsactivities/updatenotification.service';
import { ResultProducts, ListProductModel } from 'src/app/models/products';
import { ListproductsService } from './../../services/products/listproducts.service';
import { Stores } from './../../models/stores';
import { ListnotificationsService } from './../../services/notificationsactivities/listnotifications.service';
import { UpdateactivityService } from './../../services/notificationsactivities/updateactivity.service';
import { User } from 'src/app/models/user';
import { UserlistService } from './../../services/user/userlist.service';
import { ListAllActivitiesRecordsModel, ResultListAllNotificationsRecords, 
  ListAllNotificationsRecordsModel } from './../../models/notificationsactivities';
import { EditbranchService } from './../../services/branches/editbranch.service';
import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { ListcustomersService } from 'src/app/services/customers/listcustomers.service';
import { ResultWithdrawDepositReason, ResultAddAdditionalCostEvent, ResultListSalesPoints,
   AddSalesPointsModel, ResultAddSalesPoint } from 'src/app/models/salespoints';
import { ListwithdrawdepositreasonsService } from 'src/app/services/salespoints/listwithdrawdepositreasons.service';
import { FormGroup } from '@angular/forms';
import { AddwithdrawdepositreasonService } from 'src/app/services/salespoints/addwithdrawdepositreason.service';
import { DeletewithdrawdepositreasonService } from 'src/app/services/salespoints/deletewithdrawdepositreason.service';
import { EditwithdrawdepositreasonService } from '../../services/salespoints/editwithdrawdepositreason.service';
import { ListbanksService } from '../../services/bankcheck/listbanks.service';
import { AddbankService } from 'src/app/services/bankcheck/addbank.service';
import { DeletebankService } from 'src/app/services/bankcheck/deletebank.service';
import { EditbankService } from '../../services/bankcheck/editbank.service';
import { ListbranchesService } from '../../services/branches/listbranches.service';
import { ResultListBranches, AddBranchModel, ResultAddBranch } from 'src/app/models/branches';
import { AddbrancheService } from '../../services/branches/addbranch.service';
import { DeletebranchService } from 'src/app/services/branches/deletebranch.service';
import { ListallsalespointsService } from '../../services/salespoints/listallsalespoints.service';
import { ListsalespointsService } from 'src/app/services/salespoints/listsalespoints.service';
import { ListSalesPointsModel } from '../../models/salespoints';
import { AddsalespointService } from '../../services/salespoints/addsalespoint.service';
import { DeletsalespointService } from 'src/app/services/salespoints/deletsalespoint.service';
import { EditsalespointService } from 'src/app/services/salespoints/editsalespoint.service';
import { ListactivitiesService } from 'src/app/services/notificationsactivities/listactivities.service';
import { ResultListAllActivitiesRecords, ResultAddActivityRecord } from 'src/app/models/notificationsactivities';
import { Result } from 'src/app/models/result';
import { ListstoresService } from 'src/app/services/stores/liststores.service';
import { Resultstores } from 'src/app/models/resultstores';
@Component({
  selector: 'app-listnotifications',
  templateUrl: './listnotifications.component.html',
  styleUrls: ['./listnotifications.component.css']
})
export class ListnotificationsComponent implements OnInit {
  public p: any;
  public notificationsList: ListAllNotificationsRecordsModel[];
  public listStores: Stores[];
  public selectedReason: ListSalesPointsModel;
  @ViewChild('ButtonAdd') buttonAdd: ElementRef;
  // public checked: boolean;
  public modalRef: BsModalRef;
  public addBranchModel: AddSalesPointsModel;
  public SearchSuppliers: string;
  public reason: string ;
  public productsResult: ResultProducts;
  constructor (
    private _notifierService: NotifierService,
    private modalService: BsModalService,
    private router: Router,
    private _listnotificationsService: ListnotificationsService ,
    private _listproductsService: ListproductsService ,
    private _liststoresService: ListstoresService ,
    private _updatenotificationService: UpdatenotificationService
  ) {
    this.GetAllProducts();
    this.productsResult = new  ResultProducts();
    this.productsResult.ProductsList = [];
    this.listStores = [];
    this.GetAllNotifications();
  }

  ngOnInit() {
    this.addBranchModel = new AddSalesPointsModel();
    this.SearchSuppliers = '';
    this.notificationsList = [];
    this.selectedReason = new ListSalesPointsModel();
    this.selectedReason.SalesPointID = 0 ;
    this.reason = '' ;
    // this.usersResult =  new Result();
    this.GetAllProducts();
    this.GetAllStores();
    this.GetAllNotifications();
  }

  public SelectRow(_customer: ListSalesPointsModel): void {

    this.selectedReason = _customer;
    this.buttonAdd.nativeElement.disabled = true;

  }

  public RowSelected(_customer: ListSalesPointsModel): boolean {

    if (!this.selectedReason) {
      return false;
    }
    return this.selectedReason.SalesPointID === _customer.SalesPointID ? true : false;

  }

  public RemoveSelection(_customer: ListSalesPointsModel) {

    this.selectedReason = new ListSalesPointsModel() ;
    this.selectedReason.SalesPointID = 0 ;
    this.buttonAdd.nativeElement.disabled = false;

  }
   public openModal(template: TemplateRef<any>) {


    if (this.selectedReason.SalesPointID === 0) {
      this._notifierService.notify('error', 'من فضلك يجب تحديد نقطة بيع واحد على الاقل للقيام بعملية الحذف');

    } else {
      this.modalRef = this.modalService.show(template);

    }
  }
  public UpdateNotificationRecord(ID: number , Read: boolean) {
    this._updatenotificationService.UpdateNotificationRecord(ID , Read).subscribe((_result: ResultAddActivityRecord) =>{

      if(_result.Status === true) {
      this._notifierService.notify('success' , _result.Message);
      this.GetAllNotifications();
    } else {
      this.GetAllNotifications();
      this._notifierService.notify('error' , _result.Message);
    }
    });
  }
  public GetAllNotifications(): void {

    this._listnotificationsService.ListAllNotifications().subscribe((_result: ResultListAllNotificationsRecords) => {
      if (_result.AllNotificationsRecords.length == 0) {

        this.notificationsList = [];

      } else {
        this.notificationsList = _result.AllNotificationsRecords.reverse();
        this.notificationsList.forEach(value => {
          value.ShowFormat = ' لقد أوشك المنتج ' +
          this.productsResult.ProductsList.find((_product: ListProductModel) => _product.ProductID == value.ProductID).ProductName
          + ' من المخزن '
          + this.listStores.find((_store: Stores) => parseInt(_store.StoreID , 10) == value.StoreID).StoreName +
          ' فى تاريخ ' + value.DateSubmit + ' على الانتهاء ';
        });
      }
    });

  }
  public openAddModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
  }
  public openEditModal(template: TemplateRef<any>): void {


    if (this.selectedReason.SalesPointID === 0) {

      this._notifierService.notify('error', 'من فضلك يجب تحديد نقطة بيع واحد على الاقل للقيام بعملية التعديل ');


    } else {

      if (this.RowSelected(this.selectedReason) === true) {


        this.modalRef = this.modalService.show(template);
      } else if (this.RowSelected(this.selectedReason) === false) {
        this._notifierService.notify('error', 'من فضلك يجب تحديد نقطة بيع واحد على الاقل للقيام بعملية التعديل ');

      } else {

        this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');


      }

    }
  }
  public GetAllProducts(): void {
    this._listproductsService.listproducts().subscribe((_result: ResultProducts) => {
    this.productsResult = _result ;
    this.productsResult.ProductsList = _result.ProductsList ;
    });
  }
  public GetAllStores(): void {
    this._liststoresService.listStores().subscribe((_result: Resultstores) => {
    this.listStores = _result.StoresList ;
    });
  }
  public Refresh() {
    this.ngOnInit();
  }
}
