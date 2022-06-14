export class Customers {
}
export class AddCustomerModel {
    public CustomerID: number ;
    public Name: string ;
    public Mob1: string ;
    public Mob2: string ;
    public CatID: number ;
}
export class ResultAddCustomer {
        public Status: boolean ;
        public Message: string ;
}
export class ResultDeletCustomer {
        public Status: boolean ;
        public Message: string ;
}
export class ListCustomersModel {
    public CustomerID: number ;
    public CustomerName: string ;
    public Mobile1: string ;
    public Mobile2: string ;
    public Balance: number ;
    public Category: string ;
}
export class ResultListCustomers {
    public Status: boolean ;
    public Message: string ;
    public CustomersList: ListCustomersModel []  ;


}
export class AddCustomerRebateActionModel {
    public CustomerID: string;
    public UserID: number;
    public EmpID: number;
    public MoneyValue: number;
    public ReasonID: number;
    public DateSubmit: Date;
    public SalesPointID: number;
    public Details: string;
  }
  export class AddCustomerPostBalanceActionModel {
    public CustomerID: string;
    public UserID: number;
    public EmpID: number;
    public MoneyValue: number;
    public ReasonID: number;
    public DateSubmit: Date;
    public SalesPointID: number;
    public Details: string;
  }
 export class AddCustomerCheckRebateActionModel {

    public CustomerID: string;
    public UserID: number;
    public EmpID: number;
    public MoneyValue: number;
    public ReasonID: number;
    public DateSubmit: Date;
    public SalesPointID?: number;
    public Details: string;
    public BankID: number ;
    public ChequeNum: number ;
    public DueDate: Date;

  }
  export class ResultCustomerMoneyDetails {
    public Status: boolean;
    public Message: string;
    public CustomerMoneyDetailsList: ListCustomerMoneyDetailsModel[];
    public CustomerTotalCommunicationSummary: CustomerTotalCommunicationSummaryModel;
  }
  export class ListCustomerMoneyDetailsModel {

      public  PayID: number ;
      public  ReasonID: number ;
      public  UserName: string ;
      public  DateSubmit: Date ;
      public  Reason: string ;
      public  SalesPoint: string ;
      public SalesPointID: number ;


      public  MoneyValue: number ;

      public  BalanceAfter: number ;


  }
 export class CustomerTotalCommunicationSummaryModel {

      public  TotalCommunication: number ;
      public  CompletedCommunication: number ;

      public  RestCommunication: number ;



  }
  export class AddCustomerCancelMoneyAction {
      public  PayID: number ;
      public  CustomerID: number ;
      public  EmpID: number ;
      public  ReasonID: number ;
      public  MoneyValue: number ;
      public  SalesPointID: number ;
      public  UserID: number ;
      public  DateSubmit: Date ;
  }
  export class CustomerMoneyActionDetails {
      public PayID: number ;
      public Details: string ;

  }
  export class ResultGetCustomerMonyActionDetails {
    public Status: boolean;
    public Message: string;
    public MoneyDetails: CustomerMoneyActionDetails ;


  }
  export class ListCustomerCanceldMoneyDetailsModel {
    public UserName: string;
    public UName: string;
    public EmpName: string;
    public MoneyValue: number;
    public ReasonID: number;
    public DateSubmit: Date;
    public SalesPoint: string;
    public SalesPointID?: number;
    public Reason: string;
    public PayID: number;
    public BalanceAfter: number;
  }
  export class ResultCustomerCancledMoneyDetails {
    public Status: boolean;
    public Message: string;
      public  CustomerMoneyDetailsList: ListCustomerCanceldMoneyDetailsModel [];
      public CustomerTotalCommunicationSummary: CustomerTotalCommunicationSummaryModel;


  }

