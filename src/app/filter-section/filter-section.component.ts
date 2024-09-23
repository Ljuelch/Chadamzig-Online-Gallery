import { Component } from '@angular/core';
import {faFilter, faSearch} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrl: './filter-section.component.scss'
})
export class FilterSectionComponent {

    protected readonly faSearch = faSearch;
  protected readonly faFilter = faFilter;
}
