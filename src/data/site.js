/**
 * Fonte única de conteúdo do site. Textos, planos, FAQ — tudo aqui.
 */

export const BRAND = {
  name: 'Interconnectar',
  full: 'Interconnectar Assessoria Jurídica',
  whatsapp: '5511951007967', // WhatsApp do Victor (Nova AI Solutions) — é pra Davi fechar direto
  whatsappLabel: '(11) 95100-7967',
  instagram: 'interconnectar.oficial',
  instagramUrl: 'https://instagram.com/interconnectar.oficial',
};

export const brl = (n) =>
  n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 });

export const waLink = (text) =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`;

export const NAV_LINKS = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#metodo', label: 'Método' },
  { href: '#planos', label: 'Planos' },
  { href: '#duvidas', label: 'Dúvidas' },
];

export const HERO = {
  eyebrow: 'Assessoria jurídica · marketing e captação',
  title: 'Sua próxima causa já está te procurando.',
  titleEm: 'Ela só ainda não te achou.',
  lead:
    'Cuidamos das redes sociais, dos anúncios e do primeiro contato do seu escritório — com um agente de IA que qualifica e agenda por você, 24 horas por dia.',
};

export const HERO_STATS = [
  { n: '24h', label: 'agente de IA\nsempre ativo' },
  { n: '3', label: 'frentes integradas:\nconteúdo, anúncios, IA' },
  { n: '0', label: 'contato perdido\npor demora' },
];

export const MARQUEE_WORDS = [
  'REDES SOCIAIS', 'TRÁFEGO PAGO', 'AGENTE DE IA', 'AGENDAMENTO AUTOMÁTICO', 'AUTORIDADE DIGITAL',
];

export const SERVICOS = [
  {
    id: 'redes',
    n: '01',
    title: 'Redes sociais',
    desc: 'Perfil ativo, com conteúdo pensado pra gerar autoridade — não só curtida. Artes, legendas e calendário, prontos todo mês.',
  },
  {
    id: 'trafego',
    n: '02',
    title: 'Tráfego pago',
    desc: 'Campanhas no Meta Ads (Instagram e Facebook) segmentadas pra quem realmente precisa do seu serviço agora — não pra visualização vazia.',
  },
  {
    id: 'agente',
    n: '03',
    title: 'Agente de IA',
    desc: 'Responde no WhatsApp em segundos, entende o caso, qualifica e agenda direto na sua agenda — de madrugada ou no fim de semana também.',
  },
  {
    id: 'relatorio',
    n: '04',
    title: 'Relatório e estratégia',
    desc: 'Você acompanha o que está funcionando, sem depender de achismo. Ajustes de rota conforme o resultado chega.',
  },
];

export const METODO = [
  {
    n: '01',
    title: 'Diagnóstico',
    text: 'Entendemos sua área de atuação, sua região e o perfil de cliente que você quer atrair antes de publicar qualquer coisa.',
  },
  {
    n: '02',
    title: 'Estrutura',
    text: 'Montamos o agente de IA, o calendário de conteúdo e a primeira campanha — tudo com sua identidade, não um modelo genérico.',
  },
  {
    n: '03',
    title: 'Captação ativa',
    text: 'As campanhas rodam, o agente atende e qualifica, o conteúdo constrói autoridade em paralelo — todos os dias, sem depender de você lembrar.',
  },
  {
    n: '04',
    title: 'Leitura e ajuste',
    text: 'A cada relatório, cortamos o que não converte e reforçamos o que traz caso qualificado — o plano melhora com o tempo, não estagna.',
  },
];

/**
 * Proposta personalizada — usada na seção de Planos, antes dos cards.
 * Se este site virar um modelo genérico de novo (sem destinatário
 * específico), é só apagar esse bloco e a linha que o usa em Planos.jsx.
 */
export const PROPOSTA = {
  nome: 'Davi',
  setupOriginal: 1500,
  setupFinal: 0,
};

/**
 * Planos — preços de referência, calculados com base no custo real de
 * rodar a stack (agente de IA, gestão de campanha, produção de conteúdo).
 * Victor: ajusta à vontade, é só editar aqui.
 */
export const PLANOS = [
  {
    id: 'captacao',
    name: 'Captação',
    tagline: 'Pra começar a gerar contato qualificado agora.',
    price: 800,
    highlight: false,
    features: [
      { on: true, text: 'Agente de IA no WhatsApp — qualifica e agenda' },
      { on: true, text: '1 campanha ativa de tráfego pago' },
      { on: true, text: '6 criativos por mês' },
      { on: true, text: 'Relatório mensal de performance' },
      { on: true, text: 'Suporte por WhatsApp' },
      { on: false, text: 'Gestão de Instagram' },
      { on: false, text: 'Follow-up automático de leads frios' },
    ],
  },
  {
    id: 'autoridade',
    name: 'Autoridade',
    tagline: 'Capta, aparece e constrói reputação ao mesmo tempo.',
    price: 1200,
    highlight: true,
    features: [
      { on: true, text: 'Tudo do plano Captação' },
      { on: true, text: 'Até 3 campanhas + testes A/B de criativo' },
      { on: true, text: '10 criativos e 2 vídeos por mês' },
      { on: true, text: 'Gestão do Instagram — 8 publicações/mês' },
      { on: true, text: 'Follow-up automático de leads que não respondem' },
      { on: true, text: 'Relatório quinzenal' },
      { on: false, text: 'Reativação da base antiga de contatos' },
    ],
  },
  {
    id: 'dominio',
    name: 'Domínio',
    tagline: 'Captação, autoridade e atendimento como um sistema só.',
    price: 1600,
    highlight: false,
    features: [
      { on: true, text: 'Tudo do plano Autoridade' },
      { on: true, text: 'Estrutura completa de campanhas + retargeting' },
      { on: true, text: '16 criativos e 4 vídeos por mês' },
      { on: true, text: 'Gestão de conteúdo em 2 canais (Instagram + LinkedIn)' },
      { on: true, text: 'Reativação da base antiga de contatos' },
      { on: true, text: 'Relatório semanal + call de estratégia mensal' },
      { on: true, text: 'Suporte prioritário' },
    ],
  },
];

export const FAQ = [
  {
    q: 'A verba de anúncios está incluída na mensalidade?',
    a: 'Não. O valor do plano cobre nossa gestão — estratégia, criação e otimização das campanhas. A verba investida no Meta Ads é paga direto pela plataforma e fica sob seu controle, sempre visível pra você.',
  },
  {
    q: 'O agente de IA substitui meu atendimento?',
    a: 'Não substitui, adianta. Ele faz a triagem inicial — entende o caso, qualifica e agenda — e te entrega o contato pronto pra conversa. A decisão e o atendimento jurídico continuam só seus.',
  },
  {
    q: 'Preciso ter Instagram ativo antes de começar?',
    a: 'Não precisa. Se o perfil ainda não existe ou está parado, a gente estrutura do zero dentro do plano Autoridade ou Domínio.',
  },
  {
    q: 'Tem fidelidade ou multa de cancelamento?',
    a: 'Não. É mensal, sem contrato de permanência. Se decidir sair, avisa com antecedência e encerramos sem burocracia.',
  },
  {
    q: 'Quanto tempo até aparecer resultado?',
    a: 'O agente de IA e as campanhas começam a gerar contato já nas primeiras semanas. Autoridade de conteúdo é mais gradual — o efeito composto aparece com consistência, geralmente a partir do segundo ou terceiro mês.',
  },
  {
    q: 'Dá pra trocar de plano depois?',
    a: 'Dá, a qualquer momento. Muita gente começa no Captação pra validar e sobe pro Autoridade ou Domínio quando o volume de contato justifica.',
  },
];

export const CTA_FINAL = {
  eyebrow: 'Vamos conectar',
  title: 'Pronto pra parar de',
  titleEm: 'perder cliente por demora?',
  lead: 'Fala com a gente agora e monta, ainda essa semana, o plano certo pro seu escritório.',
};
