// This is the app module

// A module consists of an @NgModule and a @Component
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Load this module's component
import { AppComponent } from './component';

// This component uses a child component so we need to load that (THE COMPONENT, NOT IT'S MODULE)
import { ChildComponent } from '../child-component/component';


@NgModule({
  declarations: [ // All the components used by this module
    AppComponent, // The actual component
    ChildComponent // A child component in use by the template!
  ],
  bootstrap: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  ]
})

// Export the class for use by other modules (in this case the entry point (main.ts) where this is bootstrapped
export class AppModule {}