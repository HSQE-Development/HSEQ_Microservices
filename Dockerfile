FROM node:18-alpine
WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .

RUN apk update && \
    apk add --no-cache bash wget && \
    wget https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh -O /usr/local/bin/wait-for-it.sh && \
    chmod +x /usr/local/bin/wait-for-it.sh
RUN npm run build
CMD sh -c "/usr/local/bin/wait-for-it.sh ${DB_HOST}:${DB_PORT} -- npx typeorm-ts-node-commonjs migration:run -d src/banner-service/ormconfig.ts && npm run start:prod"