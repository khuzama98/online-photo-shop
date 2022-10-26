import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class ItemComponent extends Component {
  @service router;

  @tracked res = "small";
  @tracked price = 5;

  @action
  updateRes(res, price) {
    this.res = res;
    this.price = price;
  }
}
