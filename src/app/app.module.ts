import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VertTabsComponent } from './vert-tabs/vert-tabs.component';
import { ExampleOneComponent } from './example-one/example-one.component';

@NgModule({
  declarations: [
    AppComponent,
    VertTabsComponent,
    ExampleOneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
