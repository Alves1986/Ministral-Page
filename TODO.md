# TODO — Landing page Ministral

## Página comercial responsiva
- [x] Criar uma landing page única para o appweb Ministral, apresentando de forma comercial sua proposta de valor para gestão de equipes, escalas e pagamentos via Asaas.
- [x] Garantir que a seção principal tenha proposta de valor clara, mensagem de impacto e chamadas para conhecer ou assinar o Ministral.
- [x] Garantir que a página funcione em desktop, tablet e mobile, com navegação mobile utilizável.

## Prova visual e benefícios
- [x] Apresentar visualmente o produto usando referências reais do sistema público Ministral, sem depender de acesso autenticado não fornecido.
- [x] Inserir a logo oficial copiada do appweb e uma imagem real usada no fluxo de eventos do sistema.
- [x] Evitar fotos de pessoas na página comercial; a referência visual usa a imagem de evento sem pessoas.
- [x] Substituir o mockup ilustrativo do hero por uma captura real do painel, com os perfis/fotos trocados por avatares fictícios.
- [x] Na captura principal do hero, substituir “Moto Culto” por “Culto de Domingo”.
- [x] Substituir a imagem da seção “Da agenda do culto ao detalhe da escala.” pela captura da Central de Escalas, com perfis fictícios e membros organizados por função.
- [x] Destacar ganhos na organização de equipes, montagem de escalas e controle operacional.
- [x] Demonstrar os principais recursos por meio de blocos comerciais com textos curtos e apoio visual.

## Funcionamento, oferta e confiança
- [x] Explicar de forma objetiva como o Ministral funciona, em etapas simples, incluindo o papel dos pagamentos via Asaas.
- [x] Incluir seção de prova e confiança com argumentos comerciais que não dependem de números não validados.
- [x] Incluir bloco de oferta ou assinatura com os três planos fornecidos: Trial grátis por 30 dias; Pro por R$ 99,90/mês; Enterprise por R$ 149,90/mês.
- [x] Exibir nos cards os limites, recursos e indisponibilidades informados para Trial, Pro e Enterprise, sem inventar funcionalidades adicionais.
- [x] Conectar o botão Pro ao checkout Asaas `https://www.asaas.com/000/c/5ag05of6an6oi6w7`.
- [x] Conectar o botão Enterprise ao checkout Asaas `https://www.asaas.com/000/c/x6no3kwe2ylb4a13`.

## Conversão e suporte à decisão
- [x] Distribuir chamadas para ação ao longo da página, direcionando para demonstração, acesso ao produto ou assinatura.
- [x] Adicionar uma seção de depoimentos de líderes religiosos com aviso explícito de que os textos são ilustrativos e devem ser substituídos por relatos reais antes da publicação.
- [x] Incluir perguntas frequentes sobre uso, implantação, escalas, equipes e pagamentos.
- [x] Incluir rodapé com navegação essencial, identificação do Ministral e link para o sistema atual.

## Entrega técnica
- [x] Servir a rota `/` pelo manifesto `public/manus-routes.json`.
- [x] Entregar build estático em `dist/` para publicação.
- [x] Alinhar o comando Vite à porta 3000 configurada no Preview.
- [ ] Implementar backend/webhook Asaas para relacionar cliente, assinatura e plano e liberar ou revogar recursos no appweb.
- [ ] Confirmar visual final em Preview e salvar checkpoint no repositório principal.
