import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import { ThemingWithSwitchCaseComponent } from './theming-with-switch-case/theming-with-switch-case.component';
import { ThemingWithFactoryMethodComponent } from './theming-with-factory-method/theming-with-factory-method.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemingWithSwitchCaseComponent,
    ThemingWithFactoryMethodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
