FROM node:15-alpine

WORKDIR /app

COPY package.json  .

COPY package-lock.json .

RUN npm install

CMD [ "npm", "start" ]
