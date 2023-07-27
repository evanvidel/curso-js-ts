/**
 * ISP
 * Interface segregation principle (principio de segragação de Interface)
 * os clientes não devem ser forçados a depender de type, interface ou
 * membros abstract que não utilizam
 *
 */

import { Messaging } from "./services/messaging";
import { Order } from "./classes/order";
import { Persistency } from "./services/persistency";
import { Product } from "./classes/product";
import { ShoppingCard } from "./classes/shopping-card";
import { FiftyPercentDiscount } from "./classes/discount";
import { EnterpriseCustomer, IndividualCustomer } from "./classes/custmer";

const fiftyPercentDiscount = new FiftyPercentDiscount();
////const tenPercentDiscount = new TenPercentDiscount();
//const noDiscount = new NoDiscount();
const shoppingCard = new ShoppingCard(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
/* const individualCustomer = new IndividualCustomer(
  "Luiz",
  "Miranda",
  "111.111.111-11"
); */
const enterpriseCustomer = new EnterpriseCustomer(
    'Empresa do Vanjo',
    '45.454.0001/95'
)
const order = new Order(
  shoppingCard,
  messaging,
  persistency,
  //individualCustomer,
  enterpriseCustomer
);

shoppingCard.addItem(new Product("Camiseta", 49.91));
shoppingCard.addItem(new Product("Caderno", 9.9123));
shoppingCard.addItem(new Product("Lápis", 1.59));

console.log(shoppingCard.items);
console.log(shoppingCard.total());
console.log(shoppingCard.totalWithDicount());
order.checkout();
console.log(order.orderStatus);
