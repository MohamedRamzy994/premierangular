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
var ngx_bootstrap_1 = require("ngx-bootstrap");
var ToolsComponent = /** @class */ (function () {
    function ToolsComponent(_modalService) {
        this._modalService = _modalService;
        this.modalService = _modalService;
    }
    ToolsComponent.prototype.ngOnInit = function () {
    };
    ToolsComponent.prototype.openCalculatorModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    ToolsComponent = __decorate([
        core_1.Component({
            selector: 'app-tools',
            templateUrl: './tools.component.html',
            styleUrls: ['./tools.component.css']
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_1.BsModalService])
    ], ToolsComponent);
    return ToolsComponent;
}());
exports.ToolsComponent = ToolsComponent;
//# sourceMappingURL=tools.component.js.map