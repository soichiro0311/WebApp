FROM "node:8.12.0"

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

RUN git clone https://github.com/soichiro0311/WebApp

WORKDIR /usr/src/app/WebApp/web-client

RUN npm install

# DNSでコンテナ内のドメイン名を名前解決できるまで、一旦sedで書き換える
CMD sed -i s/web_server/$HOST_GLOBAL_IP_ADDRESS/ src/App.tsx && npm start
