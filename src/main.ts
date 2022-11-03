import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/*
 * SoftUni Example: https://github.com/IliaIdakiev/ng-softuni-2022
 */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
