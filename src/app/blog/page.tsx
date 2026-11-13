import { Metadata } from 'next';
import * as React from 'react';

import { getArtigos, toPostView } from '@/lib/strapi';

import BlogList from '@/components/blog/BlogList';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Conteúdo útil e prático sobre contabilidade, tributos e gestão para a sua empresa.',
  alternates: { canonical: '/blog' },
};

export default async function Blog() {
  let posts = [] as ReturnType<typeof toPostView>[];
  try {
    posts = (await getArtigos()).map(toPostView);
  } catch {
    posts = [];
  }

  return <BlogList posts={posts} />;
}
