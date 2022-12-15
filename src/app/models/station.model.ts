import { trip } from "./trip.model";

export class station {
    id?: number;
    name?: string;
    fromStationsTrip?:trip;
    toStationsTrip?:trip;
   
  }
  