"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var detailedcustomersalesreport_component_1 = require("./detailedcustomersalesreport.component");
describe('DetailedcustomersalesreportComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [detailedcustomersalesreport_component_1.DetailedcustomersalesreportComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(detailedcustomersalesreport_component_1.DetailedcustomersalesreportComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=detailedcustomersalesreport.component.spec.js.map