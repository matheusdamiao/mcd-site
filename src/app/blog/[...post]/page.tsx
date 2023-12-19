import { isProd } from '@/constant/env';

export default async function Page({
  params,
}: {
  params: { post: [id: string, title: string] };
}) {
  const res = await fetch(
    `${
      isProd
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/artigos/${params.post[0]}?populate=*`
        : `http://127.0.0.1:1337/api/artigos/${params.post[0]}?populate=*`
    }`,
    {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await res.json();
  // console.log(data.data);
  return (
    <div>
      <h2>titulo: {params.post[0]}</h2>
      <p>{params.post[1]}</p>
      <h3>{data.data.attributes.titulo}</h3>
    </div>
  );
}
