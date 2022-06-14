import { AddEmployeeModel } from 'src/app/models/employees';
import { UploademployeeimageService } from './../../services/employees/uploademployeeimage.service';
import { ApiurlService } from './../../services/general/apiurl.service';
import { Component, OnInit, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, Form, FormControl } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { AddemployeeService } from '../../services/employees/addemployee.service';
import { ResultAddEmployee } from '../../models/employees';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  public actionname: string;
  @ViewChild('pic') pic: ElementRef;
  public fileList: FileList;
  public addEmployeeModel: AddEmployeeModel;
  public imagepreview: string;
  public modalRef: BsModalRef;

  constructor(

    private _apiurlService: ApiurlService,
    private _uploademployeeimageService: UploademployeeimageService,
    private _notifierService: NotifierService,
    private modalService: BsModalService,
    private _addemployeeService: AddemployeeService



  ) {
  }

  ngOnInit() {

    this.actionname = this._apiurlService.apiUrl.concat('/api/EmployeesApi/AddEmployee');
    this.fileList = null;
    this.addEmployeeModel = new AddEmployeeModel();
    this.imagepreview = './assets/images/user.jpg';
  }

  public AddEmployee(_formgroup: FormGroup): void {
    this.fileList = this.pic.nativeElement.files;
    if (this.fileList.length > 0) {
      // tslint:disable-next-line:prefer-const
      let file: File = this.fileList[0];
      // tslint:disable-next-line:prefer-const
      let _formdata: FormData = new FormData();
      this._uploademployeeimageService.UploadEmployeeImage(_formdata).subscribe((_result: any) => {

        if (_result != null || _result !== '') {

          this.addEmployeeModel.Image = _result;

          this._addemployeeService.AddEmployee(this.addEmployeeModel).subscribe((_resultadd: ResultAddEmployee) => {

            if (_resultadd.Status === true) {
              this.modalRef.hide();
              this._notifierService.notify('success', _resultadd.Message);
              _formgroup.reset();
              this.ngOnInit();

            } else {
              this.modalRef.hide();

              this._notifierService.notify('error', _resultadd.Message);

            }
          });
        } else {

          this.modalRef.hide();

          this._notifierService.notify('error', 'من فضلك يجب اختيار الصورة صحيحة  وفقا للمواصفات الصحيحة');
        }
      });
    } else {
      this.addEmployeeModel.Image = '';

      this._addemployeeService.AddEmployee(this.addEmployeeModel).subscribe((_resultadd: ResultAddEmployee) => {

        if (_resultadd.Status === true) {
          this.modalRef.hide();
          this._notifierService.notify('success', _resultadd.Message);
          _formgroup.reset();
          this.ngOnInit();

        } else {
          this.modalRef.hide();

          this._notifierService.notify('error', _resultadd.Message);

        }
      });

    }
  }

  public ImagePreviewChange(_event: any): void {
    if (_event.target.files && _event.target.files[0]) {
      // tslint:disable-next-line:prefer-const
      let reader = new FileReader();

      reader.readAsDataURL(_event.target.files[0]); // read file as data url

      reader.onload = (_eventload: any) => { // called once readAsDataURL is completed
        this.imagepreview = _eventload.target.result;
      };
    }
  }
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
