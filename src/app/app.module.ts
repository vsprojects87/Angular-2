import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { RegisterComponent } from './register/register.component';
import { FormArrayExampleComponent } from './form-array-example/form-array-example.component';
import { DynamicRowsComponent } from './dynamic-rows/dynamic-rows.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Child1Component,
    Child2Component,
    LoginComponent,
    ParentComponent,
    RegisterComponent,
    FormArrayExampleComponent,
    DynamicRowsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
