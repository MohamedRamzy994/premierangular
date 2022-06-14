import { UpdatenotificationService } from './../../services/notificationsactivities/updatenotification.service';
import { ResultProducts, ListProductModel } from 'src/app/models/products';
import { ListproductsService } from './../../services/products/listproducts.service';
import { Stores } from './../../models/stores';
import { ListnotificationsService } from './../../services/notificationsactivities/listnotifications.service';
import { UpdateactivityService } from './../../services/notificationsactivities/updateactivity.service';
import { User } from 'src/app/models/user';
import { UserlistService } from './../../services/user/userlist.service';
import { ListAllActivitiesRecordsModel, ResultListAllNotificationsRecords,
  ListAllNotificationsRecordsModel,
  ListAllSalesPointsNotificationsRecordsModel} from './../../models/notificationsactivities';
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
import { ResultListAllActivitiesRecords, ResultAddActivityRecord,
   ResultListAllSalesPointsNotificationsRecords } from 'src/app/models/notificationsactivities';
import { Result } from 'src/app/models/result';
import { ListstoresService } from 'src/app/services/stores/liststores.service';
import { Resultstores } from 'src/app/models/resultstores';
import { ListsalesnotificationsService } from 'src/app/services/notificationsactivities/listsalesnotifications.service';
import { UpdatesalesnotificationService } from 'src/app/services/notificationsactivities/updatesalesnotification.service';
@Component({
  selector: 'app-listsalesnotifications',
  templateUrl: './listsalesnotifications.component.html',
  styleUrls: ['./listsalesnotifications.component.css']
})
export class ListsalesnotificationsComponent implements OnInit {
  public p: any;
  public notificationsList: ListAllSalesPointsNotificationsRecordsModel[];
  public listStores: Stores[];
  public selectedReason: ListSalesPointsModel;
  @ViewChild('ButtonAdd') buttonAdd: ElementRef;
  // public checked: boolean;
  public modalRef: BsModalRef;
  public addBranchModel: AddSalesPointsModel;
  public SearchSuppliers: string;
  public reason: string ;
  public salespointsResult: ResultListSalesPoints;
  constructor (
    private _notifierService: NotifierService,
    private modalService: BsModalService,
    private router: Router,
    private _listsalesnotificationsService: ListsalesnotificationsService ,
    private _listsalespointsService: ListsalespointsService ,
    private _updatesalesnotificationService: UpdatesalesnotificationService
  ) {
    this.GetAllSalesPoints();
    this.salespointsResult = new  ResultListSalesPoints();
    this.salespointsResult.SalesPointsList = [];
    this.listStores = [];
    this.GetAllSalesPointsNotifications();
  }

  ngOnInit() {
    this.addBranchModel = new AddSalesPointsModel();
    this.SearchSuppliers = '';
    this.notificationsList = [];
    this.selectedReason = new ListSalesPointsModel();
    this.selectedReason.SalesPointID = 0 ;
    this.reason = '' ;
    // this.usersResult =  new Result();
    this.GetAllSalesPoints();
    this.GetAllSalesPointsNotifications();
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
    this._updatesalesnotificationService.UpdateSalesNotificationRecord(ID , Read).subscribe((_result: ResultAddActivityRecord) =>{

      if(_result.Status === true) {
      this._notifierService.notify('success' , _result.Message);
      this.GetAllSalesPointsNotifications();
    } else {
      this.GetAllSalesPointsNotifications();
      this._notifierService.notify('error' , _result.Message);
    }
    });
  }
  public GetAllSalesPointsNotifications(): void {

    this._listsalesnotificationsService.ListAllSalesPointsNotifications()
    .subscribe((_result: ResultListAllSalesPointsNotificationsRecords) => {
      if (_result.AllSalesPointsNotificationsRecords.length == 0) {

        this.notificationsList = [];

      } else {
        this.notificationsList = _result.AllSalesPointsNotificationsRecords.reverse();
        this.notificationsList.forEach(value => {
          value.ShowFormat = ' لقد أوشك نقطة البيع ' +
          this.salespointsResult.SalesPointsList
          .find((_salespoint: ListSalesPointsModel) => _salespoint.SalesPointID == value.POS).SalesPoint
          + '  على الانتهاء ' +
          ' فى تاريخ ' + value.DateSubmit;
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
  public GetAllSalesPoints(): void {
    this._listsalespointsService.ListAllSalesPoints().subscribe((_result: ResultListSalesPoints) => {
    this.salespointsResult.SalesPointsList = _result.SalesPointsList ;
    });
  }
  public Refresh() {
    this.ngOnInit();
  }
}
