import { isProd } from '@/constant/env';

export type StrapiImage = {
  data?: {
    attributes: {
      url: string;
      width?: number;
      height?: number;
      alternativeText?: string | null;
    };
  } | null;
};

export type Autor = {
  id: number;
  attributes: {
    nome?: string;
    cargo?: string;
    biografia?: string;
  };
};

export type Artigo = {
  id: number;
  attributes: {
    titulo: string;
    subtitulo?: string;
    data?: string;
    texto?: string;
    publishedAt?: string;
    updatedAt?: string;
    createdAt?: string;
    image?: StrapiImage;
    autors?: { data: Autor[] };
  };
};

export type BlogPostView = {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  image: string | null;
  href: string;
};

function apiBase(): string {
  return (
    (isProd ? process.env.NEXT_PUBLIC_API_URL : 'http://127.0.0.1:1337') || ''
  ).replace(/\/$/, '');
}

async function strapiFetch<T>(path: string, revalidate = 3600): Promise<T> {
  const base = apiBase();
  if (!base) {
    throw new Error('NEXT_PUBLIC_API_URL is not set');
  }
  const res = await fetch(`${base}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    next: { revalidate },
  });
  if (!res.ok) {
    throw new Error(`Strapi request failed (${res.status}): ${path}`);
  }
  return res.json() as Promise<T>;
}

export async function getArtigos(): Promise<Artigo[]> {
  const json = await strapiFetch<{ data: Artigo[] }>(
    '/api/artigos?populate=*&sort=createdAt:desc'
  );
  return json.data ?? [];
}

export async function getArtigo(id: string | number): Promise<Artigo | null> {
  try {
    const json = await strapiFetch<{ data: Artigo }>(
      `/api/artigos/${id}?populate=*`,
      3600
    );
    return json.data ?? null;
  } catch {
    return null;
  }
}

export function postSlug(artigo: Artigo): string {
  return artigo.attributes.titulo.replace(/\s+/g, '-');
}

export function postPath(artigo: Artigo): string {
  return encodeURI(`/blog/${artigo.id}/${postSlug(artigo)}`);
}

export function imageUrl(artigo: Artigo): string | null {
  const url = artigo.attributes.image?.data?.attributes?.url;
  if (!url) return null;
  if (/^https?:\/\//.test(url)) return url;
  return `${apiBase()}${url}`;
}

export function excerptFrom(artigo: Artigo, max = 155): string {
  const raw = artigo.attributes.subtitulo || artigo.attributes.texto || '';
  return raw
    .replace(/[#>*_`~-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);
}

export function toPostView(artigo: Artigo): BlogPostView {
  return {
    id: artigo.id,
    title: artigo.attributes.titulo,
    subtitle: artigo.attributes.subtitulo ?? '',
    date: artigo.attributes.data ?? '',
    image: imageUrl(artigo),
    href: postPath(artigo),
  };
}
