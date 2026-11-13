import { MetadataRoute } from 'next';

import { getArtigos, postPath } from '@/lib/strapi';

import { siteConfig } from '@/constant/config';

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url;
  const now = new Date();

  const staticPaths = [
    '',
    '/services',
    '/solucoes',
    '/abrir-empresa',
    '/contador',
    '/blog',
    '/diagnostico',
    '/simulacao-simples-2027',
    '/politicas-privacidade',
    '/politicas-cookies',
    '/termos-de-uso',
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'daily' : 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));

  let posts: Awaited<ReturnType<typeof getArtigos>> = [];
  try {
    posts = await getArtigos();
  } catch {
    posts = [];
  }

  const postEntries: MetadataRoute.Sitemap = posts.map((artigo) => ({
    url: `${base}${postPath(artigo)}`,
    lastModified: new Date(
      artigo.attributes.updatedAt || artigo.attributes.publishedAt || now
    ),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
