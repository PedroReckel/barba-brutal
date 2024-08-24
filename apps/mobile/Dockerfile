# Use uma imagem base do Node.js
FROM node:20-alpine

# Instale o expo-cli globalmente
RUN npm install -g expo-cli

# Define o diretório de trabalho
WORKDIR /app

# Copia o arquivo de dependências
COPY package*.json ./

# Instala as dependências
RUN yarn install

# Copia o código fonte
COPY . .

# Exponha a porta da aplicação
EXPOSE 19000 19001 19002

# Comando para iniciar a aplicação Expo
CMD ["yarn", "web"]
