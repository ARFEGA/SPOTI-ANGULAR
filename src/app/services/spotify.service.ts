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
  getNewRelease(){
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCryVay-vAq1NIUT4Odh2_WMv9I4mRv-4klxfCvtXAKgvxFNM3r59b0ju_R0mA3KU3LqzDNmYmQB_lWdZ4',
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{ headers });
  }

  getArtists(artist:string){
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCryVay-vAq1NIUT4Odh2_WMv9I4mRv-4klxfCvtXAKgvxFNM3r59b0ju_R0mA3KU3LqzDNmYmQB_lWdZ4',
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${artist}&type=artist&limit=15`,{ headers });
  }


}
