import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuccesalertComponent } from './successalert/successalert.components';
import { WarningalertComponent } from './warningalert/warningalert.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccesalertComponent,
    WarningalertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
