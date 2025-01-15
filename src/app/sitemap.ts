import { MetadataRoute } from "next";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  return [{ url: `${process.env.BASE_URL}` }];
};

export default sitemap;
