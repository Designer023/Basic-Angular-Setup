import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ChildComponent } from './component';

@NgModule({
  declarations: [
    ChildComponent
  ],
  bootstrap: [
    ChildComponent
  ],
  imports: [
    BrowserModule
  ]
})
export class ChildModule {}