
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-cards',
  templateUrl: './custom-cards.component.html',
  styleUrls: ['./custom-cards.component.css']
})
export class CustomCardsComponent  {
  @Input() items: any[] = [];
  @Input() index: number;
  constructor() { }



}
