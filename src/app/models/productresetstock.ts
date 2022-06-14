import { ProductUnitsModel } from "./products";

export class Productresetstock {


}

export class ProductResetStockReasonModel {

  public ReasonID: number;
  public Reason: string;



}
export class ResultListResetStockReasons {
  public Status: boolean;
  public Message: string;
  public ReasonsList: ProductResetStockReasonModel[];
}
export class ResultResetStock {
  public Status: boolean;
  public Message: string;
}

export class ProductResetStockAddMainModel {
  public InvoiceID?: number;
  public StoreID: number;
  public UserID: number;
  public DateTime?: Date;
  public InvoiceItems: ProductResetStockAddMainItemsModel[];


}
export class ProductResetStockAddMainItemsModel {
  public ProductID: number;
  public Num: number;
  public UnitID: number;
  public ChangeNum: number;
  public StoreID: number;
  public ReasonID: number;



}
export class ListProductResetStockAddMainModel {
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
  public ReasonID?: number;
}
export class ListProductResetStockeModel {

  public InvoiceID: number;
  public StoreName: string;
  public UserName: string;
  public DateSubmit: Date;




}
export class ResultListResetStockInvoices {
  public Status: boolean;
  public Message: string;
  public InvoicesList: ListProductResetStockeModel[];
}

export class ListProductResetStockItemseModel {

  public InvoiceID: number;
  public StoreName: string;
  public UserName: string;
  public DateSubmit: Date;

  public ProductID: number;
  public ProductName: string;

  public Num: number;
  public UnitName: string;
  public Reason: string;

  public ChangeNum: number;
  public Stock: number;

}

export class ResultListResetStockItems {
  public Status: boolean;
  public Message: string;
  public InvoiceItemsList: ListProductResetStockItemseModel[];
}




