import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VertTabsComponent } from './vert-tabs/vert-tabs.component';
import { ExampleTabsTwoComponent } from './example-tabs-two/example-tabs-two.component';
import { ExampleTabsOneComponent } from './example-tabs-one/example-tabs-one.component';
import { MoreExamplesComponent } from './more-examples/more-examples.component';
import { ExampleEightComponent } from './example-eight/example-eight.component';
import { ExampleNineComponent } from './example-nine/example-nine.component';

@NgModule({
  declarations: [
    AppComponent,
    VertTabsComponent,
    ExampleTabsTwoComponent,
    ExampleTabsOneComponent,
    MoreExamplesComponent,
    ExampleEightComponent,
    ExampleNineComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
