import { Component } from '@angular/core';
import { faFilter, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart-nav',
  templateUrl: './cart-nav.component.html',
  styleUrl: './cart-nav.component.scss'
})
export class CartNavComponent {
  faFilter = faFilter;
  faShoppingCart = faShoppingCart;
  isNavOpen = false; // For the filter nav
  isCartOpen = false; // For the cart nav

  // Method to open the filter nav
  openNav() {
    this.isNavOpen = true;
  }

  // Method to close the filter nav
  closeNav() {
    this.isNavOpen = false;
  }

  // Method to open the cart nav
  openCart() {
    this.isCartOpen = true;
  }

  // Method to close the cart nav
  closeCart() {
    this.isCartOpen = false;
  }
}
