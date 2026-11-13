import * as React from 'react';

import TrackedLink from '@/components/analytics/TrackedLink';

import { whatsappLink } from '@/constant/company';

type OfferBannerProps = {
  title: string;
  text: string;
  cta: string;
  href: string;
  event: string;
  WhatsAppText?: string;
  badge?: string;
  expiresAt?: string | Date;
  variant?: 'primary' | 'secondary';
};

export default function OfferBanner({
  title,
  text,
  cta,
  href,
  event,
  WhatsAppText,
  badge,
  expiresAt,
  variant = 'primary',
}: OfferBannerProps) {
  if (expiresAt && new Date(expiresAt).getTime() < Date.now()) {
    return null;
  }

  const isPrimary = variant === 'primary';

  return (
    <article
      className={`relative flex h-full w-full flex-col justify-between gap-5 rounded-[24px] px-7 py-8 lg:px-10 lg:py-9 ${
        isPrimary
          ? 'bg-[#1D81A2] text-white'
          : 'border-2 border-[#1D81A2] bg-white text-[#40494C]'
      }`}
    >
      {badge ? (
        <span
          className={`w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
            isPrimary
              ? 'bg-[#F7C027] text-[#40494C]'
              : 'bg-[#F7C027] text-[#40494C]'
          }`}
        >
          {badge}
        </span>
      ) : null}

      <div className='flex flex-col gap-3'>
        <h3 className='font-primary text-xl font-semibold lg:text-2xl'>
          {title}
        </h3>
        <p
          className={`text-sm lg:text-base ${
            isPrimary ? 'text-white/90' : 'text-[#647073]'
          }`}
        >
          {text}
        </p>
      </div>

      <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
        <TrackedLink
          href={href}
          event={event}
          eventParams={{ offer: href }}
          className={`w-fit rounded-xl px-5 py-3 text-center text-sm font-semibold transition-colors ${
            isPrimary
              ? 'bg-white text-[#1D81A2] hover:bg-[#F2F2F2]'
              : 'bg-[#1D81A2] text-white hover:bg-[#3b7a91]'
          }`}
        >
          {cta}
        </TrackedLink>

        {WhatsAppText ? (
          <a
            href={whatsappLink(WhatsAppText)}
            target='_blank'
            rel='noopener noreferrer'
            className={`w-fit text-sm font-medium underline underline-offset-4 ${
              isPrimary ? 'text-white' : 'text-[#1D81A2]'
            }`}
          >
            ou fale no WhatsApp
          </a>
        ) : null}
      </div>
    </article>
  );
}
