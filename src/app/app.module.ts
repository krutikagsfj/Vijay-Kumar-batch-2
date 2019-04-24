import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttrDirective } from './directive/attr.directive';
import { LimitPipe } from './pipes/dollar.pipe';

import { HttpdataComponent } from './httpdata/httpdata.component';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    AttrDirective,
    LimitPipe,
  

   
    HttpdataComponent,
 
   //componet , pipes , directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule// modules 
  ],
  providers: [],//services
  bootstrap: [AppComponent]
})
export class AppModule { }
