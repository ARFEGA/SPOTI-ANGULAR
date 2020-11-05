import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
//IMPORTAR RUTAS PERSONALIZADAS
import { ROUTES } from "./app.routes";
//Para hacer peticiones HTTP
import { HttpClientModule } from '@angular/common/http';
//Servicio spotify
import { SpotifyService } from "./services/spotify.service";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NoImagePipe } from './pipes/no-image.pipe';
import { CustomCardsComponent } from './components/custom-cards/custom-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoImagePipe,
    CustomCardsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES,{useHash:true})
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
