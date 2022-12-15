import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripsListComponent } from './components/trip-list/trips-list.component';
import { TripDetailsComponent } from './components/trip-details/trip-details.component';
import { AddTripComponent } from './components/add-trip/add-trip.component';
import { StationListComponent } from './station-list/station-list/station-list.component';
import { AdminSignupComponent } from './admin/admin-signup/admin-signup.component';
import { AdminSigninComponent } from './admin/admin-signin/admin-signin.component';
import { EditTripStationComponent } from './components/edit-trip-station/edit-trip-station.component';
import { AddStationComponent } from './add-station/add-station.component';
import { StationEditComponent } from './station-edit/station-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'trips', pathMatch: 'full' },
  { path: 'trips', component: TripsListComponent },
  {path: 'stations', component: StationListComponent },
  { path: 'trips/:id', component: TripDetailsComponent },
  { path: 'addTrip', component: AddTripComponent },
  { path: 'signup', component: AdminSignupComponent },
  { path: 'login', component: AdminSigninComponent },
  { path: 'setstation/:id', component: EditTripStationComponent },
  { path: 'addStation', component: AddStationComponent },
  { path: 'station/:id', component: StationEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
