"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var listactivities_component_1 = require("./components/listactivities/listactivities.component");
var printbuybackwithoutbill_component_1 = require("./components/printbuybackwithoutbill/printbuybackwithoutbill.component");
var printpurchasebill_component_1 = require("./components/printpurchasebill/printpurchasebill.component");
var printkindsbarcode_component_1 = require("./components/printkindsbarcode/printkindsbarcode.component");
var printresetstockkindbill_component_1 = require("./components/printresetstockkindbill/printresetstockkindbill.component");
var printopeningbalancekindbill_component_1 = require("./components/printopeningbalancekindbill/printopeningbalancekindbill.component");
var showbalkindtran_component_1 = require("./components/showbalkindtran/showbalkindtran.component");
var editkind_component_1 = require("./components/editkind/editkind.component");
var root_component_1 = require("./components/root/root.component");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
// tslint:disable-next-line:max-line-length
var detailedreportwithdrawdeposits_component_1 = require("./components/detailedreportwithdrawdeposits/detailedreportwithdrawdeposits.component");
var core_1 = require("@angular/core");
var users_component_1 = require("./components/users/users.component");
var index_component_1 = require("./components/index/index.component");
var userslist_component_1 = require("./components/userslist/userslist.component");
var personalaccount_component_1 = require("./components/personalaccount/personalaccount.component");
var adduser_component_1 = require("./components/adduser/adduser.component");
var modifyuser_component_1 = require("./components/modifyuser/modifyuser.component");
var stores_component_1 = require("./components/stores/stores.component");
var storeskinds_component_1 = require("./components/storeskinds/storeskinds.component");
var liststorekinds_component_1 = require("./components/liststorekinds/liststorekinds.component");
var transkindbalance_component_1 = require("./components/transkindbalance/transkindbalance.component");
var oldtranskindbalbills_component_1 = require("./components/oldtranskindbalbills/oldtranskindbalbills.component");
var kindgroup_component_1 = require("./components/kindgroup/kindgroup.component");
var kinds_component_1 = require("./components/kinds/kinds.component");
var addkind_component_1 = require("./components/addkind/addkind.component");
var openbalance_component_1 = require("./components/openbalance/openbalance.component");
var openbalancebill_component_1 = require("./components/openbalancebill/openbalancebill.component");
var openbalancebills_component_1 = require("./components/openbalancebills/openbalancebills.component");
var showbalancebill_component_1 = require("./components/showbalancebill/showbalancebill.component");
var kindquantity_component_1 = require("./components/kindquantity/kindquantity.component");
var kindquantitybill_component_1 = require("./components/kindquantitybill/kindquantitybill.component");
var kindquantitybills_component_1 = require("./components/kindquantitybills/kindquantitybills.component");
var showquantitybill_component_1 = require("./components/showquantitybill/showquantitybill.component");
var suppliers_component_1 = require("./components/suppliers/suppliers.component");
var supplierslist_component_1 = require("./components/supplierslist/supplierslist.component");
var addsupplier_component_1 = require("./components/addsupplier/addsupplier.component");
var filesupplier_component_1 = require("./components/filesupplier/filesupplier.component");
var purchases_component_1 = require("./components/purchases/purchases.component");
var purchasebill_component_1 = require("./components/purchasebill/purchasebill.component");
var oldpurchasebill_component_1 = require("./components/oldpurchasebill/oldpurchasebill.component");
var showpurchasebill_component_1 = require("./components/showpurchasebill/showpurchasebill.component");
var buyback_component_1 = require("./components/buyback/buyback.component");
var buybackwithbill_component_1 = require("./components/buybackwithbill/buybackwithbill.component");
var buybackwithoutbill_component_1 = require("./components/buybackwithoutbill/buybackwithoutbill.component");
var oldbuyback_component_1 = require("./components/oldbuyback/oldbuyback.component");
var oldbuybackwithbill_component_1 = require("./components/oldbuybackwithbill/oldbuybackwithbill.component");
var oldbuybackwithoutbill_component_1 = require("./components/oldbuybackwithoutbill/oldbuybackwithoutbill.component");
var showoldbuybackwithbill_component_1 = require("./components/showoldbuybackwithbill/showoldbuybackwithbill.component");
var showoldbuybackwithoutbill_component_1 = require("./components/showoldbuybackwithoutbill/showoldbuybackwithoutbill.component");
var employees_component_1 = require("./components/employees/employees.component");
var employeeslist_component_1 = require("./components/employeeslist/employeeslist.component");
var addemployee_component_1 = require("./components/addemployee/addemployee.component");
var fileemployee_component_1 = require("./components/fileemployee/fileemployee.component");
var clients_component_1 = require("./components/clients/clients.component");
var clientslist_component_1 = require("./components/clientslist/clientslist.component");
var addclient_component_1 = require("./components/addclient/addclient.component");
var fileclient_component_1 = require("./components/fileclient/fileclient.component");
var sales_component_1 = require("./components/sales/sales.component");
var salesbill_component_1 = require("./components/salesbill/salesbill.component");
var showsalesbillsprofit_component_1 = require("./components/showsalesbillsprofit/showsalesbillsprofit.component");
var oldsalesbills_component_1 = require("./components/oldsalesbills/oldsalesbills.component");
var showoldsalesbill_component_1 = require("./components/showoldsalesbill/showoldsalesbill.component");
var salesbillsprofit_component_1 = require("./components/salesbillsprofit/salesbillsprofit.component");
var saleback_component_1 = require("./components/saleback/saleback.component");
var salebackwithbill_component_1 = require("./components/salebackwithbill/salebackwithbill.component");
var salebackwithoutbill_component_1 = require("./components/salebackwithoutbill/salebackwithoutbill.component");
var oldsaleback_component_1 = require("./components/oldsaleback/oldsaleback.component");
var oldsalebackwithbill_component_1 = require("./components/oldsalebackwithbill/oldsalebackwithbill.component");
var showoldsalebackwithbill_component_1 = require("./components/showoldsalebackwithbill/showoldsalebackwithbill.component");
var oldsalebackwithoutbill_component_1 = require("./components/oldsalebackwithoutbill/oldsalebackwithoutbill.component");
var showoldsalebackwithoutbill_component_1 = require("./components/showoldsalebackwithoutbill/showoldsalebackwithoutbill.component");
var dailysales_component_1 = require("./components/dailysales/dailysales.component");
var salesmanaccountstate_component_1 = require("./components/salesmanaccountstate/salesmanaccountstate.component");
var drawerstorage_component_1 = require("./components/drawerstorage/drawerstorage.component");
var addexpenses_component_1 = require("./components/addexpenses/addexpenses.component");
var pulldepositdrawerstorage_component_1 = require("./components/pulldepositdrawerstorage/pulldepositdrawerstorage.component");
var moneytransferbetpointssale_component_1 = require("./components/moneytransferbetpointssale/moneytransferbetpointssale.component");
var drawerstoragereports_component_1 = require("./components/drawerstoragereports/drawerstoragereports.component");
var reasonwithdrawdeposit_component_1 = require("./components/reasonwithdrawdeposit/reasonwithdrawdeposit.component");
var banks_component_1 = require("./components/banks/banks.component");
var checks_component_1 = require("./components/checks/checks.component");
var reports_component_1 = require("./components/reports/reports.component");
var kindreportmove_component_1 = require("./components/kindreportmove/kindreportmove.component");
var inventorykindsreports_component_1 = require("./components/inventorykindsreports/inventorykindsreports.component");
var modernpurchasesreport_component_1 = require("./components/modernpurchasesreport/modernpurchasesreport.component");
var detailedcustomersalesreport_component_1 = require("./components/detailedcustomersalesreport/detailedcustomersalesreport.component");
var salesreportcustomer_component_1 = require("./components/salesreportcustomer/salesreportcustomer.component");
var salesreportdelegates_component_1 = require("./components/salesreportdelegates/salesreportdelegates.component");
var salesreportcompanydelegate_component_1 = require("./components/salesreportcompanydelegate/salesreportcompanydelegate.component");
var salariesreport_component_1 = require("./components/salariesreport/salariesreport.component");
var detailedreportaddbanks_component_1 = require("./components/detailedreportaddbanks/detailedreportaddbanks.component");
var expensesreport_component_1 = require("./components/expensesreport/expensesreport.component");
var visacache_component_1 = require("./components/visacache/visacache.component");
var reportsaleskindssupplier_component_1 = require("./components/reportsaleskindssupplier/reportsaleskindssupplier.component");
var profitlossreport_component_1 = require("./components/profitlossreport/profitlossreport.component");
var financialreport_component_1 = require("./components/financialreport/financialreport.component");
var tools_component_1 = require("./components/tools/tools.component");
var changesetting_component_1 = require("./components/changesetting/changesetting.component");
var home_component_1 = require("./components/home/home.component");
var printkindbaltransbill_component_1 = require("./components/printkindbaltransbill/printkindbaltransbill.component");
var showkindquantitybill_component_1 = require("./components/showkindquantitybill/showkindquantitybill.component");
var kindsbarcodegenerator_component_1 = require("./components/kindsbarcodegenerator/kindsbarcodegenerator.component");
var printfilesuppliermoneydetails_component_1 = require("./components/printfilesuppliermoneydetails/printfilesuppliermoneydetails.component");
// tslint:disable-next-line:max-line-length
var printfilesupplieradvancepaymentsdetails_component_1 = require("./components/printfilesupplieradvancepaymentsdetails/printfilesupplieradvancepaymentsdetails.component");
var printfileclientmoneydetails_component_1 = require("./components/printfileclientmoneydetails/printfileclientmoneydetails.component");
// tslint:disable-next-line:max-line-length
var printfilecustomeradvancepaymentsdetails_component_1 = require("./components/printfilecustomeradvancepaymentsdetails/printfilecustomeradvancepaymentsdetails.component");
var printbuybackwithbill_component_1 = require("./components/printbuybackwithbill/printbuybackwithbill.component");
var printoldsalesbill_component_1 = require("./components/printoldsalesbill/printoldsalesbill.component");
var printsalebackwithbill_component_1 = require("./components/printsalebackwithbill/printsalebackwithbill.component");
var printsalebackwithoutbill_component_1 = require("./components/printsalebackwithoutbill/printsalebackwithoutbill.component");
var printsalesmanaccountstate_component_1 = require("./components/printsalesmanaccountstate/printsalesmanaccountstate.component");
var branches_component_1 = require("./components/branches/branches.component");
var listsalespoints_component_1 = require("./components/listsalespoints/listsalespoints.component");
var routes = [
    {
        path: '',
        component: index_component_1.IndexComponent,
        children: [
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'index', component: index_component_1.IndexComponent },
            { path: 'root', component: root_component_1.RootComponent },
            { path: 'users', component: users_component_1.UsersComponent },
            { path: 'userslist', component: userslist_component_1.UserslistComponent },
            { path: 'adduser', component: adduser_component_1.AdduserComponent },
            { path: 'modifyuser/:userId', component: modifyuser_component_1.ModifyuserComponent },
            { path: 'modifyuser', component: modifyuser_component_1.ModifyuserComponent },
            { path: 'personalaccount', component: personalaccount_component_1.PersonalaccountComponent },
            { path: 'storeskinds', component: storeskinds_component_1.StoreskindsComponent },
            { path: 'liststorekinds', component: liststorekinds_component_1.ListstorekindsComponent },
            { path: 'transkindbalance', component: transkindbalance_component_1.TranskindbalanceComponent },
            { path: 'oldtranskindbalbils', component: oldtranskindbalbills_component_1.OldtranskindbalbillsComponent },
            { path: 'kindgroup', component: kindgroup_component_1.KindgroupComponent },
            { path: 'kinds', component: kinds_component_1.KindsComponent },
            { path: 'addkind', component: addkind_component_1.AddkindComponent },
            { path: 'editkind/:productId', component: editkind_component_1.EditkindComponent },
            { path: 'stores', component: stores_component_1.StoresComponent },
            { path: 'showbalkindtran/:InvoiceId', component: showbalkindtran_component_1.ShowbalkindtranComponent },
            { path: 'showkindquantitybill/:InvoiceId', component: showkindquantitybill_component_1.ShowkindquantitybillComponent },
            { path: 'printkindbaltransbill/:InvoiceId', component: printkindbaltransbill_component_1.PrintkindbaltransbillComponent },
            { path: 'printopeningbalancekindbill/:InvoiceId', component: printopeningbalancekindbill_component_1.PrintopeningbalancekindbillComponent },
            { path: 'printresetstockkindbill/:InvoiceId', component: printresetstockkindbill_component_1.PrintresetstockkindbillComponent },
            { path: 'openbalance', component: openbalance_component_1.OpenbalanceComponent },
            { path: 'openbalancebill', component: openbalancebill_component_1.OpenbalancebillComponent },
            { path: 'openbalancebills', component: openbalancebills_component_1.OpenbalancebillsComponent },
            { path: 'showbalancebill/:InvoiceId', component: showbalancebill_component_1.ShowbalancebillComponent },
            { path: 'showquantitybill', component: showquantitybill_component_1.ShowquantitybillComponent },
            { path: 'kindquantity', component: kindquantity_component_1.KindquantityComponent },
            { path: 'kindquantitybill', component: kindquantitybill_component_1.KindquantitybillComponent },
            { path: 'kindquantitybills', component: kindquantitybills_component_1.KindquantitybillsComponent },
            { path: 'kindsbarcodegenerator', component: kindsbarcodegenerator_component_1.KindsbarcodegeneratorComponent },
            { path: 'printkindsbarcode', component: printkindsbarcode_component_1.PrintkindsbarcodeComponent },
            { path: 'suppliers', component: suppliers_component_1.SuppliersComponent },
            { path: 'supplierslist', component: supplierslist_component_1.SupplierslistComponent },
            { path: 'addsupplier', component: addsupplier_component_1.AddsupplierComponent },
            { path: 'filesupplier/:SupplierID', component: filesupplier_component_1.FilesupplierComponent },
            { path: 'printfilesuppliermoneydetails/:SupplierID', component: printfilesuppliermoneydetails_component_1.PrintfilesuppliermoneydetailsComponent },
            { path: 'printfileclientmoneydetails/:CustomerID', component: printfileclientmoneydetails_component_1.PrintfileclientmoneydetailsComponent },
            { path: 'printfilesupplieradvancepaymentsdetails/:SupplierID', component: printfilesupplieradvancepaymentsdetails_component_1.PrintfilesupplieradvancepaymentsdetailsComponent },
            { path: 'printfileclientadvancepaymentsdetails/:CustomerID', component: printfilecustomeradvancepaymentsdetails_component_1.PrintfilecustomeradvancepaymentsdetailsComponent },
            { path: 'purchases', component: purchases_component_1.PurchasesComponent },
            { path: 'oldpurchasebill', component: oldpurchasebill_component_1.OldpurchasebillComponent },
            { path: 'showpurchasebill/:InvoiceID', component: showpurchasebill_component_1.ShowpurchasebillComponent },
            { path: 'purchasebill', component: purchasebill_component_1.PurchasebillComponent },
            { path: 'printpurchasebill/:InvoiceID', component: printpurchasebill_component_1.PrintpurchasebillComponent },
            { path: 'buyback', component: buyback_component_1.BuybackComponent },
            { path: 'buybackwithbill', component: buybackwithbill_component_1.BuybackwithbillComponent },
            { path: 'printbuybackwithbill/:DiscardID', component: printbuybackwithbill_component_1.PrintbuybackwithbillComponent },
            { path: 'buybackwithoutbill', component: buybackwithoutbill_component_1.BuybackwithoutbillComponent },
            { path: 'oldbuyback', component: oldbuyback_component_1.OldbuybackComponent },
            { path: 'printbuybackwithoutbill/:DiscardID', component: printbuybackwithoutbill_component_1.PrintbuybackwithoutbillComponent },
            { path: 'printsalebackwithbill/:DiscardID', component: printsalebackwithbill_component_1.PrintsalebackwithbillComponent },
            { path: 'printsalebackwithoutbill/:DiscardID', component: printsalebackwithoutbill_component_1.PrintsalebackwithoutbillComponent },
            { path: 'oldbuybackwithbill', component: oldbuybackwithbill_component_1.OldbuybackwithbillComponent },
            { path: 'employees', component: employees_component_1.EmployeesComponent },
            { path: 'employeeslist', component: employeeslist_component_1.EmployeeslistComponent },
            { path: 'showoldbuybackwithbill/:DiscardID', component: showoldbuybackwithbill_component_1.ShowoldbuybackwithbillComponent },
            { path: 'showoldsalebackwithbill/:DiscardID', component: showoldsalebackwithbill_component_1.ShowoldsalebackwithbillComponent },
            { path: 'showoldsalebackwithoutbill/:DiscardID', component: showoldsalebackwithoutbill_component_1.ShowoldsalebackwithoutbillComponent },
            { path: 'showoldbuybackwithoutbill/:DiscardID', component: showoldbuybackwithoutbill_component_1.ShowoldbuybackwithoutbillComponent },
            { path: 'oldbuybackwithoutbill', component: oldbuybackwithoutbill_component_1.OldbuybackwithoutbillComponent },
            { path: 'addemployee', component: addemployee_component_1.AddemployeeComponent },
            { path: 'fileemployee/:EmpID', component: fileemployee_component_1.FileemployeeComponent },
            { path: 'clients', component: clients_component_1.ClientsComponent },
            { path: 'clientslist', component: clientslist_component_1.ClientslistComponent },
            { path: 'addclient', component: addclient_component_1.AddclientComponent },
            { path: 'fileclient/:CustomerID', component: fileclient_component_1.FileclientComponent },
            { path: 'sales', component: sales_component_1.SalesComponent },
            { path: 'salesbill', component: salesbill_component_1.SalesbillComponent },
            { path: 'oldsalesbills', component: oldsalesbills_component_1.OldsalesbillsComponent },
            { path: 'printoldsalesbill/:InvoiceID', component: printoldsalesbill_component_1.PrintoldsalesbillComponent },
            { path: 'showoldsalesbill/:InvoiceID', component: showoldsalesbill_component_1.ShowoldsalesbillComponent },
            { path: 'salesbillsprofit', component: salesbillsprofit_component_1.SalesbillsprofitComponent },
            { path: 'showsalesbillsprofit', component: showsalesbillsprofit_component_1.ShowsalesbillsprofitComponent },
            { path: 'saleback', component: saleback_component_1.SalebackComponent },
            { path: 'salebackwithbill', component: salebackwithbill_component_1.SalebackwithbillComponent },
            { path: 'salebackwithoutbill', component: salebackwithoutbill_component_1.SalebackwithoutbillComponent },
            { path: 'oldsaleback', component: oldsaleback_component_1.OldsalebackComponent },
            { path: 'oldsalebackwithbill', component: oldsalebackwithbill_component_1.OldsalebackwithbillComponent },
            { path: 'showoldsalebackwithbill', component: showoldsalebackwithbill_component_1.ShowoldsalebackwithbillComponent },
            { path: 'oldsalebackwithoutbill', component: oldsalebackwithoutbill_component_1.OldsalebackwithoutbillComponent },
            { path: 'showoldsalebackwithoutbill', component: showoldsalebackwithoutbill_component_1.ShowoldsalebackwithoutbillComponent },
            { path: 'dailysales', component: dailysales_component_1.DailysalesComponent },
            { path: 'salesmanaccountstate', component: salesmanaccountstate_component_1.SalesmanaccountstateComponent },
            { path: 'printsalesmanaccountstate/:EmpID', component: printsalesmanaccountstate_component_1.PrintsalesmanaccountstateComponent },
            { path: 'drawerstorage', component: drawerstorage_component_1.DrawerstorageComponent },
            { path: 'branches', component: branches_component_1.BranchesComponent },
            { path: 'addexpenses', component: addexpenses_component_1.AddexpensesComponent },
            { path: 'pulldepositdrawerstorage', component: pulldepositdrawerstorage_component_1.PulldepositdrawerstorageComponent },
            { path: 'moneytransferbetpointssale', component: moneytransferbetpointssale_component_1.MoneytransferbetpointssaleComponent },
            { path: 'drawerstoragereports', component: drawerstoragereports_component_1.DrawerstoragereportsComponent },
            { path: 'reasonwithdrawdeposit', component: reasonwithdrawdeposit_component_1.ReasonwithdrawdepositComponent },
            { path: 'banks', component: banks_component_1.BanksComponent },
            { path: 'checks', component: checks_component_1.ChecksComponent },
            { path: 'reports', component: reports_component_1.ReportsComponent },
            { path: 'kindreportmove', component: kindreportmove_component_1.KindreportmoveComponent },
            { path: 'inventorykindsreports', component: inventorykindsreports_component_1.InventorykindsreportsComponent },
            { path: 'modernpurchasesreport', component: modernpurchasesreport_component_1.ModernpurchasesreportComponent },
            { path: 'detailedcustomersalesreport', component: detailedcustomersalesreport_component_1.DetailedcustomersalesreportComponent },
            { path: 'salesreportcustomer', component: salesreportcustomer_component_1.SalesreportcustomerComponent },
            { path: 'salesreportdelegates', component: salesreportdelegates_component_1.SalesreportdelegatesComponent },
            { path: 'salesreportcompanydelegate', component: salesreportcompanydelegate_component_1.SalesreportcompanydelegateComponent },
            { path: 'salariesreport', component: salariesreport_component_1.SalariesreportComponent },
            { path: 'detailedreportaddbanks', component: detailedreportaddbanks_component_1.DetailedreportaddbanksComponent },
            { path: 'detailedreportwithdrawdeposits', component: detailedreportwithdrawdeposits_component_1.DetailedreportwithdrawdepositsComponent },
            { path: 'expensesreport', component: expensesreport_component_1.ExpensesreportComponent },
            { path: 'visacache', component: visacache_component_1.VisacacheComponent },
            { path: 'reportsaleskindssupplier', component: reportsaleskindssupplier_component_1.ReportsaleskindssupplierComponent },
            { path: 'profitlossreport', component: profitlossreport_component_1.ProfitlossreportComponent },
            { path: 'financialreport', component: financialreport_component_1.FinancialreportComponent },
            { path: 'tools', component: tools_component_1.ToolsComponent },
            { path: 'changesetting', component: changesetting_component_1.ChangesettingComponent },
            { path: 'listsalespoints', component: listsalespoints_component_1.ListsalespointsComponent },
            { path: 'listactivities', component: listactivities_component_1.ListactivitiesComponent }
        ]
    },
    { path: 'home', component: home_component_1.HomeComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forRoot(routes)
                // { onSameUrlNavigation: 'reload' }
            ],
            exports: [router_1.RouterModule],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map