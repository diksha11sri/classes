import { BookingStatus } from './BookingStatus';

 export class Seat{
    seatId:number;
    seatStatus:BookingStatus;
    seatPrice:number;
 
 
 
 Seat(seatId:number,seatStatus:BookingStatus,seatPrice:number) {
    this.seatId = seatId;
    this.seatStatus = seatStatus;
    this.seatPrice = seatPrice;
}
 }