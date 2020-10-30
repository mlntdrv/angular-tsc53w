import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable()
export class CartService {
  items: object[] = [];

  constructor(private http: HttpClient) {}

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

  getShippingPrices() {
    return this.http.get("/assets/shipping.json");
  }
}
