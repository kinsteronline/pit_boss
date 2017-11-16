FROM node:alpine

WORKDIR /srv

COPY package.json .
RUN npm i

COPY . .

EXPOSE 8008
CMD [ "npm", "start" ]
