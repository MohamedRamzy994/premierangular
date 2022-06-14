import { ProductUnitsModel } from './products';

export class Transferkinds {
}
export class ResultUnits {
  public Status: boolean;
  public Message: string;
  public UnitsList: ProductUnitsModel[];
}


export class ResultListTransfer {
  public Status: boolean;
  public Message: string;
  public InvoicesList: ListTransferKindModel[];
}

export class ResultTransfer {
  public Status: boolean;
  public Message: string;
}

export class ListTransferKindModel {
  public InvoiceID: number;
  public StoreName: string;
  public StoreTo: string;
  public DateSubmit: Date;
  public UserName: string;

}
export class ListTransferKindInvoiceItemModel {
  public ProductID: number;
  public Num: number;
  public UnitID: number;
  public ChangeNum: number;

}

export class TransferKindsModel {

  public StoreIDFrom: number;
  public StoreIDTo: number;
  public UserID: number;
  public DateSubmit?: number;
  public InvoiceID?: number;
  public InvoiceItems: ListTransferKindInvoiceItemModel [];

}
export class ListTransferProductModel {
  public ProductID?: number | null;
  public ProductName: string;
  public CatID: number;
  public MinLimit: number;
  public StopBuy: boolean;
  public StopSale: boolean;
  public PrintBarcode: boolean;
  public Price: number;
  public P_Price: number;
  public Discount: number;
  public MinSalePrice: number;
  public ProductCode: string;
  public CatName: string;
  public Stock: number;
  public IsSelected?: boolean;
  public DisabledUnits?: boolean;
  public ProductUnits: ProductUnitsModel[];
  public UnitID: number;
  public Num: number;
  public ChangeNum?: number;
  public TotalDisc?: number;
  public NetPrice?: number;

}

export class ListTransferInvoiceItemsModel {
  public InvoiceID?: number;
  public ProductID: number;
  public ProductName: string;
  public UnitName: string;
  public StoreIDFrom: number;
  public StoreIDTo: number;
  public DateSubmit?: number;
  public UserName: string;
  public UnitID: number;
  public Num: number;
  public ChangeNum?: number;

}
export class ResultListTransferItems {
        public Status: boolean ;
        public Message: string ;
        public InvoiceItemsList: ListTransferInvoiceItemsModel[] ;
    }


