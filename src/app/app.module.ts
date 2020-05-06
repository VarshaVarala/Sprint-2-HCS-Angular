import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MakeAppointmentComponent } from './make-appointment/make-appointment.component';
import { ViewAppointmentsComponent } from './view-appointments/view-appointments.component';
import { AppointmentService } from './appointment.service';

@NgModule({
  declarations: [
    AppComponent,
    MakeAppointmentComponent,
    ViewAppointmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient,AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
