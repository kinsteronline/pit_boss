FROM node:alpine

WORKDIR /srv

COPY package.json .
COPY yarn.lock .

RUN yarn global add serve
RUN yarn install

COPY . .

EXPOSE 2312/tcp

CMD [ "serve", "-p", "2312" ]
