# Use uma imagem base do Node.js
FROM node:20-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia o arquivo de dependências
COPY package*.json ./

# Instala as dependências
RUN yarn install

# Instala o Nest CLI globalmente
RUN yarn global add @nestjs/cli

# Copia o módulo @barba/core para dentro do contêiner
COPY /home/pedro/barba-brutal/package ./node_modules/@barba/core

# Copia o código fonte
COPY . .

# Compila o código TypeScript
RUN yarn build

# Exponha a porta da aplicação
EXPOSE 3001

# Comando para iniciar a aplicação
CMD ["yarn", "start:prod"]
