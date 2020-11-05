import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log("Servicio spoti corriendo......");
  }
 // tslint:disable-next-line: typedef
  getQuery(query: string, filtro: string){
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDZcWbPX6bmKWnYuj7-gesJvVKRrClq8__n8ROK0NCsIB7mWMcLSeVYDIP973z-2OekTMm9KRkWS0SKcMc',
    });
    const auxQuery = `https://api.spotify.com/v1/${ query }`;
    return this.http.get(auxQuery , { headers}).pipe( map ( data => data[`${filtro}`].items));
  }
 // tslint:disable-next-line: typedef
  getNewRelease(){
     return this.getQuery('browse/new-releases?limit=20', 'albums');
  }

  // tslint:disable-next-line: typedef
  getArtists(artist: string){
    const auxQuery = `search?q=${artist}&type=artist&limit=15`;
    return this.getQuery(auxQuery, 'artists');

  }


}
