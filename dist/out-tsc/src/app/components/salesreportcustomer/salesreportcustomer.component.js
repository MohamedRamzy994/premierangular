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
var core_1 = require("@angular/core");
var SalesreportcustomerComponent = /** @class */ (function () {
    function SalesreportcustomerComponent() {
        this.myOptions = {
            // other options...
            dateFormat: 'mmm d, yyyy',
        };
        this.DateFromObject = {
            'date': {
                'year': 2000,
                'month': 1,
                'day': 1
            },
            'jsdate': '2000-01-01T22:00:00.000Z',
            'formatted': 'Jan 1, 2018'
        };
        this.DateToObject = {
            'date': {
                'year': 2030,
                'month': 1,
                'day': 1
            },
            'jsdate': '2030-01-01T22:00:00.000Z',
            'formatted': 'Jan 1, 2030'
        };
        this.DateFrom = this.DateFromObject.jsdate;
        this.DateTo = this.DateToObject.jsdate;
    }
    SalesreportcustomerComponent.prototype.ngOnInit = function () {
    };
    SalesreportcustomerComponent.prototype.GetDateFrom = function (event) {
        this.DateFrom = this.DateFromObject.jsdate;
    };
    SalesreportcustomerComponent.prototype.GetDateTo = function (event) {
        this.DateTo = this.DateToObject.jsdate;
    };
    SalesreportcustomerComponent = __decorate([
        core_1.Component({
            selector: 'app-salesreportcustomer',
            templateUrl: './salesreportcustomer.component.html',
            styleUrls: ['./salesreportcustomer.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], SalesreportcustomerComponent);
    return SalesreportcustomerComponent;
}());
exports.SalesreportcustomerComponent = SalesreportcustomerComponent;
//# sourceMappingURL=salesreportcustomer.component.js.map