import { CartItem } from "../../../isp/classes/interfaces/cart-item";

export interface ShoppingCardProtocol {
    items: readonly<CartItem[]>
    addItem(item: CartItem): void
    removeItem(index: number): void 
    total(): number 
    totalWithDicount(): number 
    isEmpty(): boolean 
    clear(): void 
  }
  