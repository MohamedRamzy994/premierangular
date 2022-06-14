"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SearchproductshasstockPipe = /** @class */ (function () {
    function SearchproductshasstockPipe() {
    }
    SearchproductshasstockPipe.prototype.transform = function (value, term) {
        if (term === false) {
            return value;
        }
        else if (term === true) {
            return value.filter(function (x) { return x.Stock !== 0; });
        }
        else {
            return value;
        }
    };
    SearchproductshasstockPipe = __decorate([
        core_1.Pipe({
            name: 'searchproductshasstock'
        })
    ], SearchproductshasstockPipe);
    return SearchproductshasstockPipe;
}());
exports.SearchproductshasstockPipe = SearchproductshasstockPipe;
//# sourceMappingURL=searchproductshasstock.pipe.js.map