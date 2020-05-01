// @flow
export type ArticleSource = {
  id: string,
  name: string,
};

export type Article = {
  uuid: string,
  source: ArticleSource,
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string,
};

export type News = {
  articles: Array<Article>,
  totalArticles: number,
};

export type NewsResponse = {
  status: number,
  data: News,
};
