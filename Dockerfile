FROM node:18

WORKDIR /src/app

COPY package*.json ./

RUN yarn install --force

COPY . .

EXPOSE 3000

CMD [ "yarn", "dev" ]
