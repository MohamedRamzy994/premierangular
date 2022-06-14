export class Reports {
}
export class ListProductMoveMentReportModel {
    public InvoiceID: number;
    public ActionType: string;
    public Actor: string;
    public Price: number;
    public Num: number;
    public Unit: string;
    public DateSubmit: Date;
    public ProductID: number;
}
export class ResultListProductMoveMentReport {
    public Status: boolean;
    public Message: string;
    public ListProductMoveMentReport: ListProductMoveMentReportModel[];
}
export class ListSupplierProductsInStoreModel {
    public ProductID: number;
    public Price: number;
    public Stock: number;
    public SupplierID: number;
    public CatName: string;
    public ProductName: string;
    public StopSale: boolean;
    public StopBuy: boolean;
}
export class ResultListSupplierProductsInStoreReport {
    public Status: boolean;
    public Message: string;
    public ListSupplierProductsInStoreModel: ListSupplierProductsInStoreModel[];

}
export class ProductBuySelectTotalCommunicationReportModel {
    public BuyNumber: number;
    public DiscardNumber: number;
    public BuyQuntity: number;
    public BuyPrice: number;

    public DiscardQuantity: number;

    public DiscardPrice: number;

}
export class ResultProductBuySelectTotalCommunicationReport {
    public Status: boolean;
    public Message: string;
    public ProductBuySelectTotalCommunicationReportModel: ProductBuySelectTotalCommunicationReportModel[];

}
export class CustomerSelectTotalCommunicationReportModel {
    public SaleNumber: number;
    public DiscardNumber: number;
    public SaleQuntity: number;
    public SalePrice: number;

    public DiscardQuantity: number;

    public DiscardPrice: number;

}
export class ResultCustomerSelectTotalCommunicationReport {
    public Status: boolean;
    public Message: string;
    public CustomerSelectTotalCommunicationReportModel: CustomerSelectTotalCommunicationReportModel[];

}
export class ListProductSaleSelectMainInvoicesToReport {
    public InvoiceID: number;
    public CustomerName: string;
    public StoreName: string;
    public DateSubmit: Date;

    public UserName: string;
    public Net: number;
    public InvTypeID: number;
    public EmpID: number;
    public InvTypeName: string;
    public Existing: boolean;
}
export class ResultCustomerMainInvoicesSalesReportDelegates {
    public Status: boolean;
    public Message: string;
    public ListProductSaleSelectMainInvoicesToReport: ListProductSaleSelectMainInvoicesToReport[];

}
export class ResultListAdditionalCostEventToReport {
    public Status: boolean;
    public Message: string;
    public ListSelectAdditionalCostEventToReport: ListSelectAdditionalCostEventToReport[];

}
export class ListSelectAdditionalCostEventToReport {
    public  SalesPointID: number ;
    public  SalesPoint: string ;
    public  Reason: string ;
    public  MoneyValue: number ;
    public  Details: string ;
    public  DateSubmit: Date ;
    public  UserName: string ;

}
export class ListGivedMoneyToReport {
    public  SalesPointID: number ;
    public  SalesPoint: string ;
    public  Reason: string ;
    public  MoneyValue: number ;
    public  Details: string ;
    public  DateSubmit: Date ;
    public  UserName: string ;
    public  EmpName: string ;
}
export class ResultListGivedMoneyToReport {
    public Status: boolean;
    public Message: string;
    public ListGivedMoneyToReport: ListGivedMoneyToReport [];

}
export class ListSupplierSelectProductSalesReport {
    public ProductID: number ;
    public ProductName: string ;
    public UnitName: string ;
    public Num: number ;
    public Price: number ;
    public Stock: number ;
    public InvoiceID: number ;
}
export class ResultListSupplierSelectProductSalesReport {
    public Status: boolean;
    public Message: string;
    public ListSupplierSelectProductSalesReport: ListSupplierSelectProductSalesReport [];


}
export class SystemCreateProfitLoseReport {
    public AdditionalCost: number ;
    public Sales: number ;
    public Profit: number ;
    public AllEmployee: number ;
}
export class ResultSystemCreateProfitLoseReport {
    public Status: boolean;
    public Message: string;
    public SystemCreateProfitLoseReport: SystemCreateProfitLoseReport [];


}
export class SystemCreateTotalInformationMoneyReport {
    public ProductsPrice: number ;
    public SuppliersDebits: number ;
    public CustomersDebits: number ;
    public SalesPointsBalance: number ;
    public NetBalance: number ;
    public EmpDebits: number ;

}
export class ResultSystemCreateTotalInformationMoneyReport {
    public Status: boolean;
    public Message: string;
    public SystemCreateTotalInformationMoneyReport: SystemCreateTotalInformationMoneyReport [];


}




