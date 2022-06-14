import { FormGroup} from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { AddSupplierModel, ResultAddSupplier } from './../../models/suppliers';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { AddsupplierService } from '../../services/suppliers/addsupplier.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
@Component({
  selector: 'app-addsupplier',
  templateUrl: './addsupplier.component.html',
  styleUrls: ['./addsupplier.component.css']
})
export class AddsupplierComponent implements OnInit {
  public modalRef: BsModalRef;

  public addSupplier: AddSupplierModel;
  constructor(

    private _addsupplierService: AddsupplierService,
    private modalService: BsModalService,
    private _notifierService: NotifierService

  ) {

    this.addSupplier = new AddSupplierModel();
  }

  ngOnInit() {
  }

  public AddSupplier(_supplier: AddSupplierModel, _formGroup: FormGroup): void {


    this._addsupplierService.AddSupplier(_supplier).subscribe((_result: ResultAddSupplier) => {
      if (_result.Status === true) {
        this.modalRef.hide();

        this._notifierService.notify('success', _result.Message);

        _formGroup.reset();

      } else {
        this.modalRef.hide();

        this._notifierService.notify('error', _result.Message);
      }



    });


  }
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  public Refresh() {
    this.ngOnInit();
  }
}
