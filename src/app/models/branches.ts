export class Branches {
}
export class ResultListBranches {
    public Status: boolean;
    public Message: string;
    public BranchesList: ListBranchesModel[];
  }
  export class ListBranchesModel {
    public BranchID: number;
    public Name: string;
    public DeviceIP: string;
    public Address: string;
    public Active: boolean;

  }
  export class AddBranchModel {
      public Name: string ;
      public DeviceIP: string ;
      public Address: string ;

  }
  export class ResultAddBranch {
      public Status: boolean ;
      public Message: string ;

  }
