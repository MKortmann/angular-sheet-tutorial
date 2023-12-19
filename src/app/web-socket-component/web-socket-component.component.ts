import { Component } from '@angular/core';
import { WebsocketService } from '../services/websocket.service';

@Component({
  selector: 'app-web-socket-component',
  templateUrl: './web-socket-component.component.html',
  styleUrls: ['./web-socket-component.component.scss'],
})
export class WebSocketComponentComponent {
  message = '';
  constructor(private webSocketService: WebsocketService) {}

  ngOnInit() {
    this.webSocketService.getMessages().subscribe((blob: Blob) => {
      console.log(`ngOnInit`);
      this.convertBlobToString(blob);
    });
    // this.webSocketService.getMessages().subscribe({
    //   next: (res: any) => {
    //     console.log(res);
    //   }, error: (error: any) => {
    //     console.error("Error fetching coins:", error);
    //   }
    // })
  }

  // convert Blob to string
  convertBlobToString(Blob: Blob) {
    const reader = new FileReader();

    reader.onload = () => {
      const message = reader.result as string;
      this.message = message;
      console.log(message);
    };

    reader.readAsText(Blob);
  }
}
