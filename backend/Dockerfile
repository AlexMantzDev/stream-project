FROM node:latest

WORKDIR /usr/src/app

COPY package.json .

RUN npm i

COPY ./dist .

EXPOSE 8080

CMD ["npm", "run", "serve"]