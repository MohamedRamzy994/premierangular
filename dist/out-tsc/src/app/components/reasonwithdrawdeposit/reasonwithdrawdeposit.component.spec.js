"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var reasonwithdrawdeposit_component_1 = require("./reasonwithdrawdeposit.component");
describe('ReasonwithdrawdepositComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [reasonwithdrawdeposit_component_1.ReasonwithdrawdepositComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(reasonwithdrawdeposit_component_1.ReasonwithdrawdepositComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=reasonwithdrawdeposit.component.spec.js.map