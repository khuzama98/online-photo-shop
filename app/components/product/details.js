import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class ItemDetailsComponent extends Component {
  @service cart;

  resolutions = [
    { name: "small", price: 5 },
    { name: "medium", price: 6.25 },
    { name: "large", price: 8.5 },
    { name: "x-large", price: 10 },
  ];

  @action
  addToCart() {
    const { product, res, price } = this.args;
    this.cart.add(product, res, price);
  }
}
