interface CartItem{ name: string; price: number };
type OrderStatus = "open" | "closed";

export class ShoppingCardLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = "open";

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log("Seu carrinho está vazio");
      return;
    }
    this._orderStatus = "closed";
    this.sendMessage(`Seu pedido com o total de ${this.total()} foi recebido`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log("Messagem enviada:", msg);
  }

  saveOrder(): void {
    console.log("Pedido salvo com sucesso..");
  }

  clear(): void {
    console.log("Carrinho de compras foi limpo..");
    this._items.length = 0;
  }
}
const shoppingCard = new ShoppingCardLegacy();
shoppingCard.addItem({ name: "Camiseta", price: 49.91 });
shoppingCard.addItem({ name: "Caderno", price: 9.9123 });
shoppingCard.addItem({ name: "Lápis", price: 1.59 });

console.log(shoppingCard.items);
console.log(shoppingCard.total());
shoppingCard.checkout();
console.log(shoppingCard.orderStatus); 