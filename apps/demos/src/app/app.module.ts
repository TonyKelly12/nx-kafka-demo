import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuctionAppComponent } from './auction-app/auction-app.component';
import { UserInfoComponent } from './auction-app/user-info/user-info.component';
import { ItemDetailComponent } from './auction-app/item-detail/item-detail.component';
import { BidAmountComponent } from './auction-app/bid-amount/bid-amount.component';
import { UserItemListComponent } from './auction-app/user-item-list/user-item-list.component';
import { AuctionItemListComponent } from './auction-app/auction-item-list/auction-item-list.component';
import { UsersBidListComponent } from './auction-app/users-bid-list/users-bid-list.component';

@NgModule({
  declarations: [AppComponent, AuctionAppComponent, UserInfoComponent, ItemDetailComponent, BidAmountComponent, UserItemListComponent, AuctionItemListComponent, UsersBidListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
