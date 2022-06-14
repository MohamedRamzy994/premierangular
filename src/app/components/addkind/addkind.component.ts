import { ResultSuppliers } from './../../models/suppliers';
import { OauthenticatedsessionService } from '../../services/general/Oauthenticatedsession.Service';
import { Stores } from './../../models/stores';
import { Resultstores } from './../../models/resultstores';
import { ListstoresService } from './../../services/stores/liststores.service';
import { AddproductunitsService } from './../../services/products/addproductunits.service';
import { FormGroup } from '@angular/forms';
import { Resultproductgroups } from './../../models/resultproductgroups';
import { Productgroups } from './../../models/productgroups';
// tslint:disable-next-line:max-line-length
import { ProductBasicModel, ResultProducts, ResultProductUnits, ProductUnitsModel, ResultProductUnitsCats, ProductUnitsCatModel } from './../../models/products';
import { NotifierService } from 'angular-notifier';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { AddproductbasicService } from '../../services/products/addproductbasic.service';
import { ListgroupsService } from '../../services/productgroups/listgroups.service';
import { ListproductunitsService } from '../../services/products/listproductunits.service';
import { ListproductunitscatsService } from '../../services/products/listproductunitscats.service';
import { ProductsUnitsSupplierModel } from '../../models/products';
import { ListsuppliersService } from '../../services/suppliers/listsuppliers.service';
import { SupplierModel } from '../../models/suppliers';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-addkind',
  templateUrl: './addkind.component.html',
  styleUrls: ['./addkind.component.css']
})
export class AddkindComponent implements OnInit {

  public result: ResultProducts;
  public resultunits: ResultProductUnits;
  public productbasic: ProductBasicModel;
  public productgroups: Productgroups[];
  public productunits: ProductUnitsModel[];
  public productunitscats: ProductUnitsCatModel[];
  public ProductsUnitsSupplierModel: ProductsUnitsSupplierModel;
  public addedprdouctId: number;
  public unitcatcheckbox12: boolean;
  public unitcatcheckbox13: boolean;
  public unitcatcheckbox11: boolean;
  public ProductUnitsDefault: ProductUnitsCatModel[];
  public ProductStores: Stores[];
  public enableopeningbalance: boolean;
  public Suppliers: SupplierModel[];
  public opensupplierenabled: boolean;
  public modalRef: BsModalRef;


  constructor(
    private _notifierService: NotifierService,
    private _addproductbasicService: AddproductbasicService,
    private _productgroups: ListgroupsService,
    private _productunits: ListproductunitsService,
    private _productunitscats: ListproductunitscatsService,
    private _addproductunitsService: AddproductunitsService,
    private _liststoresService: ListstoresService,
    private modalService: BsModalService,
    private _OauthenticatedsessionServiceService: OauthenticatedsessionService,
    private _listsuppliersService: ListsuppliersService

  ) { 
    this.addedprdouctId = 0;
  }

  ngOnInit() {
  
  
    this.productbasic = new ProductBasicModel();
    this.ProductsUnitsSupplierModel = new ProductsUnitsSupplierModel();
    this.ProductUnitsDefault = [];
    this.ProductsUnitsSupplierModel.Unit11 = 3;
    this.ProductsUnitsSupplierModel.UnitSale = 11;
    this.ProductsUnitsSupplierModel.UnitBuy = 11;


    this.unitcatcheckbox12 = false;
    this.unitcatcheckbox13 = false;
    this.unitcatcheckbox11 = false;
    this.enableopeningbalance = false;
    this.opensupplierenabled = false;


    this.getAllGroups();
    this.getAllProductUnits();
    this.getAllProductUnitsCats();
    this.getAllStores();
    this.getAllSuppliers();

    

    if (this.ProductsUnitsSupplierModel.Unit11) {
      this.ProductsUnitsSupplierModel.UnitCat11 = 11;
      this.ProductUnitsDefault.push({ UnitCatID: this.ProductsUnitsSupplierModel.UnitCat11, UnitCat: 'الوحدة الكبرى' });
    }
    if (this.ProductsUnitsSupplierModel.Unit12) {
      this.ProductsUnitsSupplierModel.UnitCat12 = 12;
      this.ProductUnitsDefault.push({ UnitCatID: this.ProductsUnitsSupplierModel.UnitCat12, UnitCat: 'الوحدة المتوسطة' });
    }
    if (this.ProductsUnitsSupplierModel.Unit13) {
      this.ProductsUnitsSupplierModel.UnitCat13 = 13;
      this.ProductUnitsDefault.push({ UnitCatID: this.ProductsUnitsSupplierModel.UnitCat13, UnitCat: 'الوحدة الصغرى' });

    }



  }

  public addProductBasic(_productbasic: ProductBasicModel, _formGroup: FormGroup): void {

    this.productbasic = _productbasic;

    this._addproductbasicService.AddProductBasic(_productbasic).subscribe((_result: ResultProducts) => {

      this.result = _result;

      if (this.result.Status === true) {
        this.addedprdouctId = this.result.SelectedProduct.ProductID;
        this.modalRef.hide();
        this._notifierService.notify('success', this.result.Message);
        _formGroup.reset();
            } else {

        this._notifierService.notify('error', this.result.Message);
      }


    });


  }

  public addProductUnits(_productsUnitsSupplierModel: ProductsUnitsSupplierModel, _formGroup: FormGroup): void {
    this.ProductsUnitsSupplierModel = _productsUnitsSupplierModel;
    this.ProductsUnitsSupplierModel.ProductID = this.addedprdouctId;
    this.ProductsUnitsSupplierModel.UserId = this._OauthenticatedsessionServiceService.User.UserId;
    if (this.ProductsUnitsSupplierModel.ProductID) {
      if (this.ProductsUnitsSupplierModel.Unit11) {
        this.ProductsUnitsSupplierModel.UnitCat11 = this.productunitscats[0].UnitCatID;
      }
      if (this.ProductsUnitsSupplierModel.Unit12) {
        this.ProductsUnitsSupplierModel.UnitCat12 = this.productunitscats[1].UnitCatID;
      }
      if (this.ProductsUnitsSupplierModel.Unit13) {
        this.ProductsUnitsSupplierModel.UnitCat13 = this.productunitscats[2].UnitCatID;
      }

      this._addproductunitsService.AddProductunits(this.ProductsUnitsSupplierModel).subscribe((_result: ResultProductUnits) => {

        this.resultunits = _result;

        if (this.resultunits.Status === true) {
          this.ngOnInit();
          this.modalRef.hide();
          this._notifierService.notify('success', this.resultunits.Message);
          _formGroup.reset();
         
         this.addedprdouctId = 0;
         
          this.unitcatcheckbox12 = false;
          this.unitcatcheckbox13 = false;
          this.enableopeningbalance = false;
          this.opensupplierenabled = false;

        } else {
          this.modalRef.hide();

          this._notifierService.notify('error', this.result.Message);
        }


      });

    } else {
      this.modalRef.hide();

      this._notifierService.notify('error', 'من فضلك يجب ادخال اسم الصنف اولا او اختيار الصنف الذى تريد تعديل بياناته');


    }

  }

  public getAllGroups(): void {

    this._productgroups.listGroups().subscribe((_result: Resultproductgroups) => {

      this.productgroups = _result.GroupsList;

    });

  }
  public getAllProductUnits(): void {

    this._productunits.listproductunits().subscribe((_result: ResultProductUnits) => {


      
      this.productunits = _result.ProductsUnitsList;

    });

  }
  public getAllProductUnitsCats(): void {

    this._productunitscats.listproductunitscats().subscribe((_result: ResultProductUnitsCats) => {

      this.productunitscats = _result.ProductsUnitsCatsList;

      

    });

  }
  public getAllStores(): void {

    this._liststoresService.listStores().subscribe((_result: Resultstores) => {

      this.ProductStores = _result.StoresList;

    });

  }
  public getAllSuppliers(): void {

    this._listsuppliersService.ListSuppliers().subscribe((_result: ResultSuppliers) => {

      this.Suppliers = _result.SuppliersList;

    });

  }
  public changeUnitCat12(): void {
    this.unitcatcheckbox12 = !this.unitcatcheckbox12;
    if (this.unitcatcheckbox12 === false) {
      if (this.ProductsUnitsSupplierModel.Unit12) {
        this.ProductUnitsDefault.splice(this.ProductUnitsDefault.lastIndexOf(this.ProductUnitsDefault.find(x => x.UnitCatID === 12)), 1);
      }
      this.ProductsUnitsSupplierModel.Unit12 = null;
      this.ProductsUnitsSupplierModel.ChangeNum12 = null;

    }







  }
  public changeUnitCat11(): void {

    this.unitcatcheckbox11 = !this.unitcatcheckbox11;


  }
  public changeUnitCat13(): void {

    this.unitcatcheckbox13 = !this.unitcatcheckbox13;
    if (this.unitcatcheckbox13 === false) {
      if (this.ProductsUnitsSupplierModel.Unit13) {
        this.ProductUnitsDefault.splice(this.ProductUnitsDefault.lastIndexOf(this.ProductUnitsDefault.find(x => x.UnitCatID === 13)), 1);
      }
      this.ProductsUnitsSupplierModel.Unit13 = null;
      this.ProductsUnitsSupplierModel.ChangeNum13 = null;

    }

  }

  public changeUnitCat12buyorsale() {
    if (this.ProductsUnitsSupplierModel.Unit12) {
      this.ProductsUnitsSupplierModel.UnitCat12 = 12;
      if (this.ProductUnitsDefault.find(x => x.UnitCatID === 12)) {
      } else {
        this.ProductUnitsDefault.push({ UnitCatID: this.ProductsUnitsSupplierModel.UnitCat12, UnitCat: 'الوحدة المتوسطة' });

      }


    }
  }
  public changeUnitCat13buyorsale() {
    if (this.ProductsUnitsSupplierModel.Unit13) {
      this.ProductsUnitsSupplierModel.UnitCat13 = 13;
      if (this.ProductUnitsDefault.find(x => x.UnitCatID === 13)) {
      } else {
        this.ProductUnitsDefault.push({ UnitCatID: this.ProductsUnitsSupplierModel.UnitCat13, UnitCat: 'الوحدة الصغرى ' });

      }


    }
  }

  public openbalance(): void {
    this.enableopeningbalance = !this.enableopeningbalance;
    this.ProductsUnitsSupplierModel.OpeningNum = null;
    this.ProductsUnitsSupplierModel.StoreId = null;
    this.ProductsUnitsSupplierModel.UnitCatId = null;

  }
  public opensupplier(): void {
    this.opensupplierenabled = !this.opensupplierenabled;
    this.ProductsUnitsSupplierModel.SelectedProductSuppliers = null;


  }
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public Refresh() {
    this.ngOnInit();
  }
}
