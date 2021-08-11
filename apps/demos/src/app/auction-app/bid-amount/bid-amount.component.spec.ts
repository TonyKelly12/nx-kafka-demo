import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidAmountComponent } from './bid-amount.component';

describe('BidAmountComponent', () => {
  let component: BidAmountComponent;
  let fixture: ComponentFixture<BidAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
