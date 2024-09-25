import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-header',
  templateUrl: './hero-header.component.html',
  styleUrls: ['./hero-header.component.scss']
})
export class HeroHeaderComponent implements OnInit {

  slides = [
    {
      image: 'assets/paintings/oilSample1.jpg',
      title: 'ORIGINALS',
      link: 'https://example.com/originals'
    },
    {
      image: 'assets/paintings/oilSample5.jpg',
      title: 'PRINTS WILL BE COMING SOON',
      description: '',
      link: 'https://example.com/prints'
    }
  ];

  currentSlide: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      const currentRoute = url.join('/');
      this.setSlideBasedOnRoute(currentRoute);
    });
  }

  setSlideBasedOnRoute(route: string) {
    if (route.includes('originals')) {
      this.currentSlide = this.slides[0];
    }
    else if (route.includes('prints')) {
      this.currentSlide = this.slides[1];
    }
     else {
      this.currentSlide = this.slides[1];
    }
  }
}
