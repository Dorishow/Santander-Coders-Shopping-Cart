import { cartItem } from '../carItem';
import { Component, OnInit } from '@angular/core';
import { PersistenseCartService } from '../persistense-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private persistense: PersistenseCartService) { }

  cart: cartItem[] = []

  getCart(){
    this.cart = this.persistense.loadFromLocalStorage()
  }

  ngOnInit(): void {
    this.getCart()
  }

}
