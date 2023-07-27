/**
 * Liskov substitution principle(princípio de substituição de liskov)
 * Se φ(x) é uma proriedade demosntravel dos objetos x de tipo T. Então φ (y)
 * deve ser verdadeiropara objetos y de tipo S onde S é o subtipo de T
 * 
 * Mais simples: Subtipos precisam ser substitutidoa por seus tipos de base
 * Mais simples ainda: se meu program espera um Animal, algo do tipo 
 * Cachorro (que herda de Animal) deve servir como qualquer animal
 * 
 */


import { Messaging } from "./services/messaging";
import { Order } from "./classes/order";
import { Persistency } from "./services/persistency";
import { Product } from "./classes/product";
import { ShoppingCard } from "./classes/shopping-card";
import { FiftyPercentDiscount } from "./classes/discount";

const fiftyPercentDiscount = new FiftyPercentDiscount();
////const tenPercentDiscount = new TenPercentDiscount();
//const noDiscount = new NoDiscount();
const shoppingCard = new ShoppingCard(fiftyPercentDiscount);
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
