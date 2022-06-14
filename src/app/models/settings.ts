export class Settings {
}

export class SettingsModel {
    public ShopName: string ;
    public WorkType: string ;
    public Logo: string ;
    public Background: string ;
    public Address: string ;
}
export class ResultUpdateSettings {
    public  Status: boolean ;
    public  Message: string ;
}
export class ResultGetSystemSettings {
    public  Status: boolean ;
    public  Message: string ;
    public  SettingsModel: SettingsModel [] ;

}
export class SettingsThemesModel {
    public ThemName?: string ;
    public ThemUrl?: string ;
    public ThemID: number ;
    public ThemSelected?: boolean ;
}
export class ResultSettingsThemesModel {
    public  Status: boolean ;
    public  Message: string ;
    public  SettingsThemesModel: SettingsThemesModel [] ;


}
export class CurrentMacAddresses {
        public EtherNetMac: string ;
        public WireLessMac: string ;
        public NotFoundMac: string ;



    }
