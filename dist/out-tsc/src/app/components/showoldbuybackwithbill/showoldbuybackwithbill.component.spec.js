"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var showoldbuybackwithbill_component_1 = require("./showoldbuybackwithbill.component");
describe('ShowoldbuybackwithbillComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [showoldbuybackwithbill_component_1.ShowoldbuybackwithbillComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(showoldbuybackwithbill_component_1.ShowoldbuybackwithbillComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=showoldbuybackwithbill.component.spec.js.map