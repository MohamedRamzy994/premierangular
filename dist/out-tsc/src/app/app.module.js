"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var salespointscreen_component_1 = require("./components/salespointscreen/salespointscreen.component");
var searchtransferkindusername_pipe_1 = require("./pipes/searchtransferkindusername.pipe");
var searchgroups_pipe_1 = require("./pipes/searchgroups.pipe");
var editkind_component_1 = require("./components/editkind/editkind.component");
var ngx_filter_pipe_1 = require("ngx-filter-pipe");
var oauth_service_1 = require("./services/general/oauth.service");
var http_1 = require("@angular/common/http");
var angular_font_awesome_1 = require("angular-font-awesome");
// tslint:disable-next-line:max-line-length
var detailedreportwithdrawdeposits_component_1 = require("./components/detailedreportwithdrawdeposits/detailedreportwithdrawdeposits.component");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var angular_notifier_1 = require("angular-notifier");
var ngx_pagination_1 = require("ngx-pagination");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var ngx_mydatepicker_1 = require("ngx-mydatepicker");
var ngx_barcode_1 = require("ngx-barcode");
var ng_http_loader_1 = require("ng-http-loader");
var ngx_malihu_scrollbar_1 = require("ngx-malihu-scrollbar");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
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
var header_component_1 = require("./components/header/header.component");
var footer_component_1 = require("./components/footer/footer.component");
var home_component_1 = require("./components/home/home.component");
var root_component_1 = require("./components/root/root.component");
var newuser_service_1 = require("./services/user/newuser.service");
var searchstores_pipe_1 = require("./pipes/searchstores.pipe");
var searchproductsname_pipe_1 = require("./pipes/searchproductsname.pipe");
var searchproductsgroup_pipe_1 = require("./pipes/searchproductsgroup.pipe");
var searchproductscode_pipe_1 = require("./pipes/searchproductscode.pipe");
var searchproductsstopbuy_pipe_1 = require("./pipes/searchproductsstopbuy.pipe");
var searchproductsstopsale_pipe_1 = require("./pipes/searchproductsstopsale.pipe");
var searchproductshasstock_pipe_1 = require("src/app/pipes/searchproductshasstock.pipe");
var searchproductshasnostock_pipe_1 = require("src/app/pipes/searchproductshasnostock.pipe");
var searchproductsprice_pipe_1 = require("./pipes/searchproductsprice.pipe");
var ngx_calculator_module_1 = require("./ngx-calculator/ngx-calculator.module");
var searchtransferkindfromtostore_pipe_1 = require("./pipes/searchtransferkindfromtostore.pipe");
var searchtransferkindfromtodate_pipe_1 = require("./pipes/searchtransferkindfromtodate.pipe");
var showbalkindtran_component_1 = require("./components/showbalkindtran/showbalkindtran.component");
var printkindbaltransbill_component_1 = require("./components/printkindbaltransbill/printkindbaltransbill.component");
var searchproductopeningblanceusername_pipe_1 = require("./pipes/searchproductopeningblanceusername.pipe");
var searchproductopeningbalancestorename_pipe_1 = require("./pipes/searchproductopeningbalancestorename.pipe");
var searchproductopeningbalancefromtodate_pipe_1 = require("./pipes/searchproductopeningbalancefromtodate.pipe");
var printopeningbalancekindbill_component_1 = require("./components/printopeningbalancekindbill/printopeningbalancekindbill.component");
var showkindquantitybill_component_1 = require("./components/showkindquantitybill/showkindquantitybill.component");
var printresetstockkindbill_component_1 = require("./components/printresetstockkindbill/printresetstockkindbill.component");
var kindsbarcodegenerator_component_1 = require("./components/kindsbarcodegenerator/kindsbarcodegenerator.component");
var printkindsbarcode_component_1 = require("./components/printkindsbarcode/printkindsbarcode.component");
var searchsuppliername_pipe_1 = require("./pipes/searchsuppliername.pipe");
var searchsuppliermoneydetailsfromtodate_pipe_1 = require("./pipes/searchsuppliermoneydetailsfromtodate.pipe");
var printfilesuppliermoneydetails_component_1 = require("./components/printfilesuppliermoneydetails/printfilesuppliermoneydetails.component");
// tslint:disable-next-line:max-line-length
var printfilesupplieradvancepaymentsdetails_component_1 = require("./components/printfilesupplieradvancepaymentsdetails/printfilesupplieradvancepaymentsdetails.component");
var searchtproductbuymainfromtodate_pipe_1 = require("./pipes/searchtproductbuymainfromtodate.pipe");
var searchproductbuymaininvoicessotorename_pipe_1 = require("./pipes/searchproductbuymaininvoicessotorename.pipe");
var searchproductbuymaininvoicessuppliername_pipe_1 = require("./pipes/searchproductbuymaininvoicessuppliername.pipe");
var searchproductbuymaininvoicesusername_pipe_1 = require("./pipes/searchproductbuymaininvoicesusername.pipe");
var searchproductbuymaininvoicesinvoicenumber_pipe_1 = require("./pipes/searchproductbuymaininvoicesinvoicenumber.pipe");
var searchemployeename_pipe_1 = require("./pipes/searchemployeename.pipe");
var searchemployeecompunfromtodate_pipe_1 = require("./pipes/searchemployeecompunfromtodate.pipe");
var printfileclientmoneydetails_component_1 = require("./components/printfileclientmoneydetails/printfileclientmoneydetails.component");
// tslint:disable-next-line:max-line-length
var printfilecustomeradvancepaymentsdetails_component_1 = require("./components/printfilecustomeradvancepaymentsdetails/printfilecustomeradvancepaymentsdetails.component");
var searchtproductmovementreportfromtodate_pipe_1 = require("./pipes/searchtproductmovementreportfromtodate.pipe");
var searchegroupnamereport_pipe_1 = require("./pipes/searchegroupnamereport.pipe");
var searchesuppliernamereport_pipe_1 = require("./pipes/searchesuppliernamereport.pipe");
var searcheslaespointnamereport_pipe_1 = require("./pipes/searcheslaespointnamereport.pipe");
var searchereasonnamereport_pipe_1 = require("./pipes/searchereasonnamereport.pipe");
var printpurchasebill_component_1 = require("./components/printpurchasebill/printpurchasebill.component");
var printbuybackwithbill_component_1 = require("./components/printbuybackwithbill/printbuybackwithbill.component");
var printbuybackwithoutbill_component_1 = require("./components/printbuybackwithoutbill/printbuybackwithoutbill.component");
var searchclientsname_pipe_1 = require("./pipes/searchclientsname.pipe");
var searchclientstype_pipe_1 = require("./pipes/searchclientstype.pipe");
var searcholdsalesbillsfromtodate_pipe_1 = require("./pipes/searcholdsalesbillsfromtodate.pipe");
var searcholdsalesstorename_pipe_1 = require("./pipes/searcholdsalesstorename.pipe");
var searcholdsalesusername_pipe_1 = require("./pipes/searcholdsalesusername.pipe");
var searcholdsalesinvoicenumber_pipe_1 = require("./pipes/searcholdsalesinvoicenumber.pipe");
var searcholdsalescustomername_pipe_1 = require("./pipes/searcholdsalescustomername.pipe");
var searcholdsalesinvoicetype_pipe_1 = require("./pipes/searcholdsalesinvoicetype.pipe");
var printoldsalesbill_component_1 = require("./components/printoldsalesbill/printoldsalesbill.component");
var searchbacksalesbillsfromtodate_pipe_1 = require("./pipes/searchbacksalesbillsfromtodate.pipe");
var searchbacksalescustomername_pipe_1 = require("./pipes/searchbacksalescustomername.pipe");
var searchbacksalesinvoicenumber_pipe_1 = require("./pipes/searchbacksalesinvoicenumber.pipe");
var searchbacksalesstorename_pipe_1 = require("./pipes/searchbacksalesstorename.pipe");
var searchbacksalesusername_pipe_1 = require("./pipes/searchbacksalesusername.pipe");
var printsalebackwithbill_component_1 = require("./components/printsalebackwithbill/printsalebackwithbill.component");
var printsalebackwithoutbill_component_1 = require("./components/printsalebackwithoutbill/printsalebackwithoutbill.component");
var searchdailysalesfromtodate_pipe_1 = require("./pipes/searchdailysalesfromtodate.pipe");
var searchdailysalesstorename_pipe_1 = require("./pipes/searchdailysalesstorename.pipe");
var printsalesmanaccountstate_component_1 = require("./components/printsalesmanaccountstate/printsalesmanaccountstate.component");
var branches_component_1 = require("./components/branches/branches.component");
var listsalespoints_component_1 = require("./components/listsalespoints/listsalespoints.component");
var listactivities_component_1 = require("./components/listactivities/listactivities.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                users_component_1.UsersComponent,
                index_component_1.IndexComponent,
                userslist_component_1.UserslistComponent,
                personalaccount_component_1.PersonalaccountComponent,
                adduser_component_1.AdduserComponent,
                modifyuser_component_1.ModifyuserComponent,
                stores_component_1.StoresComponent,
                storeskinds_component_1.StoreskindsComponent,
                liststorekinds_component_1.ListstorekindsComponent,
                transkindbalance_component_1.TranskindbalanceComponent,
                oldtranskindbalbills_component_1.OldtranskindbalbillsComponent,
                kindgroup_component_1.KindgroupComponent,
                kinds_component_1.KindsComponent,
                addkind_component_1.AddkindComponent,
                openbalance_component_1.OpenbalanceComponent,
                openbalancebill_component_1.OpenbalancebillComponent,
                openbalancebills_component_1.OpenbalancebillsComponent,
                showbalancebill_component_1.ShowbalancebillComponent,
                kindquantity_component_1.KindquantityComponent,
                kindquantitybill_component_1.KindquantitybillComponent,
                kindquantitybills_component_1.KindquantitybillsComponent,
                showquantitybill_component_1.ShowquantitybillComponent,
                suppliers_component_1.SuppliersComponent,
                supplierslist_component_1.SupplierslistComponent,
                addsupplier_component_1.AddsupplierComponent,
                filesupplier_component_1.FilesupplierComponent,
                purchases_component_1.PurchasesComponent,
                purchasebill_component_1.PurchasebillComponent,
                oldpurchasebill_component_1.OldpurchasebillComponent,
                showpurchasebill_component_1.ShowpurchasebillComponent,
                buyback_component_1.BuybackComponent,
                buybackwithbill_component_1.BuybackwithbillComponent,
                buybackwithoutbill_component_1.BuybackwithoutbillComponent,
                oldbuyback_component_1.OldbuybackComponent,
                oldbuybackwithbill_component_1.OldbuybackwithbillComponent,
                oldbuybackwithoutbill_component_1.OldbuybackwithoutbillComponent,
                showoldbuybackwithbill_component_1.ShowoldbuybackwithbillComponent,
                showoldbuybackwithoutbill_component_1.ShowoldbuybackwithoutbillComponent,
                employees_component_1.EmployeesComponent,
                employeeslist_component_1.EmployeeslistComponent,
                addemployee_component_1.AddemployeeComponent,
                fileemployee_component_1.FileemployeeComponent,
                clients_component_1.ClientsComponent,
                clientslist_component_1.ClientslistComponent,
                addclient_component_1.AddclientComponent,
                fileclient_component_1.FileclientComponent,
                sales_component_1.SalesComponent,
                salesbill_component_1.SalesbillComponent,
                oldsalesbills_component_1.OldsalesbillsComponent,
                showoldsalesbill_component_1.ShowoldsalesbillComponent,
                salesbillsprofit_component_1.SalesbillsprofitComponent,
                showsalesbillsprofit_component_1.ShowsalesbillsprofitComponent,
                saleback_component_1.SalebackComponent,
                salebackwithbill_component_1.SalebackwithbillComponent,
                salebackwithoutbill_component_1.SalebackwithoutbillComponent,
                oldsaleback_component_1.OldsalebackComponent,
                oldsalebackwithbill_component_1.OldsalebackwithbillComponent,
                showoldsalebackwithbill_component_1.ShowoldsalebackwithbillComponent,
                oldsalebackwithoutbill_component_1.OldsalebackwithoutbillComponent,
                showoldsalebackwithoutbill_component_1.ShowoldsalebackwithoutbillComponent,
                dailysales_component_1.DailysalesComponent,
                salesmanaccountstate_component_1.SalesmanaccountstateComponent,
                drawerstorage_component_1.DrawerstorageComponent,
                addexpenses_component_1.AddexpensesComponent,
                pulldepositdrawerstorage_component_1.PulldepositdrawerstorageComponent,
                moneytransferbetpointssale_component_1.MoneytransferbetpointssaleComponent,
                drawerstoragereports_component_1.DrawerstoragereportsComponent,
                reasonwithdrawdeposit_component_1.ReasonwithdrawdepositComponent,
                banks_component_1.BanksComponent,
                checks_component_1.ChecksComponent,
                reports_component_1.ReportsComponent,
                kindreportmove_component_1.KindreportmoveComponent,
                inventorykindsreports_component_1.InventorykindsreportsComponent,
                modernpurchasesreport_component_1.ModernpurchasesreportComponent,
                detailedcustomersalesreport_component_1.DetailedcustomersalesreportComponent,
                salesreportcustomer_component_1.SalesreportcustomerComponent,
                salesreportdelegates_component_1.SalesreportdelegatesComponent,
                salesreportcompanydelegate_component_1.SalesreportcompanydelegateComponent,
                salariesreport_component_1.SalariesreportComponent,
                detailedreportaddbanks_component_1.DetailedreportaddbanksComponent,
                detailedreportwithdrawdeposits_component_1.DetailedreportwithdrawdepositsComponent,
                expensesreport_component_1.ExpensesreportComponent,
                visacache_component_1.VisacacheComponent,
                reportsaleskindssupplier_component_1.ReportsaleskindssupplierComponent,
                profitlossreport_component_1.ProfitlossreportComponent,
                financialreport_component_1.FinancialreportComponent,
                tools_component_1.ToolsComponent,
                changesetting_component_1.ChangesettingComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                home_component_1.HomeComponent,
                root_component_1.RootComponent,
                editkind_component_1.EditkindComponent,
                searchstores_pipe_1.SearchstoresPipe,
                searchgroups_pipe_1.SearchgroupsPipe,
                searchproductsname_pipe_1.SearchproductsnamePipe,
                searchproductsgroup_pipe_1.SearchproductsgroupPipe,
                searchproductscode_pipe_1.SearchproductscodePipe,
                searchproductsstopbuy_pipe_1.SearchproductsstopbuyPipe,
                searchproductsstopsale_pipe_1.SearchproductsstopsalePipe,
                searchproductshasstock_pipe_1.SearchproductshasstockPipe,
                searchproductshasnostock_pipe_1.SearchproductshasnostockPipe,
                searchproductsprice_pipe_1.SearchproductspricePipe,
                searchtransferkindusername_pipe_1.SearchtransferkindusernamePipe,
                searchtransferkindfromtostore_pipe_1.SearchtransferkindfromtostorePipe,
                searchtransferkindfromtodate_pipe_1.SearchtransferkindfromtodatePipe,
                showbalkindtran_component_1.ShowbalkindtranComponent,
                printkindbaltransbill_component_1.PrintkindbaltransbillComponent,
                searchproductopeningblanceusername_pipe_1.SearchproductopeningblanceusernamePipe,
                searchproductopeningbalancestorename_pipe_1.SearchproductopeningbalancestorenamePipe,
                searchproductopeningbalancefromtodate_pipe_1.SearchproductopeningbalancefromtodatePipe,
                printopeningbalancekindbill_component_1.PrintopeningbalancekindbillComponent,
                printpurchasebill_component_1.PrintpurchasebillComponent,
                showkindquantitybill_component_1.ShowkindquantitybillComponent,
                printresetstockkindbill_component_1.PrintresetstockkindbillComponent,
                kindsbarcodegenerator_component_1.KindsbarcodegeneratorComponent,
                printfileclientmoneydetails_component_1.PrintfileclientmoneydetailsComponent,
                printkindsbarcode_component_1.PrintkindsbarcodeComponent,
                searchsuppliername_pipe_1.SearchsuppliernamePipe,
                searchsuppliermoneydetailsfromtodate_pipe_1.SearchsuppliermoneydetailsfromtodatePipe,
                printfilesuppliermoneydetails_component_1.PrintfilesuppliermoneydetailsComponent,
                printfilesupplieradvancepaymentsdetails_component_1.PrintfilesupplieradvancepaymentsdetailsComponent,
                printfilecustomeradvancepaymentsdetails_component_1.PrintfilecustomeradvancepaymentsdetailsComponent,
                searchtproductbuymainfromtodate_pipe_1.SearchtproductbuymainfromtodatePipe,
                searchproductbuymaininvoicessotorename_pipe_1.SearchproductbuymaininvoicessotorenamePipe,
                searchproductbuymaininvoicessuppliername_pipe_1.SearchproductbuymaininvoicessuppliernamePipe,
                searchproductbuymaininvoicesusername_pipe_1.SearchproductbuymaininvoicesusernamePipe,
                searchproductbuymaininvoicesinvoicenumber_pipe_1.SearchproductbuymaininvoicesinvoicenumberPipe,
                searchemployeename_pipe_1.SearchemployeenamePipe,
                searchemployeecompunfromtodate_pipe_1.SearchemployeecompunfromtodatePipe,
                searchtproductmovementreportfromtodate_pipe_1.SearchtproductmovementreportfromtodatePipe,
                searchegroupnamereport_pipe_1.SearchegroupnamereportPipe,
                searchesuppliernamereport_pipe_1.SearchesuppliernamereportPipe,
                searcheslaespointnamereport_pipe_1.SearcheslaespointnamereportPipe,
                searchereasonnamereport_pipe_1.SearchereasonnamereportPipe,
                printbuybackwithbill_component_1.PrintbuybackwithbillComponent,
                printbuybackwithoutbill_component_1.PrintbuybackwithoutbillComponent,
                searchclientsname_pipe_1.SearchclientsnamePipe,
                searchclientstype_pipe_1.SearchclientstypePipe,
                searcholdsalesbillsfromtodate_pipe_1.SearcholdsalesbillsfromtodatePipe,
                searcholdsalesstorename_pipe_1.SearcholdsalesstorenamePipe,
                searcholdsalesusername_pipe_1.SearcholdsalesusernamePipe,
                searcholdsalesinvoicenumber_pipe_1.SearcholdsalesinvoicenumberPipe,
                searcholdsalescustomername_pipe_1.SearcholdsalescustomernamePipe,
                searcholdsalesinvoicetype_pipe_1.SearcholdsalesinvoicetypePipe,
                printoldsalesbill_component_1.PrintoldsalesbillComponent,
                searchbacksalesbillsfromtodate_pipe_1.SearchbacksalesbillsfromtodatePipe,
                searchbacksalescustomername_pipe_1.SearchbacksalescustomernamePipe,
                searchbacksalesinvoicenumber_pipe_1.SearchbacksalesinvoicenumberPipe,
                searchbacksalesstorename_pipe_1.SearchbacksalesstorenamePipe,
                searchbacksalesusername_pipe_1.SearchbacksalesusernamePipe,
                printsalebackwithbill_component_1.PrintsalebackwithbillComponent,
                printsalebackwithoutbill_component_1.PrintsalebackwithoutbillComponent,
                searchdailysalesfromtodate_pipe_1.SearchdailysalesfromtodatePipe,
                searchdailysalesstorename_pipe_1.SearchdailysalesstorenamePipe,
                printsalesmanaccountstate_component_1.PrintsalesmanaccountstateComponent,
                branches_component_1.BranchesComponent,
                listsalespoints_component_1.ListsalespointsComponent,
                salespointscreen_component_1.SalespointscreenComponent,
                listactivities_component_1.ListactivitiesComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                ng_http_loader_1.NgHttpLoaderModule,
                ngx_pagination_1.NgxPaginationModule,
                ngx_calculator_module_1.NgxCalculatorModule,
                ngx_barcode_1.NgxBarcodeModule,
                angular_font_awesome_1.AngularFontAwesomeModule,
                ngx_mydatepicker_1.NgxMyDatePickerModule.forRoot(),
                ngx_filter_pipe_1.FilterPipeModule,
                ngx_malihu_scrollbar_1.MalihuScrollbarModule.forRoot(),
                ngx_bootstrap_1.ModalModule.forRoot(),
                angular_notifier_1.NotifierModule.withConfig(),
                router_1.RouterModule.forRoot([
                    { path: '', redirectTo: '/home', pathMatch: 'full' },
                    { path: '**', redirectTo: '/home', pathMatch: 'full' }
                ]),
            ],
            providers: [
                newuser_service_1.NewuserService,
                oauth_service_1.OauthService
            ],
            bootstrap: [
                app_component_1.AppComponent
            ],
            exports: [showbalkindtran_component_1.ShowbalkindtranComponent, printkindbaltransbill_component_1.PrintkindbaltransbillComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map