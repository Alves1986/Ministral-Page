import './style.css';

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
  ['Depoimentos', '#depoimentos'],
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

const faqs = [
  ['O Ministral serve para qualquer tipo de equipe?', 'O Ministral foi pensado para organizações que trabalham com pessoas, escalas e responsabilidades recorrentes. A configuração pode acompanhar o tamanho e a dinâmica da sua operação.'],
  ['Preciso instalar algum programa?', 'Não. O Ministral é um appweb: você acessa pelo navegador, do computador ou do celular, sem instalação complexa.'],
  ['Como funciona a parte de pagamentos?', 'O fluxo de assinatura e cobrança é organizado via Asaas. Ao clicar no checkout do seu plano, você será direcionado para a página segura de pagamento do Asaas.'],
  ['O pagamento via Asaas é seguro?', 'Sim. O pagamento acontece no ambiente de checkout do Asaas, separado da área de gestão do Ministral. A página exibirá as opções de pagamento disponíveis para o plano escolhido.'],
  ['Quando meu acesso é liberado?', 'Depois da confirmação do pagamento, a ativação segue o fluxo definido para o seu plano. Se precisar de ajuda, use o suporte do Ministral para acompanhar a contratação.'],
  ['O que está incluído no Trial?', 'Durante 30 dias, você pode experimentar o fluxo operacional completo do Ministral: escalas, repertório, relatórios básicos, regras de conflitos, notificações e IA básica. O Trial tem limites de volume: até 30 membros por ministério, 2 ministérios e 25 usos de IA por semana.'],
  ['Posso fazer upgrade do Trial para o Pro ou Enterprise?', 'Sim. Você pode começar pelo Trial completo e escolher um plano pago quando sua equipe precisar de mais membros, ministérios, IA avançada, governança ou suporte prioritário.'],
  ['Como funciona o cancelamento?', 'A solicitação de cancelamento deve ser feita pelo canal de suporte do Ministral. As condições e a data de encerramento seguem os termos apresentados no checkout.'],
  ['Posso começar com a minha equipe atual?', 'Sim. A ideia é partir da sua realidade atual, organizar pessoas e escalas e evoluir o uso conforme a operação ganhar clareza.'],
  ['E se eu precisar de ajuda para implantar?', 'O próximo passo é conversar com o time do Ministral para entender seu cenário e indicar o melhor caminho de ativação.']
];

const pricingCards = [
  {
    name: 'Trial',
    price: 'Grátis',
    description: '30 dias para testar',
    checkout: 'https://ministral.vercel.app/?register=true',
    tone: 'trial',
    features: ['Até 30 membros por ministério', 'Até 2 ministérios', 'Editor de Escala completo', 'Disponibilidade inteligente', 'Avisos e Comunicados', 'Ranking e Destaques', 'Relatórios básicos', 'Regras de conflitos', 'Repertório e integrações', 'Notificações Push', 'IA básica — 25 usos por semana'],
    unavailable: ['Suporte prioritário e recursos Enterprise']
  },
  {
    name: 'Pro',
    price: 'R$ 49,00',
    suffix: '/mês',
    description: 'Para ministérios que levam a sério',
    checkout: 'https://www.asaas.com/000/c/5ag05of6an6oi6w7',
    tone: 'pro',
    featured: true,
    features: ['Até 50 membros por ministério', 'Até 3 ministérios', 'Editor de Escala completo', 'Relatórios Mensais completos', 'Relatório de Disponibilidade', 'Regras de Escala (conflitos)', 'Repertório com Spotify & YouTube', 'Notificações Push', 'IA Avançada (Gemini)', 'Suporte via WhatsApp'],
    unavailable: []
  },
  {
    name: 'Enterprise',
    price: 'R$ 99,00',
    suffix: '/mês',
    description: 'Controle total e suporte dedicado',
    checkout: 'https://www.asaas.com/000/c/x6no3kwe2ylb4a13',
    tone: 'enterprise',
    features: ['Membros ilimitados', 'Ministérios ilimitados', 'Múltiplos administradores', 'Relatórios avançados e customizados', 'Suporte dedicado WhatsApp/Call', 'Treinamento para equipe', 'SLA de disponibilidade', 'Backup extra de dados'],
    unavailable: []
  }
];

const app = document.querySelector('#app');

app.innerHTML = `
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

  <main id="top">
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
          <div class="hero-note"><span class="note-check">${icon('check', 13)}</span> Feito para operações que acontecem toda semana.</div>
        </div>
        <div class="hero-visual hero-visual-real reveal reveal-delay" id="produto">
          <div class="visual-label label-top"><span class="status-dot"></span> visão geral da operação</div>
          <div class="real-dashboard-frame"><img src="/ministral-dashboard-fictional.png" alt="Visão geral do painel Ministral com avatares fictícios" /><span class="real-dashboard-note">captura real do sistema · perfis fictícios</span></div>
          <div class="visual-label label-bottom">${icon('spark', 15)} uma operação mais leve começa aqui</div>
        </div>
      </div>
      <div class="container trust-strip"><span>Para quem coordena pessoas e precisa de clareza</span><div class="trust-line"></div><span class="trust-item">${icon('check', 14)} equipes alinhadas</span><span class="trust-item">${icon('check', 14)} escalas previsíveis</span><span class="trust-item">${icon('check', 14)} cobrança via Asaas</span></div>
    </section>

    <section class="real-product-section section-pad">
      <div class="container real-product-grid"><div class="real-product-image-wrap"><img src="/ministral-schedule-fictional.png" alt="Central de Escalas do Ministral com perfis fictícios" class="real-product-image" /><div class="real-image-caption"><span class="status-dot"></span><span>captura real do sistema · perfis fictícios</span></div></div><div class="real-product-copy"><div class="eyebrow"><span class="eyebrow-mark"></span> Produto de verdade, rotina de verdade</div><h2>Da agenda do culto ao detalhe da <em>escala.</em></h2><p>A Central de Escalas reúne cultos, vagas, funções e regras de agenda em uma visão operacional única. Organize a equipe, libere a escala e acompanhe cada compromisso sem ruído.</p><div class="real-product-points"><span>${icon('calendar', 16)} cultos e programações do mês</span><span>${icon('users', 16)} membros organizados por função</span><span>${icon('spark', 16)} escala liberada com poucos cliques</span></div><a class="text-link" href="https://ministral.vercel.app" target="_blank" rel="noreferrer">Ver o painel real <span>${icon('external', 15)}</span></a></div></div>
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
      <div class="container steps-grid"><div class="steps-intro"><div class="eyebrow"><span class="eyebrow-mark"></span> Como funciona</div><h2>Do caos da semana a um fluxo que <em>você enxerga.</em></h2><p>Comece com o que você já faz hoje. O Ministral dá forma, ritmo e visibilidade para a sua rotina.</p><a class="button button-outline" href="#assinar">Quero ver o Ministral em ação ${icon('arrow', 17)}</a></div><div class="steps-list"><div class="step-item"><span class="step-number">1</span><div><h3>Cadastre sua realidade</h3><p>Adicione pessoas, equipes e responsabilidades sem recomeçar do zero.</p></div><span class="step-icon">${icon('users', 20)}</span></div><div class="step-item"><span class="step-number">2</span><div><h3>Monte a escala com clareza</h3><p>Distribua a semana, identifique conflitos e publique com segurança.</p></div><span class="step-icon">${icon('calendar', 20)}</span></div><div class="step-item"><span class="step-number">3</span><div><h3>Acompanhe e mantenha o ritmo</h3><p>Tenha uma visão atualizada da operação e cuide do que pedir atenção.</p></div><span class="step-icon">${icon('trend', 20)}</span></div><div class="step-item step-item-payment"><span class="step-number">4</span><div><h3>Assine pelo Asaas</h3><p>O pagamento fica em um fluxo seguro e organizado para você começar sem fricção.</p></div><span class="step-icon">${icon('lock', 20)}</span></div></div></div>
    </section>

    <section class="proof-section section-pad">
      <div class="container proof-grid"><div class="proof-quote"><span class="quote-mark">“</span><blockquote>A ferramenta certa não faz mais barulho. Ela devolve o silêncio que a operação estava pedindo.</blockquote><div class="quote-caption"><span class="quote-line"></span><span>Uma nova forma de organizar começa com uma visão mais clara.</span></div></div><div class="proof-card"><div class="proof-card-top"><span class="eyebrow">confiança na rotina</span>${icon('heart', 19)}</div><div class="proof-metric">1<span> só lugar</span></div><p>para acompanhar pessoas, escalas, pendências e o próximo passo da sua operação.</p><div class="proof-list"><span>${icon('check', 14)} sem planilha espalhada</span><span>${icon('check', 14)} sem depender de memória</span><span>${icon('check', 14)} sem cobrança escondida</span></div></div></div>
    </section>

    <section class="testimonials-section section-pad" id="depoimentos">
      <div class="container"><div class="testimonials-heading"><div><div class="eyebrow"><span class="eyebrow-mark"></span> Vozes da liderança</div><h2>Mais presença no culto.<br/><em>Menos ruído na operação.</em></h2></div><p class="testimonials-disclaimer">Depoimentos ilustrativos para aprovação da estrutura. Substitua pelos relatos reais da sua comunidade antes de publicar.</p></div><div class="testimonials-grid"><article class="testimonial-card"><div class="testimonial-mark">“</div><blockquote>Antes, cada ausência virava uma sequência de mensagens. Hoje, a equipe enxerga a escala e eu consigo cuidar melhor do culto.</blockquote><div class="testimonial-person"><span class="testimonial-avatar avatar-lime">PD</span><span><strong>Pr. Daniel</strong><small>Liderança de ministério</small></span></div></article><article class="testimonial-card testimonial-card-blue"><div class="testimonial-mark">“</div><blockquote>A Central de Escalas me mostra as vagas antes de publicar. Distribuir funções ficou mais calmo e muito mais claro.</blockquote><div class="testimonial-person"><span class="testimonial-avatar avatar-blue">AC</span><span><strong>Ana Costa</strong><small>Coordenação de voluntários</small></span></div></article><article class="testimonial-card testimonial-card-sand"><div class="testimonial-mark">“</div><blockquote>Avisos, repertório e escala no mesmo fluxo. Menos ruído para a equipe, mais presença no serviço.</blockquote><div class="testimonial-person"><span class="testimonial-avatar avatar-sand">RL</span><span><strong>Rafael Lima</strong><small>Liderança de louvor</small></span></div></article></div></div>
    </section>

    <section class="offer-section pricing-section section-pad" id="assinar">
      <div class="container pricing-intro"><div><div class="eyebrow"><span class="eyebrow-mark"></span> Escolha o seu ritmo</div><h2>Experimente tudo.<br/><em>Evolua no seu tempo.</em></h2></div><p>Tenha 30 dias para testar o fluxo operacional completo do Ministral. O upgrade acompanha o crescimento da sua equipe, com mais capacidade, governança e suporte. Pagamentos e assinatura processados via Asaas.</p></div>
      <div class="container pricing-grid">${pricingCards.map((plan) => `<article class="pricing-card ${plan.featured ? 'pricing-card-featured' : ''} ${plan.tone}"><div class="pricing-card-top"><span class="pricing-name">${plan.name}</span>${plan.featured ? '<span class="pricing-badge">mais escolhido</span>' : ''}</div><p class="pricing-description">${plan.description}</p><div class="pricing-price">${plan.price}${plan.suffix ? `<small>${plan.suffix}</small>` : ''}</div><div class="pricing-divider"></div><ul class="pricing-features">${plan.features.map((feature) => `<li>${icon('check', 14)} ${feature}</li>`).join('')}${plan.unavailable.map((feature) => `<li class="pricing-unavailable">${icon('close', 14)} ${feature}</li>`).join('')}</ul><a class="button ${plan.featured ? 'button-lime' : 'button-light'} button-full" href="${plan.checkout}" target="_blank" rel="noreferrer">${plan.name === 'Trial' ? 'Testar grátis' : 'Assinar via Asaas'} ${icon('arrow', 16)}</a></article>`).join('')}</div>
      <div class="container pricing-footnote"><span>${icon('shield', 15)} Pagamento simples e seguro via Asaas</span><span>Comece pelo Trial e faça upgrade quando sua equipe crescer.</span></div>
    </section>

    <section class="faq-section section-pad" id="faq"><div class="container faq-grid"><div class="faq-intro"><div class="eyebrow"><span class="eyebrow-mark"></span> Perguntas frequentes</div><h2>O que você precisa saber antes de <em>começar.</em></h2><p>Ainda ficou alguma dúvida? O melhor próximo passo é conversar com quem conhece o seu cenário.</p><a class="text-link" href="https://ministral.vercel.app" target="_blank" rel="noreferrer">Acessar o sistema <span>${icon('external', 15)}</span></a><a class="text-link contact-email" href="mailto:contato.ministral@gmail.com">contato.ministral@gmail.com <span>${icon('arrow', 15)}</span></a></div><div class="faq-list">${faqs.map(([question, answer], index) => `<details class="faq-item" ${index === 0 ? 'open' : ''}><summary><span>${question}</span><span class="faq-plus">${icon('plus', 17)}</span></summary><p>${answer}</p></details>`).join('')}</div></div></section>
  </main>

  <footer class="site-footer"><div class="container footer-top"><a class="wordmark" href="#top"><span class="brand-lockup"><img src="/ministral-logo-official.png" alt="Logo Ministral" /><span>ministral</span></span></a><p>A operação da sua equipe,<br/><em>finalmente sob controle.</em></p><div class="footer-links"><a href="#como-funciona">Como funciona</a><a href="#recursos">Recursos</a><a href="#assinar">Planos</a><a href="#faq">Dúvidas</a><a href="mailto:contato.ministral@gmail.com">contato.ministral@gmail.com</a><a href="https://ministral.vercel.app" target="_blank" rel="noreferrer">Acessar sistema ${icon('external', 14)}</a></div></div><div class="container footer-bottom"><span>© 2026 Ministral. Feito para servir melhor.</span><span>Pagamentos processados via Asaas.</span><a href="#top" class="back-top">voltar ao topo ${icon('arrowUp', 14)}</a></div></footer>
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
  const target = document.querySelector(link.getAttribute('href'));
  if (target) {
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal, .feature-card, .step-item, .proof-card').forEach((element) => observer.observe(element));
