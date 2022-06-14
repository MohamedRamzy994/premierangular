import { SupplierModel } from './suppliers';
class Products {
}
export class ProductBasicModel {
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
}
export class ProductsUnitsSupplierModel {

  public UnitCat11: number;
  public UnitCat12: number;
  public UnitCat13: number;


  public Unit11: number;
  public Unit12: number;
  public Unit13: number;
  public ProductID: number;

  public ChangeNum12: number;
  public ChangeNum13: number;

  public UnitBuy: number;
  public UnitSale: number;


  public StoreId: number;

  public UnitCatId: number;

  public UnitId: number;

  public OpeningNum: number;
  public UserId: number;

  public ProductSuppliers: SupplierModel[];

  public SelectedProductSuppliers: number[];
}
export class ListProductModel {
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
  public TotalDisc?: number;
  public NetPrice?: number;
}
export class ResultProducts {
  Status: boolean;
  Message: string;
  ProductsList?: ListProductModel[] | null;
  SelectedProduct: ProductBasicModel;
}
export class ProductUnitsModel {

  public RelationID: number;
  public UnitID: number;
  public UnitName: string;
  public ChangeNum: number;


}
export class ProductUnitsCatModel {

  public UnitCatID: number;
  public UnitCat: string;

}

export class ResultProductUnits {
  public Status: boolean;
  public Message: string;
  public ProductsUnitsList: ProductUnitsModel[];
}
export class ResultProductUnitsCats {
  public Status: boolean;
  public Message: string;
  public ProductsUnitsCatsList: ProductUnitsCatModel[];
}
export class ResultProductsEdited {
  Status: boolean;
  Message: string;

  SelectedProductBasic: ProductBasicModel;

  SelectedProductUnites: ProductsUnitsSupplierModel;
}
export class ProductSearchModel {
    // public StoreName: string ;
    public CatName: string ;
    public ProductName: string ;
    public ProductCode: string ;
    public PriceFrom: number ;
    public PriceTo: number ;
    // public SupplierID: number ;
    public StopBuy: boolean ;
    public StopSale: boolean ;
    public HasStock: boolean ;
    public HasNoStock: boolean ;
}
