import { Metadata } from 'next';
import Script from 'next/script';
import * as React from 'react';

import '@/styles/globals.css';

import JsonLd from '@/components/seo/JsonLd';

import { company } from '@/constant/company';
import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
  },
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  name: company.name,
  legalName: company.legalName,
  url: company.url,
  logo: company.logo,
  image: company.logo,
  telephone: company.phone,
  taxID: company.cnpj,
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    addressRegion: company.address.state,
    postalCode: company.address.postalCode,
    addressCountry: company.address.country,
  },
  areaServed: { '@type': 'Country', name: 'Brasil' },
  knowsAbout: [
    'Contabilidade consultiva',
    'Planejamento tributário',
    'Simples Nacional',
    'Abertura de empresas',
    'Contabilidade para profissionais liberais',
  ],
  sameAs: [company.socials.instagram, company.socials.linkedin].filter(Boolean),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR'>
      {/* <!-- Google Tag Manager --> */}
      <Script id='gtm'>
        {` (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TL29CFGN');
        `}
      </Script>
      {/* <!-- End Google Tag Manager --> */}

      <body>
        <JsonLd data={orgJsonLd} />
        {children}
      </body>
    </html>
  );
}
