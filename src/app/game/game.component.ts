import { Game } from './../game';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() game?: Game;

  constructor() { }

  ngOnInit(): void {
  }

}
