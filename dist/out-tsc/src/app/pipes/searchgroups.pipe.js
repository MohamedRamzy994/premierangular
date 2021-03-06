"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SearchgroupsPipe = /** @class */ (function () {
    function SearchgroupsPipe() {
    }
    SearchgroupsPipe.prototype.transform = function (value, term) {
        return value.filter(function (x) { return x.CatName.toLowerCase().startsWith(term.toLowerCase()); });
    };
    SearchgroupsPipe = __decorate([
        core_1.Pipe({
            name: 'searchgroups'
        })
    ], SearchgroupsPipe);
    return SearchgroupsPipe;
}());
exports.SearchgroupsPipe = SearchgroupsPipe;
//# sourceMappingURL=searchgroups.pipe.js.map