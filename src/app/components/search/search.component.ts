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
  constructor(private spotifyService: SpotifyService) { }


  // tslint:disable-next-line: typedef
  searchArtists(artist: string){
    this.spotifyService.getArtists(artist).subscribe( (data: any) => {
      this.artists = data;
      }
    );
  }

}
