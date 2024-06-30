class PostsMapper {
  mapResponseToPosts(response: any) {
    return response.results.map((p: any) => {
      return {
        title: p.properties.Title.title[0].plain_text,
        level: p.properties.Level.multi_select.map((item: any) => ({
          color: item.color,
          name: item.name,
        })),
        categories: p.properties.Categories.multi_select.map((item: any) => ({
          color: item.color,
          name: item.name,
        })),
      };
    });
  }
}

export default new PostsMapper();
