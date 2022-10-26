import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class CartController extends Controller {
  @service cart;

  get total() {
    return this.cart.cartList.reduce((total, item) => {
      return total + item.price;
    }, 0);
  }

  @action
  removeItem(item) {
    this.cart.remove(item);
  }
}
