import { Component } from '@angular/core';
import { Hotel } from "../../domain/Hotel";
import { HotelService } from "../../services/hotel/hotel.service";

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.css'
})
export class HotelComponent{
  protected hotels: Hotel[];
  protected hotel? : Hotel;

  constructor(private hotelService : HotelService) {
      this.hotels=[];
  }

  getHotels(): void {
    this.hotelService.getHotels().subscribe(data => {
      this.hotels = data;
    });
  }
  getHotelById(id : number): void {
    this.hotelService.getHotelById(id).subscribe(data => {
      this.hotel = data;
    });
  }
}
