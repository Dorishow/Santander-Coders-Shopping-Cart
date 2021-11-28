import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesContainerComponent } from './games-container/games-container.component';
import { GameLandingPageComponent } from './game-landing-page/game-landing-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/store', pathMatch: 'full'},
  {path: 'cart', component: CartComponent},
  {path: 'store', component: GamesContainerComponent},
  {path: 'game/:id', component: GameLandingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
