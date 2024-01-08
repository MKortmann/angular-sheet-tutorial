import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private socket: WebSocket;
  private subject: Subject<any> = new Subject<any>();

  constructor() {
    // this.socket = new WebSocket('wss://ws.coincap.io/prices?assets=ALL');
    this.socket = new WebSocket('ws://localhost:3000');

    this.socket.onopen = (event) => {
      console.log('connection open!');
      this.socket.send('WebSocket connection opened');
    };

    this.socket.onclose = (event) => {
      console.log('WebSopcket connection closed');
      this.subject.complete();
    };

    this.socket.onmessage = (event) => {
      console.log('onMessage: ');
      console.log(event);
      this.subject.next(event.data);
    };
  }

  // sendMessage(message: string): void {
  //   this.socket.send(message);
  // }

  getMessages(): Observable<any> {
    console.log('get Message');
    const tmp = this.subject.asObservable();
    console.log(tmp);
    return tmp;
  }

  // closeConnection() {
  //   this.socket.close();
  // }
}
