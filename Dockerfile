FROM node:16.14.0-alpine

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

COPY . .

EXPOSE 8000

CMD [ "yarn" , "dev" ]
