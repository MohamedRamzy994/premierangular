"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var oldsalebackwithoutbill_component_1 = require("./oldsalebackwithoutbill.component");
describe('OldsalebackwithoutbillComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [oldsalebackwithoutbill_component_1.OldsalebackwithoutbillComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(oldsalebackwithoutbill_component_1.OldsalebackwithoutbillComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=oldsalebackwithoutbill.component.spec.js.map