FROM node:latest

WORKDIR /app

COPY package.json /app


RUN yarn

ENV PORT 4200

COPY . .

EXPOSE ${PORT}

VOLUME [ "/app/data" ]

CMD ["yarn", "dev"]