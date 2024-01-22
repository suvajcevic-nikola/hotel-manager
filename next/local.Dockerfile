FROM node:20-alpine
COPY . /code
WORKDIR /code
CMD npm i && npm run dev
