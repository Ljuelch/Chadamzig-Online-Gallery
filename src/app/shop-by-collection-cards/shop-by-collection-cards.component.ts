import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-by-collection-cards',
  templateUrl: './shop-by-collection-cards.component.html',
  styleUrl: './shop-by-collection-cards.component.scss'
})
export class ShopByCollectionCardsComponent {
  collections = [
    {
      name: 'The Golden Dance',
      image: 'assets/paintings/oilSample2.jpg', // Update with correct image path
      link: '/collections/the-golden-dance'
    },
    {
      name: 'Originals',
      image: 'assets/paintings/oilSample2.jpg', // Update with correct image path
      link: '/collections/originals'
    },
    {
      name: 'Books',
      image: 'assets/paintings/oilSample2.jpg', // Update with correct image path
      link: '/collections/books'
    },
    {
      name: 'Mystery Dream Paintings',
      image: 'assets/paintings/oilSample2.jpg', // Update with correct image path
      link: '/collections/mystery-dream-paintings'
    }
  ];
}
