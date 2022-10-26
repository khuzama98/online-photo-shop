import Route from "@ember/routing/route";

export default class ItemRoute extends Route {
  async model(params) {
    const { item_id } = params;
    const response = await fetch(`https://picsum.photos/id/${item_id}/info`);
    const data = await response.json();
    return data;
  }
}
