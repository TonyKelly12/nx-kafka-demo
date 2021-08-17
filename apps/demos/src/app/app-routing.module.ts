import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuctionAppComponent } from './auction-app/auction-app.component'
import { LoginComponent } from './auction-app/login/login.component';
import { SignUpComponent } from './auction-app/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'auction', component: AuctionAppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }