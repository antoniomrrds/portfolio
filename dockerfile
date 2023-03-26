FROM node:alpine

WORKDIR /usr/src/portfolio-next

COPY package*.json /usr/src/portfolio-next

RUN npm install

COPY .  /usr/src/portfolio-next

EXPOSE 3000

CMD ["npm", "run","dev"]