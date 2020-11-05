import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SpotifyService } from "./../../services/spotify.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  newReleases:any[]=[];
  constructor(private spotifyService:SpotifyService, ) { 
     this.spotifyService.getNewRelease()
     .subscribe((data:any) =>{
      console.log(data.albums.items);
      this.newReleases=data.albums.items;
    })
  }

  ngOnInit(): void {
  }

}
