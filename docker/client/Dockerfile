FROM "node:8.12.0"

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

RUN git clone https://github.com/soichiro0311/WebApp

WORKDIR /usr/src/app/WebApp/web-client

RUN npm install

CMD npm start
