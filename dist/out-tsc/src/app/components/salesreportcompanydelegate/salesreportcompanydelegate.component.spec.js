"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var salesreportcompanydelegate_component_1 = require("./salesreportcompanydelegate.component");
describe('SalesreportcompanydelegateComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [salesreportcompanydelegate_component_1.SalesreportcompanydelegateComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(salesreportcompanydelegate_component_1.SalesreportcompanydelegateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=salesreportcompanydelegate.component.spec.js.map