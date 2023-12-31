'use client';
export const dynamic = 'force-dynamic';
import { SessionProvider } from 'next-auth/react';

export default function Provider({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}): any {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
