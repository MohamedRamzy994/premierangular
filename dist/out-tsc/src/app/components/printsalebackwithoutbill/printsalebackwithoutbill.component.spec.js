"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var printsalebackwithoutbill_component_1 = require("./printsalebackwithoutbill.component");
describe('PrintsalebackwithoutbillComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [printsalebackwithoutbill_component_1.PrintsalebackwithoutbillComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(printsalebackwithoutbill_component_1.PrintsalebackwithoutbillComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=printsalebackwithoutbill.component.spec.js.map