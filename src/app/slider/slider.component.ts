import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import Flickity from 'flickity';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit {
  @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>;
  flickityInstance: Flickity | null = null;

  slides = [
    {
      image: 'assets/paintings/oilSample1.jpg',
      title: 'Releasing Dreams',
      description: 'Unfolding a realm of possibilities',
      link: 'https://example.com/originals'
    },
    {
      image: 'assets/paintings/oilSample2.jpg',
      title: 'Beauty for Every Space',
      description: '',
      link: 'https://example.com/home-decor'
    }
  ];

  async ngAfterViewInit(): Promise<void> {
    if (typeof window !== 'undefined') {
      try {
        const Flickity = (await import('flickity')).default;
        this.flickityInstance = new Flickity(this.carousel.nativeElement, {
          cellAlign: 'left',
          contain: true,
          wrapAround: true,
          autoPlay: 6000,
          pauseAutoPlayOnHover: true,
          pageDots: true,
          adaptiveHeight: false,
          imagesLoaded: true,
          lazyLoad: true,
          selectedAttraction: 0.01,
          friction: 0.4,
          prevNextButtons: false,
        });
      } catch (error) {
        console.error('Error loading Flickity:', error);
      }
    }
  }
}
