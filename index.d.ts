declare module '*.png' {
  export default '' as string;
}
declare module '*.webp' {
  export default '' as string;
}
declare module '*.jpg' {
  export default '' as string;
}

// declare module '*.svg' {
//   const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
//   const content: string;

//   export { ReactComponent };
//   export default content;
// }

export declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      accessToken: string;
      user: User;
    } & DefaultSession['user'];
  }
}

export interface Root {
  data: Data;
  meta: Meta;
}

export interface Data {
  id: number;
  attributes: Company;
}

export type Company = {
  nome: any;
  area: any;
  cidade: any;
  endereco: any;
  descricao: any;
  CNPJ: any;
  telefone: any;
  aberta: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  documentos: Documentos;
  dono: Dono;
};

export interface Documentos {
  data: Daum[];
}

export interface Daum {
  id: number;
  attributes: Attributes2;
}

export interface Attributes2 {
  name: string;
  alternativeText: string;
  caption: string;
  width: any;
  height: any;
  formats: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
}

export interface Dono {
  data: Data2;
}

export interface Data2 {
  id: number;
  attributes: Attributes3;
}

export interface Attributes3 {
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  nome: string;
  CPF: string;
  RG: string;
  telefone: string;
}

export type UserStrapi = {
  id: any;
  username: string;
  email: any;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: Date;
  updatedAt: Date;
  empresa: Empresa;
  avatar: any;
  documentos: Documento[];
  role: Role;
  nome: any;
  CPF: any;
  RG: any;
  telefone: any;
};

export interface Role {
  id: number;
  name: string;
  description: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

export type Empresa = {
  id: number;
  Nome: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
};

export interface Documento {
  id: number;
  name: string;
  alternativeText: any;
  caption: any;
  width: any;
  height: any;
  formats: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
}
