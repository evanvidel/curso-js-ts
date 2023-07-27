import { OrderStatus } from "./interfaces/order-status";
import { Messaging } from '../services/messaging'
import { Persistency } from "../services/persistency";
import { ShoppingCard } from "./shopping-card";

export class Order {
  private _orderStatus: OrderStatus = "open";

  constructor(
    private readonly card: ShoppingCard,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.card.isEmpty()) {
      console.log("Seu carrinho está vazio");
      return;
    }

    this._orderStatus = 'closed'
    this.messaging.sendMessage(
      `Seu pedido com o total de ${this.card.totalWithDicount()} foi recebido`
    );
    this.persistency.saveOrder();
    this.card.clear();
  }
}
