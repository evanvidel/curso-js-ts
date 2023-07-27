import { OrderStatus } from "./interfaces/order-status";
import { ShoppingCard } from "./shopping-card";
import { CustomerOrder } from "./interfaces/customer-protocol";
import { MessagingProtocol } from "./interfaces/messaging-protocol";
import { PersistencyProtocol } from "./interfaces/persistency-protocol";

export class Order {
  private _orderStatus: OrderStatus = "open";

  constructor(
    private readonly card: ShoppingCard,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrder
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.card.isEmpty()) {
      console.log("Seu carrinho está vazio");
      return;
    }

    this._orderStatus = "closed";
    this.messaging.sendMessage(
      `Seu pedido com o total de ${this.card.totalWithDicount()} foi recebido`
    );
    this.persistency.saveOrder();
    this.card.clear();
    console.log(
      "O cliente é:",
      this.customer.getName(),
      this.customer.getIDN()
    );
  }
}
