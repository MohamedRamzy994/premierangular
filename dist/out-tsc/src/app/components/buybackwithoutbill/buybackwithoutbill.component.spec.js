"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var buybackwithoutbill_component_1 = require("./buybackwithoutbill.component");
describe('BuybackwithoutbillComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [buybackwithoutbill_component_1.BuybackwithoutbillComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(buybackwithoutbill_component_1.BuybackwithoutbillComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=buybackwithoutbill.component.spec.js.map