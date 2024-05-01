import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private url : string;
  constructor(private http: HttpClient) {
    this.url= "http://localhost:8081/api/estudiantes"
  }

  getHotels(){
    return this.http.get<any>(this.url+"/list");
  }

  getHotelById(id : number){
    return this.http.get<any>(this.url+"/get"+id);
  }
}
