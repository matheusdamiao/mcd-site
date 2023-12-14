'use client';

import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const route = useRouter();

  const handleFormChange = (event: any) => {
    if (event.target.name === 'email') {
      setEmail(event.target.value);
    }

    if (event.target.name === 'password') {
      setPassword(event.target.value);
    }
  };

  const handleForm = async (e: any) => {
    e.preventDefault();

    try {
      const res = await signIn('credentials', {
        redirect: false,
        email: email,
        password: password,
        callbackUrl: '/dashboard',
      });

      if (res?.ok) {
        route.push(`${res?.url}`);
      }
      if (res?.error) {
        // console.log(res);
        toast.error('E-mail ou senha inválidos');
      }
    } catch (error) {
      toast.error('Ops! Ocorreu um erro. Tente novamente');
    }
  };

  return (
    <div>
      <div className='pt:mt-0 mx-auto flex flex-col items-center justify-center px-6 pt-8 dark:bg-gray-900 md:h-screen'>
        <a
          href=''
          className='mb-8 flex items-center justify-center text-2xl font-semibold dark:text-white lg:mb-10'
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src='/svg/mcd-logo-desktop.svg' className='' alt='MCD Logo' />
        </a>

        <div className='w-full max-w-xl space-y-8 rounded-lg bg-white p-6 shadow dark:bg-gray-800 sm:p-8'>
          <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
            Bem-vindo a MCD Consultoria Contábil
          </h2>
          <form className='mt-8 space-y-6' action='#'>
            <div>
              <label
                htmlFor='email'
                className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
              >
                Seu e-mail
              </label>
              <input
                // type='email'
                name='email'
                value={email}
                onChange={(e) => handleFormChange(e)}
                id='email'
                className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm'
                placeholder='matheus@empresa.com'
                required
              />
            </div>
            <div>
              <label
                htmlFor='password'
                className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
              >
                Sua senha
              </label>
              <input
                type='password'
                name='password'
                value={password}
                onChange={(e) => handleFormChange(e)}
                id='password'
                placeholder='••••••••'
                className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm'
                required
              />
            </div>
            <div className='flex items-start'>
              {/* <div className='flex h-5 items-center'>
                <input
                  id='remember'
                  aria-describedby='remember'
                  name='remember'
                  type='checkbox'
                  className='focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800'
                  required
                />
              </div>
              <div className='ml-3 flex flex-wrap text-sm'>
                <label
                  htmlFor='remember'
                  className='font-medium text-gray-900 dark:text-white'
                >
                  Lembrar de mim
                </label>
              </div>
              <a
                href='#'
                className='text-primary-700 dark:text-primary-500 ml-auto text-sm hover:underline'
              >
                Esqueceu a senha?
              </a> */}
            </div>
            <button
              type='submit'
              onClick={(e) => handleForm(e)}
              className='focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg bg-[#1C81A2] px-5 py-3 text-center text-base font-medium text-white hover:to-blue-700 focus:ring-4 sm:w-auto'
            >
              Login na sua conta
            </button>
            {/* <div className='text-sm font-medium text-gray-500 dark:text-gray-400'>
              Não tem conta?{' '}
              <a className='text-primary-700 dark:text-primary-500 hover:underline'>
                Criar conta
              </a>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
