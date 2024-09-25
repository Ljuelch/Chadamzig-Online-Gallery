import { Component } from '@angular/core';

@Component({
  selector: 'app-site-nav',
  templateUrl: './site-nav.component.html',
  styleUrls: ['./site-nav.component.scss']
})
export class SiteNavComponent {
  isNavOpen: boolean = false;
  isAvailabilityOpen: boolean = false;  // Initially closed
  isProductTypeOpen: boolean = false;   // Initially closed

  openNav() {
    this.isNavOpen = true;
  }

  closeNav() {
    this.isNavOpen = false;
  }

  toggleSection(section: string) {
    if (section === 'availability') {
      this.isAvailabilityOpen = !this.isAvailabilityOpen;
    } else if (section === 'productType') {
      this.isProductTypeOpen = !this.isProductTypeOpen;
    }
  }
}
