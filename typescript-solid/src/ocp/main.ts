/**
 * open/closed principle
 * Entidades devem esta aberta para extensão, mas fechadas para modificação
 */


import { Messaging } from "./services/messaging";
import { Order } from "./classes/order";
import { Persistency } from "./services/persistency";
import { Product } from "./classes/product";
import { ShoppingCard } from "./classes/shopping-card";
import { NoDiscount, TenPercentDiscount } from "./classes/discount";

//const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCard = new ShoppingCard(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCard, messaging, persistency);

shoppingCard.addItem(new Product("Camiseta", 49.91));
shoppingCard.addItem(new Product("Caderno", 9.9123));
shoppingCard.addItem(new Product("Lápis", 1.59));

console.log(shoppingCard.items);
console.log(shoppingCard.total());
console.log(shoppingCard.totalWithDicount());
order.checkout();
console.log(order.orderStatus);
