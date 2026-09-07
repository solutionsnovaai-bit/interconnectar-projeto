# Interconnectar — Assessoria Jurídica

Landing page de captação (lead-gen), em **React + Vite + Tailwind**. Sem
backend — é 100% front-end estático, pronta pra Vercel/Netlify/qualquer
host de arquivo estático.

## Rodar

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:5173
npm run build    # gera dist/
npm run preview  # serve o build
```

## ⚠️ Antes de publicar — três placeholders pra trocar

Tudo centralizado em **`src/data/site.js`**, topo do arquivo:

```js
export const BRAND = {
  whatsapp: '5511999999999', // ← número real, formato 55DDD9XXXXXXXX
  email: 'contato@interconnectar.adv.br', // ← confirmar
  instagram: 'interconnectar.adv', // ← confirmar handle
  ...
};
```

E em **`src/components/SEO.jsx`**:

```js
const URL = 'https://interconnectar.adv.br'; // ← domínio real, quando existir
```

Sem o WhatsApp real, todos os botões "Falar no WhatsApp" abrem uma
conversa com um número que não existe — é o primeiro ajuste antes de
qualquer divulgação.

## Sobre os planos e preços

Os três valores em `src/data/site.js` → `PLANOS` (R$997 / R$1.597 /
R$2.497) são uma referência minha, baseada no custo real de rodar esse
tipo de pacote (agente de IA + gestão de tráfego + produção de
conteúdo) — não são definitivos. Ajuste à vontade: nome, preço e cada
item da lista de recursos estão todos ali, sem precisar mexer em
nenhum componente.

## Estrutura

```
index.html
tailwind.config.js  postcss.config.js  vite.config.js
public/assets/
  hero-desktop.jpg / hero-mobile.jpg   ← fotos que você mandou
  logo-full.jpg                         ← logo completo (ícone + nome)
  favicon.png                           ← gerado a partir do ícone vetorizado
  og-image.jpg                          ← imagem de preview pro link (WhatsApp, redes)
src/
  main.jsx  App.jsx  index.css
  data/site.js         ← TODO o conteúdo do site: textos, planos, FAQ, links
  hooks/useReveal.js    ← animação de entrada no scroll
  components/
    Mark.jsx            ← o símbolo dourado, vetorizado em SVG puro
    GhostText.jsx        ← o efeito de texto gigante em contorno (assinatura visual do site)
    Loader, Nav, Hero, Marquee, SectionHead,
    Servicos, Metodo, Planos, Faq, CtaFinal, Footer,
    FloatWpp, SEO, Icons
```

## O símbolo (Mark.jsx)

O ícone dourado que você mandou (JPEG, com iluminação 3D) foi
vetorizado — isolei os pixels dourados, tracei o contorno e simplifiquei
em um path SVG limpo. Fica em `src/components/Mark.jsx`, usa
`currentColor`, então herda qualquer cor do Tailwind
(`text-gold-500`, `text-cream` etc.) — é por isso que ele aparece
dourado na nav clara e claro/dourado na nav escura sem duplicar arquivo.

## O efeito de texto-fantasma (GhostText.jsx)

É a marca registrada visual do site, tirada da referência que você
mandou (o template "Velmont"): texto enorme, só com contorno, atrás do
conteúdo. Implementado com `-webkit-text-fill-color: transparent` +
`-webkit-text-stroke` — **não use `color: transparent`** se for mexer
nisso, porque zera o `currentColor` que o contorno depende, e o efeito
some por completo (isso me custou um bom tempo debugando nesta build).

Aparece em 4 lugares: "INTERCONNECTAR" no rodapé do Hero (só desktop —
no mobile o hero já é denso o bastante, escondido via `hidden md:block`),
"SERVIÇOS" atrás da seção de serviços, "MÉTODO" na base da seção escura,
e "INTERCONNECTAR" de novo no CTA final.

## Nav com cor dinâmica

A nav troca de clara-sobre-escuro pra escura-sobre-clara conforme o
scroll (`stuck` em `Nav.jsx`), porque o Hero é escuro e o resto do site
é claro — sem isso, o texto da nav ficava ilegível num dos dois estados.
O mesmo `dark` também é forçado quando o menu mobile abre
(`!stuck || open`), porque o drawer é sempre escuro por baixo,
independente de onde a pessoa rolou antes de abrir o menu.

## SEO / Open Graph

`SEO.jsx` usa `react-helmet-async` (por isso o `HelmetProvider` em
`main.jsx`) pra title, description, e as tags Open Graph/Twitter Card —
a imagem de preview (`og-image.jpg`) foi gerada especificamente pra
combinar com a identidade do site (mesmo fundo navy, mesmo dourado,
mesmo efeito de contorno), não é um recorte genérico.

## Deploy

Qualquer host de site estático funciona (Vercel, Netlify, Cloudflare
Pages). Build command `npm run build`, output directory `dist`.
Framework preset: **Vite**.
