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
import { HeroHeaderComponent } from './hero-header/hero-header.component';
import { FilterSectionComponent } from './filter-section/filter-section.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import { SiteNavComponent } from './site-nav/site-nav.component';
import { CartNavComponent } from './cart-nav/cart-nav.component';
import { PrintsComponent } from './prints/prints.component';

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
    OriginalsComponent,
    HeroHeaderComponent,
    FilterSectionComponent,
    NewsletterComponent,
    SiteNavComponent,
    CartNavComponent,
    PrintsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
