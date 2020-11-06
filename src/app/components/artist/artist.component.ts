import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';





@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent  {
  artist: any = {};
  topTracks: any = {};
  loading = true;
  id = '';
  constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) {

    this.activatedRoute.params.subscribe(param => {
      this.id = param.id;
      setTimeout(() => {
          this.spotifyService.getArtist(param.id).subscribe(data => {
          this.artist = data;
          this.loading = false;
          this.getArtistTopTrack(this.id);
        });
      }, 2000);
    });
   }

 getArtistTopTrack(id: string){

        this.spotifyService.getArtistTopTracks(this.id).subscribe(data => {
        this.topTracks = data;
        console.log("Tracks:" , this.topTracks);
      });
  }

}
