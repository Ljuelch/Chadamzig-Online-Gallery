import { Component } from '@angular/core';

@Component({
  selector: 'app-artwork-showcase',
  templateUrl: './artwork-showcase.component.html',
  styleUrl: './artwork-showcase.component.scss'
})
export class ArtworkShowcaseComponent {
  heading = 'THE GOLDEN DANCE';
  subheading = 'NEW ARTWORK SERIES';
  description = `This collection is inspired by the honey bees, looking closer at their
  roles and using their symbolism for our own lives. I love how they work
  together in harmony as a strong community...`;
  buttonText = 'EXPLORE NOW';
  imageUrl = 'assets/paintings/oilSample3.jpg';
}
