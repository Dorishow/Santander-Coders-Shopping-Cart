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
}
