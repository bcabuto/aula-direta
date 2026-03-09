# Proposta Comercial — Aula Direta

**Cliente:** Aula Direta
**Responsável técnico:** Bruno Cabuto
**Data:** 08/03/2026

---

## Sobre o Projeto

Desenvolvimento de plataforma web para a **Aula Direta**, empresa de cursos técnicos EAD reconhecidos pelo MEC/SISTEC. O site terá como objetivo apresentar os cursos, captar alunos e gerenciar matrículas de forma profissional e moderna.

---

## Cenários de Desenvolvimento

### Cenário 1 — Site Institucional
> Site vitrine profissional com foco em captação de leads e apresentação dos cursos.

**Inclui:**
- Página inicial com hero, diferenciais, cursos em destaque e depoimentos
- Página "Sobre Nós" com história, missão, visão e valores
- Catálogo de cursos com filtro por área
- Página de detalhe de cada curso (grade curricular, mercado, salário)
- Página de FAQ (perguntas frequentes)
- Página de contato com formulário funcional (envio por email)
- Integração com WhatsApp (botão flutuante)
- Design responsivo (mobile, tablet e desktop)
- Identidade visual conforme branding da Aula Direta
- SEO básico (meta tags, Open Graph, sitemap)
- Deploy em produção (Vercel)
- Configuração de domínio personalizado

**Prazo estimado:** 2 a 3 semanas
**Investimento:** R$ 3.500,00

| Parcela     | Valor        | Quando              |
|-------------|-------------|---------------------|
| 1ª parcela  | R$ 1.750,00 | Na aprovação        |
| 2ª parcela  | R$ 1.750,00 | Na entrega final    |

---

### Cenário 2 — Site com Checkout e Pagamento Online ⭐ Recomendado
> Tudo do Cenário 1 + fluxo completo de matrícula com pagamento real.

**Inclui tudo do Cenário 1, mais:**
- Fluxo de matrícula em 3 etapas (dados pessoais → pagamento → confirmação)
- Integração com gateway de pagamento (Mercado Pago, Stripe ou Asaas)
  - PIX com QR Code automático
  - Cartão de crédito com parcelamento
  - Boleto bancário
- Banco de dados para registro de matrículas
- Emails transacionais automáticos (confirmação de matrícula, comprovante)
- **Painel de gestão de cursos** (o gestor faz de forma autônoma, sem precisar do desenvolvedor):
  - Criar, editar, ativar/desativar e excluir cursos
  - Upload de imagem do curso
  - Editor de grade curricular (módulos + disciplinas)
  - Alterações refletem no site em tempo real
- Painel administrativo para:
  - Visualizar matrículas realizadas
  - Acompanhar status de pagamento
  - Exportar relatórios básicos
- Webhooks de pagamento (atualização automática de status)

**Prazo estimado:** 4 a 6 semanas
**Investimento:** R$ 7.500,00

| Parcela     | Valor        | Quando              |
|-------------|-------------|---------------------|
| 1ª parcela  | R$ 3.000,00 | Na aprovação        |
| 2ª parcela  | R$ 2.250,00 | Na entrega do checkout + painel |
| 3ª parcela  | R$ 2.250,00 | Na entrega final    |

---

### Cenário 3 — Plataforma Completa com Área do Aluno
> Tudo do Cenário 2 + portal do aluno e painel administrativo completo.

**Inclui tudo do Cenário 2, mais:**
- **Área do Aluno (portal):**
  - Login e cadastro com autenticação segura
  - Dashboard personalizado ("Meus Cursos")
  - Acesso às videoaulas organizadas por módulo
  - Acompanhamento de progresso (aulas assistidas, % de conclusão)
  - Download de materiais complementares (PDFs, apostilas)
  - Avaliações online por módulo
  - Emissão automática de certificado de conclusão
  - Histórico de pagamentos e boletos
  - Edição de perfil e dados pessoais
- **Painel Administrativo completo:**
  - Gestão de cursos (criar, editar, ativar/desativar)
  - Gestão de alunos (cadastro, status, progresso)
  - Upload e organização de videoaulas (integração YouTube/Vimeo)
  - Gestão financeira (matrículas, pagamentos, inadimplência)
  - Dashboard com métricas (alunos ativos, receita, conversão)
  - Envio de comunicados e notificações para alunos

**Prazo estimado:** 7 a 10 semanas
**Investimento:** R$ 15.000,00

| Parcela     | Valor        | Quando                    |
|-------------|-------------|---------------------------|
| 1ª parcela  | R$ 4.500,00 | Na aprovação              |
| 2ª parcela  | R$ 3.750,00 | Na entrega da área do aluno |
| 3ª parcela  | R$ 3.750,00 | Na entrega do painel admin |
| 4ª parcela  | R$ 3.000,00 | Na entrega final          |

---

## Comparativo Rápido

| Funcionalidade                          | Cenário 1 | Cenário 2 ⭐ | Cenário 3 |
|-----------------------------------------|:---------:|:------------:|:---------:|
| Site institucional completo             | ✅        | ✅           | ✅        |
| Design responsivo + SEO                 | ✅        | ✅           | ✅        |
| Catálogo de cursos com detalhe          | ✅        | ✅           | ✅        |
| Formulário de contato funcional         | ✅        | ✅           | ✅        |
| Integração WhatsApp                     | ✅        | ✅           | ✅        |
| Deploy + domínio                        | ✅        | ✅           | ✅        |
| Checkout com pagamento real             | ❌        | ✅           | ✅        |
| PIX, cartão e boleto                    | ❌        | ✅           | ✅        |
| Emails transacionais                    | ❌        | ✅           | ✅        |
| Gestão de cursos (adicionar/editar/remover) | ❌    | ✅           | ✅        |
| Painel admin (cursos + matrículas)      | ❌        | ✅           | ✅ completo|
| Login do aluno                          | ❌        | ❌           | ✅        |
| Área do aluno (videoaulas, progresso)   | ❌        | ❌           | ✅        |
| Avaliações e certificados               | ❌        | ❌           | ✅        |
| Dashboard administrativo com métricas   | ❌        | ❌           | ✅        |
| **Investimento**                        | R$ 3.500  | R$ 7.500    | R$ 15.000 |
| **Prazo**                               | 2-3 sem   | 4-6 sem     | 7-10 sem  |

---

## Tecnologias Utilizadas

- **Frontend:** Next.js + React + Tailwind CSS
- **Backend:** Next.js API Routes
- **Banco de dados:** Supabase (Cenários 2 e 3)
- **Pagamentos:** Mercado Pago / Stripe / Asaas (Cenários 2 e 3)
- **Hospedagem:** Vercel
- **Emails:** Resend

---

## O que NÃO está incluso

- Produção de conteúdo (textos dos cursos, videoaulas)
- Fotografia e edição de imagens
- Registro de domínio (custo ~R$ 40/ano, pago pelo cliente)
- Custos de hospedagem (Vercel free tier ou ~$20/mês no Pro)
- Taxas do gateway de pagamento (definidas pelo provedor)
- Manutenção mensal após entrega (pode ser contratada à parte)

---

## Manutenção Mensal (opcional)

Após a entrega, ofereço plano de manutenção mensal:

| Plano       | Inclui                                              | Valor/mês   |
|-------------|------------------------------------------------------|-------------|
| Básico      | Correção de bugs, atualizações de segurança          | R$ 300,00   |
| Intermediário | Básico + pequenas alterações e melhorias            | R$ 600,00   |
| Completo    | Intermediário + novas funcionalidades sob demanda    | R$ 1.200,00 |

---

## Validade

Esta proposta é válida por **30 dias** a partir da data de emissão.

---

## Próximos Passos

1. Escolha o cenário que melhor atende suas necessidades
2. Alinharemos os detalhes do escopo em uma reunião rápida
3. Assinatura do contrato e pagamento da 1ª parcela
4. Início do desenvolvimento

---

*Bruno Cabuto — Desenvolvimento Web*
*contato: bruno@email.com*
