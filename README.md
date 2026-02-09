![Cypress](https://img.shields.io/badge/tests-Cypress%20E2E-04C38E)
![Node](https://img.shields.io/badge/node-18.x-339933)
![CI](https://github.com/LohanFaria/cypress-ecommerce-e2e/actions/workflows/ci.yml/badge.svg)

# Cypress E2E — E-commerce (Magento Demo Store)

Breve descrição
---------------
Suíte de testes End-to-End escrita em JavaScript usando Cypress. Os testes simulam o fluxo de compra em uma loja demo (Magento), validando funcionalidades críticas como adicionar ao carrinho, remover itens e finalizar o checkout.

Principais cenários
-------------------
- Adicionar produto ao carrinho
- Remover produto do carrinho
- Preenchimento do formulário de checkout
- Finalização de pedido

Começando
---------
Requisitos:
- Node.js 18+ (ou 20+)
- npm

Instalação de dependências:

```bash
npm install
```

Executar testes (headless):

```bash
npm run test
```

Abrir Cypress (modo interativo):

```bash
npm run cypressopen
```

Estrutura do projeto
--------------------
- `cypress/e2e` — testes (ex.: `add_to_cart.cy.js`, `remove_from_cart.cy.js`, `checkout.cy.js`)
- `cypress/support` — comandos e configurações compartilhadas
- `cypress.config.js` — configuração do Cypress

Integração Contínua
-------------------
O workflow está em `.github/workflows/ci.yml`. Ele instala dependências e executa os testes em múltiplas versões do Node; vídeos e screenshots são enviados como artifacts.

Boas práticas
------------
- Use seletores `data-*` para maior robustez
- Centralize comandos reutilizáveis em `cypress/support/commands.js`
- Mantenha testes isolados e independentes

Contato
-------
- Email: lohanfaria@gmail.com
- LinkedIn: https://www.linkedin.com/in/lohan-faria
- GitHub: https://github.com/LohanFaria

Contribuições
-------------
Feedback e PRs são bem-vindos — abra uma issue ou pull request.
