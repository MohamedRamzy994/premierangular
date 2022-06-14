"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var printsalebackwithbill_component_1 = require("./printsalebackwithbill.component");
describe('PrintsalebackwithbillComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [printsalebackwithbill_component_1.PrintsalebackwithbillComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(printsalebackwithbill_component_1.PrintsalebackwithbillComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=printsalebackwithbill.component.spec.js.map