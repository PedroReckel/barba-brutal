# Use uma imagem base do Node.js
FROM node:20-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia o arquivo de dependências
COPY package*.json ./

# Instala as dependências
RUN yarn install

# Copia o código fonte
COPY . .

# Compila o código Next.js
RUN yarn build

# Exponha a porta da aplicação
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["yarn", "start"]
