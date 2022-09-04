# API Links Tech Backend

API Links Tech é uma API REST que permite salvar seus links de artigos favoritos, com o titulo
Foi utilizado o banco de dados Mongo DB Atlas e efetuado o deploy no Heroku

## Deploy Backend

https://api-links-tech.herokuapp.com

## Swagger

https://api-links-tech.herokuapp.com/doc

## Repositorio Backend

https://github.com/vanderleimiguel/API-links-tech-backend

## Métodos

Requisições para a API devem seguir os padrões:
| Método | Descrição |

| `GET` | Retorna todos links salvos no banco de dados. |
| `POST` | Utilizado para criar um link. |
| `PUT` | Atualiza dados de um link ou altera sua situação. |
| `DELETE` | Remove um link do sistema. |

## GET - Retorna todos os links salvos

url: https://api-links-tech.herokuapp.com/links/

## POST - Criar um novo link

url: https://api-links-tech.herokuapp.com/links/create

body:
{
"title": "titulo 1",
"url": "http://url1.com"
}

## PUT - Atualizar um link existente por ID

url: https://api-links-tech.herokuapp.com/links/update/${id}

body:
{
"title": "titulo 1",
"url": "http://url1.com"
}

## DEL - Deleta um link existente por ID

url: https://api-links-tech.herokuapp.com/links/delete/${id}

# Código

Utilizado padrão MVC separado por pastas, routes, controllers, services, entities, databases e midllewares para melhor organização e manutenção do codigo
Na pasta docs foi criado o arquivo swagger melhorando a documentação e testes de rotas

# Desenvolvimento

Iniciado desenvolvimento pelas entities, foi criado um class com os atributos e metodos de validação, montado o service com a execução das funções, no controller foi criado as requisições e no routes as rotas das requisições.
Na pasta databases foi criado a conexão com o banco de dados mongo DB e o schema do mongoose.
Finalizado criando o swagger para testes das rotas e documentação.

## Dependencias

    "cheerio": "^1.0.0-rc.12",
    "cors": "^2.8.5",
    "dotenv": "^16.0.2",
    "express": "^4.18.1",
    "mongoose": "^6.5.4",
    "request": "^2.88.2",
    "request-promise": "^4.2.6",
    "swagger-ui-express": "^4.5.0"
    "nodemon": "^2.0.19"

## Instalações

    npm init -y
    npm i -S request request-promise cheerio
    npm i express
    npm i dotenv
    npm i nodemon
    npm i cors
    npm i mongoose
    npm i swagger-ui-express
