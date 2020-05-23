export interface News {
    id: number;
    slug: string;
    link: string;
    title: string;
    statistics: {
      show: boolean,
      time: boolean,
      share: boolean,
      source: boolean,
      perusal: boolean
    };
    created_at: string;
    news_category: {
      id: number,
      title: string,
      slug: string
    };
    image_url: string;
    thumbnail_url: string;
    big_thumbnail_url: string;
    teaser: string;
}
