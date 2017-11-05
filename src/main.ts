// Entry point to the whole App
// To allow the app to be bootstrapped (created in the browser DOM) we use platformBrowserDynamic
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// To enable backwards compatibility with older devices and browsers. Not necessary but a wise addition
import './vendor/polyfills';

// Load our root component, which is the one the whole app is contained within.
// At this point I don't know where Redux etc. fits in but it could be here or directly within the root component
import { AppModule } from './components/app/module';

// Bootstrap the app into the browser - without this nothing would appear in the browser
// Note: You need a DOM element with the right selector for this to work. The selector is that specified in the
// App component.ts file under 'selector: app-root' so we need to add <app-root>Loading...</app-root> to the DOM
// Any HTML between the markup is replaced when the app 'boots'
platformBrowserDynamic().bootstrapModule(AppModule);
