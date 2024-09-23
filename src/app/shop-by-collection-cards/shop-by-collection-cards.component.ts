import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-by-collection-cards',
  templateUrl: './shop-by-collection-cards.component.html',
  styleUrl: './shop-by-collection-cards.component.scss'
})
export class ShopByCollectionCardsComponent {
  collections = [
    {
      name: 'THE GOLDEN DANCE',
      image: 'assets/paintings/oilSample4.jpg', // Update with correct image path
      link: '/collections/the-golden-dance'
    },
    {
      name: 'ORIGINALS',
      image: 'assets/paintings/oilSample5.jpg', // Update with correct image path
      link: '/collections/originals'
    },
    {
      name: 'BOOKS',
      image: 'assets/paintings/oilSample6.jpg', // Update with correct image path
      link: '/collections/books'
    },
    {
      name: 'PUZZLES',
      image: 'assets/paintings/oilSample7.jpg', // Update with correct image path
      link: '/collections/mystery-dream-paintings'
    }
  ];
}
