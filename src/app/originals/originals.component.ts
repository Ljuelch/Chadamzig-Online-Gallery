import { Component } from '@angular/core';

@Component({
  selector: 'app-originals',
  templateUrl: './originals.component.html',
  styleUrl: './originals.component.scss'
})
export class OriginalsComponent {

  products = [
    {
      id: 1,
      name: 'IN HER QUEENSHIP',
      price: 5750.95,
      image: 'assets/paintings/oilSample5.jpg',
      isSoldOut: true
    },
    {
      id: 2,
      name: 'IN TRUTH, YOU\'RE SET FREE',
      price: 5750.95,
      image: 'assets/paintings/oilSample2.jpg',
      isSoldOut: true
    },
    {
      id: 3,
      name: 'PRODIGAL GIFT',
      price: 5520.95,
      image: 'assets/paintings/oilSample3.jpg',
      isSoldOut: false
    },
    {
      id: 4,
      name: 'SONG OF ABUNDANCE',
      price: 10222.95,
      image: 'assets/paintings/oilSample4.jpg',
      isSoldOut: false
    },
    {
      id: 5,
      name: 'SONG OF ABUNDANCE',
      price: 10222.95,
      image: 'assets/paintings/oilSample4.jpg',
      isSoldOut: false
    },
  ];

}
