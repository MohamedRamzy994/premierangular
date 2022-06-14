export class User {
   Checked?: boolean | null ;
   Message?: string | null ;
   UserId?: number | null ;
   UserName: string ;
   LoginName: string ;
   Password: string ;
   SystemSettings: boolean ;
   Existing: boolean ;
   AdditionalCost: boolean ;
   ReportAddCost: boolean ;
   ReportProfitLose: boolean ;
   ReportTotalMoneyInfo: boolean ;


  // region Store
   StoreAdd: boolean ;
   StoreEdit: boolean ;
   StoreDelete: boolean ;
   StoreTransferBalance: boolean ;


  // region Product
   ProductAdd: boolean ;
   ProductEdit: boolean ;
   ProductDelete: boolean ;
   ProductOpen: boolean ;
   ProductOpenCancel: boolean ;
   ProductResetStock: boolean ;

  // region Supplier
   SupplierAdd: boolean ;
   SupplierEdit: boolean ;
   SupplierDelete: boolean ;
   SupplierDeleteMoney: boolean ;
   SupplierAddMoney: boolean ;
  // endregion

  // region Invoice
   BuyInvoice: boolean ;
   BuyInvoiceCancel: boolean ;
   BuyDiscard: boolean ;

  // endregion

  // region Employee
   EmpAdd: boolean ;
   EmpEdit: boolean ;
   EmpDelete: boolean ;
   EmpComm: boolean ;
   EmpCancelComm: boolean ;
   EmpPunish: boolean ;
   EmpCancelPunish: boolean ;
   EmpDebit: boolean ;
   EmpSalary: boolean ;
  // endregion

  // region Customer
   CustomerAdd: boolean ;
   CustomerEdit: boolean ;
   CustomerDelete: boolean ;
   CustomerAddMoney: boolean ;
   CustomerCancelMoney: boolean ;
  // endregion

  // region Sales
   SalesInvoice: boolean ;
   SalesDiscount: boolean ;
   SalesInvoiceCancel: boolean ;
   SalesDiscard: boolean ;
   SalesManSummaryReport: boolean ;
   SalesPointDepositWithdrow: boolean ;
   SalesPointTransferMoney: boolean ;
   SalesPointReport: boolean ;
  // endregion

  // region Report
   ReportProductMove: boolean ;
   ReportStoreStock: boolean ;
   ReportSupplierBuys: boolean ;
   ReportCustomerSales: boolean ;
   ReportSalesManSales: boolean ;
  // endregion

  // region User
   UserAdd: boolean ;
   UserEdit: boolean ;
   UserDelete: boolean ;

  // endregion

  // region Branches
    AddBranch: boolean ;
    EditBranch: boolean ;
    DeleteBranch: boolean ;
  // endregion
  // region SalesPoints
    AddSalesPoint: boolean ;
    EditSalesPoint: boolean ;
    DeleteSalesPoint: boolean ;
  // endregion
  // region Records
    AccessActivitiesRecord: boolean ;
    AccessStoreNotifications: boolean ;
    AccessSalesPointNotifications: boolean ;
  // endregion

}
