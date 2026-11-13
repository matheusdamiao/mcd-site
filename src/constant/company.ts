export const company = {
  name: 'MCD Contabilidade Consultiva',
  legalName: 'MCD Contabilidade Consultiva Ltda',
  cnpj: '59.150.772/0001-52',
  // TODO: informar o registro no CRC-RJ do responsável técnico (pendente com a MCD)
  crc: '',
  url: 'https://www.mcdcontabil.com.br',
  logo: 'https://www.mcdcontabil.com.br/svg/logo-desktop.svg',
  email: 'ti@mcdcontabil.com.br',
  phone: '+55 21 96580-6068',
  phoneHref: '+5521965806068',
  whatsapp: '5521965806068',
  address: {
    street: 'Rua da Assembleia, 10, sala 1601',
    district: 'Centro',
    city: 'Rio de Janeiro',
    state: 'RJ',
    postalCode: '20011-901',
    country: 'BR',
  },
  socials: {
    instagram: 'https://www.instagram.com/mcdcontabil/',
    linkedin: 'https://www.linkedin.com/company/mcdcontabil/home/',
    // TODO: confirmar Facebook no mesmo nome/endereço/telefone (pendente com a MCD)
    facebook: '',
  },
} as const;

export function whatsappLink(text?: string) {
  const base = `https://wa.me/${company.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export const fullAddress = `${company.address.street} - ${company.address.district}, ${company.address.city}/${company.address.state}, CEP ${company.address.postalCode}`;
