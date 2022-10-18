import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { SubmitComponent } from './submit/submit.component';
import { TableComponent } from './table/table.component';
import { LayoutComponent } from './layout/layout.component';
import { RoutingComponent } from './routing/routing.component';
import { NewroutingComponent } from './newrouting/newrouting.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ListComponent,
    ReactiveFormsComponent,
    SubmitComponent,
    TableComponent,
    LayoutComponent,
    RoutingComponent,
    NewroutingComponent,
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
