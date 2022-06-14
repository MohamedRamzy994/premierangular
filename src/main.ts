import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import './assets/images/pos.png';
import './assets/images/user.jpg';
import './assets/images/bag.png';
import './assets/images/poweroff1.png';
import './assets/images/screenfull.png';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
