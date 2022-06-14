"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var printopeningbalancekindbill_component_1 = require("./printopeningbalancekindbill.component");
describe('PrintopeningbalancekindbillComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [printopeningbalancekindbill_component_1.PrintopeningbalancekindbillComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(printopeningbalancekindbill_component_1.PrintopeningbalancekindbillComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=printopeningbalancekindbill.component.spec.js.map