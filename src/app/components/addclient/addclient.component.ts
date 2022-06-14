import { FormGroup} from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { AddCustomerModel, ResultAddCustomer } from './../../models/customers';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { AddcustomerService } from '../../services/customers/addcustomer.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {
  public modalRef: BsModalRef;

  public addCustomer: AddCustomerModel;
  constructor(

    private _addcustomerService: AddcustomerService,
    private modalService: BsModalService,
    private _notifierService: NotifierService

  ) {

    this.addCustomer = new AddCustomerModel();
  }

  ngOnInit() {
  }

  public AddCustomer(_customer: AddCustomerModel, _formGroup: FormGroup): void {


    this._addcustomerService.AddCustomer(_customer).subscribe((_result: ResultAddCustomer) => {
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

}
