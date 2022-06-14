"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var detailedreportwithdrawdeposits_component_1 = require("./detailedreportwithdrawdeposits.component");
describe('DetailedreportwithdrawdepositsComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [detailedreportwithdrawdeposits_component_1.DetailedreportwithdrawdepositsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(detailedreportwithdrawdeposits_component_1.DetailedreportwithdrawdepositsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=detailedreportwithdrawdeposits.component.spec.js.map