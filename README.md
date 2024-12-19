## Padrão Mediator em TypeScript (Exemplo de Projeto)

Este projeto demonstra uma implementação básica do padrão Mediator utilizando TypeScript e TSyringe para injeção de dependência.

### O que é o Padrão Mediator?

O padrão Mediator promove o desacoplamento entre objetos que interagem, introduzindo um objeto central de comunicação (mediador). Este mediador facilita a comunicação, manipulando requisições e delegando-as aos manipuladores apropriados, reduzindo dependências diretas entre componentes.

### Estrutura do Projeto

O projeto está organizado nos seguintes arquivos:

* **app.ts:** Ponto de entrada principal da aplicação.
* **protocols.ts:** Define interfaces para `IRequest`, `IRequestHandler` e `IMediator`.
* **CreateUserCommand.ts:** Representa uma requisição concreta para criar um usuário.
* **CreateUserHandler.ts:** Implementa a interface `IRequestHandler` para manipular o `CreateUserCommand`.
* **mediator.ts:** Implementa a interface `IMediator`, resolvendo dinamicamente os manipuladores apropriados com base nos tipos de requisição.

### Executando o Projeto

1. Instale as dependências:

   ```bash
   npm install
2. Build do projeto:

    ```bash
    tsc
3. Executar o app:

    ```bash
    node ./dist/app.js

### Como Funciona
1. **Injeção de Dependência:** TSyringe é utilizado para registrar manipuladores e o mediador como singletons.
2. **Registro de Manipuladores:** `CreateUserHandler` é registrado com a chave `CreateUserCommandHandler` utilizando `container.register`.
3. **Registro do Mediador:** `Mediator` e registrado como singleton com a chave `Mediator`.
4. **Exemplo de Uso (`app.ts`):**
* O mediador é resolvido do container.
* Uma instância de `CreateUserCommand` é criada com os dados do usuário.
* O método `send` do mediador é chamado, passando o comando.
* O mediador resolve o manipulador apropriado (`CreateUserHandler`) com base no tipo do comando.
* O método `handle` do manipulador executa a lógica de negócio (simulada neste exemplo) e retorna um ID de usuário.
* O ID do usuário é então registrado no console.