import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAppointmentsComponent } from './view-appointments/view-appointments.component';
import { MakeAppointmentComponent } from './make-appointment/make-appointment.component';


const routes: Routes = [
  {path:'app-view-appointments',component:ViewAppointmentsComponent},
  {path:'app-make-appointment',component:MakeAppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
