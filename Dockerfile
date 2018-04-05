FROM node:9.10.1-alpine
MAINTAINER Michelle Grady

WORKDIR /usr/local/cryptocurrencydata
COPY package.json /usr/local/cryptocurrencydata/package.json
RUN npm install

COPY .babelrc /usr/local/cryptocurrencydata/.babelrc
COPY bootstrap.js /usr/local/cryptocurrencydata/bootstrap.js
COPY src /usr/local/cryptocurrencydata/src

CMD ["node", "bootstrap.js"]
