export class Salespoints {


}

export class ListSalesPointsModel {
  public SalesPointID: number;
  public SalesPointMACEthernet: string;
  public SalesPointMACWireless: string;


  public SalesPoint: string;
  public Active: boolean;
  public Balance: number;

}

export class ResultListSalesPoints {
  public Status: boolean;
  public Message: string;
  public SalesPointsList: ListSalesPointsModel[];


}
export class ListWithdrawDepositReasonModel {
  public ReasonID: number;
  public Reason: string;
}
export class ResultWithdrawDepositReason {
  public Status: boolean;
  public Message: string;
  public ListWithdrawDepositReason: ListWithdrawDepositReasonModel[];

}

export class AddAdditionalCostEventModel {
    public MoneyValue: number ;
    public Details: string ;
    public UserID: number ;
    public DateSubmit: Date ;
    public SalesPointID: number ;
    public SelectedReasonID: number ;

}
export class ResultAddAdditionalCostEvent {
    public Status: boolean ;
    public Message: string ;
}
export class AddTransferMoneyEventModel {
  public MoneyValue: number ;
  public Details: string ;
  public UserID: number ;
  public DateSubmit: Date ;
  public SalesPointIDFrom: number ;
  public SalesPointIDTo: number ;

}

export class ResultListGetStartBalance {
  public Status: boolean ;
  public Message: string ;
  public ListGetStartBalance: ListGetStartBalanceModel  ;


}
export class ListGetStartBalanceModel {

    public  CustomerPayed: number ;
    public  TransferToThis: number ;
    public  Deposit: number ;
    public  Withdraw: number ;
    public  TransferFromThis: number ;
    public  SupplierPayed: number ;
    public  CustomerRetrieve: number ;
    public  Salary: number ;
    public  EmpDebits: number ;
    public  CustomerTanzelCancel: number ;
    public  SupplierTanzelCancel: number ;
    public  CustomerRetrieveCancel: number ;
    public  Balance: number ;
    public  AddCost: number ;
    public  EmpGivedMoney: number ;
    public  EmpPayedDebitDirect: number;
}
export class AddSalesPointsModel {
  public SalesPointMACEthernet: string;
  public SalesPointMACWireless: string;

    public SalesPoint: string ;

}
export class ResultAddSalesPoint {
    public  Status: boolean ;
    public  Message: string ;

}


