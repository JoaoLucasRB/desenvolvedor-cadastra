import { CartActions, Product } from "./types";

// const cartActions: CartActions = {
//   add: function() {
//     const current = Number(JSON.parse(localStorage.getItem("cart-data") || '0'))
//     const next = current + 1
//     localStorage.setItem("cart-data", JSON.stringify(next));
//     document.querySelector(".header-cart-amount").innerHTML = String(next)
//   },
//   remove: function() {
//     const current = Number(JSON.parse(localStorage.getItem("cart-data") || '0'))
//     const next = current - 1
//     localStorage.setItem("cart-data", JSON.stringify(next < 0 ? 0 : next));
//     document.querySelector(".header-cart-amount").innerHTML = String(next < 0 ? 0 : next)
//   }
// }

class Cart {
  private items: Product[]

  public constructor() {
    if(!localStorage.getItem("cart-data"))
      localStorage.setItem("cart-data", '[]')
    else
      this.items = JSON.parse(localStorage.getItem("cart-data") || '[]')
  }

  public getItems() {
    return this.items;
  }

  public setItems(newItems: Product[]) {
    this.items = newItems
  }

  public add(item: Product) {
    const newItems = [...this.getItems()]
    newItems.push(item);
    this.setItems(newItems)
    localStorage.setItem("cart-data", JSON.stringify(newItems))
    document.querySelector(".header-cart-amount").innerHTML = String(newItems.length)
  }

  public remove(id: string) {
    let newItems = [...this.getItems()]
    newItems = newItems.filter((item: Product) => item.id !== id);
    this.setItems(newItems)
    localStorage.setItem("cart-data", JSON.stringify(newItems))
    document.querySelector(".header-cart-amount").innerHTML = String(newItems.length)
  }
}

const currentCart = new Cart();

export function addToCart(item: Product) {
  currentCart.add(item)
};

export function removeFromCart(id: string) {
  currentCart.remove(id)
};