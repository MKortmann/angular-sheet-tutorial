import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { AboutComponent } from './about/about.component';
import { WikiComponent } from './wiki/wiki.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CoinsComponent } from './coins/coins.component';
import { WebSocketComponentComponent } from './web-socket-component/web-socket-component.component';
import { CounterComponent } from './counter/counter.component';
import { CounterOnlyWithServiceComponent } from './counter-only-with-service/counter-only-with-service.component';
import { ParentViewChildComponent } from './parent-view-child/parent-view-child.component';
import { MapAndpipeComponent } from './map-andpipe/map-andpipe.component';

const routes: Routes = [
  { path: '', component: ParentComponent },
  { path: 'mapAndpipe', component: MapAndpipeComponent },
  { path: 'coins', component: CoinsComponent },
  { path: 'counter', component: CounterComponent },
  {
    path: 'counter-only-with-service',
    component: CounterOnlyWithServiceComponent,
  },
  { path: 'websocket', component: WebSocketComponentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'wiki', component: WikiComponent },
  { path: 'parent-view-child', component: ParentViewChildComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
