import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { PasswordDialogComponent } from './password.dialog.component';
import { DocumentService } from './document.service';

@NgModule({
  declarations: [
    AppComponent,
    PasswordDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [ DocumentService ],
  bootstrap: [AppComponent],
  entryComponents: [PasswordDialogComponent]
})
export class AppModule { }
