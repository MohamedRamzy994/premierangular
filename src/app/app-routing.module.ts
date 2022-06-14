import { ActivitiesComponent } from './components/activities/activities.component';
import { ListsalesnotificationsComponent } from './components/listsalesnotifications/listsalesnotifications.component';
import { ListactivitiesComponent } from './components/listactivities/listactivities.component';
import { PrintbuybackwithoutbillComponent } from './components/printbuybackwithoutbill/printbuybackwithoutbill.component';
import { PrintpurchasebillComponent } from './components/printpurchasebill/printpurchasebill.component';
import { PrintkindsbarcodeComponent } from './components/printkindsbarcode/printkindsbarcode.component';
import { PrintresetstockkindbillComponent } from './components/printresetstockkindbill/printresetstockkindbill.component';
import { PrintopeningbalancekindbillComponent } from './components/printopeningbalancekindbill/printopeningbalancekindbill.component';
import { ShowbalkindtranComponent } from './components/showbalkindtran/showbalkindtran.component';
import { EditkindComponent } from './components/editkind/editkind.component';
import { RootComponent } from './components/root/root.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
// tslint:disable-next-line:max-line-length
import { DetailedreportwithdrawdepositsComponent } from './components/detailedreportwithdrawdeposits/detailedreportwithdrawdeposits.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
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
import { PrintkindbaltransbillComponent } from './components/printkindbaltransbill/printkindbaltransbill.component';
import { ShowkindquantitybillComponent } from './components/showkindquantitybill/showkindquantitybill.component';
import { KindsbarcodegeneratorComponent } from './components/kindsbarcodegenerator/kindsbarcodegenerator.component';
import { PrintfilesuppliermoneydetailsComponent } from './components/printfilesuppliermoneydetails/printfilesuppliermoneydetails.component';
// tslint:disable-next-line:max-line-length
import { PrintfilesupplieradvancepaymentsdetailsComponent } from './components/printfilesupplieradvancepaymentsdetails/printfilesupplieradvancepaymentsdetails.component';
import { PrintfileclientmoneydetailsComponent } from './components/printfileclientmoneydetails/printfileclientmoneydetails.component';
// tslint:disable-next-line:max-line-length
import { PrintfilecustomeradvancepaymentsdetailsComponent } from './components/printfilecustomeradvancepaymentsdetails/printfilecustomeradvancepaymentsdetails.component';
import { PrintbuybackwithbillComponent } from './components/printbuybackwithbill/printbuybackwithbill.component';
import { PrintoldsalesbillComponent } from './components/printoldsalesbill/printoldsalesbill.component';
import { PrintsalebackwithbillComponent } from './components/printsalebackwithbill/printsalebackwithbill.component';
import { PrintsalebackwithoutbillComponent } from './components/printsalebackwithoutbill/printsalebackwithoutbill.component';
import { PrintsalesmanaccountstateComponent } from './components/printsalesmanaccountstate/printsalesmanaccountstate.component';
import { BranchesComponent } from './components/branches/branches.component';
import { ListsalespointsComponent } from './components/listsalespoints/listsalespoints.component';
import { ListnotificationsComponent } from './components/listnotifications/listnotifications.component';
import { ListkindquantityreasonsComponent } from './components/listkindquantityreasons/listkindquantityreasons.component';



const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'index', component: IndexComponent },
      { path: 'root', component: RootComponent },
      { path: 'users', component: UsersComponent },
      { path: 'userslist', component: UserslistComponent },
      { path: 'adduser', component: AdduserComponent },
      { path: 'modifyuser/:userId', component: ModifyuserComponent },
      { path: 'modifyuser', component: ModifyuserComponent },
      { path: 'personalaccount', component: PersonalaccountComponent },
      { path: 'storeskinds', component: StoreskindsComponent },
      { path: 'liststorekinds', component: ListstorekindsComponent },
      { path: 'transkindbalance', component: TranskindbalanceComponent },
      { path: 'oldtranskindbalbils', component: OldtranskindbalbillsComponent },
      { path: 'kindgroup', component: KindgroupComponent },
      { path: 'kinds', component: KindsComponent },
      { path: 'addkind', component: AddkindComponent },
      { path: 'editkind/:productId', component: EditkindComponent },
      { path: 'stores', component: StoresComponent },
      { path: 'showbalkindtran/:InvoiceId', component: ShowbalkindtranComponent },
      { path: 'showkindquantitybill/:InvoiceId', component: ShowkindquantitybillComponent },
      { path: 'printkindbaltransbill/:InvoiceId', component: PrintkindbaltransbillComponent },
      { path: 'printopeningbalancekindbill/:InvoiceId', component: PrintopeningbalancekindbillComponent },
      { path: 'printresetstockkindbill/:InvoiceId', component: PrintresetstockkindbillComponent },
      { path: 'openbalance', component: OpenbalanceComponent },
      { path: 'openbalancebill', component: OpenbalancebillComponent },
      { path: 'openbalancebills', component: OpenbalancebillsComponent },
      { path: 'showbalancebill/:InvoiceId', component: ShowbalancebillComponent },
      { path: 'showquantitybill', component: ShowquantitybillComponent },
      { path: 'kindquantity', component: KindquantityComponent },
      { path: 'kindquantitybill', component: KindquantitybillComponent },
      { path: 'kindquantitybills', component: KindquantitybillsComponent },
      { path: 'kindsbarcodegenerator', component: KindsbarcodegeneratorComponent },
      { path: 'printkindsbarcode', component: PrintkindsbarcodeComponent },
      { path: 'suppliers', component: SuppliersComponent },
      { path: 'supplierslist', component: SupplierslistComponent },
      { path: 'addsupplier', component: AddsupplierComponent },
      { path: 'filesupplier/:SupplierID', component: FilesupplierComponent },
      { path: 'printfilesuppliermoneydetails/:SupplierID', component: PrintfilesuppliermoneydetailsComponent },
      { path: 'printfileclientmoneydetails/:CustomerID', component: PrintfileclientmoneydetailsComponent },
      { path: 'printfilesupplieradvancepaymentsdetails/:SupplierID', component: PrintfilesupplieradvancepaymentsdetailsComponent },
      { path: 'printfileclientadvancepaymentsdetails/:CustomerID', component: PrintfilecustomeradvancepaymentsdetailsComponent },
      { path: 'purchases', component: PurchasesComponent },
      { path: 'oldpurchasebill', component: OldpurchasebillComponent },
      { path: 'showpurchasebill/:InvoiceID', component: ShowpurchasebillComponent },
      { path: 'purchasebill', component: PurchasebillComponent },
      { path: 'printpurchasebill/:InvoiceID', component: PrintpurchasebillComponent },
      { path: 'buyback', component: BuybackComponent },
      { path: 'buybackwithbill', component: BuybackwithbillComponent },
      { path: 'printbuybackwithbill/:DiscardID', component: PrintbuybackwithbillComponent },
      { path: 'buybackwithoutbill', component: BuybackwithoutbillComponent },
      { path: 'oldbuyback', component: OldbuybackComponent },
      { path: 'printbuybackwithoutbill/:DiscardID', component: PrintbuybackwithoutbillComponent },
      { path: 'printsalebackwithbill/:DiscardID', component: PrintsalebackwithbillComponent },
      { path: 'printsalebackwithoutbill/:DiscardID', component: PrintsalebackwithoutbillComponent },
      { path: 'oldbuybackwithbill', component: OldbuybackwithbillComponent },
      { path: 'employees', component: EmployeesComponent },
      { path: 'employeeslist', component: EmployeeslistComponent },
      { path: 'showoldbuybackwithbill/:DiscardID', component: ShowoldbuybackwithbillComponent },
      { path: 'showoldsalebackwithbill/:DiscardID', component: ShowoldsalebackwithbillComponent },
      { path: 'showoldsalebackwithoutbill/:DiscardID', component: ShowoldsalebackwithoutbillComponent },
      { path: 'showoldbuybackwithoutbill/:DiscardID', component: ShowoldbuybackwithoutbillComponent },
      { path: 'oldbuybackwithoutbill', component: OldbuybackwithoutbillComponent },
      { path: 'addemployee', component: AddemployeeComponent },
      { path: 'fileemployee/:EmpID', component: FileemployeeComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'clientslist', component: ClientslistComponent },
      { path: 'addclient', component: AddclientComponent },
      { path: 'fileclient/:CustomerID', component: FileclientComponent },
      { path: 'sales', component: SalesComponent },
      { path: 'salesbill', component: SalesbillComponent },
      { path: 'oldsalesbills', component: OldsalesbillsComponent },
      { path: 'printoldsalesbill/:InvoiceID', component: PrintoldsalesbillComponent },
      { path: 'showoldsalesbill/:InvoiceID', component: ShowoldsalesbillComponent },
      { path: 'salesbillsprofit', component: SalesbillsprofitComponent },
      { path: 'showsalesbillsprofit', component: ShowsalesbillsprofitComponent },
      { path: 'saleback', component: SalebackComponent },
      { path: 'salebackwithbill', component: SalebackwithbillComponent },
      { path: 'salebackwithoutbill', component: SalebackwithoutbillComponent },
      { path: 'oldsaleback', component: OldsalebackComponent },
      { path: 'oldsalebackwithbill', component: OldsalebackwithbillComponent },
      { path: 'showoldsalebackwithbill', component: ShowoldsalebackwithbillComponent },
      { path: 'oldsalebackwithoutbill', component: OldsalebackwithoutbillComponent },
      { path: 'showoldsalebackwithoutbill', component: ShowoldsalebackwithoutbillComponent },
      { path: 'dailysales', component: DailysalesComponent },
      { path: 'salesmanaccountstate', component: SalesmanaccountstateComponent },
      { path: 'printsalesmanaccountstate/:EmpID', component: PrintsalesmanaccountstateComponent },
      { path: 'drawerstorage', component: DrawerstorageComponent },
      { path: 'branches', component: BranchesComponent },
      { path: 'addexpenses', component: AddexpensesComponent },
      { path: 'pulldepositdrawerstorage', component: PulldepositdrawerstorageComponent },
      { path: 'moneytransferbetpointssale', component: MoneytransferbetpointssaleComponent },
      { path: 'drawerstoragereports', component: DrawerstoragereportsComponent },
      { path: 'reasonwithdrawdeposit', component: ReasonwithdrawdepositComponent },
      { path: 'banks', component: BanksComponent },
      { path: 'checks', component: ChecksComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'kindreportmove', component: KindreportmoveComponent },
      { path: 'inventorykindsreports', component: InventorykindsreportsComponent },
      { path: 'modernpurchasesreport', component: ModernpurchasesreportComponent },
      { path: 'detailedcustomersalesreport', component: DetailedcustomersalesreportComponent },
      { path: 'salesreportcustomer', component: SalesreportcustomerComponent },
      { path: 'salesreportdelegates', component: SalesreportdelegatesComponent },
      { path: 'salesreportcompanydelegate', component: SalesreportcompanydelegateComponent },
      { path: 'salariesreport', component: SalariesreportComponent },
      { path: 'detailedreportaddbanks', component: DetailedreportaddbanksComponent },
      { path: 'detailedreportwithdrawdeposits', component: DetailedreportwithdrawdepositsComponent },
      { path: 'expensesreport', component: ExpensesreportComponent },
      { path: 'visacache', component: VisacacheComponent },
      { path: 'reportsaleskindssupplier', component: ReportsaleskindssupplierComponent },
      { path: 'profitlossreport', component: ProfitlossreportComponent },
      { path: 'financialreport', component: FinancialreportComponent },
      { path: 'tools', component: ToolsComponent },
      { path: 'changesetting', component: ChangesettingComponent },
      { path: 'listsalespoints', component: ListsalespointsComponent },
      { path: 'listactivities', component: ListactivitiesComponent },
      { path: 'listnotifications', component: ListnotificationsComponent  },
      { path: 'listsalesnotifications', component: ListsalesnotificationsComponent  },
      { path: 'listkindquantityreasons', component: ListkindquantityreasonsComponent  },
      { path: 'activities', component: ActivitiesComponent  }







    ]
  },
  { path: 'home', component: HomeComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes
      )
      // { onSameUrlNavigation: 'reload' }
  ],
  exports: [RouterModule],

})
export class AppRoutingModule { }
