ARG NODE_VERSION
FROM node:$NODE_VERSION-alpine AS base

WORKDIR /srv
COPY package.json package-lock.json ./


FROM base AS dev

ENV NODE_ENV=develoment
RUN npm install --omit optional

CMD ["npm", "run", "dev"]

FROM node:$NODE_VERSION-alpine AS prod

WORKDIR /srv
COPY package.json package-lock.json ./

ENV NODE_ENV=production
RUN npm install --no-fund

CMD ["npm", "run", "start"]

