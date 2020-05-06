import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export class DiagnosticCenter{
  constructor(
    public center_Id:String,
    public centerName:String,
    public listOfTests:any){
  }

}
export class Tests{
  constructor(
    public test_Id:String,
    public testName:String){
  }
}

export class Appointments
{
  constructor(
    public dateTimeSlot:String,
    public approved:boolean,
    public userId:String,
    public test:any,
    public center:any)
  {}
}


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }

  public displayCenters(){
    return this.http.get<DiagnosticCenter>("http://localhost:1111/User/FetchCenterList");
  }
  public displayTests(selectedCenterId){
    return this.http.get<Tests>("http://localhost:1111/User/FetchTestList/"+selectedCenterId,{responseType:'json'});

  }
  public makeAppointment(app){

    return this.http.post<any>("http://localhost:1111/User/makeAppointment",app,{responseType:'json'});

  }
public displayAppointments(){
  return this.http.get<Appointments>("http://localhost:1110/User/FetchAppList");
}
}

