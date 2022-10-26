import Route from "@ember/routing/route";
import { parseLinkHeader } from "./../helpers/parseLinkHeader";

export default class IndexRoute extends Route {
  queryParams = {
    page: {
      refreshModel: true,
    },
    limit: {
      refreshModel: true,
    },
  };

  async model(params) {
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${params.page}&limit=${params.limit}`
    );

    const links = parseLinkHeader(response.headers.get("Link"));

    return { data: await response.json(), links };
  }
}
