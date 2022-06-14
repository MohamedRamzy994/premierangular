import { Route, ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private logIndetect: string;
  ask: Promise<NotificationPermission>;

  constructor(private route: Router, private router: ActivatedRoute) {

  }

  ngOnInit() {

    localStorage.setItem('logIndetect', 'LoginComponent');


  }

  goIndex(): void {

  this.route.navigate(['index']);
  localStorage.removeItem('logIndetect');
  localStorage.clear();
  }

  Notifyme(): void {


      if ('Notification' in window) {

      this.ask = Notification.requestPermission();
      this.ask.then(permission => {

        if (permission === 'granted') {

          const msg = new Notification('PREMIER', {
            body: 'مرحبا بك فى استخدام النظام برجاء تسجيل الدخول لاستخدام النظام ',
            icon: '/bag.png'

          });


        }

      });


    }
  }

}
