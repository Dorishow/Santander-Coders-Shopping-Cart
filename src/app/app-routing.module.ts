import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { GamesContainerComponent } from './games-container/games-container.component';

const routes: Routes = [
  {path: 'store', component: GamesContainerComponent},
  {path: 'game', component: GameComponent},
  {path: '', redirectTo: '/store', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
