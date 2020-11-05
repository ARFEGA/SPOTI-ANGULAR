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
      Authorization: 'Bearer BQC646Mte1vhf1Sov3SQpm_J-zR5PylHhH4aMiD3cMFwhDYA8f7I1mnakza7LOxkDFmqa_N3gkviOIXgq7o',
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{ headers });
  }

  getArtists(artist:string){
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQC646Mte1vhf1Sov3SQpm_J-zR5PylHhH4aMiD3cMFwhDYA8f7I1mnakza7LOxkDFmqa_N3gkviOIXgq7o',
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${artist}&type=artist&limit=15`,{ headers });
  }


}
