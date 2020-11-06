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
  getHeader(){
     const headers = new HttpHeaders({
      Authorization: 'Bearer BQCYyAY2FSpufHKgzYKtL3c26GO3WzAU97kdvf2lZS8XHTEaYhmFxOi9uFnB_oVPltW2oRNV_JWvp5616oE',
    });
     return headers;
  }
 // tslint:disable-next-line: typedef
  getQuery(query: string, filtro: string){
    const headers = this.getHeader();
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

  // tslint:disable-next-line: typedef
  getArtist(id: string){
    const headers = this.getHeader();
    const auxQuery = ` https://api.spotify.com/v1/artists/${id}`;
    return this.http.get(auxQuery, { headers} );
  }
  // tslint:disable-next-line: typedef
  getArtistTopTracks(id: string){
    const headers = this.getHeader();
    const auxQuery = ` https://api.spotify.com/v1/artists/${id}/top-tracks?market=es`;
    return this.http.get(auxQuery, { headers} ).pipe(map(data => data['tracks']));
  }
}
