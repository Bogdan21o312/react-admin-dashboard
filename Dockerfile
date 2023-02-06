FROM node:alpine

WORKDIR /app

ENV PORT 3000

EXPOSE 3000

COPY package*.json ./

RUN yarn install

COPY . ./

CMD ["npm", "start"]


