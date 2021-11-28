import { GameService } from './../game.service';
import { Game } from './../game';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-game-landing-page',
  templateUrl: './game-landing-page.component.html',
  styleUrls: ['./game-landing-page.component.css']
})
export class GameLandingPageComponent implements OnInit {

  @Input() game?: Game;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private location: Location
    ) { }

    ngOnInit(): void {
      this.getGame();
    }

    getGame(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.gameService.getGame(id)
        .subscribe(game => this.game = game);
    }

}
