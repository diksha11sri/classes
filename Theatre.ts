import { Screen } from './Screen';

export class Theatre
{
    theatreId:number;
    theatreName:string;
     theatreCity:string;
     listOfMovies:string;
     listOfScreens:Screen;
     managerName:string;
     managerContact:string;

    
    Theatre(theatreId:number, theatreName:string, theatreCity:string,listOfMovies:string,listOfScreens:Screen,managerName:string,managerContact:string)

{
    this.theatreId=theatreId;
    this.theatreName=theatreName;
    this.theatreCity=theatreCity;
    this.listOfMovies=listOfMovies;
    this.listOfScreens=listOfScreens;
    this.managerName=managerName;
    this.managerContact=managerContact;

}   

}