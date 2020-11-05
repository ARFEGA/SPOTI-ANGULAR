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
  constructor(private spotifyService: SpotifyService) { }


  // tslint:disable-next-line: typedef
  searchArtists(artist: string){
    this.loading = true;
    setTimeout(() => {
       this.spotifyService.getArtists(artist).subscribe( (data: any) => {
      this.artists = data;
      console.log(data);
      this.loading = false;
      }
    );
    }, 2000);

  }

}
