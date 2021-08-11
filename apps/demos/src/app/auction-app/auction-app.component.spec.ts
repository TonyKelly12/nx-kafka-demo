import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionAppComponent } from './auction-app.component';

describe('AuctionAppComponent', () => {
  let component: AuctionAppComponent;
  let fixture: ComponentFixture<AuctionAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
