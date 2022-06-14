import { ProductUnitsModel } from './products';

export class Productopenningbalance {
}

export class ProductOpenningBalanceModel {
  public InvoiceID?: number;
  public StoreID: number;
  public UserID: number;
  public DateSubmit?: Date;
  public Existing?: boolean;
  public InvoiceItems: ProductOpenningBalanceItemsModel[];


}
export class ProductOpenningCancleInvoiceModel {
  public InvoiceID?: number;
  public UserID: number;
  public DateSubmit?: Date;


}

export class ListProductOpenningBalanceInvoicesModel {
  public InvoiceID?: number;
  public StoreName: string;
  public UserName: string;
  public DateSubmit?: Date;
  public Existing?: boolean;
  public Status?: string;

}


export class ListProductOpenningBalanceInvoiceItemsModel {



  public ProductID: number;
  public ProductName: string;
  public Num: number;
  public UnitName: string;
  public ChangeNum: number;
  public Stock: number;





}


export class ProductOpenningBalanceItemsModel {
  public ProductID: number;
  public Num: number;
  public UnitID: number;
  public ChangeNum: number;
  public StoreID: number;


}

export class ListProductOpenningBalanceModel {
  public InvoiceID?: number;
  public ProductID: number;
  public ProductName: string;
  public UnitName: string;
  public StoreIDFrom: number;
  public DateSubmit?: number;
  public UserName: string;
  public UnitID: number;
  public Num: number;
  public ChangeNum?: number;
}




export class ResultOpenningBalance {
  public Status: boolean;
  public Message: string;
}
export class ResultListOpeningBalance {
  public Status: boolean;
  public Message: string;
  public InvoicesList: ListProductOpenningBalanceInvoicesModel[];
}
export class ResultListOpeningBalanceItems {
  public Status: boolean;
  public Message: string;
  public InvoiceItemsList: ListProductOpenningBalanceInvoiceItemsModel[];
}

