import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Games } from './mock-games';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  getGames(): Observable<Game[]>{
    const games = of(Games)
    return games
  }

  getGame(id: number): Observable<Game> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const game = Games.find(h => h.id === id)!;
    return of(game);
  }
}
