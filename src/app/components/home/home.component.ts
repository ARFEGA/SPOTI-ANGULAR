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
  constructor(private spotifyService: SpotifyService, ) {
    setTimeout(() => {
       this.spotifyService.getNewRelease()
     .subscribe((data: any) => {
       this.newReleases = data;
       this.loading = false;
      });
    }, 1000);

  }

  ngOnInit(): void {
  }

}
