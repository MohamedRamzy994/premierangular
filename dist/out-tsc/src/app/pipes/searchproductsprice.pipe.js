"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SearchproductspricePipe = /** @class */ (function () {
    function SearchproductspricePipe() {
    }
    SearchproductspricePipe.prototype.transform = function (value, from, to) {
        if (from === undefined || to === undefined) {
            return value;
        }
        else if (from === null && to === null) {
            return value;
        }
        else {
            return value.filter(function (x) { return x.Price >= from && x.Price <= to; });
        }
    };
    SearchproductspricePipe = __decorate([
        core_1.Pipe({
            name: 'searchproductsprice'
        })
    ], SearchproductspricePipe);
    return SearchproductspricePipe;
}());
exports.SearchproductspricePipe = SearchproductspricePipe;
//# sourceMappingURL=searchproductsprice.pipe.js.map