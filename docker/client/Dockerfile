FROM "node:8.12.0"

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

RUN git clone https://github.com/soichiro0311/WebApp

# DNSでコンテナ内のドメイン名を名前解決できるまで、一旦sedで書き換える
WORKDIR /usr/src/app/WebApp/web-client/src
RUN sed s/web_server/${HOST_GLOBAL_IP} App.tsx

WORKDIR /usr/src/app/WebApp/web-client

RUN npm install

CMD npm start
