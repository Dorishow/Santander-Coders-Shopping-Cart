import { Injectable } from '@angular/core';
import { cartItem } from './carItem';

@Injectable({
  providedIn: 'root'
})
export class PersistenseCartService {

  constructor() { }

  cartName: string = "Cart"

  addToLocalStorage(item: cartItem) {
    let list: cartItem[] = JSON.parse(localStorage.getItem(this.cartName) ?? "[]")
    list = [...list, item]
    localStorage.setItem(this.cartName, JSON.stringify(list))
  }

  loadFromLocalStorage(): cartItem[] {
    return JSON.parse(localStorage.getItem(this.cartName) ?? "[]")
  }
}
