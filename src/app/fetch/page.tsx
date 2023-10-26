'use client';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
// import Logo from '~/svg/Logo.svg';

import Head from 'next/head';
import React from 'react';

import Button from '@/components/buttons/Button';
import UnderlineLink from '@/components/links/UnderlineLink';
import Logoo from '@/components/Logoo';

export default function HomePage() {
  type Restaurant = {
    id: number;
    attributes: {
      Description: string;
      Name: string;
      createdAt: '2023-10-10T21:03:05.244Z';
      publishedAt: '2023-10-10T21:03:29.354Z';
      updatedAt: '2023-10-10T21:03:29.359Z';
    };
  };
  const [restaurants, setRestaurants] = React.useState<Restaurant[]>();

  const fetchData = async () => {
    const response = await fetch('http://localhost:1337/api/restaurants');
    const data = await response.json();
    return data;
  };

  React.useEffect(() => {
    fetchData().then((v) => setRestaurants(v.data));
  }, []);

  React.useEffect(() => {
    setRestaurants(restaurants);
  }, [restaurants]);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleFormChange = (event: any) => {
    if (event.target.name === 'email') {
      setEmail(event.target.value);
    }
    if (event.target.name === 'password') {
      setPassword(event.target.value);
    }
  };

  const login = async (e: any) => {
    e.preventDefault();
    const loginData = {
      identifier: email,
      password: password,
    };

    const res = await fetch(`http://localhost:1337/api/auth/local`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to login');
    }
    const data = await res.json();

    return data;
  };

  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-white'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <Logoo />
          <div>
            {restaurants ? (
              restaurants.map((res) => (
                <div key={res.id}>
                  <h1>{res.attributes.Name}</h1>
                  <h2>{res.attributes.Description}</h2>
                </div>
              ))
            ) : (
              <Button isLoading={true}> Carregando </Button>
            )}
          </div>
          <form>
            <input
              value={email}
              name='email'
              onChange={(e) => handleFormChange(e)}
              type='email'
            />
            <input
              type='password'
              value={password}
              name='password'
              onChange={(e) => handleFormChange(e)}
            />
            <button onClick={(e) => login(e)}>Login</button>
          </form>

          <footer className='absolute bottom-2 text-gray-700'>
            © {new Date().getFullYear()} By{' '}
            <UnderlineLink href='https://matheusdamiao.com.br'>
              Matheus Damião
            </UnderlineLink>
          </footer>
        </div>
      </section>
    </main>
  );
}
