import * as React from 'react';

export interface NewCompanyEmailProps {
  name: string;
  email: string;
  id: string;
}

export const NewCompanyTemplate: React.FC<Readonly<NewCompanyEmailProps>> = ({
  name,
  email,
  id,
}) => (
  <div className='text-white'>
    <h3>{name} acabou de criar uma nova empresa na MCD!</h3>
    <p>Seguem suas informações:</p>
    <p>Nome: {name || ''}</p>
    <p>Email: {email || ''}</p>
    <p>ID do usuário: {id || ''}</p>
  </div>
);
