import { Component, OnInit } from '@angular/core';
import { timeInterval } from 'rxjs/operators';
import { SpotifyService } from './../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  newReleases: any[] = [];
  loading = true;
  error: boolean;
  typeError: string;
  constructor(private spotifyService: SpotifyService, ) {
    setTimeout(() => {
      this.error = false;
      this.spotifyService.getNewRelease()
       .subscribe((data: any) => {
         this.newReleases = data;
         this.loading = false;
      }, errorServicio => {
         this.loading = false;
         this.error = true;
         this.typeError = "Abre postman y busca en Collections, POST Spotify, ahí tienes la consulta para generar el token, después de generado, lo copias y lo pegas en la propiedad correspondiente en spotify.service.ts de esta app.  ERROR DETECTADO: " + errorServicio.error.error.message;
      });
    }, 1000);

  }

  ngOnInit(): void {
  }

}
