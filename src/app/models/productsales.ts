import { ProductUnitsModel } from './products';
import { CustomerTotalCommunicationSummaryModel } from './customers';

export class Productsales {
}
export class ProductSaleMainTableModel {
    public InvoiceID?: number;
    public StoreID: number;
    public CustomerID: number;
    public InvTypeID: number;
    public UserID: number;
    public DateSubmit: Date;
    public Total: number;
    public PayID?: number;
    public TotalPayed?: number;
    public EmpID: number;
    public Addtions: number;
    public Net: number;
    public SalesPointID?: number;
    public DiscPercent?: number;
    public DiscLE: number;
    public Notes: string;
    public Cash: number;
    public Existing?: boolean;
    public SelectedProducts: ProductSaleTableModel[];
}

export class ProductSaleTableModel {
    public InvoiceID?: number;
    public ProductID: number;
    public Num: number;
    public UnitID: number;
    public ChangeNum: number;
    public Price: number;
    public DiscardNum: number;
    public TotalDisc: number;
    public NetPrice: number;

    public SequanceID: number;
}
export class ProductSaleSelectMainInvoices {
    public InvoiceID: number;
    public CustomerName: string;
    public StoreName: string;
    public DateSubmit: Date;

    public UserName: string;
    public Net: number;
    public InvTypeID: number;
    public InvTypeName: string;
    public Existing: boolean;
}
export class ResultProductSaleSelectMainInvoices {
    public Status: boolean;
    public Message: string;
    public ProductSaleInvoices: ProductSaleSelectMainInvoices[];
}
export class ProductSaleInvoiceMainDetails {
    public CustomerID: number;
    public CustomerName: string;
    public EmpName: string;
    public UserName: string;
    public StoreName: string;
    public PayID: number;
    public EmpID: number;
    public StoreID: number;
    public Total: number;
    public Additions: number;
    public DiscPercent: number;
    public DiscLE: number;
    public Net: number;
    public TotalPayed: number;
    public Rem: number;
    public Notes: string;
    public DateSubmit: Date;
    public Existing: boolean;

}
export class ResultProductSaleInvoiceMainDetails {
    public Status: boolean;
    public Message: string;
    public ProductSaleInvoiceMainDetails: ProductSaleInvoiceMainDetails[];

}
export class ResultProductSaleInvoiceItems {
    public Status: boolean;
    public Message: string;
    public ProductSaleInvoiceItems: ProductSaleInvoiceItems[];

}
export class ProductSaleInvoiceItems {


    public ProductID: number;
    public ProductName: string;
    public Num: number;
    public UnitName: string;
    public Price: number;
    public Stock: number;
    public ChangeNum: number;
    public DiscardNum: number;
    public TotalDisc?: number;
    public NetPrice?: number;
    public SequanceID?: number;
    public ProductUnits?: ProductUnitsModel[];
    public UnitID?: number;
}
export class ResultProductSaleDiscardSelectMainInvoicesItems {
    public Status: boolean;
    public Message: string;
    public ProductSaleDiscardInvoiceItems: ProductSaleDiscardSelectMainInvoicesItems[];

}
export class ProductSaleDiscardSelectMainInvoicesItems {

    public ProductID: number;
    public ProductName: string;
    public Num: number;
    public UnitName: string;
    public Price: number;
    public Stock: number;
    public ChangeNum: number;

}
export class ProductSaleDiscardMainModel {
    public InvoiceID: number;
    public DiscardValue: number;
    public UserID: number;
    public DateSubmit?: Date;
    public DefaultSalesPointID?: number;
    public ThisSalesPointID: number;
    public GetMoneyBack: boolean;
    public StoreID: number;

    public DiscardSaleMainItems: ProductSaleDiscardMainItemsModel[];

}
export class ProductSaleDiscardMainItemsModel {
    public DiscardID: number;
    public ProductID: number;
    public DiscNum: number;
    public UnitID: number;
    public Price: number;
    public DiscNum_In_Max: number;
    public DiscNum_In_Old: number;
    public StoreID: number;
    public InvoiceID: number;
    public DiscChangeNum: number;
    public NetPrice?: number;
    public TotalDisc?: number;
    public SequanceID?: number;


}
export class ProductSaleDiscardMainNotSpecifiedModel {
    public CustomerID: number ;
    public Total: number ;
    public UserID: number ;
    public DateSubmit: Date ;
    public DefaultSalesPointID?: number ;
    public ThisSalesPointID: number ;
    public GetMoneyBack: boolean ;
    public StoreID: number ;
    public EmpID: number ;

    public DiscardSaleMainItems: ProductSaleDiscardMainNotSpecifiedItemsModel[] ;

}
export class ProductSaleDiscardMainNotSpecifiedItemsModel {
    public  Num: number ;
    public  ChangeNum: number ;
    public  DiscardID: number ;
    public  ProductID: number ;
    public  UnitID: number ;
    public  Price: number ;
    public  StoreID: number ;
}
export class ResultProductSaleDiscardSelectMainInvoices {
    public Status: boolean;
    public Message: string;
    public ProductSaleDiscardInvoices: ProductSaleDiscardSelectMainInvoices [];
}
export class ProductSaleDiscardSelectMainInvoices {
    public DiscardID: number ;
    public CustomerName: string ;
    public StoreName: string ;
    public DateSubmit: Date ;
    public UserName: string ;
    public DiscardValue: number ;
    public Existing: boolean ;
}
export class ProductSaleDiscardNotSelectMainInvoicesItems {
    public ProductID: number;
    public ProductName: string;
    public Num: number;
    public UnitName: string;
    public Price: number;
    public Stock: number;
    public ChangeNum: number;

}
export class ResultProductSaleDiscardNotSelectMainInvoicesItems {
    public Status: boolean;
    public Message: string;
    public ProductSaleDiscardNotInvoiceItems: ProductSaleDiscardNotSelectMainInvoicesItems [];

}
export class ResultProductSaleProfitSelectMainInvoices {
    public Status: boolean;
    public Message: string;
    public ProductSaleProfitInvoices: ProductSaleProfitSelectMainInvoices [];

}
export class ResultProductDailySalesInvoices {
    public Status: boolean;
    public Message: string;
    public ProductDailySalesInvoices: ProductDailySalesInvoices [];
    public CustomerTotalCommunicationSummary: CustomerTotalCommunicationSummaryModel;
}
export class ProductDailySalesInvoices {
    public ProductID: number;
    public StoreID: number;
    public ProductName: string;
    public Num: number;
    public UnitName: string;
    public Price: number;
    public Stock: number;
    public ChangeNum: number;
    public InvoiceID: number;
    public NetPrice: number;
    public DateSubmit: Date;


}
export class ProductSaleProfitSelectMainInvoices {
    public InvoiceID: number ;
    public CustomerName: string ;
    public StoreName: string ;
    public DateSubmit: Date ;
    public UserName: string ;
    public Net: number ;
    public Profit: number ;
    public Cost: number ;
    public InvTypeID: number ;
    public Existing: boolean ;
    public InvTypeName?: string;

}






