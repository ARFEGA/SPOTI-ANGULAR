
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-cards',
  templateUrl: './custom-cards.component.html',
  styleUrls: ['./custom-cards.component.css']
})
export class CustomCardsComponent  {
  @Input() items: any[] = [];
  @Input() index: number;
  artist = {};
  constructor( private router: Router) { }

  showArtist(item: any){
    console.log(item);
    const artistId = item.type === 'album' ? item.artists[0].id : item.id;
    this.router.navigate(['/artist', artistId]);
  }
}
