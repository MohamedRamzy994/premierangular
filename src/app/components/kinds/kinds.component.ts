import { ListproductswithsupplierService } from './../../services/products/listproductswithsupplier.service';
import { Router } from '@angular/router';
import { DeleteproductService } from './../../services/products/deleteproduct.service';
import { ResultProducts, ListProductModel, ProductBasicModel, ProductSearchModel } from './../../models/products';
import { ListproductsService } from './../../services/products/listproducts.service';
import { Component, OnInit, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ListstoresService } from '../../services/stores/liststores.service';
import { Resultstores } from '../../models/resultstores';
import { Stores } from '../../models/stores';
import { Resultproductgroups } from '../../models/resultproductgroups';
import { Productgroups } from '../../models/productgroups';
import { ListgroupsService } from '../../services/productgroups/listgroups.service';
import { ResultSuppliers, SupplierModel } from '../../models/suppliers';
import { ListsuppliersService } from '../../services/suppliers/listsuppliers.service';
import { ListproductsinstoreService } from '../../services/products/listproductsinstore.service';
import { User } from 'src/app/models/user';
import { OauthenticatedsessionService } from 'src/app/services/general/Oauthenticatedsession.Service';

@Component({
  selector: 'app-kinds',
  templateUrl: './kinds.component.html',
  styleUrls: ['./kinds.component.css']
})
export class KindsComponent implements OnInit {
  public authenticatedUser: User;
  public result: ResultProducts;
  public product: ListProductModel;
  notifierService: NotifierService;
  public modalRef: BsModalRef;
  public modalService: BsModalService;
  @ViewChild('ButtonAdd') buttonAdd: ElementRef;
  @ViewChild('SearchField') searchfield: ElementRef;
  ProductStores: Stores[];
  productgroups: Productgroups[];
  Suppliers: SupplierModel[];
  public searchterm: ProductSearchModel;
  public StoreID: number;
  public p: any;


  constructor(private _listproductsService: ListproductsService,
    private _notifierService: NotifierService,
    private _modalService: BsModalService,
    private _deleteproductService: DeleteproductService,
    private _router: Router,
    private _productgroups: ListgroupsService,
    private _listsuppliersService: ListsuppliersService,
    private _liststoresService: ListstoresService,
    private _listproductsinstoreService: ListproductsinstoreService,
    private _oauthenticatedsessionService: OauthenticatedsessionService,
    private _listproductswithsupplierService: ListproductswithsupplierService
  ) {

    this.result = { Status: false, Message: '', ProductsList: [], SelectedProduct: new ProductBasicModel() };
    this.result.ProductsList = [];
    this.modalService = _modalService;
    this.product = {
      ProductID: 0,
      ProductName: '',
      CatID: 0,
      MinLimit: 0,
      StopBuy: false,
      StopSale: false,
      PrintBarcode: false,
      Price: 0,
      P_Price: 0,
      Discount: 0,
      MinSalePrice: 0,
      ProductCode: '',
      CatName: '',
      Stock: 0,
      IsSelected: false
    };
  }

  ngOnInit() {

    this.searchterm = {

      ProductName: '',
      ProductCode: '',
      CatName: '',
      StopBuy: null,
      StopSale: null,
      HasStock: null,
      HasNoStock: null,
      PriceFrom: null,
      PriceTo: null
    };

    this.StoreID = 0;

    this.getAllProducts();
    this.getAllStores();
    this.getAllGroups();
    this.getAllSuppliers();
    this.getLoggedUser();


  }
  /**
   * getLoggedUser
   */
  public getLoggedUser() {
    this.authenticatedUser = this._oauthenticatedsessionService.User;
  }
  getAllProducts(): void {

    this._listproductsService.listproducts().subscribe((_result: ResultProducts) => {
      if (_result.ProductsList == null || _result.ProductsList.length == 0) {
        this.result = { Status: false, Message: '', ProductsList: [], SelectedProduct: new ProductBasicModel() };

      } else {
        this.result = _result;
      }


    });

  }

  getAllProductsInStore(_storeID: number): void {

    if (_storeID == 0) {

      this.getAllProducts();


    } else {

      this._listproductsinstoreService.listproductsinstore(_storeID).subscribe((_result: ResultProducts) => {

        this.result = _result;

        if (this.result.ProductsList === null) {

          this.result = { Status: false, Message: '', ProductsList: [], SelectedProduct: new ProductBasicModel() };

        }


      });


    }


  }

  getAllProductsWithSupplier(_supplierID: number): void {

    if (_supplierID == 0) {

      this.getAllProducts();


    } else {

      this._listproductswithsupplierService.listproductswithsupplier(_supplierID).subscribe((_result: ResultProducts) => {

        this.result = _result;

        if (this.result.ProductsList === null) {

          this.result = { Status: false, Message: '', ProductsList: [], SelectedProduct: new ProductBasicModel() };

        }


      });


    }


  }
  public DeleteProduct(_product: ListProductModel) {

    this._deleteproductService.DeleteProduct(_product).subscribe((_result: ResultProducts) => {

      this.result = _result;
      if (this.result.Status === true) {
        this.modalRef.hide();
        this._notifierService.notify('success', this.result.Message);
        this.ngOnInit();
        this.buttonAdd.nativeElement.disabled = false;


      } else {
        this.modalRef.hide();
        this._notifierService.notify('error', this.result.Message);

      }

    }
      ,
      (error: Error) => {
        this.modalRef.hide();
        this._notifierService.notify('error', error.message);

      }

    );

  }

  public openDeleteModal(template: TemplateRef<any>): void {

    console.log(this.product);

    if (this.product.ProductID === 0) {

      this._notifierService.notify('error', 'من فضلك يجب تحديد صنف واحد على الاقل للقيام بعملية الحذف ');


    } else {

      if (this.RowSelected(this.product) === true) {


        this.modalRef = this.modalService.show(template);
      } else if (this.RowSelected(this.product) === false) {
        this._notifierService.notify('error', 'من فضلك يجب تحديد صنف واحد على الاقل للقيام بعملية الحذف ');

      } else {

        this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');


      }

    }


  }

  public goToEditKind(product): void {

    if (this.product.ProductID === 0) {

      this._notifierService.notify('error', 'من فضلك يجب تحديد صنف واحد على الاقل للقيام بعملية التعديل ');


    } else {

      this._router.navigate(['editkind', this.product.ProductID]);

    }

  }


  public SelectRow(_product: ListProductModel): void {

    this.product = _product;
    this.buttonAdd.nativeElement.disabled = true;
    // this.searchfield.nativeElement.disabled = true;


  }

  public RowSelected(_product: ListProductModel): boolean {

    if (!this.product) {
      return false;
    }
    return this.product.ProductID === _product.ProductID ? true : false;

  }

  public RemoveSelection(_product: ListProductModel) {

    this.product = {
      ProductID: 0,
      ProductName: '',
      CatID: 0,
      MinLimit: 0,
      StopBuy: false,
      StopSale: false,
      PrintBarcode: false,
      Price: 0,
      P_Price: 0,
      Discount: 0,
      MinSalePrice: 0,
      ProductCode: '',
      CatName: '',
      Stock: 0,
      IsSelected: false
    };

    this.buttonAdd.nativeElement.disabled = false;
    // this.searchfield.nativeElement.disabled = false;

  }

  public getAllStores(): void {

    this._liststoresService.listStores().subscribe((_result: Resultstores) => {
      if (_result.StoresList == null || _result.StoresList.length == 0) {
        this.ProductStores = [];
      } else {

        this.ProductStores = _result.StoresList;
      }
    });

  }

  public getAllGroups(): void {

    this._productgroups.listGroups().subscribe((_result: Resultproductgroups) => {

      if (_result.GroupsList == null || _result.GroupsList.length == 0) {
        this.productgroups = [];
      } else {

        this.productgroups = _result.GroupsList;
      }
    });

  }
  public getAllSuppliers(): void {

    this._listsuppliersService.ListSuppliers().subscribe((_result: ResultSuppliers) => {

      if (_result.SuppliersList == null || _result.SuppliersList.length == 0) {
        this.Suppliers = [];
      } else {

        this.Suppliers = _result.SuppliersList;
      }
    });

  }
  public Refresh() {
    this.ngOnInit();
  }



}
