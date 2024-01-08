import { Component, Input } from '@angular/core';

interface CardItem {
  title: string;
  id: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() appCardItems: CardItem[] | undefined;
}
