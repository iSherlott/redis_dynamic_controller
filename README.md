# Redis Dynamic Controller

O Redis Dynamic Controller é uma API que fornece uma interface genérica para manipular um servidor Redis. O projeto foi desenvolvido utilizando Node.js e TypeScript, e é containerizado usando Docker.

## Pré-requisitos

- Docker e Docker Compose
- Node.js versão 16 ou superior
- NPM

## Uso

Primeiro, clone o repositório:

```bash
git clone https://github.com/seu-nome-de-usuario/redis-dynamic-controller.git
cd redis-dynamic-controller
```

Depois, inicie os serviços com Docker Compose:

```bash
docker-compose up --build -d
```

A API estará disponível na porta 7000.

Documentação da API
A documentação completa para a API está disponível no Postman em https://documenter.getpostman.com/view/17849134/2s946h7BoE. Você também pode importar a coleção Postman a partir do arquivo Redis.postman_collection.

Limpeza
Para parar e remover os containers, a rede e os volumes definidos pelo compose:

```bash
docker-compose down
```

Licença
Este projeto é licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

```bash
Lembre-se de substituir `seu-nome-de-usuario` pela sua identificação do GitHub. O arquivo `Redis.postman_collection` deve estar no diretório principal do projeto.

Espero que isso ajude! Se você tiver outras perguntas, por favor, me avise!
```

## Configuração para Desenvolvimento Local

Se você deseja rodar a aplicação localmente para desenvolvimento, siga estes passos:

1. Primeiro, clone o repositório e entre na pasta do projeto:

```bash
git clone https://github.com/seu-nome-de-usuario/redis-dynamic-controller.git
cd redis-dynamic-controller
```

Instale as dependências do projeto:

```bash
npm install
```

Configure as variáveis de ambiente:

Crie um arquivo chamado .env no diretório principal do projeto.
Adicione as seguintes variáveis ao arquivo .env:

```bash
TITLE=RedisBeta
PORT=7000
VERSION=1.0.1
REDIS_HOST=localhost
REDIS_PORT=6379
```

Estas são as variáveis de ambiente que a aplicação espera:

TITLE: O título da aplicação.
PORT: A porta onde o servidor da aplicação deve escutar.
VERSION: A versão da aplicação.

REDIS_HOST: O endereço do host onde o servidor Redis está executando.
REDIS_PORT: A porta onde o servidor Redis está escutando.

Você pode alterar esses valores de acordo com suas necessidades.

Agora, você pode iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará rodando em http://localhost:7000.

## Testando a API
Para testar a API, você pode enviar requisições para http://localhost:7000. Consulte a [documentação da API](https://documenter.getpostman.com/view/17849134/2s946h7BoE) para mais detalhes sobre as rotas disponíveis.

```bash
Espero que isso ajude! Se tiver mais perguntas, fique à vontade para entra em contato.
```
