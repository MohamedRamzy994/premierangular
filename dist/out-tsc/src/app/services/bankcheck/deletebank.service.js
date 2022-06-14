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
var DeletebankService = /** @class */ (function () {
    function DeletebankService(http, _apiurl, _logservice) {
        this.http = http;
        this._apiurl = _apiurl;
        this._logservice = _logservice;
    }
    DeletebankService.prototype.DeleteBank = function (_bankID) {
        this.deletestoreurl = this._apiurl.apiUrl.concat('/api/BankCheckApi/DeleteBank?BankID=' + _bankID);
        return this.http.post(this.deletestoreurl, httpOptions)
            .pipe(operators_1.catchError(this.handleError('DeletebankService')));
    };
    // TODO : log messages to console
    DeletebankService.prototype.log = function (message) {
        this._logservice.add("DeletebankService: " + message);
    };
    DeletebankService.prototype.handleError = function (operation, result) {
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
    DeletebankService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            apiurl_service_1.ApiurlService,
            log_service_1.Logservice])
    ], DeletebankService);
    return DeletebankService;
}());
exports.DeletebankService = DeletebankService;
//# sourceMappingURL=deletebank.service.js.map