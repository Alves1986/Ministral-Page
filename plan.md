# Plano — Landing page de vendas do Ministral

## Escopo
Criar uma página única, responsiva e orientada à conversão para o appweb Ministral. O produto será apresentado como uma plataforma para organizar equipes, criar escalas e reduzir conflitos operacionais. A comunicação deve mencionar pagamentos via Asaas sem afirmar recursos, preços ou integrações que não foram confirmados.

## Implementação
- Stack estática com Vite, HTML semântico, CSS modular e JavaScript leve.
- Página única em `/`, com navegação por âncoras e CTA preparado para receber o link real de acesso/contratação.
- Visual do produto construído como mockup de painel em CSS/HTML, baseado na proposta pública do Ministral, sem depender de login autenticado.
- Microinterações leves: entrada do hero, hover de cartões, accordion de FAQ e menu mobile.
- `public/manus-routes.json` declara a única rota pública.
- Build estático com saída em `dist/` para publicação.

## Estrutura
- `index.html`: shell, SEO básico e carregamento da aplicação.
- `src/main.js`: conteúdo da página, interações e renderização de ícones.
- `src/style.css`: sistema visual responsivo, mockup do produto e estados interativos.
- `public/manus-routes.json`: manifesto de rotas do Webdev.
- `app.config.ts`: metadata de logo do projeto.

## Direção de design

### Alternativas consideradas
- **Editorial premium de produto B2B** — 0,07
- **Dashboard SaaS escuro e técnico** — 0,06
- **Institucional clean com azul corporativo** — 0,04

### Escolha: Editorial premium de produto B2B

**Design Movement:** editorial digital contemporâneo, com alto contraste, tipografia expressiva e blocos de produto que lembram um caderno de operação bem organizado.

**Core Principles:** clareza antes de complexidade; ritmo vertical com respiros largos; prova visual do produto; CTAs diretos e repetidos com propósito.

**Color Philosophy:** fundo marfim quente para transmitir proximidade e confiança; grafite para autoridade; verde-lima como assinatura de ação e crescimento; azul-cobalto aparece em dados e estados de sistema, conectando com a ideia de operação confiável.

**Layout Paradigm:** composição assimétrica com trilho editorial e mockup de painel em destaque; seções alternam largura total, colunas diagonais e cards ancorados em linhas de ritmo, evitando uma grade centralizada genérica.

**Signature Elements:** marcador vertical lime nos títulos; mockup do painel com bordas de papel e pequenas anotações; selo circular “feito para servir melhor”.

**Interaction Philosophy:** o usuário deve sentir que está explorando uma operação mais calma. Hover revela detalhes; accordion reduz fricção; CTA sempre explica o próximo passo.

**Animation:** entrada em fade-up com deslocamento curto; números e barras aparecem em sequência; nada deve piscar ou distrair a leitura.

**Typography System:** Space Grotesk para títulos e marca; DM Sans para corpo, labels e dados. Títulos com peso 600–700 e tracking levemente negativo; textos de suporte com largura controlada e line-height generoso.

**Brand Essence:** “A operação da sua equipe, finalmente sob controle.” Para líderes e organizações que coordenam pessoas, escalas e pagamentos e querem clareza sem planilhas espalhadas. Personalidade: claro, confiável, humano.

**Brand Voice:** headlines objetivas, seguras e com benefício concreto. Exemplo: “Menos conflito de escala. Mais gente certa no lugar certo.” CTA: “Quero organizar minha equipe”.

**Wordmark & Logo:** logotipo tipográfico “ministral” em caixa baixa, com um ponto lime no “i” e um traço horizontal que sugere escala e fluxo.

**Signature Brand Color:** verde-lima `#C7F36B`, usado como ponto de decisão e destaque de ações.

## Critérios de aceite
- A proposta de valor aparece no primeiro viewport.
- Existem CTAs para demonstração/acesso e para assinatura, sem inventar URL final de pagamento.
- A página comunica equipes, escalas, operação e Asaas de forma objetiva.
- Há mockup visual do produto realista o suficiente para explicar o sistema sem login.
- A experiência funciona bem em desktop e mobile.
- FAQ cobre uso, implantação, escalas, equipes e pagamentos.
- Build e rota manifest funcionam em Preview.
