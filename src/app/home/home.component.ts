import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { Games } from '../mock-games';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  games: Game[] = Games

  ngOnInit(): void {
  }

}
