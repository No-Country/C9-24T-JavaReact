FROM node:18-slim

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install

RUN mkdir -p node_modules/.vite && chmod -R 777 node_modules/.vite

COPY . .

EXPOSE 5175