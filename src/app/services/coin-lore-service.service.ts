import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoinLoreServiceService {
  url = 'https://api.coinlore.net/api/global/';

  urlCoins = 'https://api.coinlore.net/api/tickers/';

  constructor(private http: HttpClient) {}

  getGlobalData(): Observable<[]> {
    return this.http.get<[]>(this.url);
  }

  getCoins(): Observable<[]> {
    return this.http.get<any>(this.urlCoins);
  }
}
