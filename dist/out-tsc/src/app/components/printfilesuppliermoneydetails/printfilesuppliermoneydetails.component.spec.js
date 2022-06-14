"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var printfilesuppliermoneydetails_component_1 = require("./printfilesuppliermoneydetails.component");
describe('PrintfilesuppliermoneydetailsComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [printfilesuppliermoneydetails_component_1.PrintfilesuppliermoneydetailsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(printfilesuppliermoneydetails_component_1.PrintfilesuppliermoneydetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=printfilesuppliermoneydetails.component.spec.js.map