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
      user: any;
    } & DefaultSession['user'];
  }
}
