import { cartItem } from './../carItem';
import { GameService } from './../game.service';
import { Game } from './../game';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersistenseCartService } from '../persistense-cart.service';

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
    private persistense: PersistenseCartService
    ) { }

    quantity: number = 1
    originalPrice: number = 0
    totalPrice: number = 0

    settotalPrice(){
      this.totalPrice = this.originalPrice * this.quantity
    }

    modifyQuantity(modifier: number){
      if(modifier < 0 && this.quantity >1 || modifier > 0){
        this.quantity = this.quantity + modifier
        this.settotalPrice()
      }
    }

    addToCart(){
      const item: cartItem = {
        name: this.game!.title,
        price: this.game!.price,
        quantity: this.quantity,
        totalValue: this.totalPrice,
        itemId: this.game!.id,
      }
      this.persistense.addToLocalStorage(item)
      alert('item adicionado ao carrinho')
    }

    ngOnInit(): void {
      this.getGame();
    }

    getGame(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.gameService.getGame(id)
        .subscribe(game => {
          this.game = game;
          this.originalPrice = game.price,
          this.totalPrice = game.price
        });
    }

}
