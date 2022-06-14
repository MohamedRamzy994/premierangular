"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SearchdailysalesfromtodatePipe = /** @class */ (function () {
    function SearchdailysalesfromtodatePipe() {
    }
    SearchdailysalesfromtodatePipe.prototype.transform = function (value, DateFrom, DateTo) {
        return value.filter(function (x) { return (new Date(x.DateSubmit) >= new Date(DateFrom) && new Date(x.DateSubmit) <= new Date(DateTo)); });
    };
    SearchdailysalesfromtodatePipe = __decorate([
        core_1.Pipe({
            name: 'searchdailysalesfromtodate'
        })
    ], SearchdailysalesfromtodatePipe);
    return SearchdailysalesfromtodatePipe;
}());
exports.SearchdailysalesfromtodatePipe = SearchdailysalesfromtodatePipe;
//# sourceMappingURL=searchdailysalesfromtodate.pipe.js.map