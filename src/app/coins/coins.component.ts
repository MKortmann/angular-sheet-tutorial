import { Component } from '@angular/core';
import { CoinLoreServiceService } from '../services/coin-lore-service.service';
import { JsonplaceholderService } from '../services/jsonplaceholder.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss'],
})
export class CoinsComponent {
  globalData: any = [];
  coins: any;

  constructor(
    private coinLoreService: CoinLoreServiceService,
    private jsonPlaceHolder: JsonplaceholderService
  ) {}

  async ngOnInit(): Promise<void> {
    this.coinLoreService.getGlobalData().subscribe({
      next: (res: any) => {
        this.globalData = res;
        console.log(this.globalData);
      },
      error: (error: any) => {
        console.error('Error fetching coins:', error);
      },
    });
    console.log(`coins: ${JSON.stringify(this.globalData)}`);

    this.coinLoreService.getCoins().subscribe({
      next: (res: any) => {
        this.coins = res.data;
      },
      error: (error: any) => {
        console.error('Error fetching coins:', error);
      },
    });
    this.jsonPlaceHolder.getTodos().subscribe({
      next: (res: any) => {
        this.coins = res.data;
      },
      error: (error: any) => {
        console.error('Error fetching coins:', error);
      },
    });
  }
}
