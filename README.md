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