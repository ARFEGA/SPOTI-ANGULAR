import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log("Servicio spoti corriendo......");
  }
  getNewRelease(){
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQB7mJzbRuWnxxqUyRLAlstUUcNdki9Ig2wvlgedUbz0F2NQ8gg56OBToE0j5sCgk7gwq4C9gIuPKy2TCn0',
    });
    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{ headers })
    .subscribe((data) =>{
      console.log(data);
    })
    
    
    
  }
}
