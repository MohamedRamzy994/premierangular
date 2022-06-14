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
var selectedkindsbarcodes_service_1 = require("../../services/productbarcodes/selectedkindsbarcodes.service");
var printd_1 = require("printd");
var PrintkindsbarcodeComponent = /** @class */ (function () {
    function PrintkindsbarcodeComponent(_selectedkindsbarcodesService) {
        this._selectedkindsbarcodesService = _selectedkindsbarcodesService;
        this.productbarcodes = [];
    }
    PrintkindsbarcodeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._selectedkindsbarcodesService.SelectedProducts.forEach(function (element) {
            for (var index = 0; index < element.Num; index++) {
                var brc = { ProductID: element.ProductID, ProductName: element.ProductName, AppName: 'ماركت شوت' };
                _this.productbarcodes.push(brc);
            }
        });
        console.log(this.productbarcodes);
        this.barcodeobject = { barcodevalue: '', barcodeheader: '', barcodefooter: '' };
        this.options = {
            format: 'CODE128',
            lineColor: '#000000',
            width: 3.35,
            height: 50,
            displayValue: false,
            fontOptions: '',
            font: 'monospace',
            textAlign: 'center',
            textPosition: 'bottom',
            textMargin: 2,
            fontSize: 20,
            background: '#ffffff',
            margin: 0,
            marginTop: 0,
            marginBottom: 0,
            marginLeft: 0,
            marginRight: 0
        };
    };
    PrintkindsbarcodeComponent.prototype.PrintBarCodeLabels = function () {
        var cssText = "\n    article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {\n      display: block;\n    }\n    .container {\n      width:100%;\n      direction: rtl;\n\n    }\n    .brheader{\n\n      text-align: center;\n      height:18px;\n    }\n    .seprate{\n      height:50px;\n    }\n    .brfooter{\n      text-align: center;\n\n    }\n    .col-md-3 {\n      width:24%;\n      float:right;\n      border: 1px solid #000000;\n      margin:2px;\n    }\n    .row{\n      width: 100%;\n    }\n    .text-center{\n     text-align:center;\n\n    }\n    h3 {\n      width:70%;\n      font-size: 25px;\n      font-family: sans-serif;\n      border: black solid 1px;\n      padding:5px;\n      margin-right:15%;\n      background-color: #f2f2f2 !important;\n      -webkit-print-color-adjust: exact;\n    }\n    .barecodestretch{\n      align-content: stretch;\n      text-align:center;\n    }\n    @page\n   {\n    margin:0px;\n    margin-top:30px;\n\n  }\n\n  ";
        var d = new printd_1.Printd();
        d.print(document.getElementById('barcodes'), cssText);
    };
    PrintkindsbarcodeComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    PrintkindsbarcodeComponent = __decorate([
        core_1.Component({
            selector: 'app-printkindsbarcode',
            templateUrl: './printkindsbarcode.component.html',
            styleUrls: ['./printkindsbarcode.component.css']
        }),
        __metadata("design:paramtypes", [selectedkindsbarcodes_service_1.SelectedkindsbarcodesService])
    ], PrintkindsbarcodeComponent);
    return PrintkindsbarcodeComponent;
}());
exports.PrintkindsbarcodeComponent = PrintkindsbarcodeComponent;
//# sourceMappingURL=printkindsbarcode.component.js.map