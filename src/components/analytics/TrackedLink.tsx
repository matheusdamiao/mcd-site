'use client';

import Link from 'next/link';
import * as React from 'react';

import { trackEvent } from '@/lib/analytics';

type TrackedLinkProps = {
  href: string;
  event: string;
  eventParams?: Record<string, unknown>;
  className?: string;
  target?: string;
  children: React.ReactNode;
};

export default function TrackedLink({
  href,
  event,
  eventParams,
  className,
  target,
  children,
}: TrackedLinkProps) {
  const handleClick = () => trackEvent(event, eventParams);

  if (/^https?:\/\//.test(href)) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={className}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
