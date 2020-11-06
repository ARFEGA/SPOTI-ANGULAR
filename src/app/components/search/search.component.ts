import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent  {
  artists: any[] = [];
  loading = false;
  isError: boolean;
  typeError: string;
  constructor(private spotifyService: SpotifyService) { }


  // tslint:disable-next-line: typedef
  searchArtists(artist: string){
    this.loading = true;
    this.isError = false;
    setTimeout(() => {
      this.spotifyService.getArtists(artist).subscribe( (data: any) => {
      this.artists = data;
      this.loading = false;
      }, errorService => {
        this.loading = false;
        this.isError = true;
        this.typeError = "Abre postman y busca en Collections, POST Spotify, ahí tienes la consulta para generar el token, después de generado, lo copias y lo pegas en la propiedad correspondiente en spotify.service.ts de esta app.  ERROR DETECTADO: " + errorService.error.error.message;
      }
    );
    }, 2000);

  }

}
