# Dockerfile for React client 

# Build singelee/Dockerfile
FROM node:18

# Cria e acessa o diretório de trabalho do app no container
WORKDIR /usr/src/app

# Copia o arquivo de configuração do projeto
COPY package*.json ./

# Instala as dependências 
RUN npm install --silent

# Copia arquivos locais para pasta do aplicativo 
COPY . .

# Define a porta utilizada
EXPOSE 3000

# Inicia a aplicação conforme script definido no package.json
CMD ["npm","start"]

# Para simplesmente construir o Frontend, execute o comando:
# docker build -t react-app .
# "-t" significa "tag". Nomeia o container como react-app.

# Para verificar se está tudo bem, executamos nosso contêiner recém-criado usando o comando:
# docker run -p 3000:3000 react-app

#Para parar o container:
# docker stop node-app

# Referência: https://medium.com/mozilla-club-bbsr/dockerizing-a-mern-stack-web-application-ebf78babf136