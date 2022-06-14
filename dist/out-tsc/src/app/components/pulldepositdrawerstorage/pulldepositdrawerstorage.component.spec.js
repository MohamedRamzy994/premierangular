"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var pulldepositdrawerstorage_component_1 = require("./pulldepositdrawerstorage.component");
describe('PulldepositdrawerstorageComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [pulldepositdrawerstorage_component_1.PulldepositdrawerstorageComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(pulldepositdrawerstorage_component_1.PulldepositdrawerstorageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pulldepositdrawerstorage.component.spec.js.map