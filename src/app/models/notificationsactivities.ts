export class Notificationsactivities {
}
export class AddActivityModel {
    public UserID: number ;
    public POS: number ;
    public DateSubmit: Date ;
    public Type: string ;
    public Read: boolean ;


}
export class AddNotificationModel {
    public ProductID: number ;
    public StoreID: number ;
    public DateSubmit: Date ;
    public Read: boolean ;


}
export class AddSalesPointsNotificationModel {
    public POS: number ;
    public DateSubmit: Date ;
    public Read: boolean ;


}
export class ListAllActivitiesRecordsModel {
    public ID: number ;
    public UserID: number ;
    public POS: number ;
    public DateSubmit: Date ;
    public Type: string ;
    public Read: boolean ;
    public ShowFormat?: string;


}
export class ListAllNotificationsRecordsModel {
    public ID: number ;
    public ProductID: number ;
    public StoreID: number ;
    public DateSubmit: Date ;
    public Read: boolean ;
    public ShowFormat?: string;


}
export class ListAllSalesPointsNotificationsRecordsModel {
    public ID: number ;
    public POS: number ;
    public DateSubmit: Date ;
    public Read: boolean ;
    public ShowFormat?: string;


}
export class ResultAddActivityRecord {
    public Status: boolean ;
    public Message: string ;
    public  SelectedActivityRecord: ListAllActivitiesRecordsModel ;

}
export class ResultAddNotificationRecord {
    public Status: boolean ;
    public Message: string ;
    public  SelectedNotificationRecord: ListAllNotificationsRecordsModel ;

}
export class ResultListAllActivitiesRecords {
    public Status: boolean ;
    public Message: string ;
    public AllActivitiesRecords: ListAllActivitiesRecordsModel [] ;


}
export class ResultListAllNotificationsRecords {
    public Status: boolean ;
    public Message: string ;
    public AllNotificationsRecords: ListAllNotificationsRecordsModel [] ;


}
export class ResultListAllSalesPointsNotificationsRecords {
    public Status: boolean ;
    public Message: string ;
    public AllSalesPointsNotificationsRecords: ListAllSalesPointsNotificationsRecordsModel [] ;


}
