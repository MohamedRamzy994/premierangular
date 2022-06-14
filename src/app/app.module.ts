import { ActivitiesComponent } from './components/activities/activities.component';
import { SearchproductkindquntitystorenamePipe } from './pipes/searchproductkindquntitystorename.pipe';
import { SearchproductkindquntityusernamePipe } from './pipes/searchproductkindquntityusername.pipe';
import { ListnotificationsComponent } from './components/listnotifications/listnotifications.component';
import { SalespointscreenComponent } from './components/salespointscreen/salespointscreen.component';
import { SearchtransferkindusernamePipe } from './pipes/searchtransferkindusername.pipe';
import { SearchgroupsPipe } from './pipes/searchgroups.pipe';
import { EditkindComponent } from './components/editkind/editkind.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { OauthService } from './services/general/oauth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
// tslint:disable-next-line:max-line-length
import { DetailedreportwithdrawdepositsComponent } from './components/detailedreportwithdrawdeposits/detailedreportwithdrawdeposits.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NotifierModule } from 'angular-notifier';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalModule } from 'ngx-bootstrap';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { NgxBarcodeModule } from 'ngx-barcode';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './components/users/users.component';
import { IndexComponent } from './components/index/index.component';
import { UserslistComponent } from './components/userslist/userslist.component';
import { PersonalaccountComponent } from './components/personalaccount/personalaccount.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { ModifyuserComponent } from './components/modifyuser/modifyuser.component';
import { StoresComponent } from './components/stores/stores.component';
import { StoreskindsComponent } from './components/storeskinds/storeskinds.component';
import { ListstorekindsComponent } from './components/liststorekinds/liststorekinds.component';
import { TranskindbalanceComponent } from './components/transkindbalance/transkindbalance.component';
import { OldtranskindbalbillsComponent } from './components/oldtranskindbalbills/oldtranskindbalbills.component';
import { KindgroupComponent } from './components/kindgroup/kindgroup.component';
import { KindsComponent } from './components/kinds/kinds.component';
import { AddkindComponent } from './components/addkind/addkind.component';
import { OpenbalanceComponent } from './components/openbalance/openbalance.component';
import { OpenbalancebillComponent } from './components/openbalancebill/openbalancebill.component';
import { OpenbalancebillsComponent } from './components/openbalancebills/openbalancebills.component';
import { ShowbalancebillComponent } from './components/showbalancebill/showbalancebill.component';
import { KindquantityComponent } from './components/kindquantity/kindquantity.component';
import { KindquantitybillComponent } from './components/kindquantitybill/kindquantitybill.component';
import { KindquantitybillsComponent } from './components/kindquantitybills/kindquantitybills.component';
import { ShowquantitybillComponent } from './components/showquantitybill/showquantitybill.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { SupplierslistComponent } from './components/supplierslist/supplierslist.component';
import { AddsupplierComponent } from './components/addsupplier/addsupplier.component';
import { FilesupplierComponent } from './components/filesupplier/filesupplier.component';
import { PurchasesComponent } from './components/purchases/purchases.component';
import { PurchasebillComponent } from './components/purchasebill/purchasebill.component';
import { OldpurchasebillComponent } from './components/oldpurchasebill/oldpurchasebill.component';
import { ShowpurchasebillComponent } from './components/showpurchasebill/showpurchasebill.component';
import { BuybackComponent } from './components/buyback/buyback.component';
import { BuybackwithbillComponent } from './components/buybackwithbill/buybackwithbill.component';
import { BuybackwithoutbillComponent } from './components/buybackwithoutbill/buybackwithoutbill.component';
import { OldbuybackComponent } from './components/oldbuyback/oldbuyback.component';
import { OldbuybackwithbillComponent } from './components/oldbuybackwithbill/oldbuybackwithbill.component';
import { OldbuybackwithoutbillComponent } from './components/oldbuybackwithoutbill/oldbuybackwithoutbill.component';
import { ShowoldbuybackwithbillComponent } from './components/showoldbuybackwithbill/showoldbuybackwithbill.component';
import { ShowoldbuybackwithoutbillComponent } from './components/showoldbuybackwithoutbill/showoldbuybackwithoutbill.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeslistComponent } from './components/employeeslist/employeeslist.component';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { FileemployeeComponent } from './components/fileemployee/fileemployee.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientslistComponent } from './components/clientslist/clientslist.component';
import { AddclientComponent } from './components/addclient/addclient.component';
import { FileclientComponent } from './components/fileclient/fileclient.component';
import { SalesComponent } from './components/sales/sales.component';
import { SalesbillComponent } from './components/salesbill/salesbill.component';
import { ShowsalesbillsprofitComponent } from './components/showsalesbillsprofit/showsalesbillsprofit.component';
import { OldsalesbillsComponent } from './components/oldsalesbills/oldsalesbills.component';
import { ShowoldsalesbillComponent } from './components/showoldsalesbill/showoldsalesbill.component';
import { SalesbillsprofitComponent } from './components/salesbillsprofit/salesbillsprofit.component';
import { SalebackComponent } from './components/saleback/saleback.component';
import { SalebackwithbillComponent } from './components/salebackwithbill/salebackwithbill.component';
import { SalebackwithoutbillComponent } from './components/salebackwithoutbill/salebackwithoutbill.component';
import { OldsalebackComponent } from './components/oldsaleback/oldsaleback.component';
import { OldsalebackwithbillComponent } from './components/oldsalebackwithbill/oldsalebackwithbill.component';
import { ShowoldsalebackwithbillComponent } from './components/showoldsalebackwithbill/showoldsalebackwithbill.component';
import { OldsalebackwithoutbillComponent } from './components/oldsalebackwithoutbill/oldsalebackwithoutbill.component';
import { ShowoldsalebackwithoutbillComponent } from './components/showoldsalebackwithoutbill/showoldsalebackwithoutbill.component';
import { DailysalesComponent } from './components/dailysales/dailysales.component';
import { SalesmanaccountstateComponent } from './components/salesmanaccountstate/salesmanaccountstate.component';
import { DrawerstorageComponent } from './components/drawerstorage/drawerstorage.component';
import { AddexpensesComponent } from './components/addexpenses/addexpenses.component';
import { PulldepositdrawerstorageComponent } from './components/pulldepositdrawerstorage/pulldepositdrawerstorage.component';
import { MoneytransferbetpointssaleComponent } from './components/moneytransferbetpointssale/moneytransferbetpointssale.component';
import { DrawerstoragereportsComponent } from './components/drawerstoragereports/drawerstoragereports.component';
import { ReasonwithdrawdepositComponent } from './components/reasonwithdrawdeposit/reasonwithdrawdeposit.component';
import { BanksComponent } from './components/banks/banks.component';
import { ChecksComponent } from './components/checks/checks.component';
import { ReportsComponent } from './components/reports/reports.component';
import { KindreportmoveComponent } from './components/kindreportmove/kindreportmove.component';
import { InventorykindsreportsComponent } from './components/inventorykindsreports/inventorykindsreports.component';
import { ModernpurchasesreportComponent } from './components/modernpurchasesreport/modernpurchasesreport.component';
import { DetailedcustomersalesreportComponent } from './components/detailedcustomersalesreport/detailedcustomersalesreport.component';
import { SalesreportcustomerComponent } from './components/salesreportcustomer/salesreportcustomer.component';
import { SalesreportdelegatesComponent } from './components/salesreportdelegates/salesreportdelegates.component';
import { SalesreportcompanydelegateComponent } from './components/salesreportcompanydelegate/salesreportcompanydelegate.component';
import { SalariesreportComponent } from './components/salariesreport/salariesreport.component';
import { DetailedreportaddbanksComponent } from './components/detailedreportaddbanks/detailedreportaddbanks.component';
import { ExpensesreportComponent } from './components/expensesreport/expensesreport.component';
import { VisacacheComponent } from './components/visacache/visacache.component';
import { ReportsaleskindssupplierComponent } from './components/reportsaleskindssupplier/reportsaleskindssupplier.component';
import { ProfitlossreportComponent } from './components/profitlossreport/profitlossreport.component';
import { FinancialreportComponent } from './components/financialreport/financialreport.component';
import { ToolsComponent } from './components/tools/tools.component';
import { ChangesettingComponent } from './components/changesetting/changesetting.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RootComponent } from './components/root/root.component';
import { NewuserService } from './services/user/newuser.service';
import { SearchstoresPipe } from './pipes/searchstores.pipe';
import { SearchproductsnamePipe } from './pipes/searchproductsname.pipe';
import { SearchproductsgroupPipe } from './pipes/searchproductsgroup.pipe';
import { SearchproductscodePipe } from './pipes/searchproductscode.pipe';
import { SearchproductsstopbuyPipe } from './pipes/searchproductsstopbuy.pipe';
import { SearchproductsstopsalePipe } from './pipes/searchproductsstopsale.pipe';
import { SearchproductshasstockPipe } from 'src/app/pipes/searchproductshasstock.pipe';
import { SearchproductshasnostockPipe } from 'src/app/pipes/searchproductshasnostock.pipe';
import { SearchproductspricePipe } from './pipes/searchproductsprice.pipe';
import { NgxCalculatorModule } from './ngx-calculator/ngx-calculator.module';
import { SearchtransferkindfromtostorePipe } from './pipes/searchtransferkindfromtostore.pipe';
import { SearchtransferkindfromtodatePipe } from './pipes/searchtransferkindfromtodate.pipe';
import { ShowbalkindtranComponent } from './components/showbalkindtran/showbalkindtran.component';
import { PrintkindbaltransbillComponent } from './components/printkindbaltransbill/printkindbaltransbill.component';
import { SearchproductopeningblanceusernamePipe } from './pipes/searchproductopeningblanceusername.pipe';
import { SearchproductopeningbalancestorenamePipe } from './pipes/searchproductopeningbalancestorename.pipe';
import { SearchproductopeningbalancefromtodatePipe } from './pipes/searchproductopeningbalancefromtodate.pipe';
import { PrintopeningbalancekindbillComponent } from './components/printopeningbalancekindbill/printopeningbalancekindbill.component';
import { ShowkindquantitybillComponent } from './components/showkindquantitybill/showkindquantitybill.component';
import { PrintresetstockkindbillComponent } from './components/printresetstockkindbill/printresetstockkindbill.component';
import { KindsbarcodegeneratorComponent } from './components/kindsbarcodegenerator/kindsbarcodegenerator.component';
import { PrintkindsbarcodeComponent } from './components/printkindsbarcode/printkindsbarcode.component';
import { SearchsuppliernamePipe } from './pipes/searchsuppliername.pipe';
import { SearchsuppliermoneydetailsfromtodatePipe } from './pipes/searchsuppliermoneydetailsfromtodate.pipe';
import { PrintfilesuppliermoneydetailsComponent } from './components/printfilesuppliermoneydetails/printfilesuppliermoneydetails.component';
// tslint:disable-next-line:max-line-length
import { PrintfilesupplieradvancepaymentsdetailsComponent } from './components/printfilesupplieradvancepaymentsdetails/printfilesupplieradvancepaymentsdetails.component';
import { SearchtproductbuymainfromtodatePipe } from './pipes/searchtproductbuymainfromtodate.pipe';
import { SearchproductbuymaininvoicessotorenamePipe } from './pipes/searchproductbuymaininvoicessotorename.pipe';
import { SearchproductbuymaininvoicessuppliernamePipe } from './pipes/searchproductbuymaininvoicessuppliername.pipe';
import { SearchproductbuymaininvoicesusernamePipe } from './pipes/searchproductbuymaininvoicesusername.pipe';
import { SearchproductbuymaininvoicesinvoicenumberPipe } from './pipes/searchproductbuymaininvoicesinvoicenumber.pipe';
import { SearchemployeenamePipe } from './pipes/searchemployeename.pipe';
import { SearchemployeecompunfromtodatePipe } from './pipes/searchemployeecompunfromtodate.pipe';
import { PrintfileclientmoneydetailsComponent } from './components/printfileclientmoneydetails/printfileclientmoneydetails.component';
// tslint:disable-next-line:max-line-length
import { PrintfilecustomeradvancepaymentsdetailsComponent } from './components/printfilecustomeradvancepaymentsdetails/printfilecustomeradvancepaymentsdetails.component';
import { SearchtproductmovementreportfromtodatePipe } from './pipes/searchtproductmovementreportfromtodate.pipe';
import { SearchegroupnamereportPipe } from './pipes/searchegroupnamereport.pipe';
import { SearchesuppliernamereportPipe } from './pipes/searchesuppliernamereport.pipe';
import { SearcheslaespointnamereportPipe } from './pipes/searcheslaespointnamereport.pipe';
import { SearchereasonnamereportPipe } from './pipes/searchereasonnamereport.pipe';
import { PrintpurchasebillComponent } from './components/printpurchasebill/printpurchasebill.component';
import { PrintbuybackwithbillComponent } from './components/printbuybackwithbill/printbuybackwithbill.component';
import { PrintbuybackwithoutbillComponent } from './components/printbuybackwithoutbill/printbuybackwithoutbill.component';
import { SearchclientsnamePipe } from './pipes/searchclientsname.pipe';
import { SearchclientstypePipe } from './pipes/searchclientstype.pipe';
import { SearcholdsalesbillsfromtodatePipe } from './pipes/searcholdsalesbillsfromtodate.pipe';
import { SearcholdsalesstorenamePipe } from './pipes/searcholdsalesstorename.pipe';
import { SearcholdsalesusernamePipe } from './pipes/searcholdsalesusername.pipe';
import { SearcholdsalesinvoicenumberPipe } from './pipes/searcholdsalesinvoicenumber.pipe';
import { SearcholdsalescustomernamePipe } from './pipes/searcholdsalescustomername.pipe';
import { SearcholdsalesinvoicetypePipe } from './pipes/searcholdsalesinvoicetype.pipe';
import { PrintoldsalesbillComponent } from './components/printoldsalesbill/printoldsalesbill.component';
import { SearchbacksalesbillsfromtodatePipe } from './pipes/searchbacksalesbillsfromtodate.pipe';
import { SearchbacksalescustomernamePipe } from './pipes/searchbacksalescustomername.pipe';
import { SearchbacksalesinvoicenumberPipe } from './pipes/searchbacksalesinvoicenumber.pipe';
import { SearchbacksalesstorenamePipe } from './pipes/searchbacksalesstorename.pipe';
import { SearchbacksalesusernamePipe } from './pipes/searchbacksalesusername.pipe';
import { PrintsalebackwithbillComponent } from './components/printsalebackwithbill/printsalebackwithbill.component';
import { PrintsalebackwithoutbillComponent } from './components/printsalebackwithoutbill/printsalebackwithoutbill.component';
import { SearchdailysalesfromtodatePipe } from './pipes/searchdailysalesfromtodate.pipe';
import { SearchdailysalesstorenamePipe } from './pipes/searchdailysalesstorename.pipe';
import { PrintsalesmanaccountstateComponent } from './components/printsalesmanaccountstate/printsalesmanaccountstate.component';
import { BranchesComponent } from './components/branches/branches.component';
import { ListsalespointsComponent } from './components/listsalespoints/listsalespoints.component';
import { ListactivitiesComponent } from './components/listactivities/listactivities.component';
import { ListsalesnotificationsComponent } from './components/listsalesnotifications/listsalesnotifications.component';
import { SearchproductkindquantityfromtodatePipe } from './pipes/searchproductkindquantityfromtodate.pipe';
import { ListkindquantityreasonsComponent } from './components/listkindquantityreasons/listkindquantityreasons.component';
@NgModule({
   declarations: [
      AppComponent,
      UsersComponent,
      IndexComponent,
      UserslistComponent,
      PersonalaccountComponent,
      AdduserComponent,
      ModifyuserComponent,
      StoresComponent,
      StoreskindsComponent,
      ListstorekindsComponent,
      TranskindbalanceComponent,
      OldtranskindbalbillsComponent,
      KindgroupComponent,
      KindsComponent,
      AddkindComponent,
      OpenbalanceComponent,
      OpenbalancebillComponent,
      OpenbalancebillsComponent,
      ShowbalancebillComponent,
      KindquantityComponent,
      KindquantitybillComponent,
      KindquantitybillsComponent,
      ShowquantitybillComponent,
      SuppliersComponent,
      SupplierslistComponent,
      AddsupplierComponent,
      FilesupplierComponent,
      PurchasesComponent,
      PurchasebillComponent,
      OldpurchasebillComponent,
      ShowpurchasebillComponent,
      BuybackComponent,
      BuybackwithbillComponent,
      BuybackwithoutbillComponent,
      OldbuybackComponent,
      OldbuybackwithbillComponent,
      OldbuybackwithoutbillComponent,
      ShowoldbuybackwithbillComponent,
      ShowoldbuybackwithoutbillComponent,
      EmployeesComponent,
      EmployeeslistComponent,
      AddemployeeComponent,
      FileemployeeComponent,
      ClientsComponent,
      ClientslistComponent,
      AddclientComponent,
      FileclientComponent,
      SalesComponent,
      SalesbillComponent,
      OldsalesbillsComponent,
      ShowoldsalesbillComponent,
      SalesbillsprofitComponent,
      ShowsalesbillsprofitComponent,
      SalebackComponent,
      SalebackwithbillComponent,
      SalebackwithoutbillComponent,
      OldsalebackComponent,
      OldsalebackwithbillComponent,
      ShowoldsalebackwithbillComponent,
      OldsalebackwithoutbillComponent,
      ShowoldsalebackwithoutbillComponent,
      DailysalesComponent,
      SalesmanaccountstateComponent,
      DrawerstorageComponent,
      AddexpensesComponent,
      PulldepositdrawerstorageComponent,
      MoneytransferbetpointssaleComponent,
      DrawerstoragereportsComponent,
      ReasonwithdrawdepositComponent,
      BanksComponent,
      ChecksComponent,
      ReportsComponent,
      KindreportmoveComponent,
      InventorykindsreportsComponent,
      ModernpurchasesreportComponent,
      DetailedcustomersalesreportComponent,
      SalesreportcustomerComponent,
      SalesreportdelegatesComponent,
      SalesreportcompanydelegateComponent,
      SalariesreportComponent,
      DetailedreportaddbanksComponent,
      DetailedreportwithdrawdepositsComponent,
      ExpensesreportComponent,
      VisacacheComponent,
      ReportsaleskindssupplierComponent,
      ProfitlossreportComponent,
      FinancialreportComponent,
      ToolsComponent,
      ChangesettingComponent,
      HeaderComponent,
      FooterComponent,
      HomeComponent,
      RootComponent,
      EditkindComponent,
      SearchstoresPipe,
      SearchgroupsPipe,
      SearchproductsnamePipe,
      SearchproductsgroupPipe,
      SearchproductscodePipe,
      SearchproductsstopbuyPipe,
      SearchproductsstopsalePipe,
      SearchproductshasstockPipe,
      SearchproductshasnostockPipe,
      SearchproductspricePipe,
      SearchtransferkindusernamePipe,
      SearchtransferkindfromtostorePipe,
      SearchtransferkindfromtodatePipe,
      ShowbalkindtranComponent,
      PrintkindbaltransbillComponent,
      SearchproductopeningblanceusernamePipe,
      SearchproductopeningbalancestorenamePipe,
      SearchproductopeningbalancefromtodatePipe,
      PrintopeningbalancekindbillComponent,
      PrintpurchasebillComponent,
      ShowkindquantitybillComponent,
      PrintresetstockkindbillComponent,
      KindsbarcodegeneratorComponent,
      PrintfileclientmoneydetailsComponent,
      PrintkindsbarcodeComponent,
      SearchsuppliernamePipe,
      SearchsuppliermoneydetailsfromtodatePipe,
      PrintfilesuppliermoneydetailsComponent,
      PrintfilesupplieradvancepaymentsdetailsComponent,
      PrintfilecustomeradvancepaymentsdetailsComponent,
      SearchtproductbuymainfromtodatePipe,
      SearchproductbuymaininvoicessotorenamePipe,
      SearchproductbuymaininvoicessuppliernamePipe,
      SearchproductbuymaininvoicesusernamePipe,
      SearchproductbuymaininvoicesinvoicenumberPipe,
      SearchemployeenamePipe,
      SearchemployeecompunfromtodatePipe,
      SearchtproductmovementreportfromtodatePipe,
      SearchegroupnamereportPipe,
      SearchesuppliernamereportPipe,
      SearcheslaespointnamereportPipe,
      SearchereasonnamereportPipe,
      PrintbuybackwithbillComponent,
      PrintbuybackwithoutbillComponent,
      SearchclientsnamePipe,
      SearchclientstypePipe,
      SearcholdsalesbillsfromtodatePipe,
      SearcholdsalesstorenamePipe,
      SearcholdsalesusernamePipe,
      SearcholdsalesinvoicenumberPipe,
      SearcholdsalescustomernamePipe,
      SearcholdsalesinvoicetypePipe,
      PrintoldsalesbillComponent,
      SearchbacksalesbillsfromtodatePipe,
      SearchbacksalescustomernamePipe,
      SearchbacksalesinvoicenumberPipe,
      SearchbacksalesstorenamePipe,
      SearchbacksalesusernamePipe,
      PrintsalebackwithbillComponent,
      PrintsalebackwithoutbillComponent,
      SearchdailysalesfromtodatePipe,
      SearchdailysalesstorenamePipe,
      PrintsalesmanaccountstateComponent,
      BranchesComponent,
      ListsalespointsComponent,
      SalespointscreenComponent,
      ListactivitiesComponent,
      SearchproductkindquntityusernamePipe,
      SearchproductkindquntitystorenamePipe,
      SearchproductkindquantityfromtodatePipe,
      ListnotificationsComponent,
      ListsalesnotificationsComponent,
      ListkindquantityreasonsComponent,
      ActivitiesComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      NgHttpLoaderModule,
      NgxPaginationModule,
      NgxCalculatorModule,
      NgxBarcodeModule,
      AngularFontAwesomeModule,
      NgxMyDatePickerModule.forRoot(),
      FilterPipeModule,
      MalihuScrollbarModule.forRoot(),
      ModalModule.forRoot(),
      NotifierModule.withConfig(),
      RouterModule.forRoot([

        { path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: '**', redirectTo: '/home', pathMatch: 'full' }
      ]),
   ],
  providers: [
    NewuserService,
    OauthService
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [ShowbalkindtranComponent, PrintkindbaltransbillComponent]
})
export class AppModule { }
