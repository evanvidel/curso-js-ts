import { OrderStatus } from "./interfaces/order-status";
import { Persistency } from "../services/persistency";
import { CustomerOrder } from "./interfaces/customer-protocol";
import { ShoppingCardProtocol } from "../../dip/classes/interfaces/shopping-cart-protocol";
import { MessagingProtocol } from "../../dip/classes/interfaces/messaging-protocol";

export class Order {
  private _orderStatus: OrderStatus = "open";

  constructor(
    private readonly card: ShoppingCardProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: Persistency,
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
