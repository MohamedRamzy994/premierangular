"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var showsalesbillsprofit_component_1 = require("./showsalesbillsprofit.component");
describe('ShowsalesbillsprofitComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [showsalesbillsprofit_component_1.ShowsalesbillsprofitComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(showsalesbillsprofit_component_1.ShowsalesbillsprofitComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=showsalesbillsprofit.component.spec.js.map