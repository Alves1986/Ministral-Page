import './style.css';

const env = import.meta.env || {};
const COMPANY_NAME = env.VITE_COMPANY_NAME || 'Ministral Tecnologia [Configurável via VITE_COMPANY_NAME]';
const COMPANY_CNPJ = env.VITE_COMPANY_CNPJ || '00.000.000/0001-00 [Configurável via VITE_COMPANY_CNPJ]';
const COMPANY_ADDRESS = env.VITE_COMPANY_ADDRESS || 'Endereço comercial configurável via VITE_COMPANY_ADDRESS';
const DPO_EMAIL = env.VITE_DPO_EMAIL || 'contato.ministral@gmail.com';
const SUPPORT_EMAIL = env.VITE_SUPPORT_EMAIL || 'contato.ministral@gmail.com';
const LEGAL_VERSION = 'v2026.11';
const COOKIE_STORAGE_KEY = 'ministral_lp_cookie_consent_v1';

const icon = (name, size = 20) => {
  const paths = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    arrowUp: '<path d="m5 12 7-7 7 7M12 19V5"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    calendar: '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    shield: '<path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    spark: '<path d="m12 3-1.5 5.5L5 10l5.5 1.5L12 17l1.5-5.5L19 10l-5.5-1.5L12 3ZM19 16l-.7 2.3L16 19l2.3.7L19 22l.7-2.3L22 19l-2.3-.7L19 16Z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    trend: '<path d="M3 17 9 11l4 4 8-9"/><path d="M17 6h4v4"/>',
    chevron: '<path d="m6 9 6 6 6-6"/>',
    external: '<path d="M14 3h7v7M10 14 21 3M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"/>',
    lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    heart: '<path d="M20.8 8.6c0 5.4-8.8 10.4-8.8 10.4S3.2 14 3.2 8.6A4.6 4.6 0 0 1 12 6.3a4.6 4.6 0 0 1 8.8 2.3Z"/>'
  };
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.spark}</svg>`;
};

const navItems = [
  ['Como funciona', '#como-funciona'],
  ['Recursos', '#recursos'],
  ['Planos', '#assinar'],
  ['Casos de uso', '#casos-de-uso'],
  ['Dúvidas', '#faq']
];

const featureCards = [
  {
    number: '01',
    title: 'Escalas que fazem sentido',
    text: 'Monte a semana com clareza, veja os conflitos antes que aconteçam e ajuste sem trocar dezenas de mensagens.',
    icon: 'calendar',
    tone: 'lime'
  },
  {
    number: '02',
    title: 'Pessoas no lugar certo',
    text: 'Tenha uma visão simples de quem está disponível, quem já foi escalado e onde sua equipe precisa de atenção.',
    icon: 'users',
    tone: 'blue'
  },
  {
    number: '03',
    title: 'Operação sem ruído',
    text: 'Centralize a rotina em um só lugar e transforme o acompanhamento da equipe em um processo leve.',
    icon: 'shield',
    tone: 'sand'
  }
];

const useCases = [
  {
    badge: 'LP',
    tone: 'avatar-lime',
    cardClass: '',
    role: 'Liderança Pastoral',
    context: 'Visão de múltiplos ministérios',
    description: 'Substitui listas espalhadas em grupos de mensagem por um painel único de escalas, avisos e confirmações da equipe para os cultos da semana.'
  },
  {
    badge: 'CV',
    tone: 'avatar-blue',
    cardClass: 'testimonial-card-blue',
    role: 'Coordenação de Voluntários',
    context: 'Prevenção de conflitos de agenda',
    description: 'Identifica indisponibilidades e choques de horário antes de publicar a escala mensal, distribuindo funções com transparência.'
  },
  {
    badge: 'LL',
    tone: 'avatar-sand',
    cardClass: 'testimonial-card-sand',
    role: 'Liderança de Louvor',
    context: 'Repertório e funções integrados',
    description: 'Conecta músicas, links de referência, tonalidades e membros escalados no mesmo evento para que todos cheguem preparados ao ensaio.'
  }
];

const faqs = [
  ['O Ministral serve para qualquer tipo de equipe?', 'O Ministral foi pensado para igrejas e organizações que trabalham com voluntários, escalas e responsabilidades recorrentes. A configuração acompanha o tamanho e a dinâmica da sua operação.'],
  ['Preciso instalar algum programa?', 'Não. O Ministral é um aplicativo web: você acessa pelo navegador, do computador ou do celular, sem instalação complexa.'],
  ['Como funciona a parte de pagamentos e renovação?', 'Os planos pagos (Pro por R$ 49,00/mês e Enterprise por R$ 99,00/mês) possuem preço final transparente, sem taxas ocultas ou fidelidade, com renovação mensal automática processada via Asaas. Você recebe aviso antes da renovação.'],
  ['Como funcionam o cancelamento e o reembolso de 7 dias (CDC Art. 49)?', 'Você pode cancelar sua assinatura a qualquer momento diretamente dentro do aplicativo (menu Meu Plano > Gerenciar / Cancelar Assinatura), sem multa e sem precisar falar com atendente, ou pelo suporte se preferir. Conforme o Art. 49 do Código de Defesa do Consumidor, você tem 7 dias corridos após a primeira cobrança para desistir da contratação e receber reembolso integral (100%).'],
  ['O pagamento via Asaas é seguro?', 'Sim. O pagamento acontece no ambiente seguro de checkout do Asaas (instituição de pagamento regulada pelo Banco Central), separado da área de gestão do Ministral. O Ministral não armazena números completos de cartão de crédito.'],
  ['O que está incluído no Trial gratuito?', 'Durante 30 dias, você pode experimentar o fluxo operacional completo do Ministral sem informar cartão de crédito: escalas, repertório, relatórios básicos, regras de conflitos, notificações e IA básica (até 30 membros por ministério, 2 ministérios e 25 usos de IA por semana).'],
  ['Posso fazer upgrade do Trial para o Pro ou Enterprise?', 'Sim. Você pode começar pelo Trial gratuito e escolher um plano pago quando sua equipe precisar de mais membros, ministérios, IA avançada, governança ou atendimento prioritário.'],
  ['Como meus dados pessoais e o uso de IA são protegidos (LGPD)?', 'Seguimos a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Coletamos apenas os dados necessários para a operação, não vendemos dados a terceiros e não utilizamos seus dados para treinar modelos públicos de Inteligência Artificial. No painel do app (Meu Perfil > Privacidade LGPD), você pode baixar todos os seus dados em JSON/CSV ou excluir sua conta definitivamente a qualquer momento.']
];

const pricingCards = [
  {
    name: 'Trial',
    price: 'Grátis',
    description: '30 dias para testar · sem cartão de crédito',
    checkout: 'https://ministral.vercel.app/?register=true',
    tone: 'trial',
    legalNote: 'Sem cobrança automática ao fim dos 30 dias.',
    features: ['Até 30 membros por ministério', 'Até 2 ministérios', 'Editor de Escala completo', 'Disponibilidade inteligente', 'Avisos e Comunicados', 'Ranking e Destaques', 'Relatórios básicos', 'Regras de conflitos', 'Repertório e integrações', 'Notificações Push', 'IA básica — 25 usos por semana (com aviso de conteúdo gerado por IA)'],
    unavailable: ['Atendimento prioritário e recursos Enterprise']
  },
  {
    name: 'Pro',
    price: 'R$ 49,00',
    suffix: '/mês',
    description: 'Para ministérios em crescimento · preço final sem taxas ocultas',
    checkout: 'https://www.asaas.com/000/c/5ag05of6an6oi6w7',
    tone: 'pro',
    featured: true,
    legalNote: 'Renovação mensal automática. Cancele em 1 clique no app. Reembolso integral em até 7 dias (CDC Art. 49).',
    features: ['Até 50 membros por ministério', 'Até 3 ministérios', 'Editor de Escala completo', 'Relatórios Mensais completos', 'Relatório de Disponibilidade', 'Regras de Escala (conflitos)', 'Repertório com Spotify & YouTube', 'Notificações Push', 'IA Avançada (Gemini — sem uso para treino)', 'Suporte via WhatsApp'],
    unavailable: []
  },
  {
    name: 'Enterprise',
    price: 'R$ 99,00',
    suffix: '/mês',
    description: 'Controle total e atendimento dedicado · preço final sem taxas ocultas',
    checkout: 'https://www.asaas.com/000/c/x6no3kwe2ylb4a13',
    tone: 'enterprise',
    legalNote: 'Renovação mensal automática. Cancele em 1 clique no app. Reembolso integral em até 7 dias (CDC Art. 49).',
    features: ['Membros ilimitados', 'Ministérios ilimitados', 'Múltiplos administradores', 'Relatórios avançados e customizados', 'Suporte dedicado WhatsApp/Call', 'Orientação de implantação para equipe', 'Atendimento prioritário em horário comercial', 'Exportação completa de dados (JSON/CSV)'],
    unavailable: []
  }
];

const app = document.querySelector('#app');

app.innerHTML = `
  <a class="skip-link" href="#top">Pular para o conteúdo principal</a>

  <header class="site-header">
    <div class="container header-inner">
      <a class="wordmark" href="#top" aria-label="Ministral, início">
        <span class="brand-lockup"><img src="/ministral-logo-official.png" alt="Logo Ministral" /><span>ministral</span></span>
      </a>
      <nav class="desktop-nav" aria-label="Navegação principal">
        ${navItems.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}
      </nav>
      <div class="header-actions">
        <a class="login-link" href="https://ministral.vercel.app" target="_blank" rel="noreferrer">Acessar sistema ${icon('external', 15)}</a>
        <a class="button button-dark button-small" href="#assinar">Quero começar ${icon('arrow', 16)}</a>
      </div>
      <button class="mobile-menu-button" type="button" aria-label="Abrir menu" aria-expanded="false">${icon('menu', 23)}</button>
    </div>
    <div class="mobile-nav" aria-hidden="true">
      ${navItems.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}
      <a href="https://ministral.vercel.app" target="_blank" rel="noreferrer">Acessar sistema ${icon('external', 15)}</a>
      <a class="button button-dark" href="#assinar">Quero começar ${icon('arrow', 16)}</a>
    </div>
  </header>

  <main id="top" tabindex="-1">
    <section class="hero section-pad">
      <div class="hero-orbit hero-orbit-one"></div>
      <div class="hero-orbit hero-orbit-two"></div>
      <div class="container hero-grid">
        <div class="hero-copy reveal">
          <div class="eyebrow"><span class="eyebrow-mark"></span> Organização que libera tempo</div>
          <h1>Menos conflito de escala. <em>Mais gente certa</em> no lugar certo.</h1>
          <p class="hero-lead">O Ministral coloca equipes, escalas e pagamentos em um fluxo claro — para você cuidar do que realmente importa: servir melhor.</p>
          <div class="hero-actions">
            <a class="button button-lime" href="#assinar">Quero organizar minha equipe ${icon('arrow', 18)}</a>
            <a class="text-link" href="#produto">Ver como funciona <span>${icon('arrow', 16)}</span></a>
          </div>
          <div class="hero-note"><span class="note-check">${icon('check', 13)}</span> Feito para operações que acontecem toda semana · Conformidade LGPD & CDC.</div>
        </div>
        <div class="hero-visual hero-visual-real reveal reveal-delay" id="produto">
          <div class="visual-label label-top"><span class="status-dot"></span> visão geral da operação</div>
          <div class="real-dashboard-frame"><img src="/ministral-dashboard-fictional.png" alt="Visão geral do painel Ministral com avatares ilustrativos" /><span class="real-dashboard-note">captura real do sistema · perfis ilustrativos</span></div>
          <div class="visual-label label-bottom">${icon('spark', 15)} uma operação mais leve começa aqui</div>
        </div>
      </div>
      <div class="container trust-strip"><span>Para quem coordena pessoas e precisa de clareza</span><div class="trust-line"></div><span class="trust-item">${icon('check', 14)} equipes alinhadas</span><span class="trust-item">${icon('check', 14)} escalas previsíveis</span><span class="trust-item">${icon('check', 14)} cobrança transparente via Asaas</span></div>
    </section>

    <section class="real-product-section section-pad">
      <div class="container real-product-grid"><div class="real-product-image-wrap"><img src="/ministral-schedule-fictional.png" alt="Central de Escalas do Ministral com perfis ilustrativos" class="real-product-image" /><div class="real-image-caption"><span class="status-dot"></span><span>captura real do sistema · perfis ilustrativos</span></div></div><div class="real-product-copy"><div class="eyebrow"><span class="eyebrow-mark"></span> Produto de verdade, rotina de verdade</div><h2>Da agenda do culto ao detalhe da <em>escala.</em></h2><p>A Central de Escalas reúne cultos, vagas, funções e regras de agenda em uma visão operacional única. Organize a equipe, libere a escala e acompanhe cada compromisso sem ruído.</p><div class="real-product-points"><span>${icon('calendar', 16)} cultos e programações do mês</span><span>${icon('users', 16)} membros organizados por função</span><span>${icon('spark', 16)} escala liberada com poucos cliques</span></div><a class="text-link" href="https://ministral.vercel.app" target="_blank" rel="noreferrer">Ver o painel real <span>${icon('external', 15)}</span></a></div></div>
    </section>

    <section class="statement section-pad" id="como-funciona">
      <div class="container statement-grid">
        <div class="section-index">01 <span></span> o problema</div>
        <div class="statement-copy"><h2>Planilha resolve uma vez. <em>O Ministral resolve toda semana.</em></h2><p>Quando a escala muda, a informação se espalha. Quando alguém falta, o improviso custa tempo. O Ministral organiza a operação antes que o problema apareça.</p></div>
        <div class="statement-aside"><div class="rotating-badge"><span>feito para</span><strong>servir<br/>melhor</strong><small>✦</small></div><p>Uma visão simples para decisões que precisam acontecer rápido.</p></div>
      </div>
    </section>

    <section class="features-section section-pad" id="recursos">
      <div class="container">
        <div class="section-heading"><div><div class="eyebrow"><span class="eyebrow-mark"></span> O que muda na prática</div><h2>Clareza para organizar.<br/><em>Tranquilidade para conduzir.</em></h2></div><p>Você não precisa de mais uma ferramenta complicada. Precisa de um lugar em que a operação faça sentido.</p></div>
        <div class="feature-grid">${featureCards.map((card) => `<article class="feature-card"><div class="feature-top"><span class="feature-number">${card.number}</span><span class="feature-icon ${card.tone}">${icon(card.icon, 22)}</span></div><h3>${card.title}</h3><p>${card.text}</p><a class="feature-link" href="#assinar">Conhecer este recurso ${icon('arrow', 15)}</a></article>`).join('')}</div>
      </div>
    </section>

    <section class="steps-section section-pad">
      <div class="container steps-grid"><div class="steps-intro"><div class="eyebrow"><span class="eyebrow-mark"></span> Como funciona</div><h2>Do caos da semana a um fluxo que <em>você enxerga.</em></h2><p>Comece com o que você já faz hoje. O Ministral dá forma, ritmo e visibilidade para a sua rotina.</p><a class="button button-outline" href="#assinar">Quero ver o Ministral em ação ${icon('arrow', 17)}</a></div><div class="steps-list"><div class="step-item"><span class="step-number">1</span><div><h3>Cadastre sua realidade</h3><p>Adicione pessoas, equipes e responsabilidades sem recomeçar do zero.</p></div><span class="step-icon">${icon('users', 20)}</span></div><div class="step-item"><span class="step-number">2</span><div><h3>Monte a escala com clareza</h3><p>Distribua a semana, identifique conflitos e publique com segurança.</p></div><span class="step-icon">${icon('calendar', 20)}</span></div><div class="step-item"><span class="step-number">3</span><div><h3>Acompanhe e mantenha o ritmo</h3><p>Tenha uma visão atualizada da operação e cuide do que pedir atenção.</p></div><span class="step-icon">${icon('trend', 20)}</span></div><div class="step-item step-item-payment"><span class="step-number">4</span><div><h3>Assine pelo Asaas com proteção CDC</h3><p>Pagamento seguro, sem taxas ocultas, cancelamento em 1 clique no app e 7 dias de garantia legal.</p></div><span class="step-icon">${icon('lock', 20)}</span></div></div></div>
    </section>

    <section class="proof-section section-pad">
      <div class="container proof-grid"><div class="proof-quote"><span class="quote-mark">“</span><blockquote>A ferramenta certa não faz mais barulho. Ela devolve o silêncio que a operação estava pedindo.</blockquote><div class="quote-caption"><span class="quote-line"></span><span>Uma nova forma de organizar começa com uma visão mais clara.</span></div></div><div class="proof-card"><div class="proof-card-top"><span class="eyebrow">confiança na rotina</span>${icon('heart', 19)}</div><div class="proof-metric">1<span> só lugar</span></div><p>para acompanhar pessoas, escalas, pendências e o próximo passo da sua operação.</p><div class="proof-list"><span>${icon('check', 14)} sem planilha espalhada</span><span>${icon('check', 14)} sem depender de memória</span><span>${icon('check', 14)} sem cobrança escondida</span></div></div></div>
    </section>

    <section class="testimonials-section section-pad" id="casos-de-uso">
      <div class="container">
        <div class="testimonials-heading">
          <div>
            <div class="eyebrow"><span class="eyebrow-mark"></span> Aplicações reais por função</div>
            <h2>Mais presença no culto.<br/><em>Menos ruído na operação.</em></h2>
          </div>
          <p class="testimonials-disclaimer">Cenários operacionais demonstrativos das funcionalidades disponíveis no sistema Ministral (sem uso de depoimentos fictícios, em conformidade com o Art. 37 do CDC).</p>
        </div>
        <div class="testimonials-grid">
          ${useCases.map((item) => `
            <article class="testimonial-card ${item.cardClass}">
              <div class="testimonial-mark">${icon('spark', 28)}</div>
              <blockquote>${item.description}</blockquote>
              <div class="testimonial-person">
                <span class="testimonial-avatar ${item.tone}">${item.badge}</span>
                <span><strong>${item.role}</strong><small>${item.context}</small></span>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="offer-section pricing-section section-pad" id="assinar">
      <div class="container pricing-intro"><div><div class="eyebrow"><span class="eyebrow-mark"></span> Escolha o seu ritmo</div><h2>Experimente tudo.<br/><em>Evolua no seu tempo.</em></h2></div><p>Tenha 30 dias para testar o fluxo operacional completo do Ministral. Preços totais claros, sem taxa de adesão ou fidelidade, com direito de arrependimento de 7 dias (CDC Art. 49) e cancelamento direto pelo aplicativo.</p></div>
      <div class="container pricing-grid">${pricingCards.map((plan) => `<article class="pricing-card ${plan.featured ? 'pricing-card-featured' : ''} ${plan.tone}"><div class="pricing-card-top"><span class="pricing-name">${plan.name}</span>${plan.featured ? '<span class="pricing-badge">mais escolhido</span>' : ''}</div><p class="pricing-description">${plan.description}</p><div class="pricing-price">${plan.price}${plan.suffix ? `<small>${plan.suffix}</small>` : ''}</div><p class="pricing-legal-note">${plan.legalNote}</p><div class="pricing-divider"></div><ul class="pricing-features">${plan.features.map((feature) => `<li>${icon('check', 14)} ${feature}</li>`).join('')}${plan.unavailable.map((feature) => `<li class="pricing-unavailable">${icon('close', 14)} ${feature}</li>`).join('')}</ul><a class="button ${plan.featured ? 'button-lime' : 'button-light'} button-full" href="${plan.checkout}" target="_blank" rel="noreferrer">${plan.name === 'Trial' ? 'Testar grátis por 30 dias' : 'Assinar Agora'} ${icon('arrow', 16)}</a></article>`).join('')}</div>
      <div class="container pricing-footnote">
        <span>${icon('shield', 15)} Pagamento seguro via Asaas · Preço total final sem taxas ocultas (CDC Art. 31)</span>
        <span>Direito de arrependimento em 7 dias corridos com reembolso integral (CDC Art. 49) · Cancelamento direto no app.</span>
      </div>
    </section>

    <section class="faq-section section-pad" id="faq">
      <div class="container faq-grid">
        <div class="faq-intro">
          <div class="eyebrow"><span class="eyebrow-mark"></span> Perguntas frequentes</div>
          <h2>O que você precisa saber antes de <em>começar.</em></h2>
          <p>Transparência total sobre funcionamento, assinatura, cancelamento e proteção de dados pessoais (LGPD).</p>
          <a class="text-link" href="https://ministral.vercel.app" target="_blank" rel="noreferrer">Acessar o sistema <span>${icon('external', 15)}</span></a>
          <a class="text-link contact-email" href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL} <span>${icon('arrow', 15)}</span></a>
        </div>
        <div class="faq-list">
          ${faqs.map(([question, answer], index) => `
            <details class="faq-item" ${index === 0 ? 'open' : ''}>
              <summary><span>${question}</span><span class="faq-plus">${icon('plus', 17)}</span></summary>
              <p>${answer}</p>
            </details>
          `).join('')}
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-top">
      <div>
        <a class="wordmark" href="#top"><span class="brand-lockup"><img src="/ministral-logo-official.png" alt="Logo Ministral" /><span>ministral</span></span></a>
        <p class="footer-tagline">A operação da sua equipe,<br/><em>finalmente sob controle.</em></p>
      </div>
      <div class="legal-footer-box" aria-label="Identificação empresarial e Encarregado de Dados (LGPD e Decreto 7.962/2013)">
        <strong>Identificação e Transparência (Decreto nº 7.962/2013 e LGPD Art. 41)</strong>
        <span><strong>Razão Social:</strong> ${COMPANY_NAME}</span>
        <span><strong>CNPJ:</strong> ${COMPANY_CNPJ}</span>
        <span><strong>Endereço:</strong> ${COMPANY_ADDRESS}</span>
        <span><strong>Atendimento / SAC:</strong> <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a></span>
        <span><strong>Encarregado de Dados (DPO):</strong> <a href="mailto:${DPO_EMAIL}">${DPO_EMAIL}</a></span>
      </div>
      <div class="footer-links">
        <a href="#como-funciona">Como funciona</a>
        <a href="#recursos">Recursos</a>
        <a href="#assinar">Planos e Preços</a>
        <a href="#faq">Dúvidas</a>
        <button type="button" class="footer-link-button" data-open-legal="terms">Termos de Uso (${LEGAL_VERSION})</button>
        <button type="button" class="footer-link-button" data-open-legal="privacy">Política de Privacidade (${LEGAL_VERSION})</button>
        <button type="button" class="footer-link-button" id="reopen-cookie-banner">Preferências de Cookies</button>
        <a href="https://ministral.vercel.app" target="_blank" rel="noreferrer">Acessar sistema ${icon('external', 14)}</a>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© 2026 Ministral. Todos os direitos reservados · Documentos Legais ${LEGAL_VERSION} em PT-BR.</span>
      <span>Pagamentos processados via Asaas · Proteção LGPD (Lei 13.709/2018) e CDC (Lei 8.078/1990).</span>
      <a href="#top" class="back-top">voltar ao topo ${icon('arrowUp', 14)}</a>
    </div>
  </footer>

  <!-- Modal de Termos de Uso e Política de Privacidade em PT-BR (Item 27, 22, 28) -->
  <div class="legal-modal-backdrop" id="legal-modal" role="dialog" aria-modal="true" aria-labelledby="legal-modal-title" hidden>
    <div class="legal-modal-card">
      <div class="legal-modal-header">
        <div>
          <span class="eyebrow">Conformidade LGPD, ANPD e CDC · Versão ${LEGAL_VERSION}</span>
          <h2 id="legal-modal-title">Termos de Uso e Política de Privacidade</h2>
        </div>
        <button type="button" class="legal-modal-close" id="close-legal-modal" aria-label="Fechar documento legal">${icon('close', 20)}</button>
      </div>
      <div class="legal-modal-tabs" role="tablist">
        <button type="button" class="legal-tab is-active" data-legal-tab="terms" role="tab" aria-selected="true">Termos de Uso</button>
        <button type="button" class="legal-tab" data-legal-tab="privacy" role="tab" aria-selected="false">Política de Privacidade & Suboperadores</button>
      </div>
      <div class="legal-modal-body" id="legal-modal-content">
        <div data-legal-panel="terms">
          <h3>1. Objeto e Identificação (${COMPANY_NAME})</h3>
          <p>O Ministral (${COMPANY_NAME}, CNPJ ${COMPANY_CNPJ}, ${COMPANY_ADDRESS}) disponibiliza plataforma SaaS para organização de escalas, equipes, repertórios e comunicação ministerial.</p>
          <h3>2. Planos, Preço Total e Renovação Automática (CDC Art. 31)</h3>
          <p>O plano Trial é gratuito por 30 dias, sem cobrança automática ao término. Os planos pagos (Pro por R$ 49,00/mês e Enterprise por R$ 99,00/mês) possuem preço final sem taxas ocultas ou fidelidade, com renovação mensal automática via Asaas mediante aviso prévio.</p>
          <h3>3. Direito de Arrependimento em 7 Dias (CDC Art. 49) e Cancelamento Fácil</h3>
          <p>O assinante pode desistir da contratação no prazo de até 7 (sete) dias corridos a contar da confirmação do primeiro pagamento, com reembolso integral (100%). O cancelamento da assinatura recorrente pode ser feito a qualquer momento pelo próprio painel do aplicativo (menu <em>Meu Plano &gt; Gerenciar / Cancelar Assinatura</em>) ou pelo e-mail <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a>, sem multa.</p>
          <h3>4. Requisitos de Idade e Consentimento Parental (LGPD Art. 14)</h3>
          <p>A criação de organizações e contratação de planos é exclusiva para maiores de 18 anos. O cadastro de voluntários menores de 12 anos em escalas exige consentimento específico e em destaque de pelo menos um dos pais ou responsável legal.</p>
          <h3>5. Transparência sobre Inteligência Artificial e Conteúdo de Usuários</h3>
          <p>Sugestões geradas por Inteligência Artificial são devidamente sinalizadas no sistema e servem como apoio à decisão humana. O aplicativo conta com botão de denúncia para remoção de conteúdos inadequados ou que violem direitos autorais (Marco Civil da Internet, Art. 19).</p>
        </div>
        <div data-legal-panel="privacy" hidden>
          <h3>1. Coleta Mínima e Finalidade (LGPD Art. 6º, III)</h3>
          <p>Coletamos apenas os dados estritamente necessários para autenticação, organização das escalas e faturamento (nome, e-mail, função ministerial e registros de disponibilidade). Comunicações de marketing dependem de consentimento separado e desmarcado por padrão (LGPD Art. 8º, § 4º).</p>
          <h3>2. Direitos do Titular: Download e Exclusão (LGPD Art. 18)</h3>
          <p>A qualquer momento, no menu <em>Meu Perfil &gt; Privacidade e Proteção de Dados</em> do aplicativo, o usuário pode: (a) exportar todos os seus dados pessoais em formatos estruturados <strong>JSON</strong> e <strong>CSV</strong>; (b) solicitar a exclusão definitiva de sua conta e dados; (c) desativar o uso de dados para recursos de IA e revogar comunicações de marketing em 1 clique.</p>
          <h3>3. Governança de IA (Sem Treinamento de Modelos de Terceiros)</h3>
          <p>Os dados processados pelas funcionalidades de Inteligência Artificial não são vendidos nem utilizados para treinar modelos públicos de terceiros.</p>
          <h3>4. Operadores e Suboperadores de Dados (Fornecedores)</h3>
          <ul>
            <li><strong>Supabase Inc.</strong> — Banco de dados PostgreSQL, autenticação criptografada e armazenamento seguro.</li>
            <li><strong>Asaas Gestão Financeira Instituição de Pagamento S.A.</strong> — Processamento de cobranças e assinaturas.</li>
            <li><strong>Google Cloud / Google Gemini API</strong> — Processamento sob demanda de sugestões de escala (sem retenção para treino).</li>
            <li><strong>Vercel Inc.</strong> — Hospedagem da aplicação web e entrega segura via HTTPS/TLS.</li>
          </ul>
          <h3>5. Prazos de Retenção, Expurgo e Resposta a Incidentes (Res. ANPD nº 15/2024)</h3>
          <p>Dados operacionais permanecem ativos durante a vigência da conta e são excluídos ou anonimizados após a exclusão pelo titular, ressalvada a guarda de registros de acesso (6 meses — Marco Civil Art. 15) e documentos fiscais (5 anos — CTN Art. 173). Em caso de incidente de segurança com risco relevante, a comunicação à ANPD e aos titulares ocorre em até 3 dias úteis (Resolução CD/ANPD nº 15/2024).</p>
          <h3>6. Contato do Encarregado pelo Tratamento de Dados (DPO — LGPD Art. 41, § 1º)</h3>
          <p>Encarregado (DPO): <a href="mailto:${DPO_EMAIL}">${DPO_EMAIL}</a>.</p>
        </div>
      </div>
      <div class="legal-modal-footer">
        <a class="text-link" href="https://ministral.vercel.app/?register=true" target="_blank" rel="noreferrer">Abrir documentos completos no App ${icon('external', 14)}</a>
        <button type="button" class="button button-dark button-small" id="ok-legal-modal">Entendi</button>
      </div>
    </div>
  </div>

  <!-- Banner de Cookies e Armazenamento Local (Guia ANPD 2022 — Item 7) -->
  <aside class="cookie-banner" id="cookie-banner" role="region" aria-label="Preferências de cookies e privacidade" hidden>
    <div class="cookie-banner-inner">
      <div class="cookie-banner-copy">
        <strong>Privacidade e Cookies (LGPD & Guia ANPD)</strong>
        <p>Não utilizamos cookies de publicidade ou rastreadores invasivos nesta página. Utilizamos apenas armazenamento essencial para lembrar suas preferências. Você pode recusar todos os cookies não essenciais ou aceitar.</p>
      </div>
      <div class="cookie-banner-actions">
        <button type="button" class="cookie-btn" id="cookie-reject-btn">Recusar todos</button>
        <button type="button" class="cookie-btn" id="cookie-accept-btn">Aceitar todos</button>
      </div>
    </div>
  </aside>
`;

const menuButton = document.querySelector('.mobile-menu-button');
const mobileNav = document.querySelector('.mobile-nav');
menuButton?.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.innerHTML = icon(open ? 'close' : 'menu', 23);
  mobileNav.setAttribute('aria-hidden', String(!open));
});

document.querySelectorAll('.mobile-nav a').forEach((link) => link.addEventListener('click', () => {
  mobileNav.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.innerHTML = icon('menu', 23);
}));

document.querySelectorAll('a[href^="#"]').forEach((link) => link.addEventListener('click', (event) => {
  const href = link.getAttribute('href');
  if (!href || href === '#') return;
  const target = document.querySelector(href);
  if (target) {
    event.preventDefault();
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
  }
}));

// Modal Jurídico (Termos de Uso e Política de Privacidade)
const legalModal = document.querySelector('#legal-modal');
const legalTabs = document.querySelectorAll('[data-legal-tab]');
const legalPanels = document.querySelectorAll('[data-legal-panel]');

const switchLegalTab = (tabName) => {
  legalTabs.forEach((tab) => {
    const active = tab.getAttribute('data-legal-tab') === tabName;
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-selected', String(active));
  });
  legalPanels.forEach((panel) => {
    panel.hidden = panel.getAttribute('data-legal-panel') !== tabName;
  });
};

const openLegalModal = (tabName = 'terms') => {
  if (!legalModal) return;
  switchLegalTab(tabName);
  legalModal.hidden = false;
  document.querySelector('#close-legal-modal')?.focus();
};

const closeLegalModal = () => {
  if (!legalModal) return;
  legalModal.hidden = true;
};

document.querySelectorAll('[data-open-legal]').forEach((btn) => {
  btn.addEventListener('click', () => openLegalModal(btn.getAttribute('data-open-legal') || 'terms'));
});

legalTabs.forEach((tab) => {
  tab.addEventListener('click', () => switchLegalTab(tab.getAttribute('data-legal-tab') || 'terms'));
});

document.querySelector('#close-legal-modal')?.addEventListener('click', closeLegalModal);
document.querySelector('#ok-legal-modal')?.addEventListener('click', closeLegalModal);
legalModal?.addEventListener('click', (event) => {
  if (event.target === legalModal) closeLegalModal();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && legalModal && !legalModal.hidden) {
    closeLegalModal();
  }
});

// Banner de Cookies (ANPD 2022 — Recusar todos e Aceitar todos com mesmo destaque)
const cookieBanner = document.querySelector('#cookie-banner');
const saveCookieChoice = (choice) => {
  try {
    localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify({
      choice,
      version: LEGAL_VERSION,
      timestamp: new Date().toISOString()
    }));
  } catch {
    // Ignora caso o navegador bloqueie storage
  }
  if (cookieBanner) cookieBanner.hidden = true;
};

try {
  const existingConsent = localStorage.getItem(COOKIE_STORAGE_KEY);
  if (!existingConsent && cookieBanner) {
    cookieBanner.hidden = false;
  }
} catch {
  if (cookieBanner) cookieBanner.hidden = false;
}

document.querySelector('#cookie-reject-btn')?.addEventListener('click', () => saveCookieChoice('rejected_non_essential'));
document.querySelector('#cookie-accept-btn')?.addEventListener('click', () => saveCookieChoice('accepted_all'));
document.querySelector('#reopen-cookie-banner')?.addEventListener('click', () => {
  if (cookieBanner) cookieBanner.hidden = false;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal, .feature-card, .step-item, .proof-card').forEach((element) => observer.observe(element));
