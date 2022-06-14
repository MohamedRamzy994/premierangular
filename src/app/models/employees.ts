import { EmployeeComPunishModel } from './EmployeeComPunishModel';

export class Employees {
}

export class AddEmployeeModel {
    public EmpID?: number;
    public Name: string;
    public Mob: string;
    public Image: string;
    public Salary: number;
    public IsSalesMan: boolean;


}

export class ResultAddEmployee {
    public Status: boolean;
    public Message: string;
}

export class ListEmployeesModel {
    public EmpID: number;
    public EmpName: string;
    public Mobile: string;
    public PPCard: string;
    public Salary: number;
    public IsSalesMan: boolean;
    public Debit: number;
    public SalesDebts: number;

}
export class ResultListEmployees {
    public Status: boolean;
    public Message: string;
    public EmployeesList: ListEmployeesModel[];
}
export class ResultDeletEmployee {
    public Status: boolean;
    public Message: string;
}
export class AddEmployeeDebitsModel {
    public EmpID: number;
    public MoneyValue: number;
    public UserID: number;
    public DateSubmit: Date;
    public SalesPointID: number;

}

export class ResultListEmployeeComPunishReasons {
    public Status: boolean;
    public Message: string;
    public ListEmployeeComPunReasons: EmployeeComPunishModel[];
}
export class AddEmployeeComPunModel {
    public EmpID: number;
    public MoneyValue: number;
    public UserID: number;
    public DateSubmit: Date;
    public ReasonID: number;
    public Details: string;
}
export class AddEmployeeGiveMoneyModel {
    public EmpID: number;
    public MoneyValue: number;
    public UserID: number;
    public DateSubmit: Date;
    public ReasonID: number;
    public Details: string;
    public SalesPointID: number;
}

export class AddEmployeePayDebitsDirecteModel {
    public EmpID: number;
    public MoneyValue: number;
    public UserID: number;
    public DateSubmit: Date;
    public SalesPointID: number;
}
export class ListDebitsTokenModel {
    public ActionID: number;
    public MoneyValue: number;
    public DateSubmit: Date;
    public UserName: string;
}
export class ResultListDebitsToke {
    public Status: boolean;
    public Message: string;
    public DebitsTokeList: ListDebitsTokenModel[];
}
export class ListCommisionAndPunishByDateModel {
    public ActionID: number;
    public MoneyValue: number;
    public DateSubmit: Date;
    public UserName: string;
    public ReasonID: number;
    public Details: string;
    public Reason: string;

    
}

export class ResultListCommisionAndPunishByDate {
    public Status: boolean;
    public Message: string;
    public CommisionAndPunishByDateList: ListCommisionAndPunishByDateModel[];


}
export class AddEmployeeAddSalaryModel {
    public EmpID: number;
    public BasicSalary: number;
    public Comm: number;
    public Punish: number;
    public PayForDebit: number;
    public SalesPointID: number;
    public UserID: number;
    public DateSubmit?: Date;


}
export class ListEmployeeSalaryModel {
    public ActionID: number;
    public Commision: number;
    public Punish: number;
    public BasicSalary: number;
    public NetSalary: number;
    public PayForDebit: number;
    public DateSubmit: Date;
    public UserName: string;
    public EmpName: string;

}
export class ResultListAllEmployeeSalary {
    public Status: boolean;
    public Message: string;
    public AllEmployeeSalaryList: ListEmployeeSalaryModel[];


}

export class ListEmployeeGivedMoneyModel {
    public ActionID: number;
    public MoneyValue: number;
    public DateSubmit: Date;
    public UserName: string;
    public Details: string;
}
export class ResultListAllEmployeeGivedMoney {
    public Status: boolean;
    public Message: string;
    public AllEmployeeGivedMoneyList: ListEmployeeGivedMoneyModel[];


}
export class AddEmployeeCancelCommisionAndPunishModel {

    public ActionID: number ;
    public DateSubmit?: Date ;
    public UserID: number ;
}
export class ListAllCanceldCommisionAndPunishCancled {
    public ActionID: number ;
    public Reason: string ;
    public MoneyValue: number ;
    public UserName: string ;
    public DateCreate: Date ;
    public DateCanceld: Date ;
    public Details: string ;

}
export class ResultListCommisionAndPunishCanceld {
    public Status: boolean;
    public Message: string;
    public CommisionAndPunishCanceldList: ListAllCanceldCommisionAndPunishCancled[];


}



