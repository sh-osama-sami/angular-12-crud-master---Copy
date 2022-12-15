import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {APP_INITIALIZER}from'@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTripComponent } from './components/add-trip/add-trip.component';
import { TripDetailsComponent } from './components/trip-details/trip-details.component';
import { TripsListComponent } from './components/trip-list/trips-list.component';
import { tripService } from './services/trip.service';
import { StationListComponent } from './station-list/station-list/station-list.component';
import { AdminSignupComponent } from './admin/admin-signup/admin-signup.component';
import { AdminSigninComponent } from './admin/admin-signin/admin-signin.component';
import { EditTripStationComponent } from './components/edit-trip-station/edit-trip-station.component';
import { AddStationComponent } from './add-station/add-station.component';
import { StationEditComponent } from './station-edit/station-edit.component';
import { AppConfigService } from './providers/app-config.service';
export function initConfig(appConfig:AppConfigService){
  return()=>appConfig.loadConfig();
  }
@NgModule({
  declarations: [
    AppComponent,
    AddTripComponent,
    TripDetailsComponent,
    TripsListComponent,
    StationListComponent,
    AdminSignupComponent,
    AdminSigninComponent,
    EditTripStationComponent,
    AddStationComponent,
    StationEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide:APP_INITIALIZER,
    useFactory:initConfig,
    deps:[AppConfigService],
    multi:true,

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
