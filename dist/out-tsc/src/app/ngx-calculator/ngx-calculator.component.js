"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return NgxCalculatorComponent; }),
    multi: true
};
var DEFAULT_FIXED_POINT_NUMBER = 3;
var ERROR_TEXT = 'Error';
var EMPTY_STRING = '';
var BUTTON_CLEAR = 'C';
var BUTTON_EQUAL = '=';
var noop = function () { };
var NgxCalculatorComponent = /** @class */ (function () {
    function NgxCalculatorComponent() {
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this.result = EMPTY_STRING;
    }
    NgxCalculatorComponent.prototype.btnClicked = function (btn) {
        try {
            if (btn == BUTTON_CLEAR) {
                this.result = EMPTY_STRING;
                this.onChangeCallback(0);
            }
            else if (btn == BUTTON_EQUAL) {
                this.result = this.stringifiedValue;
                this.onChangeCallback(this.value || 0);
            }
            else {
                this.result = (this.result == EMPTY_STRING || this.result == ERROR_TEXT) ? btn : (this.result + btn);
            }
        }
        catch (error) {
            this.result = ERROR_TEXT;
        }
    };
    Object.defineProperty(NgxCalculatorComponent.prototype, "value", {
        get: function () {
            return eval(this.result);
        },
        set: function (v) {
            if (v !== this.value) {
                this.result = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NgxCalculatorComponent.prototype, "stringifiedValue", {
        get: function () {
            return (this.value % 1 ? this.value.toFixed(DEFAULT_FIXED_POINT_NUMBER) : this.value) || EMPTY_STRING;
        },
        enumerable: true,
        configurable: true
    });
    NgxCalculatorComponent.prototype.writeValue = function (obj) {
        this.value = obj || 0;
    };
    NgxCalculatorComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    NgxCalculatorComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    NgxCalculatorComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    NgxCalculatorComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    NgxCalculatorComponent = __decorate([
        core_1.Component({
            selector: 'ngx-calculator',
            templateUrl: './ngx-calculator.component.html',
            styleUrls: ['./ngx-calculator.component.scss'],
            providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [])
    ], NgxCalculatorComponent);
    return NgxCalculatorComponent;
}());
exports.NgxCalculatorComponent = NgxCalculatorComponent;
//# sourceMappingURL=ngx-calculator.component.js.map