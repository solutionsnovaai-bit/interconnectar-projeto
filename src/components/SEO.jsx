import { Helmet } from 'react-helmet-async';
import { BRAND } from '../data/site';

const TITLE = 'Interconnectar — Assessoria Jurídica | Redes sociais, anúncios e agente de IA';
const DESC =
  'Marketing e captação para escritórios de advocacia: redes sociais, tráfego pago e um agente de IA que qualifica e agenda pelo WhatsApp, 24 horas por dia.';
const URL = 'https://interconnectar.adv.br'; // TODO: Victor — trocar pelo domínio real
const OG_IMAGE = `${URL}/assets/og-image.jpg`;

export default function SEO() {
  return (
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESC} />
      <link rel="canonical" href={URL} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={BRAND.full} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESC} />
      <meta property="og:url" content={URL} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="pt_BR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESC} />
      <meta name="twitter:image" content={OG_IMAGE} />

      <meta name="theme-color" content="#0B233B" />
    </Helmet>
  );
}
