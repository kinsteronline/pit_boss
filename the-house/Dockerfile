ARG NODE_VERSION
FROM node:$NODE_VERSION-buster-slim AS dev

WORKDIR /srv

COPY package.json yarn.lock ./
RUN yarn install

COPY ./server ./

RUN ls .

CMD ["yarn", "dev"]

