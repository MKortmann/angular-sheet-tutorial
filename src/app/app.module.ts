import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { CardComponent } from './parent/card/card.component';
import { WikiComponent } from './wiki/wiki.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoinsComponent } from './coins/coins.component';
import { WebSocketComponentComponent } from './web-socket-component/web-socket-component.component';
import { CounterComponent } from './counter/counter.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './ngrx/counter.reducer';
import { DisplayComponent } from './display/display.component';
import { CounterOnlyWithServiceComponent } from './counter-only-with-service/counter-only-with-service.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './ngrx/counter.effects';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    CardComponent,
    WikiComponent,
    AboutComponent,
    NavbarComponent,
    NotfoundComponent,
    CoinsComponent,
    WebSocketComponentComponent,
    CounterComponent,
    DisplayComponent,
    CounterOnlyWithServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    StoreModule.forRoot({ counter: counterReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    EffectsModule.forRoot([CounterEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
