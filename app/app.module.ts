import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ScrollToBottomDirective } from './scroll-to-bottom.directive';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    ScrollToBottomDirective,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
