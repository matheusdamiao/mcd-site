import { Accordion, CustomFlowbiteTheme } from 'flowbite-react';
import React from 'react';

const FAQ = () => {
  const customAccordion: CustomFlowbiteTheme['accordion'] = {
    root: {
      base: 'divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700',
      flush: {
        off: 'rounded-lg border ',
        on: 'border-b border-8 bg-[#F7C027] ',
      },
    },
    content: {
      base: 'py-5 px-5 last:rounded-b-lg dark:bg-gray-900 first:rounded-t-lg',
    },
    title: {
      arrow: {
        base: 'h-12 w-12 shrink-0',
        open: {
          off: '',
          on: 'rotate-180',
        },
      },
      base: 'flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-white dark:text-gray-400',
      flush: {
        off: 'hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800',
        on: 'bg-[#F6CC6B] dark:bg-transparent',
      },
      heading: '',
      open: {
        off: '',
        on: 'text-gray-900 bg-gray dark:bg-gray-800 dark:text-white',
      },
    },
  };
  return (
    <section
      className='w-full rounded-t-[59.28px] bg-white px-6 py-14 lg:rounded-none'
      id='faq'
    >
      <div className='m-auto w-[80%] max-w-7xl py-6'>
        <h2 className='font-primary  text-center text-3xl font-normal text-[#40494C] lg:text-left lg:text-5xl '>
          Dúvidas mais frequentes
        </h2>
        <h4 className='font-primary py-4 text-center text-lg font-normal text-[#647073] lg:py-8 lg:text-left lg:text-2xl'>
          Tire suas dúvidas sobre abrir empresa
        </h4>
      </div>
      <Accordion theme={customAccordion} className='m-auto w-full max-w-7xl'>
        <Accordion.Panel>
          <Accordion.Title className='[&>h2]:font-primary text-[#647073] focus:bg-[#F7C027]/[0.30] [&>h2]:text-base [&>h2]:font-normal lg:[&>h2]:pl-6 lg:[&>h2]:text-xl'>
            Quanto custa pra abrir uma empresa?
          </Accordion.Title>
          <Accordion.Content>
            <p className='mb-2 text-gray-500 lg:pl-6 dark:text-gray-400'>
              As pessoas frequentemente querem entender os custos associados à
              abertura e manutenção da empresa, incluindo taxas, licenças e
              despesas operacionais.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className='[&>h2]:font-primary text-[#647073] focus:bg-[#F7C027]/[0.30] [&>h2]:text-base [&>h2]:font-normal lg:[&>h2]:pl-6 lg:[&>h2]:text-xl'>
            Como elaborar um plano de negócios eficaz?
          </Accordion.Title>
          <Accordion.Content>
            <p className='mb-2 text-gray-500 lg:pl-6 dark:text-gray-400'>
              As pessoas frequentemente querem entender os custos associados à
              abertura e manutenção da empresa, incluindo taxas, licenças e
              despesas operacionais.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className='[&>h2]:font-primary text-[#647073] focus:bg-[#F7C027]/[0.30] [&>h2]:text-base [&>h2]:font-normal lg:[&>h2]:pl-6 lg:[&>h2]:text-xl'>
            Quais são os passos legais e burocráticos para abrir uma empresa?
          </Accordion.Title>
          <Accordion.Content>
            <p className='mb-2 text-gray-500 lg:pl-6 dark:text-gray-400'>
              As pessoas frequentemente querem entender os custos associados à
              abertura e manutenção da empresa, incluindo taxas, licenças e
              despesas operacionais.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </section>
  );
};

export default FAQ;
