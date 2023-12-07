import NextAuth from 'next-auth/next';
export const dynamic = 'force-dynamic';
import { authOptions } from '@/constant/authOptions';

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
