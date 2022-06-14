import { User } from 'src/app/models/user';
import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ListsuppliersService } from 'src/app/services/suppliers/listsuppliers.service';
import { NotifierService } from 'angular-notifier';
import { DeletesupplierService } from 'src/app/services/suppliers/deletesupplier.service';
import { Router } from '@angular/router';
import { ResultListEmployees, ListEmployeesModel, ResultDeletEmployee } from 'src/app/models/employees';
import { ListemployeesService } from 'src/app/services/employees/listemployees.service';
import { DeleteemployeeService } from 'src/app/services/employees/deleteemployee.service';
import { OauthenticatedsessionService } from 'src/app/services/general/Oauthenticatedsession.Service';
@Component({
  selector: 'app-employeeslist',
  templateUrl: './employeeslist.component.html',
  styleUrls: ['./employeeslist.component.css']
})
export class EmployeeslistComponent implements OnInit {
  public authenticatedUser: User;
  public resultListEmployees: ResultListEmployees;
  public employeeList: ListEmployeesModel[];
  public selectedEmployee: ListEmployeesModel;
  public p: any;
  @ViewChild('ButtonAdd') buttonAdd: ElementRef;
  // public checked: boolean;
  public modalRef: BsModalRef;
  public SearchEmployees: string;

  constructor(
    private _listemployeessService: ListemployeesService,
    private _notifierService: NotifierService,
    private modalService: BsModalService,
    private _deleteemployeeService: DeleteemployeeService,
    private _oauthenticatedsessionService: OauthenticatedsessionService,
    private router: Router
  ) {


  }

  ngOnInit() {
    this.SearchEmployees = '';
    this.employeeList = [];
    this.resultListEmployees = new ResultListEmployees();
    this.selectedEmployee = null;
    this.getAllEmployees();
    this.getLoggedUser();


  }
/**
   * getLoggedUser
   */
  public getLoggedUser() {
    this.authenticatedUser = this._oauthenticatedsessionService.User;
  }
  public getAllEmployees(): void {

    this._listemployeessService.ListEmployees().subscribe((_result: ResultListEmployees) => {
      if (_result.EmployeesList.length == 0 || _result.EmployeesList == null) {

        this.employeeList = [];
      } else {
        this.employeeList = _result.EmployeesList;
      }
    });

  }

  public SelectRow(_supplier: ListEmployeesModel): void {

    this.selectedEmployee = _supplier;
    this.buttonAdd.nativeElement.disabled = true;

  }

  public RowSelected(_supplier: ListEmployeesModel): boolean {

    if (!this.selectedEmployee) {
      return false;
    }
    return this.selectedEmployee.EmpID === _supplier.EmpID ? true : false;

  }

  public RemoveSelection(_supplier: ListEmployeesModel) {

    this.selectedEmployee = null;
    this.buttonAdd.nativeElement.disabled = false;

  }


  public openModal(template: TemplateRef<any>) {


    if (this.RowSelected(this.selectedEmployee) === true) {
      this.modalRef = this.modalService.show(template);
    } else if (this.RowSelected(this.selectedEmployee) === false) {
      this._notifierService.notify('error', 'من فضلك يجب تحديد موظف واحد على الاقل للقيام بعملية الحذف');

    } else {

      this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');


    }
  }
  public DeleteEmployee(_supplier: ListEmployeesModel) {

    this._deleteemployeeService.DeleteEmployee(_supplier).subscribe((_result: ResultDeletEmployee) => {

      if (_result.Status === true) {
        this.modalRef.hide();
        this._notifierService.notify('success', _result.Message);
        this.ngOnInit();

      } else {
        this.modalRef.hide();
        this._notifierService.notify('error', _result.Message);

      }
    }
    );

  }

  public goToEdit(_supplier: ListEmployeesModel) {

    if (this.RowSelected(this.selectedEmployee) === true) {
      this.router.navigate(['fileemployee', this.selectedEmployee.EmpID]);
    } else if (this.RowSelected(this.selectedEmployee) === false) {
      this._notifierService.notify('error', 'من فضلك يجب تحديد موظف واحد على الاقل للقيام بعملية التعديل ');

    } else {

      this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');


    }


  }
  public Refresh() {
    this.ngOnInit();
  }

}
