import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkShowcaseComponent } from './artwork-showcase.component';

describe('ArtworkShowcaseComponent', () => {
  let component: ArtworkShowcaseComponent;
  let fixture: ComponentFixture<ArtworkShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtworkShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtworkShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
