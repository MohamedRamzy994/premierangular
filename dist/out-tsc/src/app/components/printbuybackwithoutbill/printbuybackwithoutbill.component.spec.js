"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var printbuybackwithoutbill_component_1 = require("./printbuybackwithoutbill.component");
describe('PrintbuybackwithoutbillComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [printbuybackwithoutbill_component_1.PrintbuybackwithoutbillComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(printbuybackwithoutbill_component_1.PrintbuybackwithoutbillComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=printbuybackwithoutbill.component.spec.js.map