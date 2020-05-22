# Cadastro de questões de múltipla escolha

## Conteúdo

- [Sobre](#sobre)
- [Como usar](#usage)

## Sobre <a name = "sobre"></a>

Back-end feito em NodeJS para cadastro de questões de múltipla escolha (perguntas e responstas).

Front-end em ReactJS + Apollo Graphql.

## Como usar <a name = "usage"></a>

Para executar o projeto, é necessário ter instalado na máquina o NodeJS, docker e docker-compose.

Execute o comando abaixo nas pastas backend e frontend para instalar as dependências:
```
yarn install
```


### Banco de dados

Após clonar o projeto, execute o comando abaixo para criar o container docker para o mongoDB.

```
docker-compose up -d
```
Execute o comando abaixo para iniciar o back-end.

```
yarn start
```
A API será iniciada em http://localhost:4000


### Front-end

Execute o comando abaixo para iniciar o front-end.

```
yarn start
```
A aplicação ficará acessível no endereço: http://localhost:8080
