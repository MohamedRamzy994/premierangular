import { Router, ActivatedRoute } from '@angular/router';
import { User } from './../../models/user';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NewuserService } from '../../services/user/newuser.service';
import { Result } from '../../models/result';
import { NotifierService } from '../../../../node_modules/angular-notifier';
import { FormGroup } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  user: User;
  result: Result;
  notifierService: NotifierService;
  public modalRef: BsModalRef;
  constructor(private _newuserService: NewuserService,
     private _notifierService: NotifierService,
    private modalService: BsModalService,
     private _router: Router,
     private _activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      Message: '',
      UserId: null,
      UserName: '',
      LoginName: '',
      Password: '',
      SystemSettings: false,
      Existing: false,
      AdditionalCost: false,
      ReportAddCost: false,
      ReportProfitLose: false,
      ReportTotalMoneyInfo: false,
      StoreAdd: false,
      StoreEdit: false,
      StoreDelete: false,
      StoreTransferBalance: false,
      ProductAdd: false,
      ProductEdit: false,
      ProductDelete: false,
      ProductOpen: false,
      ProductOpenCancel: false,
      ProductResetStock: false,
      SupplierAdd: false,
      SupplierEdit: false,
      SupplierDelete: false,
      SupplierDeleteMoney: false,
      SupplierAddMoney: false,
      BuyInvoice: false,
      BuyInvoiceCancel: false,
      BuyDiscard: false,
      EmpAdd: false,
      EmpEdit: false,
      EmpDelete: false,
      EmpComm: false,
      EmpCancelComm: false,
      EmpPunish: false,
      EmpCancelPunish: false,
      EmpDebit: false,
      EmpSalary: false,
      CustomerAdd: false,
      CustomerEdit: false,
      CustomerDelete: false,
      CustomerAddMoney: false,
      CustomerCancelMoney: false,
      SalesInvoice: false,
      SalesDiscount: false,
      SalesInvoiceCancel: false,
      SalesDiscard: false,
      SalesManSummaryReport: false,
      SalesPointDepositWithdrow: false,
      SalesPointTransferMoney: false,
      SalesPointReport: false,
      ReportProductMove: false,
      ReportStoreStock: false,
      ReportSupplierBuys: false,
      ReportCustomerSales: false,
      ReportSalesManSales: false,
      UserAdd: false,
      UserEdit: false,
      UserDelete: false,
      AddBranch: false ,
      EditBranch: false ,
      DeleteBranch: false ,

      AddSalesPoint: false ,
      EditSalesPoint: false ,
      DeleteSalesPoint: false ,

      AccessActivitiesRecord: false ,
      AccessStoreNotifications: false ,
      AccessSalesPointNotifications: false

    };
    this.notifierService = this._notifierService;
  }
  onSubmit(user: User , UserForm: FormGroup): void {
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
    user.UserAdd === false
) {

  this.notifierService.notify('error' , 'من فضلك قم باختيار صلاحية واحدة على الاقل لهذا المستخدم');
    return ;
}


    this._newuserService.newUser(user).subscribe((_result: Result) => {
      this.result = _result;
      if (this.result.Status === true) {
        this.notifierService.notify('success', this.result.Message);

        UserForm.reset();
      this.modalRef.hide();

      //  this.ngOnInit();
      } else {
        this.notifierService.notify('error', this.result.Message);
      }
    });


  }
  public openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }
    public Refresh() {
      this.ngOnInit();
    }
}
