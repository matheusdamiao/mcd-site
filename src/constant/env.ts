// `isProd` selects the production/remote API endpoints and relative API routes.
// Local dev normally talks to a Strapi instance on http://127.0.0.1:1337, but
// when no local Strapi is running set NEXT_PUBLIC_USE_REMOTE_API=true in .env
// to make `npm run dev` use NEXT_PUBLIC_API_URL (the deployed Strapi) instead.
export const isProd =
  process.env.NODE_ENV === 'production' ||
  process.env.NEXT_PUBLIC_USE_REMOTE_API === 'true';
export const isLocal = process.env.NODE_ENV === 'development';

export const showLogger = isLocal
  ? true
  : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' ?? false;
