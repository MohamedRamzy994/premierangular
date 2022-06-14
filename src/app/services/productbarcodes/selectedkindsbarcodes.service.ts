import { ListTransferProductModel } from './../../models/transferkinds';
import { Injectable } from '@angular/core';
import { ListTransferInvoiceItemsModel } from '../../models/transferkinds';

@Injectable({
  providedIn: 'root'
})
export class SelectedkindsbarcodesService {

private _selectedProducts: ListTransferProductModel[];

public get SelectedProducts(): ListTransferProductModel[] {
  return this._selectedProducts ;
}


public set SelectedProducts(v: ListTransferProductModel[]) {
  this._selectedProducts = v;
}
  constructor() { }
}
