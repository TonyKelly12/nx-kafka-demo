import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuctionAppComponent } from './auction-app/auction-app.component'

const routes: Routes = [
  { path: 'auction', component: AuctionAppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }