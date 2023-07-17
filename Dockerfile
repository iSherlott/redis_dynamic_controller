FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN rm -rf src && rm tsconfig.json

EXPOSE 8080

CMD [ "node", "dist/index.js" ]
