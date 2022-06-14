import { AddemployeecommisionpunishcancelService } from './../../services/employees/addemployeecommisionpunishcancel.service';
import { ListemployeeallsalaryService } from './../../services/employees/listemployeeallsalary.service';
import { AddemployeesalaryService } from './../../services/employees/addemployeesalary.service';
import { ListemployeesdebitstokeService } from './../../services/employees/listemployeesdebitstoke.service';
import { AddemployeepayeddebitsService } from './../../services/employees/addemployeepayeddebits.service';
import { AddemployeecommisionpunishService } from './../../services/employees/addemployeecommisionpunish.service';
import { EditemployeeService } from './../../services/employees/editemployee.service';
import { ListemployeesService } from './../../services/employees/listemployees.service';
import {
  ListEmployeesModel, AddEmployeeDebitsModel,
  AddEmployeeGiveMoneyModel, AddEmployeePayDebitsDirecteModel,
  ListDebitsTokenModel, ResultListDebitsToke, ListCommisionAndPunishByDateModel,
  AddEmployeeAddSalaryModel, ListEmployeeSalaryModel, ResultListAllEmployeeSalary,
   ListEmployeeGivedMoneyModel, ResultListAllEmployeeGivedMoney, AddEmployeeCancelCommisionAndPunishModel,
    ResultDeletEmployee
} from './../../models/employees';
import { EmployeeComPunishModel } from './../../models/EmployeeComPunishModel';
import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { AddEmployeeModel, ResultAddEmployee } from 'src/app/models/employees';
import { ApiurlService } from 'src/app/services/general/apiurl.service';
import { UploademployeeimageService } from 'src/app/services/employees/uploademployeeimage.service';
import { NotifierService } from 'angular-notifier';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import {
  ResultListEmployees, ResultListEmployeeComPunishReasons,
  AddEmployeeComPunModel, ResultListCommisionAndPunishByDate
} from '../../models/employees';
import { AddemployeedebitsService } from 'src/app/services/employees/addemployeedebits.service';
import { ListSalesPointsModel, ResultListSalesPoints } from 'src/app/models/salespoints';
import { ListsalespointsService } from 'src/app/services/salespoints/listsalespoints.service';
import { OauthenticatedsessionService } from '../../services/general/Oauthenticatedsession.Service';
import { ListemployeecompunreasonsService } from '../../services/employees/listemployeecompunreasons.service';
import { AddemployeegivemoneyService } from '../../services/employees/addemployeegivemoney.service';
import { ListemployeesdebitspayedService } from 'src/app/services/employees/listemployeesdebitspayed.service';
import { ListemployeescompunbydateService } from '../../services/employees/listemployeescompunbydate.service';
import { INgxMyDpOptions } from 'ngx-mydatepicker';
import { forEach } from '@angular/router/src/utils/collection';
import { ListemployeeallgivedmoneyService } from 'src/app/services/employees/listemployeeallgivedmoney.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ListAllCanceldCommisionAndPunishCancled, ResultListCommisionAndPunishCanceld } from '../../models/employees';
import { ListemployeescompuncanceldService } from 'src/app/services/employees/listemployeescompuncanceld.service';
import { AddActivityModel, ResultAddActivityRecord, AddSalesPointsNotificationModel } from 'src/app/models/notificationsactivities';
import { CreateactivityService } from 'src/app/services/notificationsactivities/createactivity.service';
import { GetsalespointbalanceService } from 'src/app/services/salespoints/getsalespointbalance.service';
import { CreatesalespointsnotificationService } from 'src/app/services/notificationsactivities/createsalespointsnotification.service';
@Component({
  selector: 'app-fileemployee',
  templateUrl: './fileemployee.component.html',
  styleUrls: ['./fileemployee.component.css']
})
export class FileemployeeComponent implements OnInit {
  public actionname: string;
  @ViewChild('pic') pic: ElementRef;
  @ViewChild('AddEmployeeDebitsForm') AddEmployeeDebitsForm: NgForm;
  public p: any;
  public s: any;
  public m: any;
  public n: any;
  public q: any;
  public d: any;


  public addActivityModel: AddActivityModel;
  public addSalesPointsNotificationModel: AddSalesPointsNotificationModel;
  public fileList: FileList;
  public editEmployeeModel: ListEmployeesModel;
  public addEmployeeModel: AddEmployeeModel;
  public imagepreview: string;
  public addEmployeeDebitsModel: AddEmployeeDebitsModel;
  public activeSalesPoints: ListSalesPointsModel[];
  public comPunReasons: EmployeeComPunishModel[];
  public addEmployeeComPunModel: AddEmployeeComPunModel;
  public addEmployeePunModel: AddEmployeeComPunModel;
  public addEmployeeGiveMoneyModel: AddEmployeeGiveMoneyModel;
  public addEmployeePayDebitsDirecteModel: AddEmployeePayDebitsDirecteModel;
  public listDebitsTokenModel: ListDebitsTokenModel[];
  public listEmployeeSalaryModel: ListEmployeeSalaryModel[];
  public listEmployeeGivedMoneyModel: ListEmployeeGivedMoneyModel[];
  public listDebitsPayedModel: ListDebitsTokenModel[];
  public listCommisionAndPunishByDateModel: ListCommisionAndPunishByDateModel[];
  public listAllCanceldCommisionAndPunishCancled: ListAllCanceldCommisionAndPunishCancled[];
  public selectedEmployee: ListDebitsTokenModel;
  public debitsTokenTotal: number;
  public debitsPayedTotal: number;
  public debitsResetTotal: number;
  public punishTotal: number;
  public DateFrom: Date;
  public DateTo: Date;
  public DateToObject: any;
  public DateFromObject: any;
  public addEmployeeAddSalaryModel: AddEmployeeAddSalaryModel;
  public modalRef: BsModalRef;
  public selectedActiontoCancel: ListCommisionAndPunishByDateModel;
  public SalesPointToBalance: number;

  myOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'mmm d, yyyy',
  };

  constructor(
    private _apiurlService: ApiurlService,
    private _uploademployeeimageService: UploademployeeimageService,
    private _notifierService: NotifierService,
    private _editemployeeService: EditemployeeService,
    private _addemployeedebitsService: AddemployeedebitsService,
    private _addemployeecommisionpunishService: AddemployeecommisionpunishService,
    private _activatedRoute: ActivatedRoute,
    private _listsalespointsService: ListsalespointsService,
    private _OauthenticatedsessionServiceService: OauthenticatedsessionService,
    private _listemployeesService: ListemployeesService,
    private _listemployeesdebitstokeService: ListemployeesdebitstokeService,
    private _listemployeesdebitspayedService: ListemployeesdebitspayedService,
    private _listemployeecompunreasonsService: ListemployeecompunreasonsService,
    private _listemployeescompunbydateService: ListemployeescompunbydateService,
    private _listemployeeallsalaryService: ListemployeeallsalaryService,
    private _listemployeeallgivedmoneyService: ListemployeeallgivedmoneyService,
    private _listemployeescompuncanceldService: ListemployeescompuncanceldService,
    private _addemployeegivemoneyService: AddemployeegivemoneyService,
    private _addemployeesalaryService: AddemployeesalaryService,
    private _addemployeecommisionpunishcancelService: AddemployeecommisionpunishcancelService,
    private modalService: BsModalService,
    private _addemployeepayeddebitsService: AddemployeepayeddebitsService,
    private _getsalespointbalanceService: GetsalespointbalanceService,
    private _createactivityService: CreateactivityService ,
    private _createsalespointsnotificationService: CreatesalespointsnotificationService

  ) { }

  ngOnInit() {
    this.addActivityModel = new AddActivityModel();
    this.addSalesPointsNotificationModel = new AddSalesPointsNotificationModel ();
    this.editEmployeeModel = new ListEmployeesModel();
    this.listDebitsTokenModel = [];
    this.listDebitsPayedModel = [];
    this.listEmployeeSalaryModel = [];
    this.listEmployeeGivedMoneyModel = [] ;
    this.listCommisionAndPunishByDateModel = [];
    this.addEmployeeModel = new AddEmployeeModel();
    this.addEmployeeDebitsModel = new AddEmployeeDebitsModel();
    this.addEmployeeComPunModel = new AddEmployeeComPunModel();
    this.addEmployeePunModel = new AddEmployeeComPunModel();
    this.addEmployeeGiveMoneyModel = new AddEmployeeGiveMoneyModel();
    this.addEmployeePayDebitsDirecteModel = new AddEmployeePayDebitsDirecteModel();
    this.selectedActiontoCancel = new ListCommisionAndPunishByDateModel();
    this.debitsPayedTotal = 0;
    this.debitsResetTotal = 0;
    this.debitsTokenTotal = 0;
    this.addEmployeeAddSalaryModel = new AddEmployeeAddSalaryModel();
    this.addEmployeeAddSalaryModel.Comm = 0;
    this.addEmployeeAddSalaryModel.Punish = 0;
    this.addEmployeeAddSalaryModel.PayForDebit = 0;
    this.activeSalesPoints = [];
    this.comPunReasons = [];
    this.listAllCanceldCommisionAndPunishCancled = [] ;


    this._activatedRoute.paramMap.subscribe(
      (params: Params) => {

        this.editEmployeeModel.EmpID = params.get('EmpID');

        this.addEmployeeModel.EmpID = params.get('EmpID');

        this.addEmployeeDebitsModel.EmpID = params.get('EmpID');
        this.addEmployeeComPunModel.EmpID = params.get('EmpID');
        this.addEmployeePunModel.EmpID = params.get('EmpID');
        this.addEmployeeGiveMoneyModel.EmpID = params.get('EmpID');
        this.addEmployeePayDebitsDirecteModel.EmpID = params.get('EmpID');


      });
    this.fileList = null;
    this.GetEmployeeDetails();
    this.getAllActiveSalesPoints();
    this.getAllEmployeeComPunishReasons();
    this.GetAllDebitsToken();
    this.GetAllDebitsPayed();
    this.GetAllCommisionAndPunishByDate();
    this.GetAllEmployeeSalary();
    this.GetAllEmployeeGivedMoney();
    this.GetAllCanceldCommisionAndPunishCancled();
    this.imagepreview = this.editEmployeeModel.PPCard;
    this.DateFromObject = {
      'date': {
        'year': 2000,
        'month': 1,
        'day': 1
      },
      'jsdate': '2000-01-01T22:00:00.000Z',
      'formatted': 'Jan 1, 2018'
    };
    this.DateToObject = {
      'date': {
        'year': 2030,
        'month': 1,
        'day': 1
      },
      'jsdate': '2030-01-01T22:00:00.000Z',
      'formatted': 'Jan 1, 2030'
    };


    this.DateFrom = this.DateFromObject.jsdate;
    this.DateTo = this.DateToObject.jsdate;
  }
  public GetDateFrom(event) {

    this.DateFrom = this.DateFromObject.jsdate;
  }
  public GetDateTo(event) {

    this.DateTo = this.DateToObject.jsdate;
  }

  public EditEmployee(_event: Event, _formgroup: FormGroup): void {
    // _event.preventDefault();
    this.fileList = this.pic.nativeElement.files;
    if (this.fileList.length > 0) {
      // tslint:disable-next-line:prefer-const
      let file: File = this.fileList[0];
      // tslint:disable-next-line:prefer-const
      let _formdata: FormData = new FormData();

      _formdata.append('pic', file, file.name);
      this._uploademployeeimageService.UploadEmployeeImage(_formdata).subscribe((_result: any) => {

        if (_result != null || _result !== '') {

          this.addEmployeeModel.Image = _result;

          this._editemployeeService.EditEmployee(this.addEmployeeModel).subscribe((_resultadd: ResultAddEmployee) => {

            if (_resultadd.Status === true) {
              this.modalRef.hide();

              this._notifierService.notify('success', _resultadd.Message);
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
      this.addEmployeeModel.Image = this.editEmployeeModel.PPCard;
      this._editemployeeService.EditEmployee(this.addEmployeeModel).subscribe((_resultadd: ResultAddEmployee) => {

        if (_resultadd.Status === true) {
          this.modalRef.hide();

          this._notifierService.notify('success', _resultadd.Message);
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
  public GetEmployeeDetails(): void {
    this._listemployeesService.ListEmployees().subscribe((_result: ResultListEmployees) => {

      _result.EmployeesList.forEach(element => {
        if (element.EmpID == this.editEmployeeModel.EmpID) {

          this.editEmployeeModel = element;
          
          if (element.PPCard === null || element.PPCard === '/Assets/Employee/' ) {
            this.imagepreview = './assets/images/user.jpg';
          } else {
            this.editEmployeeModel.PPCard = this._apiurlService.apiUrl + element.PPCard;
            this.imagepreview = this.editEmployeeModel.PPCard ;
          }
          this.addEmployeeModel.Name = element.EmpName;
          this.addEmployeeModel.Mob = element.Mobile;
          this.addEmployeeModel.Salary = element.Salary;
          this.addEmployeeModel.EmpID = element.EmpID;
          this.addEmployeeModel.IsSalesMan = element.IsSalesMan;
        }


      });


    });

  }
  public AddEmployeeDebits(_formGroup: NgForm): void {

    this.addEmployeeDebitsModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;

    this._addemployeedebitsService.AddEmployeeDebits(this.addEmployeeDebitsModel)
      .subscribe((_result: ResultAddEmployee) => {

        if (_result.Status === true) {
          this.CreateActivityRecordDebits();
          this.modalRef.hide();

          this._notifierService.notify('success', _result.Message);

          _formGroup.reset(this.AddEmployeeDebitsForm);

        } else {
          this.modalRef.hide();

          this._notifierService.notify('error', _result.Message);


        }

      });
  }
  public AddEmployeeCommision(_formGroup: NgForm): void {

    this.addEmployeeComPunModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
    this.addEmployeeComPunModel.ReasonID = 1;

    this._addemployeecommisionpunishService.AddEmployeeCommisionPunish(this.addEmployeeComPunModel)
      .subscribe((_result: ResultAddEmployee) => {

        if (_result.Status === true) {
          this.CreateActivityRecordCommision();
          this.modalRef.hide();

          this._notifierService.notify('success', _result.Message);

          _formGroup.reset();

        } else {
          this.modalRef.hide();

          this._notifierService.notify('error', _result.Message);


        }

      });

  }
  public AddEmployeePunish(_formGroup: NgForm): void {

    this.addEmployeePunModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
    this.addEmployeePunModel.ReasonID = 2;

    this._addemployeecommisionpunishService.AddEmployeeCommisionPunish(this.addEmployeePunModel)
      .subscribe((_result: ResultAddEmployee) => {

        if (_result.Status === true) {
          this.CreateActivityRecordForPunish();
          this.modalRef.hide();

          this._notifierService.notify('success', _result.Message);

          _formGroup.reset();

        } else {
          this.modalRef.hide();

          this._notifierService.notify('error', _result.Message);


        }

      });

  }
  public AddEmployeeGiveMoney(_formGroup: NgForm): void {

    this.addEmployeeGiveMoneyModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
    this.addEmployeeGiveMoneyModel.ReasonID = 3;

    this._addemployeegivemoneyService.AddEmployeeGiveMoney(this.addEmployeeGiveMoneyModel)
      .subscribe((_result: ResultAddEmployee) => {

        if (_result.Status === true) {
          this.CreateActivityRecordForGiveMoney();
          this.modalRef.hide();

          this._notifierService.notify('success', _result.Message);

          _formGroup.reset();

        } else {
          this.modalRef.hide();

          this._notifierService.notify('error', _result.Message);


        }

      });

  }
  public AddEmployeePayDebitsDirecte(_formGroup: NgForm): void {

    this.addEmployeePayDebitsDirecteModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
    this.addEmployeePayDebitsDirecteModel.SalesPointID = 1;
    this._addemployeepayeddebitsService.AddEmployeePayedDebits(this.addEmployeePayDebitsDirecteModel)
      .subscribe((_result: ResultAddEmployee) => {

        if (_result.Status === true) {
          this.CreateActivityRecordForPayDebitsDirecte();
          this.modalRef.hide();

          this._notifierService.notify('success', _result.Message);

          _formGroup.reset();

        } else {
          this.modalRef.hide();

          this._notifierService.notify('error', _result.Message);


        }

      });

  }
  public AddEmployeeSalary(_formGroup: NgForm): void {

    this.addEmployeeAddSalaryModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
    this.addEmployeeAddSalaryModel.EmpID = this.editEmployeeModel.EmpID;


    this._getsalespointbalanceService
    .GetSalesPointBalance(this.addEmployeeAddSalaryModel.SalesPointID)
    .subscribe((_result: ResultListSalesPoints) => {
      this.SalesPointToBalance = _result.SalesPointsList[0].Balance;
      if (this.SalesPointToBalance <= 10) {
        this.CreateSalesPointsNotificationRecord();
      }
      if (this.SalesPointToBalance <= 0) {
        this._notifierService.notify(
          'error',
          'لا يمكنك الدفع من خلال نقطة بيع التى قمت ياختيارها  رصيد نقطة البيع فارغ'
        );
        this.modalRef.hide();
      }
      else {
        this._addemployeesalaryService.AddEmployeeSalary(this.addEmployeeAddSalaryModel)
        .subscribe((_result: ResultAddEmployee) => {
  
          if (_result.Status === true) {
            this.CreateActivityRecordForSalary();
            this.modalRef.hide();
  
            this._notifierService.notify('success', _result.Message);
          } else {
            this.modalRef.hide();
  
            this._notifierService.notify('error', _result.Message);
  
  
          }
  
        });
      }
    });

  }
  public GetAllCommisionAndPunishByDate() {
    this._listemployeescompunbydateService
      .ListCommisionAndPunishByDate(this.addEmployeeDebitsModel.EmpID)
      .subscribe((_result: ResultListCommisionAndPunishByDate) => {
        this.addEmployeeAddSalaryModel.BasicSalary = this.editEmployeeModel.Salary;
          this.listCommisionAndPunishByDateModel = _result.CommisionAndPunishByDateList;
          console.log(this.listCommisionAndPunishByDateModel);
        if (_result.CommisionAndPunishByDateList == null) {
          this.listCommisionAndPunishByDateModel = [];
        } else {

          this.listCommisionAndPunishByDateModel.forEach(element => {

            if (element.ReasonID == 1) {

              this.addEmployeeAddSalaryModel.Comm += element.MoneyValue;

            } else if (element.ReasonID == 2) {
              this.addEmployeeAddSalaryModel.Punish += element.MoneyValue;
            }

          });

        }
      });
  }
  public GetAllEmployeeSalary() {
    this._listemployeeallsalaryService
      .ListEmployeeAllSalary(this.editEmployeeModel.EmpID)
      .subscribe((_result: ResultListAllEmployeeSalary) => {

        if (_result.AllEmployeeSalaryList == null) {
          this.listEmployeeSalaryModel = [];
        } else {
          this.listEmployeeSalaryModel = _result.AllEmployeeSalaryList;
        }
      });
  }

  public GetAllEmployeeGivedMoney() {
    this._listemployeeallgivedmoneyService
      .ListEmployeeAllGivedMoney(this.editEmployeeModel.EmpID)
      .subscribe((_result: ResultListAllEmployeeGivedMoney) => {

        if (_result.AllEmployeeGivedMoneyList == null) {
          this.listEmployeeGivedMoneyModel = [];
        } else {
          this.listEmployeeGivedMoneyModel = _result.AllEmployeeGivedMoneyList;
        }
      });
  }
  public getAllActiveSalesPoints() {
    this._listsalespointsService
      .ListAllSalesPoints()
      .subscribe((_result: ResultListSalesPoints) => {
        this.activeSalesPoints = _result.SalesPointsList;
      });
  }
  public getAllEmployeeComPunishReasons() {
    this._listemployeecompunreasonsService
      .ListEmployeeComPunReasons()
      .subscribe((_result: ResultListEmployeeComPunishReasons) => {
        this.comPunReasons = _result.ListEmployeeComPunReasons;
      });
  }
  public GetAllDebitsToken() {
    this._listemployeesdebitstokeService
      .ListDebitsToken(this.editEmployeeModel.EmpID)
      .subscribe((_result: ResultListDebitsToke) => {
        if (_result.DebitsTokeList == null) {
          this.listDebitsTokenModel = [];
        } else {

          this.listDebitsTokenModel = _result.DebitsTokeList;
          this.listDebitsTokenModel.forEach(element => {

            this.debitsTokenTotal += element.MoneyValue;

          });
        }
      });
  }
  public GetAllDebitsPayed() {
    this._listemployeesdebitspayedService
      .ListDebitsPayed(this.editEmployeeModel.EmpID)
      .subscribe((_result: ResultListDebitsToke) => {
        if (_result.DebitsTokeList == null) {
          this.listDebitsPayedModel = [];
        } else {

          this.listDebitsPayedModel = _result.DebitsTokeList;
          this.listDebitsPayedModel.forEach(element => {

            this.debitsPayedTotal += element.MoneyValue;

          });
        }
      });
  }

  public SelectRow(_supplier: ListDebitsTokenModel): void {

    this.selectedEmployee = _supplier;

  }

  public RowSelected(_supplier: ListDebitsTokenModel): boolean {

    if (!this.selectedEmployee) {
      return false;
    }
    return this.selectedEmployee.ActionID === _supplier.ActionID ? true : false;

  }

  public RemoveSelection(_supplier: ListDebitsTokenModel) {

    this.selectedEmployee = null;
  }
  public openModal(template: TemplateRef<any>, _item: ListCommisionAndPunishByDateModel) {
      this.modalRef = this.modalService.show(template);
      this.selectedActiontoCancel.ActionID = _item.ActionID;
  }
  public AddEmployeeCancelCommisionAndPunish() {

    const _addEmployeeCancelCommisionAndPunishModel: AddEmployeeCancelCommisionAndPunishModel =
    new AddEmployeeCancelCommisionAndPunishModel();
    _addEmployeeCancelCommisionAndPunishModel.ActionID = this.selectedActiontoCancel.ActionID;
    _addEmployeeCancelCommisionAndPunishModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
    this._addemployeecommisionpunishcancelService.AddEmployeeCancelCommisionAndPunish(_addEmployeeCancelCommisionAndPunishModel)
    .subscribe((_result: ResultDeletEmployee) => {

      if (_result.Status === true) {
        this.CreateActivityRecordForCancleCommisionAndPunish();
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
  public GetAllCanceldCommisionAndPunishCancled() {
    this._listemployeescompuncanceldService
      .ListEmployeesCommisionPunishCanceld(this.editEmployeeModel.EmpID)
      .subscribe((_result: ResultListCommisionAndPunishCanceld) => {
        if (_result.CommisionAndPunishCanceldList == null) {
          this.listAllCanceldCommisionAndPunishCancled = [];
        } else {
          this.listAllCanceldCommisionAndPunishCancled = _result.CommisionAndPunishCanceldList;
        }
      });
  }
  public openEditModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
}
 public CreateActivityRecordForSalary() {
    this.addActivityModel.DateSubmit = new Date();
    this.addActivityModel.Read = true;
    this.addActivityModel.Type = '     صرف راتب موظف';
    this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId ;
    this.addActivityModel.POS = this.addEmployeeAddSalaryModel.SalesPointID;
    this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe((_resultactivity: ResultAddActivityRecord) => {
  this._notifierService.notify(
    'success',
    _resultactivity.Message
  );
});
  }
  public CreateActivityRecordForCancleCommisionAndPunish() {
    this.addActivityModel.DateSubmit = new Date();
    this.addActivityModel.Read = true;
    this.addActivityModel.Type = '       الغاء معاملة مادية موظف';
    this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId ;
    this.addActivityModel.POS = 1;
    this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe((_resultactivity: ResultAddActivityRecord) => {
  this._notifierService.notify(
    'success',
    _resultactivity.Message
  );
});
  }
  public CreateActivityRecordForPayDebitsDirecte() {
    this.addActivityModel.DateSubmit = new Date();
    this.addActivityModel.Read = true;
    this.addActivityModel.Type = '         تسديد سلفة مباشرة موظف';
    this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId ;
    this.addActivityModel.POS = 1;
    this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe((_resultactivity: ResultAddActivityRecord) => {
  this._notifierService.notify(
    'success',
    _resultactivity.Message
  );
});
  }
  public CreateActivityRecordForGiveMoney() {
    this.addActivityModel.DateSubmit = new Date();
    this.addActivityModel.Read = true;
    this.addActivityModel.Type = '           صرف قيمة مالية موظف';
    this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId ;
    this.addActivityModel.POS = 1;
    this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe((_resultactivity: ResultAddActivityRecord) => {
  this._notifierService.notify(
    'success',
    _resultactivity.Message
  );
});
  }
  public CreateActivityRecordForPunish() {
    this.addActivityModel.DateSubmit = new Date();
    this.addActivityModel.Read = true;
    this.addActivityModel.Type = ' إعطاء خصم موظف';
    this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId ;
    this.addActivityModel.POS = 1;
    this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe((_resultactivity: ResultAddActivityRecord) => {
  this._notifierService.notify(
    'success',
    _resultactivity.Message
  );
});
  }
  public CreateActivityRecordCommision() {
    this.addActivityModel.DateSubmit = new Date();
    this.addActivityModel.Read = true;
    this.addActivityModel.Type = ' إعطاء مكافأة موظف';
    this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId ;
    this.addActivityModel.POS = 1;
    this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe((_resultactivity: ResultAddActivityRecord) => {
  this._notifierService.notify(
    'success',
    _resultactivity.Message
  );
});
  }
  public CreateSalesPointsNotificationRecord() {
    this.addSalesPointsNotificationModel.DateSubmit = new Date();
    this.addSalesPointsNotificationModel.Read = true;
    this.addSalesPointsNotificationModel.POS = this.addEmployeeAddSalaryModel.SalesPointID;
    this._createsalespointsnotificationService
      .CreateSalesPointsNotificationRecord(this.addSalesPointsNotificationModel)
      .subscribe((_resultactivity: ResultAddActivityRecord) => {
        this._notifierService.notify('success', _resultactivity.Message);
      });
  }

  public CreateActivityRecordDebits() {
    this.addActivityModel.DateSubmit = new Date();
    this.addActivityModel.Read = true;
    this.addActivityModel.Type = ' إعطاء سلفة موظف';
    this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId ;
    this.addActivityModel.POS = 1;
    this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe((_resultactivity: ResultAddActivityRecord) => {
  this._notifierService.notify(
    'success',
    _resultactivity.Message
  );
});
  }
 public Refresh() {
    this.ngOnInit();
  }
}
