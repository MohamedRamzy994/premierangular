"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var printfileclientmoneydetails_component_1 = require("./printfileclientmoneydetails.component");
describe('PrintfileclientmoneydetailsComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [printfileclientmoneydetails_component_1.PrintfileclientmoneydetailsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(printfileclientmoneydetails_component_1.PrintfileclientmoneydetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=printfileclientmoneydetails.component.spec.js.map