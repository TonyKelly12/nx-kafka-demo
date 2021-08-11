import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-projects-auction-app',
  templateUrl: './auction-app.component.html',
  styleUrls: ['./auction-app.component.scss']
})
export class AuctionAppComponent implements OnInit {

  public auctionID: string;
  constructor() { 
    this.auctionID = ''; 
  
  }


  ngOnInit(): void {
   console.log('AuctionID', this.auctionID)
  }

}
