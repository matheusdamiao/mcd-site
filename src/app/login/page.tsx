import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import Login from '@/components/Login/login';

import { authOptions } from '@/constant/authOptions';

export default async function Page() {
  const session = await getServerSession(authOptions);

  // console.log(session);
  if (session !== null && !session?.user?.error) {
    return redirect('/dashboard');
  }

  return <Login />;
}
