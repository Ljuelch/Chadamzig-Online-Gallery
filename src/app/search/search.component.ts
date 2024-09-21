import {Component, HostListener, Output, EventEmitter} from '@angular/core';
import {faSearch, faTimes} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  @Output() closeSearch = new EventEmitter<void>();

  // Listen for clicks outside the search bar
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    this.closeSearch.emit();
  }

  // Prevent clicks on the search bar from closing the search
  onSearchClick(event: MouseEvent) {
    event.stopPropagation();
  }

  protected readonly faSearch = faSearch;
  protected readonly faTimes = faTimes;
}
