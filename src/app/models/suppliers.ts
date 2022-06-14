export class Suppliers {
}

export class SupplierModel {

  public SupplierID: number;
  public SupplierName: string;
  public Mobile1: string;
  public Mobile2: string;
  public Balance: number;
  public Stopped: boolean;


}

export class ResultSuppliers {
  public Status: boolean;
  public Message: string;
  public SuppliersList: SupplierModel[];


}

export class AddSupplierModel {

  public SupplierID: number;
  public SupplierName: string;
  public Mobile1: string;
  public Mobile2: string;
  public Balance: number;
  public Stopped: boolean;

}


export class ResultAddSupplier {
  public Status: boolean;
  public Message: string;

}
export class ResultDeletSupplier {
  public Status: boolean;
  public Message: string;

}
export class ResultGetSupplierMonyActionDetails {
  public Status: boolean;
  public Message: string;
  public MoneyDetails: SupplierMoneyActionDetails;

}

export class AddRebateActionModel {
  public SupplierID: string;
  public UserID: number;
  public MoneyValue: number;
  public ReasonID: number;
  public DateSubmit: Date;
  public SalesPointID: number;
  public Details: string;

}
export class SupplierMoneyActionDetails {
  public PayID: number;
  public Details: string;
}


export class AddPostBalanceActionModel {
  public SupplierID: string;
  public UserID: number;
  public MoneyValue: number;
  public ReasonID: number;
  public DateSubmit: Date;
  public SalesPointID: number;
  public Details: string;

}

export class AddCheckRebateActionModel {
  public SupplierID: string;
  public UserID: number;
  public MoneyValue: number;
  public ReasonID: number;
  public DateSubmit: Date;
  public SalesPointID: number;
  public Details: string;
  public BankID: number;
  public ChequeNum: number;
  public DueDate: Date;


}

export class ResultAddRebateAction {
  public Status: boolean;
  public Message: string;

}
export class ResultAddPostBalanceAction {
  public Status: boolean;
  public Message: string;

}
export class ResultAddCheckRebateAction {
  public Status: boolean;
  public Message: string;

}
export class ListSupplierMoneyDetailsModel {
  public UserName: string;
  public MoneyValue: number;
  public ReasonID: number;
  public DateSubmit: Date;
  public SalesPoint: string;
  public SalesPointID?: number;
  public Reason: string;
  public PayID: number;
  public BalanceAfter: number;

}

export class ListSupplierCanceldMoneyDetailsModel {
  public UserName: string;
  public UName: string;
  public MoneyValue: number;
  public ReasonID: number;
  public DateSubmit: Date;
  public SalesPoint: string;
  public SalesPointID?: number;
  public Reason: string;
  public PayID: number;
  public BalanceAfter: number;
}
export class ResultSupplierMoneyDetails {
  public Status: boolean;
  public Message: string;
  public SupplierMoneyDetailsList: ListSupplierMoneyDetailsModel[];
  public SupplierTotalCommunicationSummary: SupplierTotalCommunicationSummaryModel;
}
export class ResultSupplierCancledMoneyDetails {
  public Status: boolean;
  public Message: string;
  public SupplierMoneyDetailsList: ListSupplierCanceldMoneyDetailsModel[];
  public SupplierTotalCommunicationSummary: SupplierTotalCommunicationSummaryModel;


}
export class SupplierTotalCommunicationSummaryModel {

  public TotalCommunication: number;
  public CompletedCommunication: number;

  public RestCommunication: number;



}

export class AddSupplierCancelMoneyAction {
  public MoneyValue: number;
  public ReasonID: number;
  public DateSubmit: Date;
  public SalesPointID: number;
  public PayID: number;
  public UserID: number;
  public SupplierID: number;
}
export class ResultAddCancelMoneyAction {
  public Status: boolean;
  public Message: string;

}


