FROM node:12.4-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

EXPOSE 3000

COPY . .

CMD [ "npm", "start" ]

