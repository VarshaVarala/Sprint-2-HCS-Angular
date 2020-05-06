import { Component, OnInit } from '@angular/core';
import { AppointmentService, Appointments, Tests, DiagnosticCenter } from '../appointment.service';
import { Router } from '@angular/router';
import { Test } from '../../../../OnlineTestManagementSystem/src/app/questions-service.service';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.css']
})
export class ViewAppointmentsComponent implements OnInit {

  app:Appointments;
  test:Tests;
  center:DiagnosticCenter;
  status:string;

  constructor(private appService:AppointmentService,private router: Router) { }

  ngOnInit(): void {
    this.getAllAppointments();
  }


  getAllAppointments() {
    //getting data of all appointments

    console.log(this.app)
    this.appService.displayAppointments().subscribe(
     response =>this.handleSuccessfulResponseCenter(response),
    );
  }
  handleSuccessfulResponseCenter(response)
  {
     this.app=response;
  }

statusCheck(){
  if (this.app.approved=false){
    status="awaiting confirmation"
}else {
status="Your Appointment is scheduled!"
}
}

}
