# -------------------------------------------------------------
# docker para desenvolvimento local

# instala o pacote node
FROM node:alpine

# cria a pasta app
WORKDIR /app

# copia package json 
COPY package*.json .

# instala dependencias
RUN npm install

# copiar demais arquivos
COPY . .

EXPOSE 3000

ENTRYPOINT ["node", "src/index.js"]

#criado o arquivo .dockerignore

# digitar no terminal o comando abaixo
# docker build -t back-links .

# no docker vai em images, play, colocar o valor da porta

# -------------------------------------------------------------

# versao produção
# FROM node:alpine
