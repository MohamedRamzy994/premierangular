import { Oauth } from './../../models/oauth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  ask: Promise<NotificationPermission>;
constructor() { }

  Notifyme(): void {
   if ('Notification' in window) {

      this.ask = Notification.requestPermission();
      this.ask.then(permission => {

        if (permission === 'granted') {

          const msg = new Notification('مـاركـت شــوت', {
            body: ' مرحبا بك فى ماركـت شـوت  برجاء  تسجيل الدخول ',
            icon: '/bag.png',
            dir: 'rtl',
            lang: 'ar-SA'

          });


        }

      });


    }
  }

  NotifyUser(_oauth: Oauth): void {
    if ('Notification' in window) {

       this.ask = Notification.requestPermission();
       this.ask.then(permission => {

         if (permission === 'granted') {

           const msg = new Notification('مـاركـت شــوت', {
             body: ` مرحبا  ${_oauth.LoginName} فى برنامج مـاركـت شـوت`,
             icon: '/bag.png',
             dir: 'rtl',
             lang: 'ar-SA'

           });


         }

       });


     }
   }
}
