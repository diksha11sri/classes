import { Time } from '@angular/common';
import { Movie } from './Movie';
import { Seat } from './Seat';


export class Show{
showId:number;
showStartTime:Time;
showEndTime:Time;
seats:Seat;
showName:string;
movieName:Movie;
screenId:number;
theatreId:number;


Show(showId:number,  showStartTime:Time , showEndTime:Time,  seats:Seat,  showName:string,  movieName:Movie,screenId:number, theatreId:number)
   {
 this.showId = showId;
this.showStartTime = showStartTime;
this.showEndTime = showEndTime;
this.seats = seats;
this.showName = showName;
this.movieName = movieName;
this.screenId = screenId;
this.theatreId = theatreId;
}

}