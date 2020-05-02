// @flow

const uuidGenerator = (index: string) =>
  Math.random().toString(36).substring(2) + Date.now().toString(36) + index;

export const formatNewsArticlesData = (articleList) => {
  return articleList.map((a, i) => {
    return {
      uuid: uuidGenerator(i),
      source: a.source ? (a.source.name ? a.source.name : '') : '',
      author: a.author ? a.author : '',
      title: a.title ? a.title : '',
      description: a.description ? a.description : '',
      url: a.url ? a.url : '',
      urlToImage: a.urlToImage ? a.urlToImage : '',
      publishedAt: a.publishedAt ? a.publishedAt : '',
      content: a.content ? a.content : '',
    };
  });
};
