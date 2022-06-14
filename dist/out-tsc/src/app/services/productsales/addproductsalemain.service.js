"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var log_service_1 = require("../general/log.service");
var apiurl_service_1 = require("../general/apiurl.service");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var AddproducsalemainService = /** @class */ (function () {
    function AddproducsalemainService(_apiurlService, http, _logservice) {
        this._apiurlService = _apiurlService;
        this.http = http;
        this._logservice = _logservice;
    }
    AddproducsalemainService.prototype.addProductSaleAddMain = function (_productBuyMainTableModel) {
        this.addproductsalemainapiurl = this._apiurlService.apiUrl.concat('/api/ProductSalesApi/ProductSaleAddMain');
        return this.http.post(this.addproductsalemainapiurl, _productBuyMainTableModel, httpOptions).
            pipe(operators_1.catchError(this.handleError('AddproducsalemainService')));
    };
    // TODO : log messages to console
    AddproducsalemainService.prototype.log = function (message) {
        this._logservice.add("AddproducsalemainService: " + message);
    };
    AddproducsalemainService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO : send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO : better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return rxjs_1.of(result);
        };
    };
    AddproducsalemainService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [apiurl_service_1.ApiurlService,
            http_1.HttpClient,
            log_service_1.Logservice])
    ], AddproducsalemainService);
    return AddproducsalemainService;
}());
exports.AddproducsalemainService = AddproducsalemainService;
//# sourceMappingURL=addproductsalemain.service.js.map