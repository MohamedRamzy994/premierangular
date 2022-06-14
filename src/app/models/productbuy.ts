import { ProductUnitsModel } from './products';

export class Productbuy {
}
export class ProductBuyMainTableModel {

  public InvoiceID?: number;
  public StoreID: number;
  public SupplierID: number;
  public InvoiceNum?: string;
  public UserID: number;
  public DateTime?: Date;
  public Total: number;
  public PayID?: number;
  public PayedMoney: number;
  public DiscountCash: number;
  public SalesPointID: number;
  public Existing?: boolean;
  public SelectedProducts: ProductBuyTableModel[];
}
export class ProductBuyTableModel {
  public InvoiceID?: number;
  public ProductID: number;
  public Num: number;
  public UnitID: number;
  public ChangeNum: number;
  public Price: number;
  public DiscardNum: number;
  public Update_B_Pric: boolean;
}

export class ResultAddProductBuy {
  public Status: boolean;
  public Message: string;
}

export class ProductBuySelectMainInvoices {
  public InvoiceID: number;
  public SupplierName: string;

  public InvoiceNum: string;

  public StoreName: string;
  public DateSubmit: Date;

  public UserName: string;
  public Total: number;
  public Existing: boolean;
}

export class ResultProductBuySelectMainInvoices {
  public Status: boolean;
  public Message: string;
  public ProductBuyInvoices: ProductBuySelectMainInvoices[];

}

export class ProductBuyInvoiceItems {
  public ProductID: number;
  public ProductName: string;
  public Num: number;
  public UnitName: string;
  public Price: number;
  public Stock: number;
  public ChangeNum: number;
  public DiscardNum: number;
  public ProductUnits?: ProductUnitsModel[];
  public UnitID?: number;

}

export class ResultProductBuyInvoiceItems {
  public Status: boolean;
  public Message: string;
  public ProductBuyInvoiceItems: ProductBuyInvoiceItems[];

}
export class ProductBuyDiscardMainModel {
  public InvoiceID?: number;
  public DiscardValue: number;
  public UserID: number;
  public DateSubmit?: Date;
  public DefaultSalesPointID?: number;
  public StoreID: number;
  public DiscardMainItems: ProductBuyDiscardMainItemsModel[];

}


export class ProductBuyDiscardMainItemsModel {
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
}


export class ProductBuyDiscardMainNotSpecifiedModel {
  public SupplierID: number;
  public Total: number;
  public UserID: number;
  public DateTime?: Date;
  public DefaultSalesPointID?: number;
  public StoreID: number;
  public DiscardMainItems: ProductBuyDiscardMainNotSpecifiedItemsModel[];

}

export class ProductBuyDiscardMainNotSpecifiedItemsModel {
  public DiscardID: number;
  public ProductID: number;
  public Num: number;
  public UnitID: number;
  public Price: number;
  public StoreID: number;
  public ChangeNum: number;

}

export class ProductBuyDiscardSelectMainInvoices {

  public DiscardID: number;
  public SupplierName: string;

  public InvoiceNum: string;

  public StoreName: string;
  public DateSubmit: Date;

  public UserName: string;
  public DiscardValue: number;
  public Existing: boolean;

}

export class ResultProductBuyDiscardSelectMainInvoices {
  public Status: boolean;
  public Message: string;
  public ProductBuyDiscardInvoices: ProductBuyDiscardSelectMainInvoices[];

}
export class ProductBuyDiscardSelectMainInvoicesItems {
  public ProductID: number;
  public ProductName: string;
  public Num: string;
  public UnitName: string;
  public Price: number;
  public ChangeNum: number;
  public Stock: boolean;
}

export class ResultProductBuyDiscardSelectMainInvoicesItems {
  public Status: boolean;
  public Message: string;
  public ProductBuyDiscardInvoiceItems: ProductBuyDiscardSelectMainInvoicesItems[];

}




