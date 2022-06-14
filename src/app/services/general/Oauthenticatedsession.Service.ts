import { Injectable, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class OauthenticatedsessionService implements OnInit {
  public _user: User;
  public get User(): User {
   this._user.UserName = sessionStorage.getItem('UserName');
   this._user.LoginName = sessionStorage.getItem('LoginName');
   this._user.Password = sessionStorage.getItem('Password');
   this._user.UserId = parseInt(sessionStorage.getItem('UserId'), 10);
   this._user = JSON.parse(sessionStorage.getItem('userpermission'));
   if (this._user == null) {
    this._user = {
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
  }

    return this._user;
  }
  public set User(user: User) {
    sessionStorage.setItem('UserName', user.UserName);
    sessionStorage.setItem('LoginName', user.LoginName);
    sessionStorage.setItem('Password', user.Password);
    sessionStorage.setItem('UserId', user.UserId.toString());
    sessionStorage.setItem('userpermission', JSON.stringify(user));

  }
  constructor() {

    this._user = {
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
   }
   ngOnInit(): void {
    this._user = this.User;
   }
}
