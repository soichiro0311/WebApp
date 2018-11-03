FROM "mysql:5.6"

WORKDIR /usr/src
RUN mkdir app
RUN apt-get update -y && apt-get install git -y

WORKDIR /usr/src/app
RUN git clone https://github.com/soichiro0311/WebApp

WORKDIR /usr/src/app/WebApp/goose/db/migrations
RUN cp -p 20181026175600_CreateBookTable.sql /docker-entrypoint-initdb.d/

