import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { singleSpaAngularPlatform } from '../../../single-spa-angular-mf/src/single-spa-angular-platform';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare const window;

if (environment.production) {
  enableProdMode();
}

singleSpaAngularPlatform.mount('app-root', (unmount) => {
  platformBrowserDynamic().bootstrapModule(AppModule).then(unmount);
});