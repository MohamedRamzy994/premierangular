"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var printsalesmanaccountstate_component_1 = require("./printsalesmanaccountstate.component");
describe('PrintsalesmanaccountstateComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [printsalesmanaccountstate_component_1.PrintsalesmanaccountstateComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(printsalesmanaccountstate_component_1.PrintsalesmanaccountstateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=printsalesmanaccountstate.component.spec.js.map