import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopByCollectionCardsComponent } from './shop-by-collection-cards.component';

describe('ShopByCollectionCardsComponent', () => {
  let component: ShopByCollectionCardsComponent;
  let fixture: ComponentFixture<ShopByCollectionCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopByCollectionCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopByCollectionCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
