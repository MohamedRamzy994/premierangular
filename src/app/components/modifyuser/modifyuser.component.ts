import { DeleteuserService } from './../../services/user/deleteuser.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './../../models/user';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Result } from '../../models/result';
import { NotifierService } from '../../../../node_modules/angular-notifier';
import { EdituserService } from '../../services/user/edituser.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
@Component({
  selector: 'app-modifyuser',
  templateUrl: './modifyuser.component.html',
  styleUrls: ['./modifyuser.component.css']
})
export class ModifyuserComponent implements OnInit {
  user: User;
  result: Result;
  notifierService: NotifierService;
  public modalRef: BsModalRef;
  constructor(private _edituserService: EdituserService,
    private _notifierService: NotifierService,
    private _router: Router,
    private modalService: BsModalService,
    private _activatedRouter: ActivatedRoute) {

    this.notifierService = this._notifierService;
  }

  ngOnInit() {



    this.getUser();



  }
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  public getUser(): void {

    // tslint:disable-next-line:prefer-const
    let userId: number = this._activatedRouter.snapshot.params.userId;

    this._edituserService.getUserPermission(userId).subscribe((_result: Result) => {

      this.user = _result.UserList[0];


    });

  }

  onSubmit(user: User): void {
    if (user.SystemSettings === false &&
      user.SupplierEdit === false &&
      user.SupplierDeleteMoney === false &&
      user.SupplierDelete === false &&
      user.SupplierAddMoney === false &&
      user.SupplierAdd === false &&
      user.StoreTransferBalance === false &&
      user.StoreEdit === false &&
      user.StoreDelete === false &&
      user.StoreAdd === false &&
      user.SalesPointTransferMoney === false &&
      user.SalesPointReport === false &&
      user.SalesPointDepositWithdrow === false &&
      user.SalesManSummaryReport === false &&
      user.SalesInvoiceCancel === false &&
      user.SalesInvoice === false &&
      user.SalesDiscount === false &&
      user.SalesDiscard === false &&
      user.ReportTotalMoneyInfo === false &&
      user.ReportSupplierBuys === false &&
      user.ReportStoreStock === false &&
      user.ReportSalesManSales === false &&
      user.ReportProfitLose === false &&
      user.ReportProductMove === false &&
      user.ReportCustomerSales === false &&
      user.ReportAddCost === false &&
      user.ProductResetStock === false &&
      user.ProductOpenCancel === false &&
      user.ProductOpen === false &&
      user.ProductEdit === false &&
      user.ProductDelete === false &&
      user.ProductAdd === false &&
      user.EmpSalary === false &&
      user.EmpPunish === false &&
      user.EmpEdit === false &&
      user.EmpDelete === false &&
      user.EmpDebit === false &&
      user.EmpComm === false &&
      user.EmpCancelPunish === false &&
      user.EmpCancelComm === false &&
      user.EmpAdd === false &&
      user.CustomerEdit === false &&
      user.CustomerDelete === false &&
      user.CustomerCancelMoney === false &&
      user.CustomerAddMoney === false &&
      user.CustomerAdd === false &&
      user.BuyInvoiceCancel === false &&
      user.BuyInvoice === false &&
      user.BuyDiscard === false &&
      user.AdditionalCost === false &&
      user.UserEdit === false &&
      user.UserDelete === false &&
      user.UserAdd === false &&
      user.AddBranch === false &&
      user.EditBranch === false &&
      user.DeleteBranch === false &&

      user.AddSalesPoint === false &&
      user.EditSalesPoint === false &&
      user.DeleteSalesPoint === false &&

      user.AccessActivitiesRecord === false &&
      user.AccessStoreNotifications === false &&
      user.AccessSalesPointNotifications === false
    ) {

      this.notifierService.notify('error', 'من فضلك قم باختيار صلاحية واحدة على الاقل لهذا المستخدم');
      return;
    }


    this._edituserService.editUser(user).subscribe((_result: Result) => {
      this.result = _result;
      if (this.result.Status === true) {
        this.modalRef.hide();
        this.notifierService.notify('success', this.result.Message);
        this.ngOnInit();
      } else {
        this.notifierService.notify('error', this.result.Message);
      }
    });


  }
  public Refresh() {
    this.ngOnInit();
  }

}

