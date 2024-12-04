FROM node:18-alpine
WORKDIR /app
COPY package*.json ./

RUN apt-get update && \
    apt-get install -y wget && \
    wget https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh -O /usr/local/bin/wait-for-it.sh && \
    chmod +x /usr/local/bin/wait-for-it.sh

RUN npm install
COPY . .
RUN npm run build
CMD npx typeorm-ts-node-commonjs migration:run -d src/banner-service/ormconfig.ts && npm run start:prod