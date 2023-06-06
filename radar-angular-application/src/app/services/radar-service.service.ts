import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Radar} from "../models/radar.model";
import {KeycloakInstance} from "keycloak-js";
import {__await} from "tslib";
declare var Keycloak:any;
@Injectable({
  providedIn: 'root'
})
export class RadarServiceService {
  // @ts-ignore
  public kc:KeycloakInstance;
  constructor(private http: HttpClient) {

  }
  public async init(){
    console.log("security initialisation...");
    this.kc=new Keycloak({
      realm :"radar-realm",
      clientId : "radar-client",
      url : "http://localhost:8080"

    });
    await this.kc.init({
      onLoad:'login-required'

    })
  }
  public getRadars():Observable<Array<Radar>>{
    return this.http.get<Array<Radar>>("http://localhost:8000/RADAR-SERVICE/web/radars")
  }

  public getRadar(id: any):Observable<Radar>{
    return this.http.get<Radar>("http://localhost:8000/RADAR-SERVICE/web/radars/"+id)
  }

  public getInfractions():Observable<Array<any>>{
    return this.http.get<Array<any>>("http://localhost:8000/INFRACTION-SERVICE/web/infractions")
  }

  public getVehicles():Observable<Array<any>>{
    return this.http.get<Array<any>>("http://localhost:8000/IMMATRICULATION-SERVICE/web/vehicles")
  }

  deleteVehicle(id: any) {
    return this.http.delete("http://localhost:8000/IMMATRICULATION-SERVICE/web/vehicles/"+id)
  }

  deleteRadar(id: any) {
    return this.http.delete("http://localhost:8000/RADAR-SERVICE/web/radars/"+id)
  }

  deleteInfraction(id: any) {
    return this.http.delete("http://localhost:8000/INFRACTION-SERVICE/web/infractions/"+id)
  }

  saveRadar(Radar: any) {
    return this.http.post("http://localhost:8000/RADAR-SERVICE/web/radars", Radar)
  }

  saveInfraction(radarId: any, vehicleId: any, infraction: any) {
    return this.http.post("http://localhost:8000/INFRACTION-SERVICE/web/infractions/"+radarId+"/vehicles/"+vehicleId + "?speed=" + infraction, infraction)
  }

  saveVehicle(vehicle: any) {
    return this.http.post("http://localhost:8000/IMMATRICULATION-SERVICE/web/vehicles", vehicle)
  }

  saveOwner(owner: { birthdate: any; name: any; email: any }) {
    return this.http.post("http://localhost:8000/IMMATRICULATION-SERVICE/web/owners", owner)
  }

  addVehicleToOwner(savedVehicle: any, savedOwner: any) {
    return this.http.post("http://localhost:8000/IMMATRICULATION-SERVICE/web/vehicles/"+savedVehicle.id+"/owners/"+savedOwner.id, savedOwner);
  }
}
