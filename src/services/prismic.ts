import Prismic from "@prismicio/client";

// Segundo a documentação do prismic, é importante instanciar um novo cliente sempre que for fazer uma nova requisiçã
export function getPrismicClient(req?: unknown) {
  const prismic = Prismic.client(process.env.PRISMIC_ENDPOINT, {
    req,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });
  return prismic;
}
