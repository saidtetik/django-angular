import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TravelDetailComponent } from './travel-detail/travel-detail.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    TravelListComponent,
    TravelDetailComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	  HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
