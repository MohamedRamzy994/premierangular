"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var printresetstockkindbill_component_1 = require("./printresetstockkindbill.component");
describe('PrintresetstockkindbillComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [printresetstockkindbill_component_1.PrintresetstockkindbillComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(printresetstockkindbill_component_1.PrintresetstockkindbillComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=printresetstockkindbill.component.spec.js.map