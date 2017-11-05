import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import './vendor/polyfills';


import { AppModule } from './components/app/module';

platformBrowserDynamic().bootstrapModule(AppModule);