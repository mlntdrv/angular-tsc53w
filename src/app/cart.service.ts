import { Injectable } from "@angular/core";

@Injectable()
export class CartService {
  items: object[] = [];

  constructor() {}

  addToCart(product): void {
    this.items.push(product);
  }

  getItems(): object[] {
    return this.items;
  }

  clearCart(): object[] {
    this.items = [];
    return this.items;
  }
}
