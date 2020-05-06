import { Component, OnInit } from '@angular/core';
import { AppointmentService, Tests, DiagnosticCenter,Appointments } from '../appointment.service';
import { Router } from '@angular/router';
import { Test } from '../../../../OnlineTestManagementSystem/src/app/questions-service.service';

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.css']
})
export class MakeAppointmentComponent implements OnInit {
  selectedTest:Tests;
  test_details:any
  checkTests:boolean=false
  centre:DiagnosticCenter
  tests:Tests
  selectedCenterId:String;
  selectedDate:String
  dateCheck:Boolean=false;
  userIdCheck:Boolean=false;
  appointment:String;

  user:DiagnosticCenter=new DiagnosticCenter ("","",[]);
  tester:Tests=new Tests("","");

  app:Appointments=new Appointments("",false,"","","")

  constructor(private appService:AppointmentService,private router: Router) { }

  ngOnInit(): void {
    this.getAllCenters();
  }

 onSelect(user:DiagnosticCenter){
  console.log(user)
  console.log(user.center_Id)
  this.selectedCenterId=user.center_Id;
  this.appService.displayTests(this.selectedCenterId).subscribe(
    response =>this.handleSuccessfulResponseTest(response),
   );
   this.app.center=user.centerName;
 }

handleSuccessfulResponseTest(response)
{
   this.tests=response;
}

  onTest(tester){
    this.dateCheck=true;
    this.app.test=tester.testName;
    console.log(this.app);
  }

  onDate(){
   this.userIdCheck=true;
   this.app.approved=false;
    console.log(this.app);
  }

  onConfirm(){
    console.log(this.app);
    this.appService.makeAppointment(this.app).subscribe((data) =>this.appointment = data);
    }
  
  getAllCenters() {
     //getting data of all Centers
  
     this.appService.displayCenters().subscribe(
      response =>this.handleSuccessfulResponseCenter(response),
     );
   }
   handleSuccessfulResponseCenter(response)
   {
      this.centre=response;
   }


  }
