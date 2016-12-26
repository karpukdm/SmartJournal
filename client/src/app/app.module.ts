import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './component/app/app.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {MDL} from "./mdl";
import { TemplateBuilderComponent } from './component/template-builder/template-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    MDL,
    TemplateBuilderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
