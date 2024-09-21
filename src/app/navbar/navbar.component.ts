import { Component } from '@angular/core';
import {faSearch, faShoppingCart, faUser} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  protected readonly faUser = faUser;
  protected readonly faSearch = faSearch;
  protected readonly faShoppingCart = faShoppingCart;

  showSearch = false;

  onSearchClick() {
    this.showSearch = true;
  }

  closeSearch() {
    this.showSearch = false;
  }
}
