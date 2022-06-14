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
var NotificationService = /** @class */ (function () {
    function NotificationService() {
    }
    NotificationService.prototype.Notifyme = function () {
        if ('Notification' in window) {
            this.ask = Notification.requestPermission();
            this.ask.then(function (permission) {
                if (permission === 'granted') {
                    var msg = new Notification('مـاركـت شــوت', {
                        body: ' مرحبا بك فى ماركـت شـوت  برجاء  تسجيل الدخول ',
                        icon: '/bag.png',
                        dir: 'rtl',
                        lang: 'ar-SA'
                    });
                }
            });
        }
    };
    NotificationService.prototype.NotifyUser = function (_oauth) {
        if ('Notification' in window) {
            this.ask = Notification.requestPermission();
            this.ask.then(function (permission) {
                if (permission === 'granted') {
                    var msg = new Notification('مـاركـت شــوت', {
                        body: " \u0645\u0631\u062D\u0628\u0627  " + _oauth.LoginName + " \u0641\u0649 \u0628\u0631\u0646\u0627\u0645\u062C \u0645\u0640\u0627\u0631\u0643\u0640\u062A \u0634\u0640\u0648\u062A",
                        icon: '/bag.png',
                        dir: 'rtl',
                        lang: 'ar-SA'
                    });
                }
            });
        }
    };
    NotificationService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NotificationService);
    return NotificationService;
}());
exports.NotificationService = NotificationService;
//# sourceMappingURL=notification.service.js.map