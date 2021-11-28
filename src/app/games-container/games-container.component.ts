import { GameService } from './../game.service';
import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { Games } from '../mock-games';

@Component({
  selector: 'app-games-container',
  templateUrl: './games-container.component.html',
  styleUrls: ['./games-container.component.css']
})
export class GamesContainerComponent implements OnInit {

  constructor(private gameService: GameService) { }

  games: Game[] = []

  getGames(): any{
    return this.gameService.getGames().subscribe(
      games => this.games = games
    )
  }

  ngOnInit(): void {
    this.getGames()
  }

}
