export type FaqItem = { q: string; a: string };

export default function SimpleFaq({
  items,
  title = 'Perguntas frequentes',
  subtitle,
}: {
  items: FaqItem[];
  title?: string;
  subtitle?: string;
}) {
  return (
    <section id='faq' className='w-full px-6 py-16 lg:py-24'>
      <div className='m-auto w-full max-w-3xl'>
        <h2 className='font-primary text-center text-3xl font-normal text-[#40494C] lg:text-4xl'>
          {title}
        </h2>
        {subtitle ? (
          <p className='pt-3 text-center text-base text-[#647073] lg:text-lg'>
            {subtitle}
          </p>
        ) : null}
        <div className='mt-10 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white'>
          {items.map((item) => (
            <details key={item.q} className='group px-5 py-4'>
              <summary className='flex cursor-pointer list-none items-center justify-between gap-4 font-primary text-base font-semibold text-[#40494C] lg:text-lg'>
                {item.q}
                <span
                  aria-hidden='true'
                  className='text-[#1D81A2] transition-transform group-open:rotate-45'
                >
                  +
                </span>
              </summary>
              <p className='pt-3 text-sm text-[#647073] lg:text-base'>
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
