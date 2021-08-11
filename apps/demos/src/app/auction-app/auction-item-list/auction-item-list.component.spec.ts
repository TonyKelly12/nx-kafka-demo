import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionItemListComponent } from './auction-item-list.component';

describe('AuctionItemListComponent', () => {
  let component: AuctionItemListComponent;
  let fixture: ComponentFixture<AuctionItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
