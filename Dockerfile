FROM node

LABEL "co.rq.appNode"="RQ Digital Transformation"
LABEL maintainer="neus71@hotmail.com"
LABEL version="1.0"

RUN mkdir -p /opt/app

WORKDIR /opt/app

COPY package.json .
RUN npm install --quiet

RUN npm install nodemon -g quiet

COPY . .
EXPOSE 8000

CMD nodemon -L --watch . index.js
