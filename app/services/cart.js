import Service from "@ember/service";
import { tracked } from "@glimmer/tracking";

class CartItem {
  @tracked count = 0;

  constructor(id, price, image, resolution, count) {
    this.id = id;
    this.price = price;
    this.image = image;
    this.resolution = resolution;
  }
}

export default class CartService extends Service {
  @tracked cartList = [];

  add(item, res, price) {
    this.cartList = [
      ...this.cartList,
      new CartItem(
        item.id,
        price,
        `https://picsum.photos/id/${item.id}/300`,
        res
      ),
    ];
  }

  remove(item) {
    const index = this.cartList.indexOf(item);
    const cartList = this.cartList;
    cartList.splice(index, 1);
    this.cartList = cartList;
  }
}
