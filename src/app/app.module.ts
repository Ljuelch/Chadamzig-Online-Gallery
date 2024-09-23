import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { SearchComponent } from './search/search.component';
import { SliderComponent } from './slider/slider.component';
import { ArtworkShowcaseComponent } from './artwork-showcase/artwork-showcase.component';
import { ShopByCollectionCardsComponent } from './shop-by-collection-cards/shop-by-collection-cards.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { OriginalsComponent } from './originals/originals.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    SliderComponent,
    ArtworkShowcaseComponent,
    ShopByCollectionCardsComponent,
    FooterComponent,
    BodyComponent,
    OriginalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
